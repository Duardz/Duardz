<!-- lib/components/ui/Card.svelte -->
<script>
  export let hover = false;
  export let clickable = false;
  export let padding = true;
  export let animate = false;
  export let variant = 'default'; // default, glass, glow, cyber
  
  $: classes = [
    'card',
    `card-${variant}`,
    hover && 'card-hover',
    clickable && 'card-clickable',
    !padding && 'card-no-padding',
    animate && 'card-animate',
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
  <div class="card-background"></div>
  <div class="card-border"></div>
  <div class="card-glow"></div>
  <div class="card-content">
    <slot />
  </div>
  <div class="card-scan-line"></div>
</article>

<style>
  .card {
    position: relative;
    background: var(--glass-bg);
    backdrop-filter: var(--glass-backdrop);
    border: 1px solid var(--glass-border);
    border-radius: var(--radius-xl);
    padding: var(--space-6);
    transition: all var(--transition-base);
    overflow: hidden;
    isolation: isolate;
  }
  
  .card-background {
    position: absolute;
    inset: 0;
    background: var(--glass-bg);
    backdrop-filter: var(--glass-backdrop);
    border-radius: inherit;
    transition: all var(--transition-base);
    z-index: -3;
  }
  
  .card-border {
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: 1px;
    background: linear-gradient(
      135deg, 
      var(--glass-border), 
      transparent, 
      var(--glass-border)
    );
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: xor;
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    transition: all var(--transition-base);
    z-index: -2;
  }
  
  .card-glow {
    position: absolute;
    inset: -4px;
    background: var(--gradient-primary);
    border-radius: inherit;
    opacity: 0;
    filter: blur(12px);
    transition: opacity var(--transition-base);
    z-index: -4;
  }
  
  .card-content {
    position: relative;
    z-index: 1;
  }
  
  .card-scan-line {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: var(--gradient-primary);
    opacity: 0.6;
    z-index: 0;
  }
  
  /* Card Variants */
  
  /* Glass variant - enhanced transparency */
  .card-glass .card-background {
    background: rgba(15, 23, 42, 0.3);
    backdrop-filter: blur(20px);
  }
  
  .card-glass .card-border {
    background: linear-gradient(
      135deg, 
      rgba(203, 213, 225, 0.2), 
      transparent, 
      rgba(203, 213, 225, 0.2)
    );
  }
  
  /* Glow variant - stronger glow effect */
  .card-glow .card-glow {
    opacity: 0.2;
  }
  
  .card-glow .card-border {
    background: linear-gradient(
      135deg, 
      var(--border-glow), 
      transparent, 
      var(--border-glow)
    );
  }
  
  /* Cyber variant - tech aesthetic */
  .card-cyber {
    position: relative;
  }
  
  .card-cyber::before {
    content: '';
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(
      90deg,
      transparent,
      transparent 2px,
      rgba(0, 212, 255, 0.05) 2px,
      rgba(0, 212, 255, 0.05) 4px
    );
    border-radius: inherit;
    opacity: 0;
    transition: opacity var(--transition-base);
    z-index: 0;
  }
  
  .card-cyber .card-scan-line {
    height: 2px;
    background: linear-gradient(
      90deg,
      transparent,
      var(--neon-cyan),
      transparent
    );
    animation: scan-line 3s ease-in-out infinite;
  }
  
  @keyframes scan-line {
    0%, 100% { opacity: 0; }
    50% { opacity: 0.8; }
  }
  
  /* Interactive States */
  .card-clickable {
    cursor: pointer;
  }
  
  .card-clickable:focus-visible {
    outline: 2px solid var(--neon-cyan);
    outline-offset: 2px;
  }
  
  /* Hover Effects */
  .card-hover:hover {
    transform: translateY(-4px);
    border-color: var(--border-glow);
  }
  
  .card-hover:hover .card-background {
    background: var(--surface);
  }
  
  .card-hover:hover .card-border {
    background: linear-gradient(
      135deg, 
      var(--border-glow), 
      var(--neon-cyan), 
      var(--border-glow)
    );
  }
  
  .card-hover:hover .card-glow {
    opacity: 0.3;
  }
  
  .card-hover:hover .card-scan-line {
    box-shadow: 0 0 8px var(--neon-cyan);
  }
  
  /* Cyber variant hover */
  .card-cyber.card-hover:hover::before {
    opacity: 1;
  }
  
  /* Glass variant hover */
  .card-glass.card-hover:hover .card-background {
    background: rgba(15, 23, 42, 0.6);
    backdrop-filter: blur(24px);
  }
  
  /* Glow variant hover */
  .card-glow.card-hover:hover .card-glow {
    opacity: 0.5;
  }
  
  /* Animation */
  .card-animate {
    animation: card-fade-in 0.6s ease-out;
  }
  
  @keyframes card-fade-in {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  /* Padding control */
  .card-no-padding {
    padding: 0;
  }
  
  .card-no-padding .card-content {
    padding: 0;
  }
  
  /* Special effects for enhanced interactivity */
  .card-enhanced {
    position: relative;
  }
  
  .card-enhanced::after {
    content: '';
    position: absolute;
    inset: 0;
    background: var(--gradient-glass);
    opacity: 0;
    transition: opacity var(--transition-base);
    pointer-events: none;
    border-radius: inherit;
  }
  
  .card-enhanced:hover::after {
    opacity: 1;
  }
  
  /* Pulse effect for active cards */
  .card-pulse .card-scan-line {
    animation: pulse-line 2s ease-in-out infinite;
  }
  
  @keyframes pulse-line {
    0%, 100% { 
      opacity: 0.6; 
      box-shadow: none;
    }
    50% { 
      opacity: 1; 
      box-shadow: 0 0 12px var(--neon-cyan);
    }
  }
  
  /* Nested card support */
  .card .card {
    background: var(--bg-tertiary);
    border-color: var(--border);
  }
  
  /* Status indicators */
  .card-status::before {
    content: '';
    position: absolute;
    top: var(--space-4);
    right: var(--space-4);
    width: 8px;
    height: 8px;
    background: var(--success);
    border-radius: 50%;
    animation: pulse 2s ease-in-out infinite;
  }
  
  .card-status.warning::before {
    background: var(--warning);
  }
  
  .card-status.error::before {
    background: var(--error);
  }
  
  .card-status.info::before {
    background: var(--info);
  }
  
  /* Loading state */
  .card-loading {
    position: relative;
    overflow: hidden;
  }
  
  .card-loading::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    background: var(--gradient-primary);
    animation: loading-sweep 2s ease-in-out infinite;
  }
  
  @keyframes loading-sweep {
    0% { left: -100%; }
    100% { left: 100%; }
  }
  
  /* Responsive design */
  @media (max-width: 768px) {
    .card {
      padding: var(--space-4);
      border-radius: var(--radius-lg);
    }
    
    .card-hover:hover {
      transform: translateY(-2px);
    }
  }
  
  @media (max-width: 480px) {
    .card {
      padding: var(--space-3);
    }
    
    .card-glow {
      inset: -2px;
      filter: blur(8px);
    }
  }
  
  /* High contrast mode */
  @media (prefers-contrast: high) {
    .card {
      border-width: 2px;
      border-color: var(--border-glow);
    }
    
    .card-border {
      opacity: 1;
    }
  }
  
  /* Reduced motion */
  @media (prefers-reduced-motion: reduce) {
    .card,
    .card-background,
    .card-border,
    .card-glow {
      transition: none !important;
    }
    
    .card-hover:hover {
      transform: none !important;
    }
    
    .card-animate {
      animation: none !important;
    }
    
    .card-scan-line,
    .card-cyber .card-scan-line,
    .card-pulse .card-scan-line {
      animation: none !important;
    }
    
    .card-loading::before {
      animation: none !important;
    }
  }
  
  /* Print styles */
  @media print {
    .card {
      background: white;
      border: 1px solid #ccc;
      box-shadow: none;
    }
    
    .card-background,
    .card-border,
    .card-glow,
    .card-scan-line {
      display: none;
    }
  }
  
  /* Focus management for accessibility */
  .card-clickable:focus {
    outline: none;
  }
  
  .card-clickable:focus-visible {
    outline: 2px solid var(--neon-cyan);
    outline-offset: 4px;
  }
  
  /* Enhanced keyboard navigation */
  .card-clickable:focus-visible .card-glow {
    opacity: 0.4;
  }
  
  /* Support for prefers-color-scheme */
  @media (prefers-color-scheme: light) {
    .card {
      background: rgba(248, 250, 252, 0.8);
      color: var(--gray-900);
    }
    
    .card-background {
      background: rgba(248, 250, 252, 0.8);
    }
  }
</style>