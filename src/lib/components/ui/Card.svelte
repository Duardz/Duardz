<!-- lib/components/ui/Card.svelte -->
<script>
  export let hover = false;
  export let clickable = false;
  export let padding = true;
  export let animate = false;
  
  $: classes = [
    'card',
    hover && 'card-hover',
    clickable && 'clickable',
    !padding && 'no-padding',
    animate && 'animate-fadeIn',
    $$props.class
  ].filter(Boolean).join(' ');
</script>

<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
<article 
  class={classes}
  on:click
  on:keydown
  role={clickable ? 'button' : null}
  tabindex={clickable ? 0 : null}
>
  <slot />
</article>

<style>
  .card.clickable {
    cursor: pointer;
  }
  
  .card.no-padding {
    padding: 0;
  }
  
  .card.clickable:focus-visible {
    outline: 2px solid var(--primary-400);
    outline-offset: 2px;
  }
</style>