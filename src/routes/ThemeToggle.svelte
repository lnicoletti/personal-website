<script>
  import { onMount } from 'svelte';

  let darkMode = false;

  onMount(() => {
    const currentTheme = localStorage.getItem('theme') || 'light';
    darkMode = currentTheme === 'dark';
    updateTheme();
  });

  function toggleTheme() {
    darkMode = !darkMode;
    updateTheme();
  }

  function updateTheme() {
    document.body.classList.toggle('dark-mode', darkMode);
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }
</script>

<button on:click={toggleTheme}>
  {darkMode ? '☀️' : '🌙'}
</button>

<style>
  button {
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
</style>
