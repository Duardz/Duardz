<!-- lib/components/ui/Button.svelte -->
<script>
// @ts-nocheck

  export let variant = 'primary'; // primary, secondary, ghost
  export let size = 'md'; // sm, md, lg
  export let href = null;
  export let disabled = false;
  export let type = 'button';
  export let ariaLabel = null;
  
  // Determine if it's a link or button
  const isLink = href !== null;
  
  // Build classes
  $: classes = [
    'btn',
    `btn-${variant}`,
    size !== 'md' && `btn-${size}`,
    $$props.class
  ].filter(Boolean).join(' ');
</script>

{#if isLink}
  <a 
    {href}
    class={classes}
    aria-label={ariaLabel}
    on:click
  >
    <slot />
  </a>
{:else}
  <button
    {type}
    {disabled}
    class={classes}
    aria-label={ariaLabel}
    on:click
  >
    <slot />
  </button>
{/if}

<style>
  /* All button styles are in app.css for consistency */
  /* This component just provides the structure and logic */
</style>