<script>
    export let data;
    const { member, id } = data;
  </script>
  
  <!--Dit is de rechterkant van de pagina -->
  
  <section style="text-align: center;">
    <h1>{member.name}</h1>
    
    {#if member.profilepicture}
    <img class="character-reveal " 
      src={member.profilepicture} 
      width="300" 
      alt={member.name} 
    />
  {/if}

  </section>

<style>
.character-reveal  {
  animation: revealPixel 1000ms steps(10) forwards;
  will-change: clip-path;
}

@keyframes revealPixel {
  from { clip-path: inset(100% 0 0 0); } 
  to   { clip-path: inset(0 0 0 0); }    
}
</style>
    


