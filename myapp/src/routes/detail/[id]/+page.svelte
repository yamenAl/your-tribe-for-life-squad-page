<script>

  let { data } = $props();
  const member = data.member;

  const roleText   = member?.role?.length ? member.role.join(", ") : "—";
  const nickText   = member?.nickname?.trim() ? member.nickname : "—";
  const bioText    = member?.bio || "—";
  const squadsText = member?.squads?.length ? member.squads.join(", ") : "—";

  const imgSrc = member.profilepicture || member.avatar || "/no-userprofile.jpg";
</script>

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
  }



  .page {
    min-height: 100dvh;
    display: grid;
    gap: 18px;
    padding: 18px;
      @media (min-width: 880px) {
        grid-template-columns: 1fr 1.1fr;
        align-items: center;
        gap: 40px;
        padding: 32px 48px;
    }
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
    top: -40px;        
    left: 50%;
    transform: translateX(-50%);
    background: var(--yellow);
    color: var(--black);
    padding: 10px 14px;
    border-radius: 10px;
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
  border: 4px solid var(--black);
  padding: 14px;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: var(--radius);
    box-shadow: 0px 25px 0 var(--shadow);
    z-index: 0;

    @media (min-width: 880px) {
      box-shadow: -20px 25px 0 var(--shadow);
    }
  }
}
  .card {
    position: relative;
    background: var(--mint);
    color: var(--black);
    border: 4px solid var(--black);
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
    letter-spacing: .12em;
    font-size: 11px;
  }

  .card p {
    margin-top: 6px;
    text-align: center;
    text-transform: uppercase;
    font-size: 13px;
    line-height: 1.6;
    white-space: pre-line;
  }

  .card .bio {
    text-transform: none;
    font-size: 14px;
  }
 
  .github-btn {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
    top: -22px;

    display: inline-block;
    padding: 16px 28px;
    background: var(--rose);
    color: var(--white);
    border: 4px solid var(--black);
    border-radius: 16px;
    font-size: 14px;
    letter-spacing: .18em;
    text-transform: uppercase;
    text-decoration: none;
    box-shadow: 0 8px 0 var(--btn-shadow);
    transition: transform .15s ease, box-shadow .15s ease;

    &::after {
      content: "";
      position: absolute;
      left: 8px;
      right: 8px;
      bottom: -12px;
      height: 12px;
      background: var(--black);
      border-radius: 12px;
      z-index: -1;
    }

    &:hover {
      transform: translateX(-50%) translateY(-2px);
      box-shadow: 0 10px 0 var(--btn-shadow);
    }

    &:active {
      transform: translateX(-50%) translateY(2px);
      box-shadow: 0 4px 0 var(--btn-shadow);
    }

    @media (min-width: 880px) {
      top: auto;
      bottom: -22px;

      &:hover {
        transform: translateY(-2px);
      }

      &:active {
        transform: translateY(2px);
      }
    }
  }


</style>



<main class="page">
  <section class="left">
    <figure class="portrait">
      <figcaption class="badge">{member.name}</figcaption>
      <img src={imgSrc} alt={"Avatar van " + member.name} />
    </figure>
  </section>

  

  <aside class="panel">
      {#if member.website}
    <a
      href={member.website}
      target="_blank"
      rel="noopener noreferrer"
      class="github-btn"
      aria-label="Open GitHub"
    >
      GITHUB
    </a>
  {/if}

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
