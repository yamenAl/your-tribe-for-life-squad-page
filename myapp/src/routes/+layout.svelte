<!--hier kan je header en footer plaatsen die worden automatich op elke pagina
hetzelfde geladen zodat je het niet steeds opnieuw hoeft te doen-->
  
<header>Mijn header</header>
<script>
  import { page, navigating } from '$app/stores';
  export let data;
  const { localData } = data; // ik heb de localData uit de data gehaald zodat ik die kan gebruiken
</script>

  <main>
	<slot /> <!-- dit is een term voor dat de hier de +pages geladen word  -->
  </main>
  
  <footer>Mijn footer</footer>