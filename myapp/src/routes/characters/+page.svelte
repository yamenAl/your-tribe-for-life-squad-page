<script>
  export let data;
  const members = data.members;
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<h2>Lokaal JSON</h2>
<ul>
  {#each members as member}
    <li>{member.name}</li>
    <img src="{member.profilepicture}" alt="Foto van{member.name}" width="80" />
  {/each}
</ul>

 <h1>Selecteer links een member</h1>
<p>Klik op een naam/foto in de lijst om details te zien.</p>

