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
  :global(:root) {
    --dark-blue:#211C75;
    --blue:#351FB7;
    --purple:#9E7BEE;
    --mint:#88E2C1;
    --yellow:#FFFB96;
    --rose:#E25F7B;
    --white:#FFFFFF;
    --black:#000000;
    --btn-shadow:#00000055;
    --shadow:#0d153e;
    --panel-inset: #2a257a;
    --radius:24px;
  }
    


  * { box-sizing: border-box;
     margin: 0; 
     padding: 0; }

  :global(html, body) {
    margin: 0;
    height: 100%;
    background: var(--purple);
    color: var(--white);
    font-family: Inter, system-ui, sans-serif;
  }



  .page {
    min-height: 100dvh;
    display: grid;
    gap: 18px;
    padding: 18px;
  }

  .left {
    display: grid;
    place-items: center;
  }

  .portrait {
    position: relative;
    width: min(380px, 92vw);
  }

  .portrait img {
    display: block;
    width: 100%;
    aspect-ratio: 3 / 4;
    object-fit: cover;
  }

  .badge {
    position: absolute;
    top: -20px;        
    left: 50%;
    transform: translateX(-50%);
    background: var(--yellow);
    padding: 10px 14px;
    border-radius: 10px;
    font-family: "Press Start 2P", monospace;
    letter-spacing: .08em;
    box-shadow: 0 4px 0 #d4c46a;
    text-transform: uppercase;
    white-space: nowrap;
  }

 .panel {
  position: relative;
  display: grid;
  gap: 14px;
  background: var(--dark-blue);
  border-radius: var(--radius);
  padding: 14px;
  box-shadow: 0 16px 0 var(--shadow) inset;
  z-index: 1; 
}

.panel::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: var(--radius);

  box-shadow: -30px 25px 0 var(--shadow);
  z-index: 0; 
}
  .card {
    position: relative;
    background: var(--mint);
    border: 4px solid var(--dark-blue);
    border-radius: calc(var(--radius) - 6px);
    padding: 18px;
  }

  .card h3 {
    position: absolute;
    top: -10px;
    left: 12px;
    background: var(--mint);
    border-radius: 12px;
    padding: 8px 12px;
    font-family: "Press Start 2P", monospace;
    letter-spacing: .12em;
    font-size: 11px;
  }

  .card p {
    margin-top: 6px;
    text-align: center;
    text-transform: uppercase;
    font-family: "Press Start 2P", monospace;
    font-size: 13px;
    line-height: 1.6;
    white-space: pre-line;
  }

  .card .bio {
    text-transform: none;
    font-family: Inter, system-ui, sans-serif;
    font-size: 14px;
  }



  @media (min-width: 880px) {
    .page {
      grid-template-columns: 1fr 1.1fr;
      align-items: center;
      gap: 40px;
      padding: 32px 48px;
    }
    .portrait { width: min(460px, 40vw); }
  }
</style>
