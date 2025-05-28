<!-- lib/components/ui/Section.svelte -->
<script>
  export let size = 'md'; // sm, md, lg
  export let background = 'primary'; // primary, secondary, surface
  export let centered = false;
  
  $: classes = [
    'section',
    size !== 'md' && `section-${size}`,
    `bg-${background}`,
    centered && 'text-center',
    $$props.class
  ].filter(Boolean).join(' ');
</script>

<section class={classes}>
  <div class="container">
    <slot />
  </div>
</section>

<style>
  /* All section styles are in app.css */
  /* This component provides consistent section structure */
</style>