<script>
  export let data;
  let member, id;
  $: ({ member, id } = data ?? {});  
</script>

<section class="character">
  <section class="character-info">
    <h1> <span>{member.name}</span></h1>
         
    <section>
      {#if member.profilepicture}
        <img src={member.profilepicture} width="250" alt={member.name} />
      {/if}
    </section>

    <div class="ellipse"></div>
</section>

  <section class="card">
    
    <div class="squad">SQUAD {member.squad}</div>

    <div class="card-bottom">
      <p class="card__quote">"{member.bio}"</p>
      <a href="#"> CHARACTER PROFILE </a>
    </div>

  </section>
</section>

<style>
  :global body {
    background-color:#211C75;
  }

  .character {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    text-align: center;
  }


/* tablet* desktop h1*/
  @media(max-width: 767px){

    .character-info{
      flex-direction: column-reverse;
    }
  }

  img{
    position: relative;
    animation: float 3s ease-in-out infinite;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50%      { transform: translateY(-12px); }
  }

  h1 {
    background-color: #88E2C1;
    color: black;
    font-size: 1.3rem;
    padding: 5px 20px;
    border-radius: 10px;
    width: fit-content;
    margin: 10px auto 5px; 
    border: 4px solid black;     
    border-bottom: 10px solid #3a5a4a;
    transform: skewX(-10deg);     
  }
  h1 span {
    display: inline-block;
    transform: skewX(10deg);      
  }

  .card {
    border: 3px solid black;
    background-color: #61B395;
    border-radius: 25px;
    width: 250px;
    margin: 20px auto 0;
    overflow: hidden; 
    height: 160px;
  }

  .squad { font-weight: 700; text-align: left; padding: 15px; }

  .card-bottom {
    background-color: #88E2C1;
    padding: 20px;
    text-align: center;
  }

  .card__quote { font-size: 1rem; margin-bottom: 15px; }

  a {
    font-size: 12px;
    display: inline-block;
    padding: 7px 5px;
    border: 3px solid #3b6152;
    border-radius: 30px;
    background: #568d78;
    color: #000;
    text-decoration: none;
    font-weight: 700;
    transition: transform .15s ease;
  }

  a:hover {
    background: #000000;
    color:#fff;
    transform: scale(1.05);
  }

  .ellipse{
    width: clamp(120px, 30vw, 260px);
    height: clamp(24px, 7vw, 56px);
    margin: -30px auto 0;
    border-radius: 50%;
    background: radial-gradient(ellipse at center,
      rgba(0, 0, 0, 0.731) 0%,
      rgba(0,0,0,.18) 55%,
      rgba(0,0,0,0) 70%);
  }
</style>