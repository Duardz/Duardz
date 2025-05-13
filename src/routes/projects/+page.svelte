<script>
  export let title = "My Projects";
  let projects = [
    { name: "Cybersecurity Portfolio", description: "A portfolio showcasing my cybersecurity skills." },
    { name: "SvelteKit Blog", description: "A blog built with SvelteKit and Tailwind CSS." },
    { name: "E-commerce App", description: "A simple e-commerce app built using Node.js and React." }
  ];
</script>

<main class="projects">
  <h1>{title}</h1>
  <ul>
    {#each projects as project}
      <li>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
      </li>
    {/each}
  </ul>
</main>

<style>
  .projects {
    padding: 2rem;
  }

  h1 {
    font-size: 2rem;
    color: #333;
    text-align: center;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    margin-bottom: 1.5rem;
    padding: 1rem;
    background-color: #f7f7f7;
    border-radius: 8px;
  }

  h3 {
    font-size: 1.5rem;
    color: #333;
  }

  p {
    font-size: 1rem;
    color: #666;
  }
</style>
