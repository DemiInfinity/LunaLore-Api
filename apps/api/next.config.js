const path = require('path');

module.exports = {
  reactStrictMode: true,
  distDir: '.next', // Default output directory
  webpack: (config) => {
    config.resolve.symlinks = false; // Disable symlinks for monorepos or custom setups
    return config;
  },
  env: {
    // Environment variables for Supabase
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'], // File extensions to treat as valid pages
};
