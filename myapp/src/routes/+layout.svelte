<script>
  import { page, navigating } from '$app/stores';
  import HamburgerMenu  from '$lib/components/Header.svelte';  
  export let data;
  const { MemberData } = data; // ik heb de MemberData uit de data gehaald zodat ik die kan gebruiken
</script>

<header>
  <HamburgerMenu  />
</header>

<main>
      <slot />
  </main>
