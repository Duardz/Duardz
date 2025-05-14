import adapter from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    
    // Add this to define your aliases
    alias: {
      '$lib': './src/lib'
      // Add any other path aliases you need here
    }
  }
};

export default config;