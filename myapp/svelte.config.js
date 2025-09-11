import adapter from '@sveltejs/adapter-netlify';

const config = {
  kit: {
    adapter: adapter() // add { edge: true } or { split: true } later if needed
  }
};

export default config;