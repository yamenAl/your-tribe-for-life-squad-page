<script>
    // ik heb de data die ik terugkrijg van de load functie opgehaald
    export let data;
  
    // ik heb daarna member en id uit die data gehaald zodat ik die makkelijk kan gebruiken
    const { member, id } = data;
  </script>
  
  <!-- ik heb de rechterkant van de pagina gemaakt waar het gekozen pixelcharacter tevoorschijn komt -->
  
  <div style="text-align: center;">
    <!-- ik laat hier de naam van de member zien -->
    <h1>{member.name}</h1>
  
    <!-- ik heb een check gemaakt: als er een profielfoto is, dan laat ik die zien -->
    {#if member.profilepicture}
      <!-- ik heb de foto laten zien met een breedte van 300px -->
      <img src={member.profilepicture} width="300" alt={member.name} />
    {/if}
  </div>
  