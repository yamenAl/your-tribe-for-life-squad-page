<script>
    export let data;
    const { localData } = data; // hier word de lokale json data opgehaald
  </script>
  

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>


  <ul>
    {#each localData.data as item}
      <li>{item.name}</li>
      <p>{item.profilepicture}</p>
    {/each}
  </ul>