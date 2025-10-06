<script>
  import '$lib/assets/stylesheet.css'
  import { page, navigating } from '$app/stores';
  import HamburgerMenu  from '$lib/components/Header.svelte';  
  export let data;
  const { MemberData } = data; // ik heb de MemberData uit de data gehaald zodat ik die kan gebruiken
</script>


  <header>
    <HamburgerMenu />
  </header>

<main>
      <slot />
  </main>

  <style>
    header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      background-color: #211C75;
      color: white;
      z-index: 1000;
    }
    main {
    margin-top: 70px;
  }
  </style>