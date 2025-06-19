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
    disabled && 'btn-disabled',
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
    <div class="btn-background"></div>
    <div class="btn-border"></div>
    <div class="btn-content">
      <slot />
    </div>
    <div class="btn-glow"></div>
  </a>
{:else}
  <button
    {type}
    {disabled}
    class={classes}
    aria-label={ariaLabel}
    on:click
  >
    <div class="btn-background"></div>
    <div class="btn-border"></div>
    <div class="btn-content">
      <slot />
    </div>
    <div class="btn-glow"></div>
  </button>
{/if}

<style>
  .btn {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--space-2);
    padding: var(--space-3) var(--space-6);
    font-size: var(--text-base);
    font-weight: 600;
    line-height: 1;
    border: none;
    border-radius: var(--radius-lg);
    cursor: pointer;
    transition: all var(--transition-base);
    text-decoration: none;
    white-space: nowrap;
    font-family: var(--font-sans);
    text-transform: uppercase;
    letter-spacing: 0.5px;
    overflow: hidden;
    isolation: isolate;
  }
  
  .btn-background {
    position: absolute;
    inset: 0;
    border-radius: inherit;
    transition: all var(--transition-base);
    z-index: -3;
  }
  
  .btn-border {
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: 2px;
    background: linear-gradient(135deg, transparent, var(--border-glow), transparent);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: xor;
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    opacity: 0;
    transition: opacity var(--transition-base);
    z-index: -2;
  }
  
  .btn-content {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    gap: var(--space-2);
    transition: all var(--transition-base);
  }
  
  .btn-glow {
    position: absolute;
    inset: -2px;
    border-radius: inherit;
    opacity: 0;
    transition: opacity var(--transition-base);
    z-index: -4;
    filter: blur(8px);
  }
  
  /* Focus styles */
  .btn:focus-visible {
    outline: 2px solid var(--neon-cyan);
    outline-offset: 2px;
  }
  
  /* Primary Button */
  .btn-primary .btn-background {
    background: var(--gradient-primary);
  }
  
  .btn-primary .btn-glow {
    background: var(--gradient-primary);
  }
  
  .btn-primary {
    color: var(--bg-primary);
  }
  
  .btn-primary:hover {
    transform: translateY(-2px);
    filter: brightness(1.1);
  }
  
  .btn-primary:hover .btn-glow {
    opacity: 0.6;
  }
  
  .btn-primary:hover .btn-border {
    opacity: 1;
  }
  
  .btn-primary:active {
    transform: translateY(0);
  }
  
  /* Secondary Button */
  .btn-secondary .btn-background {
    background: var(--glass-bg);
    backdrop-filter: var(--glass-backdrop);
  }
  
  .btn-secondary .btn-border {
    background: linear-gradient(135deg, var(--border-glow), transparent, var(--border-glow));
    opacity: 1;
  }
  
  .btn-secondary .btn-glow {
    background: var(--gradient-primary);
  }
  
  .btn-secondary {
    color: var(--text-primary);
  }
  
  .btn-secondary:hover {
    transform: translateY(-2px);
    color: var(--bg-primary);
  }
  
  .btn-secondary:hover .btn-background {
    background: var(--gradient-primary);
  }
  
  .btn-secondary:hover .btn-glow {
    opacity: 0.4;
  }
  
  .btn-secondary:active {
    transform: translateY(0);
  }
  
  /* Ghost Button */
  .btn-ghost .btn-background {
    background: transparent;
  }
  
  .btn-ghost .btn-border {
    background: linear-gradient(135deg, var(--border), transparent, var(--border));
    opacity: 1;
  }
  
  .btn-ghost .btn-glow {
    background: var(--gradient-primary);
  }
  
  .btn-ghost {
    color: var(--text-secondary);
  }
  
  .btn-ghost:hover {
    color: var(--text-primary);
    transform: translateY(-1px);
  }
  
  .btn-ghost:hover .btn-background {
    background: var(--surface);
  }
  
  .btn-ghost:hover .btn-border {
    background: linear-gradient(135deg, var(--border-glow), transparent, var(--border-glow));
    opacity: 1;
  }
  
  .btn-ghost:hover .btn-glow {
    opacity: 0.2;
  }
  
  .btn-ghost:active {
    transform: translateY(0);
  }
  
  /* Size Variants */
  .btn-sm {
    padding: var(--space-2) var(--space-4);
    font-size: var(--text-sm);
    letter-spacing: 0.25px;
  }
  
  .btn-lg {
    padding: var(--space-4) var(--space-8);
    font-size: var(--text-lg);
    letter-spacing: 1px;
  }
  
  /* Disabled State */
  .btn-disabled {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  }
  
  .btn-disabled:hover {
    transform: none;
  }
  
  .btn-disabled .btn-glow {
    opacity: 0 !important;
  }
  
  /* Loading State (optional enhancement) */
  .btn-loading {
    color: transparent;
  }
  
  .btn-loading::after {
    content: '';
    position: absolute;
    width: 16px;
    height: 16px;
    border: 2px solid transparent;
    border-top: 2px solid currentColor;
    border-radius: 50%;
    animation: button-spin 1s linear infinite;
  }
  
  @keyframes button-spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  
  /* Special Effects */
  .btn-cyber {
    position: relative;
  }
  
  .btn-cyber::before {
    content: '';
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(
      90deg,
      transparent,
      transparent 2px,
      rgba(0, 212, 255, 0.1) 2px,
      rgba(0, 212, 255, 0.1) 4px
    );
    opacity: 0;
    transition: opacity var(--transition-base);
    pointer-events: none;
  }
  
  .btn-cyber:hover::before {
    opacity: 1;
  }
  
  /* Icon spacing */
  .btn :global(svg) {
    flex-shrink: 0;
    transition: transform var(--transition-base);
  }
  
  .btn:hover :global(svg) {
    transform: scale(1.1);
  }
  
  /* Responsive adjustments */
  @media (max-width: 768px) {
    .btn {
      padding: var(--space-3) var(--space-5);
      font-size: var(--text-sm);
    }
    
    .btn-sm {
      padding: var(--space-2) var(--space-3);
      font-size: var(--text-xs);
    }
    
    .btn-lg {
      padding: var(--space-4) var(--space-6);
      font-size: var(--text-base);
    }
  }
  
  @media (max-width: 480px) {
    .btn {
      min-height: 44px; /* Better touch targets */
    }
    
    .btn-lg {
      width: 100%;
      justify-content: center;
    }
  }
  
  /* High contrast mode */
  @media (prefers-contrast: high) {
    .btn-border {
      opacity: 1 !important;
    }
    
    .btn-primary,
    .btn-secondary,
    .btn-ghost {
      border: 2px solid currentColor;
    }
  }
  
  /* Reduced motion */
  @media (prefers-reduced-motion: reduce) {
    .btn,
    .btn-background,
    .btn-border,
    .btn-content,
    .btn-glow {
      transition: none !important;
    }
    
    .btn:hover {
      transform: none !important;
    }
    
    .btn :global(svg) {
      transition: none !important;
    }
    
    .btn:hover :global(svg) {
      transform: none !important;
    }
    
    .btn-loading::after {
      animation: none !important;
    }
  }
  
  /* Dark theme enhancements */
  @media (prefers-color-scheme: dark) {
    .btn-primary {
      color: var(--bg-primary);
    }
    
    .btn-secondary {
      background: var(--glass-bg);
    }
  }
</style>