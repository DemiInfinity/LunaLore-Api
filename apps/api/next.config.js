const path = require('path');

module.exports = {
  reactStrictMode: true,
  target: 'server', // Necessary for server-side builds (default for Next.js 12+)
  distDir: '.next', // Optional: Keeps the default build folder
  webpack: (config) => {
    // Disable symlinks for module resolution
    config.resolve.symlinks = false;
    return config;
  },
  env: {
    // Environment variables for Supabase
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'], // Allows flexible page file extensions
  experimental: {
    outputFileTracing: true, // Improves serverless function handling
  },
};
