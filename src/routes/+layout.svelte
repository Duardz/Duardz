<script>
  import '../app.css';
  import { onMount } from 'svelte';
  import Header from '$lib/components/layout/Header.svelte';
  import Footer from '$lib/components/layout/Footer.svelte';

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
  <Header {scrolled} />

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
    padding-top: 4rem;
  }

  :global(html) {
    scroll-behavior: smooth;
  }

  :global(::selection) {
    background-color: var(--primary-600);
    color: white;
  }

  :global(*:focus-visible) {
    outline: 2px solid var(--primary-400);
    outline-offset: 2px;
  }
</style>
