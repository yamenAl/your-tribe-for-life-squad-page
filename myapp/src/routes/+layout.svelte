<!--hier kan je header en footer plaatsen die worden automatich op elke pagina
hetzelfde geladen zodat je het niet steeds opnieuw hoeft te doen-->
<script>
  	import '$lib/assets/stylesheet.css'

</script>
<header>Mijn header</header>

  <main>
	<slot /> <!-- dit is een term voor dat de hier de +pages geladen word  -->
  </main>
  
  <footer>Mijn footer</footer>