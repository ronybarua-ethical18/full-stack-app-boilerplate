/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@workspace/ui"],
  // Next's build-time ESLint runner can pass flags removed in ESLint 9; typecheck still runs.
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
