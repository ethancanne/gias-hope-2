import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  sassOptions: {
    // This option suppresses deprecation warnings from Sass
    quietDeps: true, // Disable Sass warnings about deprecated functions
  },
};

export default nextConfig;
