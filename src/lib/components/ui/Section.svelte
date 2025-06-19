<!-- lib/components/ui/Section.svelte -->
<script>
  export let size = 'md'; // sm, md, lg
  export let background = 'primary'; // primary, secondary, surface
  export let centered = false;
  export let animate = false;
  export let glowEffect = false;
  
  $: classes = [
    'section',
    size !== 'md' && `section-${size}`,
    `section-bg-${background}`,
    centered && 'section-centered',
    animate && 'section-animate',
    glowEffect && 'section-glow',
    $$props.class
  ].filter(Boolean).join(' ');
</script>

<section class={classes}>
  <div class="container">
    <slot />
  </div>
</section>

<style>
  /* Base Section Styles */
  .section {
    position: relative;
    padding: var(--space-16) 0;
    overflow: hidden;
  }
  
  .section-sm {
    padding: var(--space-8) 0;
  }
  
  .section-lg {
    padding: var(--space-24) 0;
  }
  
  .section-centered {
    text-align: center;
  }
  
  /* Container */
  .container {
    width: 100%;
    max-width: var(--container-max);
    margin: 0 auto;
    padding: 0 var(--container-padding);
    position: relative;
    z-index: 2;
  }
  
  /* Background Variants */
  .section-bg-primary {
    background: var(--bg-primary);
    color: var(--text-primary);
  }
  
  .section-bg-secondary {
    background: var(--bg-secondary);
    color: var(--text-primary);
    position: relative;
  }
  
  .section-bg-secondary::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      135deg,
      rgba(0, 212, 255, 0.03) 0%,
      transparent 50%,
      rgba(157, 78, 221, 0.03) 100%
    );
    pointer-events: none;
  }
  
  .section-bg-surface {
    background: var(--surface);
    color: var(--text-primary);
  }
  
  /* Animation Effects */
  .section-animate {
    opacity: 0;
    transform: translateY(20px);
    animation: section-fade-in 0.8s ease-out forwards;
  }
  
  @keyframes section-fade-in {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  /* Glow Effect */
  .section-glow {
    position: relative;
  }
  
  .section-glow::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle at center,
      rgba(0, 212, 255, 0.1) 0%,
      rgba(157, 78, 221, 0.05) 30%,
      transparent 70%
    );
    pointer-events: none;
    z-index: 1;
    animation: glow-pulse 8s ease-in-out infinite;
  }
  
  @keyframes glow-pulse {
    0%, 100% { opacity: 0.5; transform: scale(1); }
    50% { opacity: 0.8; transform: scale(1.05); }
  }
  
  /* Responsive Design */
  @media (max-width: 1024px) {
    .section {
      padding: var(--space-12) 0;
    }
    
    .section-sm {
      padding: var(--space-6) 0;
    }
    
    .section-lg {
      padding: var(--space-16) 0;
    }
  }
  
  @media (max-width: 768px) {
    .section {
      padding: var(--space-8) 0;
    }
    
    .section-sm {
      padding: var(--space-4) 0;
    }
    
    .section-lg {
      padding: var(--space-12) 0;
    }
  }
  
  @media (max-width: 480px) {
    .section {
      padding: var(--space-6) 0;
    }
    
    .section-sm {
      padding: var(--space-3) 0;
    }
    
    .section-lg {
      padding: var(--space-8) 0;
    }
  }
  
  /* Intersection Observer Animation */
  :global(.section-animate.in-view) {
    animation: section-fade-in 0.8s ease-out forwards;
  }
  
  /* Special Effects for Different Backgrounds */
  .section-bg-primary.section-glow::before {
    background: radial-gradient(
      circle at center,
      rgba(0, 212, 255, 0.08) 0%,
      rgba(255, 107, 53, 0.04) 30%,
      transparent 70%
    );
  }
  
  .section-bg-secondary.section-glow::before {
    background: radial-gradient(
      circle at center,
      rgba(157, 78, 221, 0.08) 0%,
      rgba(0, 212, 255, 0.04) 30%,
      transparent 70%
    );
  }
  
  /* Cyber Grid Pattern for Specific Sections */
  .section.cyber-pattern::after {
    content: '';
    position: absolute;
    inset: 0;
    background-image: 
      linear-gradient(rgba(0, 212, 255, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0, 212, 255, 0.03) 1px, transparent 1px);
    background-size: 50px 50px;
    pointer-events: none;
    z-index: 1;
    animation: cyber-drift 30s linear infinite;
  }
  
  @keyframes cyber-drift {
    0% { transform: translate(0, 0); }
    100% { transform: translate(50px, 50px); }
  }
  
  /* Performance Optimizations */
  @media (prefers-reduced-motion: reduce) {
    .section-animate,
    .section-glow::before,
    .section.cyber-pattern::after {
      animation: none !important;
    }
    
    .section-animate {
      opacity: 1 !important;
      transform: none !important;
    }
  }
</style>