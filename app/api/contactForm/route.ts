import { NextResponse, NextRequest } from 'next/server';
import { sanitize } from 'isomorphic-dompurify';
import sgMail from '@sendgrid/mail';

interface RequestBody {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

function sanitizeBody(requestBody: RequestBody): RequestBody {
  return Object.entries(requestBody).reduce(
    (accumulator, [key, value]) => ({ ...accumulator, [key]: sanitize(value) }),
    {} as RequestBody,
  );
}

function constructMail(sanitized: RequestBody, USER: string) {
  return {
    from: `${sanitized.fullName} <${sanitized.email}>`,
    to: USER,
    subject: sanitized.subject,
    text: sanitized.message,
    html: `<p>${sanitized.message}</p>`,
  };
}

function errorResponse(): NextResponse {
  return NextResponse.json(
    {
      error: 'An HTTP Response Status Code Error Occurred While Processing Your Request',
    },
    { status: 500, statusText: 'Internal Server Error' },
  );
}

async function sendEmailAndRespond(
  requestBody: RequestBody,
  API_KEY: string,
  USER: string,
): Promise<NextResponse> {
  sgMail.setApiKey(API_KEY);
  const sanitized = sanitizeBody(requestBody);

  try {
    const mail = constructMail(sanitized, USER);
    await sgMail.send(mail);

    return NextResponse.json(
      { success: `Your Form Was Submitted Successfully` },
      { status: 200, statusText: 'OK' },
    );
  } catch (error: unknown) {
    console.error((error as Error).message);

    if ((error as { response?: { body: unknown } }).response) {
      console.error((error as { response: { body: unknown } }).response.body);
    }

    return errorResponse();
  }
}

function missingEnvironmentVariableResponse(missingEnvironmentVariable: string): NextResponse {
  return NextResponse.json(
    { error: `Missing Environment Variable: ${missingEnvironmentVariable}` },
    { status: 503, statusText: 'Service Unavailable' },
  );
}

export async function POST(request: NextRequest) {
  const requestBody = (await request.json()) as RequestBody;
  const errorResponse = checkRequest(requestBody);
  if (errorResponse) return errorResponse;

  const { API_KEY, USER } = process.env;
  if (!API_KEY || !USER) {
    return missingEnvironmentVariableResponse(!API_KEY ? 'API_KEY' : 'USER');
  }

  return sendEmailAndRespond(requestBody, API_KEY, USER);
}

function checkMissingTextFields(requestBody: RequestBody): string[] {
  const keys: (keyof RequestBody)[] = ['fullName', 'email', 'subject', 'message'];
  return keys.filter((key) => requestBody[key] === undefined || requestBody[key] === null);
}

function missingTextFieldsResponse(missingTextFields: string[]): NextResponse {
  return NextResponse.json(
    { error: `Missing Fields: ${missingTextFields.join()}` },
    { status: 400, statusText: 'Bad Request' },
  );
}

function checkInvalidTextFields(requestBody: RequestBody): string | null {
  const regExpTests = [
    {
      field: requestBody.fullName,
      regExp: /^(\p{L}+[',. -])*(\p{L}+[',.-][\p{L} ])*(?:(?!A)\p{L})+$/u,
      error: 'The Client Has Submitted an Invalid Full Name',
    },
    {
      field: requestBody.email,
      regExp: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
      error: 'The Client Has Submitted an Invalid Email Address',
    },
  ];

  for (const { regExp, field, error } of regExpTests) {
    if (!new RegExp(regExp).test(field)) return error;
  }

  return null;
}

function invalidTextFieldsResponse(error: string): NextResponse {
  return NextResponse.json({ error: error }, { status: 400, statusText: 'Bad Request' });
}

function checkRequest(requestBody: RequestBody): NextResponse | null {
  const missingTextFields = checkMissingTextFields(requestBody);
  if (missingTextFields.length > 0) return missingTextFieldsResponse(missingTextFields);

  const invalidTextFields = checkInvalidTextFields(requestBody);
  if (invalidTextFields) return invalidTextFieldsResponse(invalidTextFields);

  return null;
}
