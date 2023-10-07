const getCFDBaseURL = (path: string): string => {
  const baseURL = process.env.NEXT_PUBLIC_CFD ?? '';
  return `${baseURL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
};

export default getCFDBaseURL;
