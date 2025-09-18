<script>
    // 'navigating' is een store die aangeeft of er momenteel naar een andere pagina wordt genavigeerd
    import { page, navigating } from '$app/stores';
    // Importeert het CharacterSelector-component vanuit de lib/components map
    import CharacterSelector from '$lib/components/CharacterSelector.svelte';
    // Ontvangt data van de load-functie
    export let data;
    // Ontvangt een lijst met characters als prop
    export let characters = [];
    // Haalt MemberData uit de ontvangen data
    const { MemberData } = data;
  </script>
 
 <section class="layout-page">
  <section class="sidebar">
    <CharacterSelector characters={MemberData.data} />
  </section>

  <section class="character-page">
    <slot />
  </section>
</section>
  
<style>

.layout-page {
  display: grid;
  grid-template-areas:
    "main"
    "nav";
  grid-template-rows: 1fr auto; 
  min-height: 100dvh;
  gap: 12px;
}

.character-page {
  grid-area: main;
  overflow: auto;
  padding: 16px;
}

.sidebar {
  grid-area: nav;
  padding: 12px 16px;
  border-top: 3px solid #000;
  padding-bottom: calc(12px + env(safe-area-inset-bottom, 0px));
}

/* tablet*/
@media (min-width: 700px) {
  .layout-page {
    grid-template-columns: minmax(280px, 420px) 1fr;
    grid-template-rows: 100dvh;
    grid-template-areas: "nav main";
    gap: 0;
  }
  .sidebar {
    border-top: none;
    border-right: 3px solid #000;
    overflow: auto;
  }
  .character-page {
    overflow: auto;
  }
}

/* desktop */
@media (min-width: 1000px) {
  .sidebar {
    border-top: none;
    min-width: 550px;
    border-right: 3px solid #000;
    overflow: auto;
  }
  
}

:global(.sidebar),
:global(.character-page){ min-width:0; }


</style>