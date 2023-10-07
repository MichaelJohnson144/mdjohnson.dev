/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: `${process.env.PRIVATE_DOMAIN}`,
        port: '',
        pathname: '/assets/images/**',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        /* This advanced security headers will:
           - Prefetch DNS for faster connection
           - Optimize HTTPS
           - Protect against Cross-Site Scripting (XSS) attacks
           - Prevent Clickjacking attacks
           - Prevent Cross-Site Scripting (XSS) exploits for websites that allow users to upload and share files */
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
  modularizeImports: {
    '@mui/material/?(((\\w*)?/?)*)': {
      transform: '@mui/material/{{ matches.[1] }}/{{member}}',
    },
    '@mui/icons-material/?(((\\w*)?/?)*)': {
      transform: '@mui/icons-material/{{ matches.[1] }}/{{member}}',
    },
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
