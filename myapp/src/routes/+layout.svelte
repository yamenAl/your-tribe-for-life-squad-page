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
<section class="app">
  <aside class="sidebar">
    <h2>Members</h2>
    <ul>
      <!-- ik heb een each-loop gemaakt die door alle members uit mijn localData gaat -->
      {#each localData.data as item}
        <li>
          <!-- ik heb voor elke member een link gemaakt naar /id -->
          <!-- ik heb class:selected gebruikt zodat de geselecteerde member visueel wordt aangegeven -->
           <!-- ik preload de data alvast zodat als er op geklikt word het niet
          lang hoeft te laden-->
          <a
            href={`/${item.id}`}
            data-sveltekit-preload-data="hover"  
            data-sveltekit-preload-code="hover"
            class:selected={String($page.params.id) === String(item.id)}
          >
        <!-- met async komt het beeld wat later maar de rest van de pagina kan sneller laden.
         met fetch prioroty focus de browser eerst op laden van de belangerijkste dingen -->
            <img
              src={item.profilepicture}
              alt={item.name}
              width="56"
              height="56"
              loading="lazy" 
              decoding="async" 
              fetchpriority="low"
            />
            <span>{item.name}</span>
          </a>
        </li>
      {/each}
    </ul>
  </aside>

  <main class="detail" aria-busy={$navigating ? 'true' : 'false'}>
    <!-- dit is de loading state , ik heb een if-statement gemaakt: als er genavigeerd wordt laat ik "Laden..." zien -->
    {#if $navigating}
      <div class="loading">Laden…</div>
    {/if}

  <!-- Key-block zorgt dat detailcomponent opnieuw rendert bij wisselen van id -->
    {#key $page.params.id}
      <slot />
    {/key}
  </main>
  
  <footer>Mijn footer</footer></section>
</section>
