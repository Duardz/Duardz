<script>
  let name = '';
  let email = '';
  let message = '';

  function handleSubmit() {
    alert('Form submitted');
  }
</script>

<main class="contact">
  <h1>Contact Me</h1>
  <form on:submit|preventDefault={handleSubmit}>
    <label for="name">Your Name</label>
    <input type="text" id="name" bind:value={name} required />
    
    <label for="email">Your Email</label>
    <input type="email" id="email" bind:value={email} required />
    
    <label for="message">Your Message</label>
    <textarea id="message" bind:value={message} required></textarea>
    
    <button type="submit">Send</button>
  </form>
</main>

<style>
  .contact {
    padding: 2rem;
    text-align: center;
  }

  h1 {
    font-size: 2rem;
    color: #333;
  }

  form {
    max-width: 600px;
    margin: 0 auto;
    padding: 1rem;
    background-color: #f9f9f9;
    border-radius: 8px;
  }

  label {
    font-size: 1rem;
    display: block;
    margin-bottom: 0.5rem;
  }

  input, textarea {
    width: 100%;
    padding: 1rem;
    margin-bottom: 1rem;
    border: 1px solid #ddd;
    border-radius: 4px;
  }

  button {
    padding: 0.8rem 2rem;
    background-color: #333;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  button:hover {
    background-color: #555;
  }
</style>
