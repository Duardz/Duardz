<!-- lib/components/common/ProjectCard.svelte -->
<script>
  import Card from '$lib/components/ui/Card.svelte';
  
  export let project;
  export let detailed = false;
  
  let isHovered = false;
  let cardRef;
</script>

<Card 
  bind:this={cardRef}
  hover 
  clickable 
  animate 
  variant="cyber" 
  class="project-card-enhanced"
  on:mouseenter={() => isHovered = true}
  on:mouseleave={() => isHovered = false}
>
  <a href="/projects#{project.id}" class="project-link">
    <!-- Cyberpunk background effects -->
    <div class="cyber-background">
      <div class="data-matrix">
        <div class="matrix-column" style="--delay: 0s; --position: 15%"></div>
        <div class="matrix-column" style="--delay: 1s; --position: 45%"></div>
        <div class="matrix-column" style="--delay: 2s; --position: 75%"></div>
      </div>
      <div class="neural-network">
        <div class="node node-1"></div>
        <div class="node node-2"></div>
        <div class="node node-3"></div>
        <div class="connection connection-1"></div>
        <div class="connection connection-2"></div>
      </div>
    </div>
    
    <!-- Project image with advanced effects -->
    <div class="project-image-container">
      <div class="image-wrapper">
        <img src={project.image} alt={project.title} loading="lazy" />
        
        <!-- Holographic scan overlay -->
        <div class="holo-scan" class:active={isHovered}>
          <div class="scan-beam"></div>
          <div class="scan-grid">
            <div class="grid-line horizontal"></div>
            <div class="grid-line vertical"></div>
          </div>
          <div class="interference-pattern"></div>
        </div>
        
        <!-- Terminal interface overlay -->
        <div class="terminal-overlay" class:visible={isHovered}>
          <div class="terminal-window">
            <div class="terminal-header">
              <div class="terminal-buttons">
                <div class="btn close"></div>
                <div class="btn minimize"></div>
                <div class="btn maximize"></div>
              </div>
              <div class="terminal-title">project_analysis.exe</div>
            </div>
            <div class="terminal-body">
              <div class="terminal-line">
                <span class="prompt">root@security:~$</span>
                <span class="command">scan --target {project.title.toLowerCase().replace(' ', '_')}</span>
              </div>
              <div class="terminal-line output">
                <span class="status-ok">[OK]</span> System ready for deployment
              </div>
              <div class="terminal-line output">
                <span class="status-info">[INFO]</span> Security: <span class="highlight">Validated</span>
              </div>
              <div class="cursor">_</div>
            </div>
            
            <div class="access-panel">
              <div class="panel-indicator">
                <div class="indicator-dot active"></div>
                <span>SYSTEM ONLINE</span>
              </div>
              <button class="access-btn" type="button">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
                  <polyline points="10 17 15 12 10 7"/>
                  <line x1="15" y1="12" x2="3" y2="12"/>
                </svg>
                <span>ACCESS</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Enhanced status badge -->
      <div class="status-badge-container">
        <div class="status-badge">
          <div class="badge-bg"></div>
          <div class="status-icon">
            <div class="signal-bars">
              <div class="bar"></div>
              <div class="bar"></div>
              <div class="bar"></div>
              <div class="bar"></div>
            </div>
          </div>
          <div class="status-info">
            <span class="status-label">ACTIVE</span>
            <div class="signal-strength">100%</div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Project content -->
    <div class="project-content">
      <!-- Enhanced header -->
      <header class="project-header">
        <div class="project-meta">
          <div class="title-section">
            <h3 class="project-title">
              <span class="title-text">{project.title}</span>
              <div class="title-effects">
                <div class="glow-line"></div>
                <div class="scan-line"></div>
              </div>
            </h3>
            <div class="project-id">
              <span class="id-prefix">ID:</span>
              <span class="id-value">{project.id.toString().padStart(4, '0')}</span>
            </div>
          </div>
          <div class="category-display">
            <div class="category-bracket">[</div>
            <span class="category-text">{project.category}</span>
            <div class="category-bracket">]</div>
          </div>
        </div>
        {#if project.featured}
          <div class="priority-badge">
            <div class="badge-border"></div>
            <div class="badge-content">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polygon points="12 2 15.09 8.26 22 9 17 14.74 18.18 21.02 12 17.77 5.82 21.02 7 14.74 2 9 8.91 8.26 12 2"/>
              </svg>
              <span>PRIORITY</span>
            </div>
            <div class="badge-pulse"></div>
          </div>
        {/if}
      </header>
      
      <!-- Enhanced description -->
      <div class="description-panel">
        <div class="description-header">
          <div class="desc-icon">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
            </svg>
          </div>
          <span class="desc-label">OVERVIEW</span>
        </div>
        <p class="project-description">{project.description}</p>
      </div>
      
      <!-- Enhanced technology stack -->
      <div class="tech-panel">
        <div class="tech-header">
          <div class="tech-icon">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 2L2 7l10 5 10-5-10-5z"/>
              <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          </div>
          <span class="tech-label">TECHNOLOGY_STACK</span>
          <div class="tech-separator"></div>
          <span class="tech-count">{project.technologies.length}</span>
        </div>
        <div class="tech-grid">
          {#each project.technologies.slice(0, 4) as tech, index}
            <div class="tech-node" style="--index: {index}">
              <div class="node-bg"></div>
              <div class="node-border"></div>
              <span class="node-text">{tech}</span>
              <div class="node-pulse"></div>
            </div>
          {/each}
          {#if project.technologies.length > 4}
            <div class="tech-node overflow-node" style="--index: 4">
              <div class="node-bg"></div>
              <div class="node-border"></div>
              <span class="node-text">+{project.technologies.length - 4}</span>
              <div class="overflow-dots">
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
              </div>
            </div>
          {/if}
        </div>
      </div>
      
      {#if detailed}
        <!-- Enhanced access links -->
        <div class="access-panel-section">
          <div class="access-header">
            <div class="access-icon">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <circle cx="12" cy="16" r="1"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
            </div>
            <span class="access-label">SECURE_ACCESS</span>
            <div class="access-status">
              <div class="status-dot"></div>
              <span>AUTHORIZED</span>
            </div>
          </div>
          <div class="access-links">
            {#if project.github}
              <a href={project.github} class="access-link repo-link" target="_blank" rel="noopener" on:click|stopPropagation>
                <div class="link-bg"></div>
                <div class="link-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                  </svg>
                </div>
                <span class="link-text">SOURCE</span>
                <div class="link-trail"></div>
              </a>
            {/if}
            {#if project.demo}
              <a href={project.demo} class="access-link demo-link" target="_blank" rel="noopener" on:click|stopPropagation>
                <div class="link-bg"></div>
                <div class="link-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                    <polyline points="15 3 21 3 21 9"/>
                    <line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                </div>
                <span class="link-text">DEPLOY</span>
                <div class="link-trail"></div>
              </a>
            {/if}
          </div>
        </div>
      {/if}
      
      <!-- Enhanced footer with security metrics -->
      <footer class="project-footer">
        <div class="security-display">
          <div class="security-header">
            <div class="sec-icon">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            </div>
            <span class="sec-label">SECURITY</span>
          </div>
          <div class="security-grid">
            <div class="metric-item">
              <div class="metric-bar">
                <div class="bar-fill" style="--fill: 98%"></div>
              </div>
              <span class="metric-label">AUTH</span>
            </div>
            <div class="metric-item">
              <div class="metric-bar">
                <div class="bar-fill" style="--fill: 95%"></div>
              </div>
              <span class="metric-label">ENCR</span>
            </div>
            <div class="metric-item">
              <div class="metric-bar">
                <div class="bar-fill" style="--fill: 100%"></div>
              </div>
              <span class="metric-label">INTG</span>
            </div>
          </div>
        </div>
        
        <div class="deployment-display">
          <div class="deploy-header">
            <span class="deploy-label">DEPLOYMENT</span>
          </div>
          <div class="deploy-status">
            <div class="deploy-indicator">
              <div class="indicator-ring"></div>
              <div class="indicator-core"></div>
            </div>
            <span class="deploy-text">READY</span>
          </div>
        </div>
      </footer>
    </div>
  </a>
</Card>

<style>
  /* Card integration styles */
  :global(.project-card-enhanced) {
    padding: 0;
    overflow: hidden;
    border: 1px solid var(--border-glow);
    background: var(--glass-bg);
    backdrop-filter: blur(20px);
  }

  :global(.project-card-enhanced .card-content) {
    padding: 0;
  }

  :global(.project-card-enhanced:hover) {
    border-color: var(--neon-cyan);
    box-shadow: 
      0 0 20px rgba(0, 212, 255, 0.3),
      0 8px 32px rgba(0, 0, 0, 0.3);
    transform: translateY(-6px);
  }

  :global(.project-card-enhanced:hover .card-glow) {
    opacity: 0.4;
  }

  .project-link {
    display: block;
    text-decoration: none;
    color: inherit;
    height: 100%;
    position: relative;
    overflow: hidden;
  }

  /* Cyberpunk background effects */
  .cyber-background {
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 0;
  }

  .data-matrix {
    position: absolute;
    inset: 0;
    opacity: 0.1;
  }

  .matrix-column {
    position: absolute;
    top: 0;
    width: 2px;
    height: 100%;
    left: var(--position);
    background: linear-gradient(to bottom, transparent, var(--neon-cyan), transparent);
    animation: matrix-rain 4s linear infinite;
    animation-delay: var(--delay);
  }

  @keyframes matrix-rain {
    0% { transform: translateY(-100%); opacity: 0; }
    10% { opacity: 1; }
    90% { opacity: 1; }
    100% { transform: translateY(100%); opacity: 0; }
  }

  .neural-network {
    position: absolute;
    inset: 0;
    opacity: 0.2;
  }

  .node {
    position: absolute;
    width: 4px;
    height: 4px;
    background: var(--neon-purple);
    border-radius: 50%;
    box-shadow: 0 0 8px var(--neon-purple);
  }

  .node-1 { top: 20%; left: 15%; }
  .node-2 { top: 60%; right: 25%; }
  .node-3 { bottom: 30%; left: 70%; }

  .connection {
    position: absolute;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--neon-purple), transparent);
    opacity: 0.5;
  }

  .connection-1 {
    top: 21%;
    left: 16%;
    width: 60%;
    transform: rotate(25deg);
  }

  .connection-2 {
    top: 61%;
    right: 24%;
    width: 45%;
    transform: rotate(-35deg);
  }

  /* Enhanced project image */
  .project-image-container {
    position: relative;
    margin-bottom: var(--space-6);
  }

  .image-wrapper {
    position: relative;
    height: 220px;
    border-radius: var(--radius-lg);
    overflow: hidden;
    background: var(--bg-tertiary);
    border: 2px solid var(--border);
    transition: all var(--transition-slow);
  }

  .image-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all var(--transition-slow);
    filter: brightness(0.8) contrast(1.1);
  }

  /* Holographic scan effects */
  .holo-scan {
    position: absolute;
    inset: 0;
    opacity: 0;
    transition: opacity var(--transition-base);
    pointer-events: none;
  }

  .holo-scan.active {
    opacity: 1;
  }

  .scan-beam {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, var(--neon-cyan), transparent);
    animation: scan-sweep 2s ease-in-out infinite;
    box-shadow: 0 0 10px var(--neon-cyan);
  }

  @keyframes scan-sweep {
    0% { transform: translateY(0); }
    100% { transform: translateY(220px); }
  }

  .scan-grid {
    position: absolute;
    inset: 0;
  }

  .grid-line {
    position: absolute;
    background: rgba(0, 212, 255, 0.2);
  }

  .grid-line.horizontal {
    left: 0;
    right: 0;
    height: 1px;
    top: 50%;
    animation: grid-pulse-h 3s ease-in-out infinite;
  }

  .grid-line.vertical {
    top: 0;
    bottom: 0;
    width: 1px;
    left: 50%;
    animation: grid-pulse-v 3s ease-in-out infinite 1.5s;
  }

  @keyframes grid-pulse-h {
    0%, 100% { opacity: 0.2; transform: scaleX(1); }
    50% { opacity: 0.8; transform: scaleX(1.1); }
  }

  @keyframes grid-pulse-v {
    0%, 100% { opacity: 0.2; transform: scaleY(1); }
    50% { opacity: 0.8; transform: scaleY(1.1); }
  }

  .interference-pattern {
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(
      0deg,
      transparent,
      transparent 4px,
      rgba(0, 212, 255, 0.05) 4px,
      rgba(0, 212, 255, 0.05) 8px
    );
    animation: interference 4s linear infinite;
  }

  @keyframes interference {
    0% { transform: translateY(0); }
    100% { transform: translateY(16px); }
  }

  /* Terminal overlay */
  .terminal-overlay {
    position: absolute;
    inset: 0;
    background: rgba(2, 6, 23, 0.95);
    backdrop-filter: blur(8px);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: all var(--transition-base);
    pointer-events: none;
  }

  .terminal-overlay.visible {
    opacity: 1;
    pointer-events: auto;
  }

  .terminal-window {
    background: var(--bg-primary);
    border: 1px solid var(--border-glow);
    border-radius: var(--radius-md);
    width: 90%;
    max-width: 320px;
    box-shadow: 
      0 0 20px rgba(0, 212, 255, 0.3),
      inset 0 0 20px rgba(0, 212, 255, 0.1);
  }

  .terminal-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--space-2) var(--space-3);
    background: var(--bg-secondary);
    border-bottom: 1px solid var(--border);
    border-radius: var(--radius-md) var(--radius-md) 0 0;
  }

  .terminal-buttons {
    display: flex;
    gap: var(--space-1);
  }

  .btn {
    width: 8px;
    height: 8px;
    border-radius: 50%;
  }

  .btn.close { background: #ff5f56; }
  .btn.minimize { background: #ffbd2e; }
  .btn.maximize { background: #27ca3f; }

  .terminal-title {
    font-family: var(--font-mono);
    font-size: var(--text-xs);
    color: var(--text-muted);
  }

  .terminal-body {
    padding: var(--space-3);
    font-family: var(--font-mono);
    font-size: var(--text-xs);
    line-height: 1.4;
  }

  .terminal-line {
    margin-bottom: var(--space-1);
    display: flex;
    align-items: center;
    gap: var(--space-2);
  }

  .prompt {
    color: var(--neon-green);
    font-weight: 600;
  }

  .command {
    color: var(--text-primary);
  }

  .terminal-line.output {
    color: var(--text-secondary);
    margin-left: var(--space-4);
  }

  .status-ok { color: var(--success); }
  .status-info { color: var(--info); }
  .highlight { color: var(--neon-cyan); font-weight: 600; }

  .cursor {
    color: var(--neon-cyan);
    animation: cursor-blink 1s ease-in-out infinite;
  }

  @keyframes cursor-blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
  }

  .access-panel {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--space-3);
    border-top: 1px solid var(--border);
    background: var(--bg-tertiary);
  }

  .panel-indicator {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    font-family: var(--font-mono);
    font-size: var(--text-xs);
    color: var(--success);
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .indicator-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--border);
  }

  .indicator-dot.active {
    background: var(--success);
    box-shadow: 0 0 8px var(--success);
    animation: pulse 2s ease-in-out infinite;
  }

  .access-btn {
    display: flex;
    align-items: center;
    gap: var(--space-1);
    padding: var(--space-1) var(--space-3);
    background: transparent;
    border: 1px solid var(--neon-cyan);
    border-radius: var(--radius-sm);
    color: var(--neon-cyan);
    font-family: var(--font-mono);
    font-size: var(--text-xs);
    text-transform: uppercase;
    cursor: pointer;
    transition: all var(--transition-base);
  }

  .access-btn:hover {
    background: var(--neon-cyan);
    color: var(--bg-primary);
    box-shadow: 0 0 12px rgba(0, 212, 255, 0.4);
  }

  /* Status badge */
  .status-badge-container {
    position: absolute;
    top: var(--space-3);
    right: var(--space-3);
    z-index: 10;
  }

  .status-badge {
    position: relative;
    display: flex;
    align-items: center;
    gap: var(--space-2);
    padding: var(--space-2) var(--space-3);
    border-radius: var(--radius-full);
    overflow: hidden;
  }

  .badge-bg {
    position: absolute;
    inset: 0;
    background: var(--glass-bg);
    backdrop-filter: blur(12px);
    border: 1px solid var(--border-glow);
    border-radius: inherit;
  }

  .status-icon {
    position: relative;
    z-index: 2;
  }

  .signal-bars {
    display: flex;
    align-items: end;
    gap: 2px;
    height: 12px;
  }

  .signal-bars .bar {
    width: 2px;
    background: var(--success);
    border-radius: 1px;
    animation: signal-pulse 1.5s ease-in-out infinite;
  }

  .signal-bars .bar:nth-child(1) { height: 4px; }
  .signal-bars .bar:nth-child(2) { height: 7px; animation-delay: 0.2s; }
  .signal-bars .bar:nth-child(3) { height: 10px; animation-delay: 0.4s; }
  .signal-bars .bar:nth-child(4) { height: 12px; animation-delay: 0.6s; }

  @keyframes signal-pulse {
    0%, 100% { opacity: 0.5; }
    50% { opacity: 1; }
  }

  .status-info {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .status-label {
    font-family: var(--font-mono);
    font-size: var(--text-xs);
    color: var(--success);
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-weight: 600;
    line-height: 1;
  }

  .signal-strength {
    font-family: var(--font-mono);
    font-size: 0.625rem;
    color: var(--text-muted);
    line-height: 1;
    margin-top: 2px;
  }

  /* Project content */
  .project-content {
    padding: var(--space-6);
    display: flex;
    flex-direction: column;
    gap: var(--space-5);
    position: relative;
    z-index: 1;
    height: 100%;
  }

  /* Enhanced header */
  .project-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: var(--space-4);
  }

  .project-meta {
    flex: 1;
  }

  .title-section {
    margin-bottom: var(--space-3);
  }

  .project-title {
    position: relative;
    font-size: var(--text-xl);
    font-weight: 600;
    line-height: 1.2;
    margin-bottom: var(--space-2);
  }

  .title-text {
    color: var(--text-primary);
    transition: all var(--transition-base);
    position: relative;
    z-index: 2;
  }

  .title-effects {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  .glow-line {
    position: absolute;
    bottom: -2px;
    left: 0;
    height: 2px;
    background: var(--gradient-primary);
    border-radius: var(--radius-full);
    width: 0;
    transition: width var(--transition-slow);
  }

  .scan-line {
    position: absolute;
    bottom: -2px;
    left: 0;
    right: 0;
    height: 1px;
    background: var(--neon-cyan);
    opacity: 0;
    animation: title-scan 3s ease-in-out infinite;
  }

  @keyframes title-scan {
    0%, 90% { opacity: 0; transform: scaleX(0); }
    95% { opacity: 0.8; transform: scaleX(1); }
    100% { opacity: 0; transform: scaleX(0); }
  }

  .project-id {
    display: flex;
    align-items: center;
    gap: var(--space-1);
    font-family: var(--font-mono);
    font-size: var(--text-xs);
    color: var(--text-muted);
  }

  .id-prefix {
    color: var(--neon-purple);
    font-weight: 600;
  }

  .id-value {
    color: var(--neon-cyan);
    font-weight: 600;
  }

  .category-display {
    display: flex;
    align-items: center;
    font-family: var(--font-mono);
    font-size: var(--text-sm);
    color: var(--text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .category-bracket {
    color: var(--neon-cyan);
    font-weight: 600;
    margin: 0 var(--space-1);
  }

  .category-text {
    font-weight: 500;
  }

  .priority-badge {
    position: relative;
    display: flex;
    align-items: center;
    gap: var(--space-2);
    padding: var(--space-2) var(--space-4);
    border-radius: var(--radius-full);
    flex-shrink: 0;
    overflow: hidden;
  }

  .badge-border {
    position: absolute;
    inset: 0;
    background: var(--gradient-accent);
    border-radius: inherit;
    padding: 1px;
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: xor;
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
  }

  .badge-content {
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
    gap: var(--space-1);
    background: var(--glass-bg);
    backdrop-filter: blur(12px);
    border-radius: inherit;
    padding: inherit;
    font-family: var(--font-mono);
    font-size: var(--text-xs);
    color: var(--cyber-orange);
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-weight: 600;
  }

  .badge-pulse {
    position: absolute;
    inset: -2px;
    background: var(--gradient-accent);
    border-radius: inherit;
    opacity: 0;
    animation: badge-pulse 2s ease-in-out infinite;
    filter: blur(4px);
  }

  @keyframes badge-pulse {
    0%, 100% { opacity: 0; transform: scale(1); }
    50% { opacity: 0.3; transform: scale(1.1); }
  }

  /* Enhanced description */
  .description-panel {
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    padding: var(--space-4);
    background: var(--glass-bg);
    backdrop-filter: blur(8px);
  }

  .description-header {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    margin-bottom: var(--space-3);
    padding-bottom: var(--space-2);
    border-bottom: 1px solid var(--border);
  }

  .desc-icon {
    color: var(--neon-green);
  }

  .desc-label {
    font-family: var(--font-mono);
    font-size: var(--text-xs);
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-weight: 600;
  }

  .project-description {
    color: var(--text-secondary);
    line-height: 1.6;
    font-size: var(--text-sm);
    margin: 0;
  }

  /* Enhanced technology stack */
  .tech-panel {
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    padding: var(--space-4);
    background: var(--glass-bg);
    backdrop-filter: blur(8px);
  }

  .tech-header {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    margin-bottom: var(--space-4);
    padding-bottom: var(--space-2);
    border-bottom: 1px solid var(--border);
  }

  .tech-icon {
    color: var(--neon-purple);
  }

  .tech-label {
    font-family: var(--font-mono);
    font-size: var(--text-xs);
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-weight: 600;
  }

  .tech-separator {
    flex: 1;
    height: 1px;
    background: linear-gradient(to right, var(--border), transparent);
    margin: 0 var(--space-2);
  }

  .tech-count {
    font-family: var(--font-mono);
    font-size: var(--text-xs);
    color: var(--neon-cyan);
    font-weight: 600;
    background: var(--bg-tertiary);
    padding: var(--space-1) var(--space-2);
    border-radius: var(--radius-sm);
  }

  .tech-grid {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-2);
  }

  .tech-node {
    position: relative;
    padding: var(--space-2) var(--space-3);
    border-radius: var(--radius-md);
    overflow: hidden;
    animation: node-appear 0.6s ease-out;
    animation-delay: calc(var(--index) * 0.1s);
    animation-fill-mode: both;
    opacity: 0;
  }

  @keyframes node-appear {
    from {
      opacity: 0;
      transform: translateY(10px) scale(0.8);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  .node-bg {
    position: absolute;
    inset: 0;
    background: var(--glass-bg);
    backdrop-filter: blur(8px);
    border: 1px solid var(--border);
    border-radius: inherit;
    transition: all var(--transition-base);
  }

  .node-border {
    position: absolute;
    inset: -1px;
    background: var(--gradient-primary);
    border-radius: inherit;
    opacity: 0;
    transition: opacity var(--transition-base);
    filter: blur(4px);
  }

  .node-text {
    position: relative;
    z-index: 2;
    font-family: var(--font-mono);
    font-size: var(--text-xs);
    color: var(--neon-cyan);
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .node-pulse {
    position: absolute;
    inset: 2px;
    background: rgba(0, 212, 255, 0.1);
    border-radius: inherit;
    opacity: 0;
    animation: node-pulse 3s ease-in-out infinite;
    animation-delay: calc(var(--index) * 0.5s);
  }

  @keyframes node-pulse {
    0%, 90% { opacity: 0; transform: scale(1); }
    95% { opacity: 0.3; transform: scale(1.05); }
    100% { opacity: 0; transform: scale(1); }
  }

  .tech-node:hover .node-bg {
    border-color: var(--border-glow);
    background: var(--surface);
  }

  .tech-node:hover .node-border {
    opacity: 0.3;
  }

  .overflow-node .node-text {
    color: var(--text-muted);
  }

  .overflow-dots {
    position: absolute;
    right: var(--space-1);
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    gap: 2px;
  }

  .dot {
    width: 2px;
    height: 2px;
    background: var(--text-muted);
    border-radius: 50%;
    animation: dot-pulse 1.5s ease-in-out infinite;
  }

  .dot:nth-child(2) { animation-delay: 0.2s; }
  .dot:nth-child(3) { animation-delay: 0.4s; }

  @keyframes dot-pulse {
    0%, 100% { opacity: 0.3; }
    50% { opacity: 1; }
  }

  /* Enhanced access panel */
  .access-panel-section {
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    padding: var(--space-4);
    background: var(--glass-bg);
    backdrop-filter: blur(8px);
  }

  .access-header {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    margin-bottom: var(--space-4);
    padding-bottom: var(--space-2);
    border-bottom: 1px solid var(--border);
  }

  .access-icon {
    color: var(--warning);
  }

  .access-label {
    font-family: var(--font-mono);
    font-size: var(--text-xs);
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-weight: 600;
    flex: 1;
  }

  .access-status {
    display: flex;
    align-items: center;
    gap: var(--space-1);
    font-family: var(--font-mono);
    font-size: var(--text-xs);
    color: var(--success);
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-weight: 600;
  }

  .access-status .status-dot {
    width: 6px;
    height: 6px;
    background: var(--success);
    border-radius: 50%;
    animation: pulse 2s ease-in-out infinite;
  }

  .access-links {
    display: flex;
    gap: var(--space-3);
  }

  .access-link {
    position: relative;
    display: flex;
    align-items: center;
    gap: var(--space-2);
    padding: var(--space-3) var(--space-4);
    border-radius: var(--radius-md);
    text-decoration: none;
    font-family: var(--font-mono);
    font-size: var(--text-sm);
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-weight: 600;
    transition: all var(--transition-base);
    overflow: hidden;
    flex: 1;
  }

  .link-bg {
    position: absolute;
    inset: 0;
    background: var(--glass-bg);
    backdrop-filter: blur(8px);
    border: 1px solid var(--border);
    border-radius: inherit;
    transition: all var(--transition-base);
  }

  .link-icon {
    position: relative;
    z-index: 2;
    transition: all var(--transition-base);
  }

  .link-text {
    position: relative;
    z-index: 2;
    transition: all var(--transition-base);
  }

  .link-trail {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    background: var(--gradient-primary);
    width: 0;
    transition: width var(--transition-base);
  }

  .repo-link {
    color: var(--text-secondary);
  }

  .repo-link:hover {
    color: var(--text-primary);
    transform: translateY(-2px);
  }

  .repo-link:hover .link-bg {
    background: var(--surface);
    border-color: var(--border-glow);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }

  .repo-link:hover .link-trail {
    width: 100%;
  }

  .demo-link {
    color: var(--neon-cyan);
  }

  .demo-link:hover {
    color: var(--bg-primary);
    transform: translateY(-2px);
  }

  .demo-link:hover .link-bg {
    background: var(--neon-cyan);
    border-color: var(--neon-cyan);
    box-shadow: 0 4px 20px rgba(0, 212, 255, 0.4);
  }

  .demo-link:hover .link-trail {
    width: 100%;
    background: var(--bg-primary);
  }

  /* Enhanced footer */
  .project-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: var(--space-4);
    border-top: 1px solid var(--border);
    margin-top: auto;
    gap: var(--space-4);
  }

  .security-display {
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
  }

  .security-header {
    display: flex;
    align-items: center;
    gap: var(--space-2);
  }

  .sec-icon {
    color: var(--success);
  }

  .sec-label {
    font-family: var(--font-mono);
    font-size: var(--text-xs);
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-weight: 600;
  }

  .security-grid {
    display: flex;
    gap: var(--space-3);
  }

  .metric-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-1);
  }

  .metric-bar {
    width: 24px;
    height: 4px;
    background: var(--border);
    border-radius: var(--radius-full);
    overflow: hidden;
  }

  .bar-fill {
    height: 100%;
    width: var(--fill);
    background: var(--gradient-primary);
    border-radius: inherit;
    animation: bar-fill 2s ease-out;
    animation-delay: 1s;
    animation-fill-mode: both;
    transform: scaleX(0);
    transform-origin: left;
  }

  @keyframes bar-fill {
    to {
      transform: scaleX(1);
    }
  }

  .metric-label {
    font-family: var(--font-mono);
    font-size: 0.625rem;
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .deployment-display {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: var(--space-2);
  }

  .deploy-header {
    margin-bottom: var(--space-1);
  }

  .deploy-label {
    font-family: var(--font-mono);
    font-size: var(--text-xs);
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-weight: 600;
  }

  .deploy-status {
    display: flex;
    align-items: center;
    gap: var(--space-2);
  }

  .deploy-indicator {
    position: relative;
    width: 16px;
    height: 16px;
  }

  .indicator-ring {
    position: absolute;
    inset: 0;
    border: 2px solid var(--neon-cyan);
    border-radius: 50%;
    border-top-color: transparent;
    animation: spin 2s linear infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  .indicator-core {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 6px;
    height: 6px;
    background: var(--neon-cyan);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    animation: pulse 2s ease-in-out infinite;
  }

  .deploy-text {
    font-family: var(--font-mono);
    font-size: var(--text-sm);
    color: var(--neon-cyan);
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-weight: 600;
  }

  /* Hover effects */
  :global(.project-card-enhanced:hover) .title-text {
    color: var(--neon-cyan);
    text-shadow: 0 0 8px rgba(0, 212, 255, 0.6);
  }

  :global(.project-card-enhanced:hover) .glow-line {
    width: 100%;
  }

  :global(.project-card-enhanced:hover) .image-wrapper {
    border-color: var(--border-glow);
    box-shadow: 0 0 20px rgba(0, 212, 255, 0.3);
  }

  :global(.project-card-enhanced:hover) .image-wrapper img {
    transform: scale(1.05);
    filter: brightness(0.6) contrast(1.3);
  }

  /* Responsive design */
  @media (max-width: 768px) {
    .image-wrapper {
      height: 180px;
    }
    
    .project-header {
      flex-direction: column;
      gap: var(--space-3);
      align-items: flex-start;
    }
    
    .priority-badge {
      align-self: flex-end;
    }
    
    .access-links {
      flex-direction: column;
    }
    
    .project-footer {
      flex-direction: column;
      gap: var(--space-3);
      align-items: flex-start;
    }

    .terminal-window {
      width: 95%;
    }

    .project-content {
      padding: var(--space-4);
    }
  }
  
  @media (max-width: 480px) {
    .image-wrapper {
      height: 160px;
    }
    
    .project-title {
      font-size: var(--text-lg);
    }
    
    .tech-grid {
      gap: var(--space-1);
    }
    
    .tech-node {
      padding: var(--space-1) var(--space-2);
    }

    .node-text {
      font-size: 0.625rem;
    }

    .security-grid {
      gap: var(--space-2);
    }

    .metric-bar {
      width: 20px;
      height: 3px;
    }
  }
  
  /* Performance optimizations */
  @media (prefers-reduced-motion: reduce) {
    .matrix-column,
    .scan-beam,
    .grid-line,
    .interference-pattern,
    .cursor,
    .indicator-dot,
    .indicator-ring,
    .indicator-core,
    .signal-bars .bar,
    .node-pulse,
    .badge-pulse,
    .title-scan,
    .bar-fill {
      animation: none !important;
    }
    
    .image-wrapper img,
    .holo-scan,
    .terminal-overlay,
    .tech-node,
    .access-link {
      transition: none !important;
    }
    
    :global(.project-card-enhanced:hover) .image-wrapper img {
      transform: none;
    }
  }
</style>