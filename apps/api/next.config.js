const path = require('path');

module.exports = {
  reactStrictMode: true,
  distDir: '.next', // Keep this if needed for monorepo
  webpack: (config) => {
    config.resolve.symlinks = false;
    return config;
  },
  env: {
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'], // Specify valid page extensions
};
