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

<div>
   <!-- Hier wordt het component met het menu met alle members ingeladen -->
   <CharacterSelector characters={MemberData.data} />
  <!-- Hier wordt de pagina met de geselecteerde member ingeladen -->
  <slot />
</div>