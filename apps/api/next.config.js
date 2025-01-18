module.exports = {
  reactStrictMode: true,
  distDir: '.next',
  pageExtensions: ['ts', 'tsx', 'js', 'jsx'],
  env: {
    SUPABASE_URL: process.env.SUPABASE_URL,
    SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY,
  },
};
