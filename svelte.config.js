import adapter from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    
    // Define your path aliases here
    alias: {
      '$lib': 'src/lib',
      '$routes': 'src/routes'
    }
  },
  
  // Add Vite configuration
  vite: {
    optimizeDeps: {
      exclude: ['clsx']
    },
    // This can help with certain Vite-related issues
    ssr: {
      noExternal: ['clsx']
    }
  }
};

export default config;