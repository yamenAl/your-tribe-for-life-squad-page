
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<h2>Lokaal JSON</h2>
<ul>
  {#each localData.data as item}
    <li>{item.name}</li>
    <img src="{item.profilepicture}" alt="Foto van{item.name}" width="80" />
  {/each}
</ul>

 <h1>Selecteer links een member</h1>
<p>Klik op een naam/foto in de lijst om details te zien.</p>


