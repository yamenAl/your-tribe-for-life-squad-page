<script>
    // ik heb de data die ik terugkrijg van de load functie opgehaald
    export let data;

    // Importeerd 'page' store. Deze geeft automatische updates zodra de url veranderd
    import { page } from '$app/stores';
  </script>
  
  <!-- ik heb de rechterkant van de pagina gemaakt waar het gekozen pixelcharacter tevoorschijn komt -->

  <!-- Key forceert een her-rendering van de inhoud van alle code binnen de Key -->
  {#key $page.params.id}
    {#if data.member}
      <div style="text-align: center;">
        <!-- ik laat hier de naam van de member zien -->
        <h1>{data.member.name}</h1>
        <!-- ik heb een check gemaakt: als er een profielfoto is, dan laat ik die zien -->
        {#if data.member.profilepicture}
          <!-- ik heb de foto laten zien met een breedte van 300px -->
          <img src={data.member.profilepicture} width="300" alt={data.member.name} />
        {/if}
      </div>  
    {/if}
  {/key}
  
