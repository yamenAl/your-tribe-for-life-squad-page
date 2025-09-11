<script>
  import Header from '$lib/components/Header.svelte';

  let { data } = $props();
  const member = data.member;

  const roleText   = member?.role?.length ? member.role.join(", ") : "—";
  const nickText   = member?.nickname?.trim() ? member.nickname : "—";
  const bioText    = member?.bio || "—";
  const squadsText = member?.squads?.length ? member.squads.join(", ") : "—";

  const imgSrc = member.profilepicture || member.avatar || "/no-userprofile.jpg";
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Inter:wght@400;700&display=swap" rel="stylesheet">
</svelte:head>
<Header />
<main class="page">
  <!-- LEFT: avatar -->
  <section class="left">
    <figure class="portrait">
      <figcaption class="badge">{member.name}</figcaption>
      <img src={imgSrc} alt={"Avatar van " + member.name} />
    </figure>
  </section>

  <!-- RIGHT: info panel -->
  <aside class="panel">
    <section class="card">
      <h3>ROLE</h3>
      <p>{roleText}</p>
    </section>
    <section class="card">
      <h3>NICKNAME</h3>
      <p>{nickText}</p>
    </section>
    <section class="card">
      <h3>BIO</h3>
      <p class="bio">{bioText}</p>
    </section>
    <section class="card">
      <h3>SQUADS</h3>
      <p>{squadsText}</p>
    </section>
  </aside>
</main>

<style>
 
</style>
