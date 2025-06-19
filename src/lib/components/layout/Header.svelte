<!-- lib/components/layout/Header.svelte -->
<script>
// @ts-nocheck
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  import Button from '$lib/components/ui/Button.svelte';

  export let scrolled = false;
  let isMenuOpen = false;
  let mounted = false;
  let currentTime = '';
  let glitchActive = false;

  const navItems = [
    { 
      label: 'HOME', 
      href: '/',
      icon: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z'
    },
    { 
      label: 'ABOUT', 
      href: '/about',
      icon: 'M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8z'
    },
    { 
      label: 'PROJECTS', 
      href: '/projects',
      icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'
    },
    { 
      label: 'CERTS', 
      href: '/certificates',
      icon: 'M12 8a7 7 0 1 0 0 14 7 7 0 0 0 0-14zm-1.5 7.5L8.21 13.89 7 23l5-3 5 3-1.21-9.11L13.5 15.5z'
    },
    { 
      label: 'INTEL', 
      href: '/blog',
      icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'
    },
    { 
      label: 'CONTACT', 
      href: '/contact',
      icon: 'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z'
    }
  ];

  // Update time every second
  function updateTime() {
    const now = new Date();
    currentTime = now.toLocaleTimeString('en-US', { 
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  }

  // Electric effect
  function triggerElectric() {
    glitchActive = true;
    setTimeout(() => {
      glitchActive = false;
    }, 800);
  }

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    
    if (typeof document !== 'undefined') {
      if (isMenuOpen) {
        document.body.style.overflow = 'hidden';
        // Trigger electric effect on menu open
        triggerElectric();
      } else {
        document.body.style.overflow = '';
      }
    }
  }

  function closeMenu() {
    isMenuOpen = false;
    if (typeof document !== 'undefined') {
      document.body.style.overflow = '';
    }
  }

  // Close menu on route change
  $: if (mounted && $page.url.pathname) {
    closeMenu();
  }

  // Close menu on escape key
  function handleKeydown(event) {
    if (event.key === 'Escape' && isMenuOpen) {
      closeMenu();
    }
  }

  onMount(() => {
    mounted = true;
    updateTime();
    const timeInterval = setInterval(updateTime, 1000);
    
    // Random electric effects (less frequent)
    const electricInterval = setInterval(() => {
      if (Math.random() < 0.05) { // 5% chance every 10 seconds
        triggerElectric();
      }
    }, 10000);
    
    document.addEventListener('keydown', handleKeydown);
    
    return () => {
      clearInterval(timeInterval);
      clearInterval(electricInterval);
      document.removeEventListener('keydown', handleKeydown);
      if (typeof document !== 'undefined') {
        document.body.style.overflow = '';
      }
    };
  });
</script>

<header class="header" class:scrolled class:menu-open={isMenuOpen} class:glitch={glitchActive}>
  <!-- Matrix Rain Effect -->
  <div class="matrix-rain">
    <div class="matrix-column" style="--delay: 0s; --duration: 15s;">
      <div class="matrix-chars">0101010111000101</div>
    </div>
    <div class="matrix-column" style="--delay: 2s; --duration: 12s;">
      <div class="matrix-chars">1100110010111010</div>
    </div>
    <div class="matrix-column" style="--delay: 4s; --duration: 18s;">
      <div class="matrix-chars">0110100111001101</div>
    </div>
    <div class="matrix-column" style="--delay: 6s; --duration: 14s;">
      <div class="matrix-chars">1010101001110011</div>
    </div>
  </div>
  
  <!-- Holographic Overlay -->
  <div class="holographic-overlay"></div>
  
  <!-- Quantum Scan Lines -->
  <div class="quantum-scan-line scan-1"></div>
  <div class="quantum-scan-line scan-2"></div>
  <div class="quantum-scan-line scan-3"></div>
  
  <!-- HUD Grid -->
  <div class="hud-grid"></div>
  
  <nav class="nav container">
    <!-- Clean Logo -->
    <a href="/" class="logo" on:click={closeMenu}>
      <div class="logo-container">
        <div class="logo-core">
          <div class="logo-hexagon">
            <svg class="logo-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            <div class="logo-energy-ring ring-1"></div>
            <div class="logo-energy-ring ring-2"></div>
            <div class="logo-energy-ring ring-3"></div>
          </div>
        </div>
        <div class="logo-text">
          <span class="logo-brand">DUARDZ</span>
          <span class="logo-subtitle">CYBERSECURITY</span>
        </div>
      </div>
    </a>

    <!-- System Status Display -->
    <div class="system-status desktop-only">
      <div class="status-item">
        <div class="status-label">SYS_TIME</div>
        <div class="status-value">{currentTime}</div>
      </div>
      <div class="status-item">
        <div class="status-label">STATUS</div>
        <div class="status-value status-online">ONLINE</div>
      </div>
    </div>

    <!-- Desktop Navigation -->
    <ul class="nav-list desktop-only">
      {#each navItems as item, index}
        <li class="nav-item" style="--nav-delay: {index * 0.1}s">
          <a 
            href={item.href} 
            class="nav-link" 
            class:active={$page.url.pathname === item.href}
          >
            <div class="nav-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d={item.icon}/>
              </svg>
            </div>
            <span class="nav-text">{item.label}</span>
            <div class="nav-hologram"></div>
            <div class="nav-quantum-border"></div>
          </a>
        </li>
      {/each}
    </ul>

    <!-- Desktop CTA -->
    <div class="nav-actions desktop-only">
      <Button href="/contact" size="sm" variant="primary">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
        SECURE LINK
      </Button>
    </div>

    <!-- Electric Hamburger Menu Button -->
    <button
      class="menu-toggle mobile-only"
      on:click={toggleMenu}
      aria-label="Toggle navigation menu"
      aria-expanded={isMenuOpen}
      aria-controls="mobile-menu"
    >
      <div class="menu-core">
        <div class="menu-grid">
          <div class="grid-dot" class:active={isMenuOpen}></div>
          <div class="grid-dot" class:active={isMenuOpen}></div>
          <div class="grid-dot" class:active={isMenuOpen}></div>
        </div>
      </div>
      <span class="menu-text">{isMenuOpen ? 'CLOSE' : 'MENU'}</span>
    </button>
  </nav>
</header>

<!-- Mobile Navigation -->
<div 
  class="mobile-nav" 
  class:open={isMenuOpen}
  id="mobile-menu"
  role="dialog" 
  aria-modal="true"
  aria-label="Navigation menu"
>
  <!-- Digital Backdrop -->
  <div 
    class="mobile-backdrop" 
    on:click={closeMenu}
    on:keydown={(e) => e.key === 'Enter' && closeMenu()}
    role="button"
    tabindex="0"
    aria-label="Close menu"
  >
    <div class="backdrop-grid"></div>
    <div class="backdrop-particles">
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
    </div>
  </div>
  
  <!-- Mobile Menu Panel -->
  <div class="mobile-panel">
    <!-- Header -->
    <div class="mobile-header">
      <div class="system-name">NAVIGATION</div>
      <div class="access-level">
        <span class="access-dot"></span>
        <span>ACCESS GRANTED</span>
      </div>
    </div>
    
    <!-- Navigation Links -->
    <nav class="mobile-nav-content">
      <ul class="mobile-nav-list">
        {#each navItems as item, index}
          <li class="mobile-nav-item" style="--item-delay: {index * 0.1}s">
            <a 
              href={item.href}
              class="mobile-nav-link"
              class:active={$page.url.pathname === item.href}
              on:click={closeMenu}
            >
              <div class="link-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d={item.icon}/>
                </svg>
              </div>
              <span class="link-label">{item.label}</span>
              <div class="link-holographic-border"></div>
            </a>
          </li>
        {/each}
      </ul>
    </nav>
    
    <!-- Contact Button -->
    <div class="mobile-actions">
      <Button 
        href="/contact" 
        variant="primary" 
        size="lg"
        on:click={closeMenu}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
        SECURE CONTACT
      </Button>
    </div>
  </div>
</div>

<style>
  /* Base Header */
  .header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 80px;
    background: linear-gradient(135deg, 
      rgba(2, 6, 23, 0.95) 0%, 
      rgba(15, 23, 42, 0.98) 50%, 
      rgba(2, 6, 23, 0.95) 100%);
    backdrop-filter: blur(20px) saturate(180%);
    border-bottom: 2px solid transparent;
    border-image: linear-gradient(90deg, 
      var(--neon-cyan), 
      var(--neon-purple), 
      var(--cyber-orange), 
      var(--neon-green)) 1;
    z-index: var(--z-fixed);
    transition: all var(--transition-base);
    overflow: hidden;
  }

  .header.scrolled {
    background: linear-gradient(135deg, 
      rgba(2, 6, 23, 0.98) 0%, 
      rgba(15, 23, 42, 0.99) 50%, 
      rgba(2, 6, 23, 0.98) 100%);
    box-shadow: 
      0 8px 32px rgba(0, 212, 255, 0.2),
      0 0 0 1px rgba(0, 212, 255, 0.1) inset;
  }

  .header.glitch {
    animation: electric-surge 0.8s ease-in-out;
  }

  @keyframes electric-surge {
    0% { 
      transform: translateX(0);
      filter: brightness(1) hue-rotate(0deg);
      box-shadow: 0 0 0 rgba(0, 212, 255, 0);
    }
    10% { 
      transform: translateX(-3px);
      filter: brightness(1.5) hue-rotate(45deg);
      box-shadow: 0 0 20px rgba(0, 212, 255, 0.8);
    }
    20% { 
      transform: translateX(4px);
      filter: brightness(2) hue-rotate(90deg);
      box-shadow: 0 0 40px rgba(0, 212, 255, 1);
    }
    30% { 
      transform: translateX(-2px);
      filter: brightness(1.8) hue-rotate(135deg);
      box-shadow: 0 0 60px rgba(0, 212, 255, 0.9);
    }
    40% { 
      transform: translateX(3px);
      filter: brightness(2.2) hue-rotate(180deg);
      box-shadow: 0 0 80px rgba(0, 212, 255, 1);
    }
    50% { 
      transform: translateX(-1px);
      filter: brightness(1.6) hue-rotate(225deg);
      box-shadow: 0 0 100px rgba(0, 212, 255, 0.8);
    }
    60% { 
      transform: translateX(2px);
      filter: brightness(1.4) hue-rotate(270deg);
      box-shadow: 0 0 60px rgba(0, 212, 255, 0.6);
    }
    70% { 
      transform: translateX(-1px);
      filter: brightness(1.2) hue-rotate(315deg);
      box-shadow: 0 0 40px rgba(0, 212, 255, 0.4);
    }
    80% { 
      transform: translateX(1px);
      filter: brightness(1.1) hue-rotate(360deg);
      box-shadow: 0 0 20px rgba(0, 212, 255, 0.2);
    }
    90% { 
      transform: translateX(0);
      filter: brightness(1.05);
      box-shadow: 0 0 10px rgba(0, 212, 255, 0.1);
    }
    100% { 
      transform: translateX(0);
      filter: brightness(1) hue-rotate(0deg);
      box-shadow: 0 0 0 rgba(0, 212, 255, 0);
    }
  }

  /* Electric Effects (Only on trigger) */
  .matrix-rain {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.1s ease;
  }

  .matrix-rain.active {
    opacity: 1;
  }

  .electric-bolt {
    position: absolute;
    width: 2px;
    height: 100%;
    background: linear-gradient(to bottom, 
      transparent 0%, 
      var(--neon-cyan) 20%, 
      var(--electric-blue) 40%, 
      #ffffff 50%,
      var(--electric-blue) 60%,
      var(--neon-cyan) 80%, 
      transparent 100%);
    opacity: 0;
    filter: blur(1px);
    box-shadow: 
      0 0 10px var(--neon-cyan),
      0 0 20px var(--electric-blue),
      0 0 30px #ffffff;
  }

  .matrix-rain.active .electric-bolt {
    animation: electric-bolt-flash 0.8s ease-out;
  }

  .bolt-1 { 
    left: 15%; 
    animation-delay: 0s;
  }
  .bolt-2 { 
    left: 35%; 
    animation-delay: 0.1s;
  }
  .bolt-3 { 
    left: 55%; 
    animation-delay: 0.2s;
  }
  .bolt-4 { 
    left: 75%; 
    animation-delay: 0.15s;
  }
  .bolt-5 { 
    left: 85%; 
    animation-delay: 0.05s;
  }

  @keyframes electric-bolt-flash {
    0% { 
      opacity: 0;
      transform: scaleY(0);
    }
    10% { 
      opacity: 1;
      transform: scaleY(0.2);
    }
    20% { 
      opacity: 0.8;
      transform: scaleY(1.5);
    }
    30% { 
      opacity: 1;
      transform: scaleY(0.8);
    }
    40% { 
      opacity: 0.6;
      transform: scaleY(1.2);
    }
    50% { 
      opacity: 1;
      transform: scaleY(0.9);
    }
    60% { 
      opacity: 0.4;
      transform: scaleY(1.1);
    }
    70% { 
      opacity: 0.7;
      transform: scaleY(0.7);
    }
    80% { 
      opacity: 0.3;
      transform: scaleY(1);
    }
    90% { 
      opacity: 0.1;
      transform: scaleY(0.5);
    }
    100% { 
      opacity: 0;
      transform: scaleY(0);
    }
  }

  /* Static Holographic Overlay */
  .holographic-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      45deg,
      transparent 30%,
      rgba(0, 212, 255, 0.02) 50%,
      transparent 70%
    );
  }



  /* Static HUD Grid */
  .hud-grid {
    position: absolute;
    inset: 0;
    background-image: 
      linear-gradient(rgba(0, 212, 255, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0, 212, 255, 0.03) 1px, transparent 1px);
    background-size: 20px 20px;
    opacity: 0.4;
  }

  /* Navigation */
  .nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    position: relative;
    z-index: 2;
  }

  /* Clean Logo */
  .logo {
    display: flex;
    align-items: center;
    color: var(--text-primary);
    transition: all var(--transition-base);
    text-decoration: none;
    position: relative;
    z-index: 3;
  }

  .logo:hover {
    transform: scale(1.02) translateY(-1px);
  }

  .logo-container {
    display: flex;
    align-items: center;
    gap: var(--space-4);
  }

  .logo-core {
    position: relative;
    width: 56px;
    height: 56px;
  }

  .logo-hexagon {
    position: relative;
    width: 56px;
    height: 56px;
    background: linear-gradient(135deg, var(--neon-cyan) 0%, var(--electric-blue) 100%);
    clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
    display: flex;
    align-items: center;
    justify-content: center;
    animation: logo-rotation 20s linear infinite;
  }

  @keyframes logo-rotation {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .logo-icon {
    color: var(--bg-primary);
    z-index: 4;
    position: relative;
    filter: drop-shadow(0 0 8px rgba(0, 212, 255, 0.8));
  }

  .logo-energy-ring {
    position: absolute;
    border: 1px solid;
    border-radius: 50%;
    opacity: 0.6;
    animation: energy-pulse 3s ease-in-out infinite;
  }

  .ring-1 {
    width: 70px;
    height: 70px;
    border-color: var(--neon-cyan);
    animation-delay: 0s;
  }

  .ring-2 {
    width: 85px;
    height: 85px;
    border-color: var(--electric-blue);
    animation-delay: 1s;
  }

  .ring-3 {
    width: 100px;
    height: 100px;
    border-color: var(--neon-cyan);
    animation-delay: 2s;
  }

  @keyframes energy-pulse {
    0%, 100% { transform: scale(1); opacity: 0.6; }
    50% { transform: scale(1.1); opacity: 0.2; }
  }

  .logo-text {
    display: flex;
    flex-direction: column;
    line-height: 1.1;
  }

  .logo-brand {
    font-family: var(--font-mono);
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: 3px;
    color: var(--neon-cyan);
    text-shadow: 0 0 10px rgba(0, 212, 255, 0.5);
  }

  .logo-subtitle {
    font-family: var(--font-mono);
    font-size: 0.7rem;
    letter-spacing: 1px;
    color: var(--text-muted);
    text-transform: uppercase;
    margin-top: 2px;
  }

  /* System Status Display */
  .system-status {
    display: flex;
    gap: var(--space-6);
    font-family: var(--font-mono);
    font-size: 0.7rem;
  }

  .status-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-1);
  }

  .status-label {
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .status-value {
    color: var(--neon-cyan);
    font-weight: 600;
    text-shadow: 0 0 8px currentColor;
  }

  .status-online {
    color: var(--neon-green);
    animation: pulse 2s ease-in-out infinite;
  }

  /* Desktop Navigation */
  .nav-list {
    display: flex;
    gap: var(--space-2);
    list-style: none;
  }

  .nav-item {
    opacity: 0;
    transform: translateY(-20px);
    animation: nav-item-reveal 0.6s ease-out forwards;
    animation-delay: var(--nav-delay);
  }

  @keyframes nav-item-reveal {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .nav-link {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: var(--space-3) var(--space-4);
    color: var(--text-secondary);
    border-radius: var(--radius-lg);
    transition: all var(--transition-base);
    text-decoration: none;
    overflow: hidden;
    border: 1px solid transparent;
    background: rgba(255, 255, 255, 0.02);
    backdrop-filter: blur(10px);
  }

  .nav-icon {
    margin-bottom: var(--space-1);
    color: var(--neon-cyan);
    filter: drop-shadow(0 0 4px currentColor);
  }

  .nav-text {
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  .nav-hologram {
    position: absolute;
    inset: 0;
    background: linear-gradient(45deg, 
      transparent 30%, 
      rgba(0, 212, 255, 0.1) 50%, 
      transparent 70%);
    opacity: 0;
    transition: opacity var(--transition-base);
  }

  .nav-quantum-border {
    position: absolute;
    inset: 0;
    border: 1px solid var(--neon-cyan);
    border-radius: var(--radius-lg);
    opacity: 0;
    transition: all var(--transition-base);
    animation: quantum-border-pulse 2s ease-in-out infinite;
  }

  @keyframes quantum-border-pulse {
    0%, 100% { box-shadow: 0 0 5px var(--neon-cyan); }
    50% { box-shadow: 0 0 15px var(--neon-cyan), 0 0 25px var(--neon-cyan); }
  }

  /* Add electric effect to navigation links */
  .nav-link:hover,
  .nav-link.active {
    color: var(--text-primary);
    background: rgba(0, 212, 255, 0.1);
    border-color: var(--neon-cyan);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 212, 255, 0.3);
  }

  .nav-link:active {
    animation: nav-electric-pulse 0.3s ease-out;
  }

  @keyframes nav-electric-pulse {
    0% { 
      transform: translateY(-2px) scale(1);
      box-shadow: 0 8px 25px rgba(0, 212, 255, 0.3);
    }
    50% { 
      transform: translateY(-2px) scale(1.05);
      box-shadow: 0 8px 35px rgba(0, 212, 255, 0.8);
      filter: brightness(1.3);
    }
    100% { 
      transform: translateY(-2px) scale(1);
      box-shadow: 0 8px 25px rgba(0, 212, 255, 0.3);
    }
  }

  /* Add electric effect to mobile nav links */
  .mobile-nav-link:active {
    animation: mobile-nav-electric 0.4s ease-out;
  }

  @keyframes mobile-nav-electric {
    0% { 
      background: rgba(0, 212, 255, 0.05);
    }
    50% { 
      background: rgba(0, 212, 255, 0.2);
      filter: brightness(1.3) hue-rotate(45deg);
      box-shadow: 0 0 20px rgba(0, 212, 255, 0.4);
    }
    100% { 
      background: rgba(0, 212, 255, 0.05);
    }
  }

  .nav-link:hover .nav-hologram,
  .nav-link.active .nav-hologram {
    opacity: 1;
    animation: holographic-sweep 1s ease-in-out infinite;
  }

  .nav-link:hover .nav-quantum-border,
  .nav-link.active .nav-quantum-border {
    opacity: 1;
  }

  .nav-link.active {
    background: rgba(0, 212, 255, 0.15);
    box-shadow: 
      0 0 20px rgba(0, 212, 255, 0.4),
      0 0 40px rgba(0, 212, 255, 0.2);
  }

  /* Electric Hamburger Menu */
  .menu-toggle {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-1);
    background: rgba(255, 255, 255, 0.02);
    backdrop-filter: blur(10px);
    border: 2px solid rgba(0, 212, 255, 0.4);
    padding: var(--space-3);
    cursor: pointer;
    transition: all var(--transition-base);
    border-radius: var(--radius-lg);
    min-height: 60px;
    min-width: 60px;
    position: relative;
    z-index: 3;
    overflow: hidden;
  }

  .menu-toggle::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(45deg, 
      transparent 30%, 
      rgba(0, 212, 255, 0.1) 50%, 
      transparent 70%);
    opacity: 0;
    transition: opacity var(--transition-base);
  }

  .menu-toggle:hover {
    background: rgba(0, 212, 255, 0.1);
    border-color: var(--neon-cyan);
    box-shadow: 
      0 0 20px rgba(0, 212, 255, 0.4),
      0 0 40px rgba(0, 212, 255, 0.2);
    transform: scale(1.05);
  }

  .menu-toggle:hover::before {
    opacity: 1;
    animation: electric-sweep 0.6s ease-in-out;
  }

  .menu-toggle:active {
    transform: scale(0.95);
    box-shadow: 
      0 0 30px rgba(0, 212, 255, 0.8),
      0 0 60px rgba(0, 212, 255, 0.4);
  }

  @keyframes electric-sweep {
    0% { transform: translateX(-100%) skewX(-15deg); }
    100% { transform: translateX(100%) skewX(15deg); }
  }

  .menu-core {
    position: relative;
    width: 28px;
    height: 28px;
  }

  /* Electric Hamburger Lines */
  .menu-grid {
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
  }

  .grid-dot {
    width: 24px;
    height: 3px;
    background: linear-gradient(90deg, 
      var(--neon-cyan), 
      var(--electric-blue), 
      var(--neon-cyan));
    border-radius: var(--radius-full);
    transition: all var(--transition-base);
    box-shadow: 0 0 8px rgba(0, 212, 255, 0.6);
    position: relative;
    overflow: hidden;
  }

  .grid-dot::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, 
      transparent, 
      rgba(255, 255, 255, 0.8), 
      transparent);
    transition: left 0.4s ease;
  }

  .grid-dot:nth-child(1) {
    animation-delay: 0s;
  }
  .grid-dot:nth-child(2) {
    animation-delay: 0.1s;
  }
  .grid-dot:nth-child(3) {
    animation-delay: 0.2s;
  }

  .menu-toggle:hover .grid-dot::before {
    left: 100%;
  }

  .grid-dot.active {
    background: linear-gradient(90deg, 
      var(--neon-cyan), 
      #ffffff, 
      var(--neon-cyan));
    box-shadow: 
      0 0 15px rgba(0, 212, 255, 1),
      0 0 30px rgba(0, 212, 255, 0.5);
    animation: electric-line-pulse 0.8s ease-in-out;
  }

  .grid-dot.active:nth-child(1) {
    transform: rotate(45deg) translateY(7px);
  }
  .grid-dot.active:nth-child(2) {
    opacity: 0;
    transform: scaleX(0);
  }
  .grid-dot.active:nth-child(3) {
    transform: rotate(-45deg) translateY(-7px);
  }

  @keyframes electric-line-pulse {
    0%, 100% { 
      filter: brightness(1);
    }
    25% { 
      filter: brightness(2) hue-rotate(30deg);
    }
    50% { 
      filter: brightness(3) hue-rotate(60deg);
    }
    75% { 
      filter: brightness(2) hue-rotate(30deg);
    }
  }

  .menu-scanner {
    position: absolute;
    inset: 0;
    border: 1px solid var(--neon-cyan);
    border-radius: 50%;
    opacity: 0;
    animation: scanner-pulse 2s ease-in-out infinite;
  }

  @keyframes scanner-pulse {
    0%, 100% { transform: scale(1); opacity: 0; }
    50% { transform: scale(1.5); opacity: 0.6; }
  }

  .menu-text {
    font-family: var(--font-mono);
    font-size: 0.6rem;
    color: var(--text-muted);
    letter-spacing: 1px;
    text-transform: uppercase;
    font-weight: 600;
  }

  /* Mobile Navigation */
  .mobile-nav {
    position: fixed;
    top: 80px;
    left: 0;
    right: 0;
    bottom: 0;
    visibility: hidden;
    opacity: 0;
    transition: all var(--transition-base);
    z-index: var(--z-modal);
    pointer-events: none;
  }

  .mobile-nav.open {
    visibility: visible;
    opacity: 1;
    pointer-events: all;
  }

  .mobile-backdrop {
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at center, 
      rgba(0, 0, 0, 0.9) 0%, 
      rgba(2, 6, 23, 0.95) 100%);
    backdrop-filter: blur(15px);
    cursor: pointer;
  }

  .backdrop-grid {
    position: absolute;
    inset: 0;
    background-image: 
      linear-gradient(rgba(0, 212, 255, 0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0, 212, 255, 0.05) 1px, transparent 1px);
    background-size: 30px 30px;
    animation: backdrop-grid-move 20s linear infinite;
  }

  @keyframes backdrop-grid-move {
    0% { transform: translate(0, 0); }
    100% { transform: translate(30px, 30px); }
  }

  .backdrop-particles {
    position: absolute;
    inset: 0;
  }

  .particle {
    position: absolute;
    width: 3px;
    height: 3px;
    background: var(--neon-cyan);
    border-radius: 50%;
    animation: particle-float 8s ease-in-out infinite;
  }

  .particle:nth-child(1) { top: 20%; left: 10%; animation-delay: 0s; }
  .particle:nth-child(2) { top: 40%; right: 20%; animation-delay: 1s; }
  .particle:nth-child(3) { bottom: 30%; left: 30%; animation-delay: 2s; }
  .particle:nth-child(4) { top: 60%; right: 10%; animation-delay: 3s; }
  .particle:nth-child(5) { bottom: 20%; right: 40%; animation-delay: 4s; }

  @keyframes particle-float {
    0%, 100% { transform: translateY(0px); opacity: 0.3; }
    50% { transform: translateY(-20px); opacity: 1; }
  }

  .mobile-panel {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: min(420px, 90vw);
    background: linear-gradient(135deg, 
      rgba(15, 23, 42, 0.95) 0%, 
      rgba(2, 6, 23, 0.98) 100%);
    backdrop-filter: blur(20px);
    border-left: 2px solid;
    border-image: linear-gradient(to bottom, var(--neon-cyan), var(--electric-blue)) 1;
    box-shadow: 
      -10px 0 50px rgba(0, 212, 255, 0.2),
      0 0 0 1px rgba(0, 212, 255, 0.1) inset;
    display: flex;
    flex-direction: column;
    transform: translateX(100%);
    transition: transform var(--transition-base);
    overflow-y: auto;
  }

  .mobile-nav.open .mobile-panel {
    transform: translateX(0);
  }

  /* Mobile Header */
  .mobile-header {
    padding: var(--space-8);
    border-bottom: 1px solid rgba(0, 212, 255, 0.2);
    text-align: center;
    background: rgba(0, 212, 255, 0.02);
  }

  .system-name {
    font-family: var(--font-mono);
    font-size: var(--text-lg);
    color: var(--text-primary);
    font-weight: 700;
    letter-spacing: 2px;
    margin-bottom: var(--space-3);
    text-shadow: 0 0 10px var(--neon-cyan);
  }

  .access-level {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--space-2);
    font-family: var(--font-mono);
    font-size: var(--text-xs);
    color: var(--neon-green);
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .access-dot {
    width: 8px;
    height: 8px;
    background: var(--neon-green);
    border-radius: 50%;
    animation: pulse 2s ease-in-out infinite;
    box-shadow: 0 0 10px var(--neon-green);
  }

  /* Mobile Navigation Links */
  .mobile-nav-content {
    flex: 1;
    padding: var(--space-6) 0;
  }

  .mobile-nav-list {
    list-style: none;
  }

  .mobile-nav-item {
    opacity: 0;
    transform: translateX(50px);
    animation: mobile-item-reveal 0.5s ease-out forwards;
    animation-delay: var(--item-delay);
  }

  @keyframes mobile-item-reveal {
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .mobile-nav-link {
    display: flex;
    align-items: center;
    gap: var(--space-4);
    padding: var(--space-4) var(--space-6);
    color: var(--text-secondary);
    transition: all var(--transition-base);
    text-decoration: none;
    position: relative;
    overflow: hidden;
    min-height: 60px;
    border-bottom: 1px solid rgba(0, 212, 255, 0.1);
  }

  .link-icon {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 212, 255, 0.1);
    border: 1px solid rgba(0, 212, 255, 0.3);
    border-radius: var(--radius-lg);
    transition: all var(--transition-base);
    flex-shrink: 0;
  }

  .link-label {
    font-size: var(--text-lg);
    font-weight: 600;
    font-family: var(--font-mono);
    letter-spacing: 1px;
  }

  .link-holographic-border {
    position: absolute;
    inset: 0;
    border: 1px solid var(--neon-cyan);
    opacity: 0;
    transition: all var(--transition-base);
    pointer-events: none;
  }

  .mobile-nav-link:hover,
  .mobile-nav-link.active {
    color: var(--text-primary);
    background: rgba(0, 212, 255, 0.05);
  }

  .mobile-nav-link:hover .link-icon,
  .mobile-nav-link.active .link-icon {
    background: rgba(0, 212, 255, 0.2);
    border-color: var(--neon-cyan);
    transform: scale(1.05);
  }

  .mobile-nav-link:hover .link-holographic-border,
  .mobile-nav-link.active .link-holographic-border {
    opacity: 1;
    animation: holographic-border-pulse 1s ease-in-out infinite;
  }

  @keyframes holographic-border-pulse {
    0%, 100% { box-shadow: 0 0 5px var(--neon-cyan); }
    50% { box-shadow: 0 0 15px var(--neon-cyan), 0 0 25px var(--neon-cyan); }
  }

  /* Mobile Actions */
  .mobile-actions {
    padding: var(--space-6);
    border-top: 1px solid rgba(0, 212, 255, 0.2);
    background: rgba(0, 212, 255, 0.02);
  }

  .mobile-actions :global(.btn) {
    width: 100%;
    justify-content: center;
    font-family: var(--font-mono);
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  /* Responsive Classes */
  .desktop-only {
    display: flex;
  }

  .mobile-only {
    display: none;
  }

  @media (max-width: 768px) {
    .desktop-only {
      display: none !important;
    }

    .mobile-only {
      display: flex !important;
    }

    .header {
      height: 70px;
    }

    .mobile-nav {
      top: 70px;
    }

    .logo-core {
      width: 48px;
      height: 48px;
    }

    .logo-hexagon {
      width: 48px;
      height: 48px;
    }

    .logo-icon {
      width: 28px;
      height: 28px;
    }

    .logo-brand {
      font-size: 1.25rem;
      letter-spacing: 2px;
    }

    .logo-subtitle {
      font-size: 0.6rem;
    }

    .menu-toggle {
      min-height: 56px;
      min-width: 56px;
    }
  }

  @media (max-width: 480px) {
    .mobile-panel {
      width: 100vw;
    }

    .logo-text {
      display: none;
    }

    .mobile-nav-link {
      padding: var(--space-3) var(--space-4);
      min-height: 50px;
    }

    .link-label {
      font-size: var(--text-base);
    }
  }

  /* Performance optimizations */
  @media (prefers-reduced-motion: reduce) {
    .header,
    .nav-link,
    .logo,
    .mobile-panel,
    .matrix-column,
    .holographic-overlay,
    .quantum-scan-line,
    .hud-grid,
    .logo-hexagon,
    .logo-energy-ring,
    .status-online,
    .nav-quantum-border,
    .scanner-pulse,
    .backdrop-grid,
    .particle,
    .access-dot {
      animation: none !important;
      transition: none !important;
    }
  }
</style>