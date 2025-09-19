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
        <img src={member.profilepicture} width="200" alt={member.name} /> <!-- AANPASSING CCCCCCCCCCCCCCCCCCCCCCC -->
      {/if}
      <div class="ellipse"></div> <!-- AANPASSING CCCCCCCCCCCCCCCCCCCCCCC -->
    </section>
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
    margin: 0 auto;
    text-align: center;
 
    /* AANPASSING CCCCCCCCCCCCCCCCCCCCCCC */
    display: flex;
    flex-direction: column;
    justify-content: start;
    position: fixed;
    height: 65vh;
    overflow: auto;
    top: 0;
    left: 0;
    right: 0;
    width: 100vw;
    box-sizing: border-box;  /* padding binnen element inplaats van erbuiten */
    padding: 2rem;
    padding-top: 4rem;
 
    /* Tablet & laptop */
    @media (min-width: 700px) {
      height: 100vh;
      bottom:0;
      left:auto;
      width: 50vw;
      justify-content: center;
    }
  }
 
  /* AANPASSING CCCCCCCCCCCCCCCCCCCCCCC */
  .character-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
 
/* tablet* desktop h1*/
  @media(max-width: 767px){
 
    .character-info{
      flex-direction: column; /* AANPASSING CCCCCCCCCCCCCCCCCCCCCCC */
    }
  }
 
  img{
    position: relative;
    animation: float 3s ease-in-out infinite;
    width: 200px;
 
    @media (min-width: 700px) {
      width: 18rem;
    }
  }
 
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50%      { transform: translateY(-12px); }
  }
 
  h1 {
    background-color: #88E2C1;
    color: black;
    /* AANPASSING CCCCCCCCCCCCCCCCCCCCCCC */
    font-size: 1rem;
    padding: 5px 20px;
    border-radius: 10px;
    width: fit-content;
    margin: 10px auto 5px;
    border: 4px solid black;     
    border-bottom: 10px solid #3a5a4a;
    transform: skewX(-10deg);   
    
    /* Tablet & laptop */
    @media (min-width: 700px) {
      font-size: 1.2rem;
    }
    
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
    height: 160px;
  }
 
  .squad { font-weight: 700; text-align: left; padding: 15px; }
 
  .card-bottom {
    background-color: #88E2C1;
    padding: 20px;
    text-align: center;
    border-radius: 25px;
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