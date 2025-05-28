<!-- src/routes/+layout.svelte -->
<script>
  import '../app.css';
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  // @ts-ignore
  import Header from '$lib/components/layout/Header.svelte';
  // @ts-ignore
  import Footer from '$lib/components/layout/Footer.svelte';
  
  let isMenuOpen = false;
  
  // Close menu when route changes
 // @ts-ignore
   $: $page.url.pathname, isMenuOpen = false;
  
  // Add scroll behavior
  let scrolled = false;
  
  onMount(() => {
    const handleScroll = () => {
      scrolled = window.scrollY > 20;
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
</script>

<div class="app">
  <Header bind:isMenuOpen {scrolled} />
  
  <main class="main">
    <slot />
  </main>
  
  <Footer />
</div>

<style>
  .app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  
  .main {
    flex: 1;
    padding-top: 4rem; /* Account for fixed header */
  }
  
  /* Smooth scroll behavior */
  :global(html) {
    scroll-behavior: smooth;
  }
  
  /* Selection color */
  :global(::selection) {
    background-color: var(--primary-600);
    color: white;
  }
  
  /* Focus visible for accessibility */
  :global(*:focus-visible) {
    outline: 2px solid var(--primary-400);
    outline-offset: 2px;
  }
</style>