/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true, // skips type errors but disables fail build on TS errors
    // You can also use `tsconfigPath` if relevant
  },
  experimental: {
    outputFileTracingRoot: __dirname, // prevents root detection warnings
  }
};

module.exports = nextConfig;
