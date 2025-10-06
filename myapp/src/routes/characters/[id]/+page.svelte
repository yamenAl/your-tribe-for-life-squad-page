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
        <img  class='character-reveal'src={member.profilepicture} width="200" alt={member.name} /> 
      {/if}
      <div class="ellipse"></div> 
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
    overflow: hidden; /* blokkeert scrollen */
    height: 100%; 
    background-color:#211C75;
  }
 
  .character {
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: start;
  position: fixed;
  width: 100%;
  box-sizing: border-box;
  padding: 1rem;

}

.character {
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: start;
  position: fixed;
  width: 100%;
  box-sizing: border-box;
  padding: 1rem;
}

/*voor hele kleine schermen*/
@media (max-width: 380px) {
  .character {
    padding: 0.5rem; 
    gap: 0.5rem; 
    scale: 0.9; 
  }

  .character h1 {
    font-size: 1rem;
  }

  .character img {
    width: 250px;
  }
  .card {
    display: none;
  }
}


/* Tablet & laptop */
    @media (min-width: 700px) {
      .character {
      height: 100vh;
      bottom:0;
      right: 0;
      width: 50vw;
      justify-content: center;
   }
    }
  
 

  .character-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  @media(max-width: 767px){
 
    .character-info{
      flex-direction: column;
    }
  }
 
  img {
    position: relative;
    width: 180px;
    animation: float 3s ease-in-out infinite;
    will-change: transform, clip-path;
  }

  .character-reveal {
    animation: revealPixel 1s steps(10) forwards;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50%      { transform: translateY(-12px); }
  }

  @keyframes revealPixel {
    from { clip-path: inset(100% 0 0 0); }
    to   { clip-path: inset(0 0 0 0); }
  }



@media (min-width: 700px) {
  img {
    width: 18rem;
  }
}



  h1 {
    background-color: #88E2C1;
    color: black;
    font-size: 15px;
    padding: 5px 20px;
    border-radius: 10px;
    width: fit-content;
    margin: auto 20px;
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
    margin: 10px auto 0;
    height: 100px;
  }
 
  .squad { font-weight: 700; text-align: left; padding: 15px; }
 
  .card-bottom {
    background-color: #88E2C1;
    padding: 15px;
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