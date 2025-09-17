<script>
    export let data;
    const { member, id } = data;
  </script>
  
  <!--Dit is de rechterkant van de pagina -->
  
  <section style="text-align: center;">
    <h1>{member.name}</h1>
    
    {#if member.profilepicture}
    <img class="character reveal-up" 
      src={member.profilepicture} 
      width="300" 
      alt={member.name} 
    />
  {/if}

  </section>

