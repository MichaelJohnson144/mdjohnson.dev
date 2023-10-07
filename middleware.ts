import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const origin: unknown = request.headers.get('origin');
  console.log(origin);

  const response = NextResponse.next();
  response.headers.set(
    'Access-Control-Allow-Origin',
    /* `${
      /^(http:\/\/localhost:3000\/contact|https:\/\/(www\.)?mdjohnson\.dev)\/?$/i.test(
        origin,
      )
        ? origin
        : ''
    }`, */
    '*',
  );
  response.headers.set(
    'Access-Control-Allow-Methods',
    'GET, PUT, POST, PATCH, DELETE, HEAD, OPTIONS',
  );
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  response.headers.set('Access-Control-Max-Age', '86400');

  console.log('Middleware:');
  console.log(request.method);
  console.log(request.url);

  return response;
}

export const config = {
  matcher: '/api/:path*',
};
