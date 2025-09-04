<script>
    export let data;
  const { localData, memberData } = data // hier word de lokale json data opgehaald en directus data
  </script>
  
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<h2>Lokaal JSON</h2>
  <ul>
    {#each localData.data as item}
      <li>{item.name}</li>
      <img src={item.profilepicture} alt={item.name} width="80" />
    {/each}
  </ul>

<h2>Directus data</h2>
{#each members as member}
<p>{member.name}</p>
{/each}


