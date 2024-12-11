const path = require('path');

module.exports = {
    reactStrictMode: true,
    swcMinify: true,
    distDir: path.join('..', '..', 'public', 'auth'),
    webpack: (config) => {
      config.resolve.symlinks = false;
      return config;
    },
    env: {
      NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
      NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    },
  };
  