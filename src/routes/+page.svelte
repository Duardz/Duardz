<script>
  export let name = 'Eduardo';
</script>

<main class="home">
  <h1>Welcome to My Portfolio!</h1>
  <p>Hi, I'm {name}, a developer and cybersecurity enthusiast.</p>
  <p>Explore my projects and get to know more about me.</p>

  <nav>
    <ul>
      <li><a href="/about">About Me</a></li>
      <li><a href="/projects">My Projects</a></li>
      <li><a href="/contact">Contact Me</a></li>
    </ul>
  </nav>
</main>

<style>
  .home {
    text-align: center;
    padding: 2rem;
  }

  h1 {
    font-size: 2rem;
    color: #333;
  }

  p {
    font-size: 1.2rem;
    color: #666;
  }

  nav ul {
    list-style: none;
    padding: 0;
  }

  nav ul li {
    margin: 1rem;
  }

  nav ul li a {
    text-decoration: none;
    color: #333;
    font-weight: bold;
  }
</style>
