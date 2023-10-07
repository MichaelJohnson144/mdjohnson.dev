const getCFDBaseURL = (path) => {
  const baseURL = process.env.NEXT_PUBLIC_CFD ?? '';
  return `${baseURL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
};

module.exports = getCFDBaseURL;
