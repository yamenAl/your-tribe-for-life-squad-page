<script>
  export let data;
  const { localData } = data // hier word de lokale json data opgehaald en directus data
  const members=data.members
  console.log(members)
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<h2>Lokaal JSON</h2>
<ul>
  {#each localData.data as item}
    <li>{item.name}</li>
    <img src="{item.profilepicture}" alt="Foto van{item.name}" width="80" />
  {/each}
</ul>



