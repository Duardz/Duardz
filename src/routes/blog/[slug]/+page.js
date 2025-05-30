// src/routes/blog/[slug]/+page.js
import { error } from '@sveltejs/kit';
import { getPostBySlug } from '$lib/data/blog.js';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
  const post = getPostBySlug(params.slug);
  
  if (!post) {
    throw error(404, {
      message: 'Post not found'
    });
  }
  
  return {
    post
  };
}