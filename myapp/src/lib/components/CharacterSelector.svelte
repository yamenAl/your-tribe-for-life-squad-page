<script>
    // 'navigating' is een store die aangeeft of er momenteel naar een andere pagina wordt genavigeerd
    import { page, navigating } from '$app/stores';

    // Ontvangt een lijst met characters als prop
    export let characters = [];
</script>
  
  <section class="app">
    {#key $page.params.id}
    <aside class="sidebar">
      <h2>Members</h2>
      <ul>
        <!-- ik heb een each-loop gemaakt die door alle members uit mijn MemberData gaat -->
        {#each characters as item}
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
    {/key}
  
    <!-- <h1>Squads</h1>
  
  <div>
      filter voor squads --
      <form>
        <fielset>
            <legend>Select a squad</legend>
            <input type="radio" name="squad" value="e">
            <label for="squad-e">squad E</label>
            <input type="radio" name="squad" value="f">
            <label for="squad-f">squad F</label>
        </fielset>
    </form>
  
     Nayome: Hier kan je werken aan de knoppen -->
    <!-- menu van profielfoto's --
    <ul>
        {#each MemberData.data as item}
            <li>
                <button>
                    <img src={item.profilepicture} alt={item.name} width="80" />
                </button>
            </li>
        {/each}
    </ul>
  
     Selecteerd een willekeurig profiel --
    <button>random</button>
  </div>-->
  
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
  </section>
  
  <!--hier heb ik basis css toegevoegd dit is de linkerkant dus de characterlist die kan
  je hier veranderen clarice -->
  <style>
      .app { display: grid; grid-template-columns: 1fr; grid-template-rows: auto 1fr; height: 100dvh; }
      .detail { order: 1; position: relative; padding: 20px; overflow: visible; }
    .sidebar { order: 2; border-right: 1px solid #eee; padding: 12px; overflow: auto; }
    ul { list-style: none; margin: 0; padding: 0; }
    li + li { margin-top: 6px; }
    a { display: flex; align-items: center; gap: 10px; padding: 8px; border-radius: 8px; text-decoration: none; color: inherit; cursor: pointer; }
    a:hover { background: #f6f6f6; }
    a.selected { background: #eef5ff; }
    img { border-radius: 8px; object-fit: cover; }
    .loading { position: absolute; top: 8px; right: 16px; opacity: .7; font-size: 14px; }
  
  @media (min-width: 1000px) {
    .app { display: grid; grid-template-columns: 300px 1fr; height: 100dvh; }
    .sidebar { order: 1; border-right: 1px solid #eee; padding: 12px; overflow: auto; }
    .detail { order: 2; position: relative; padding: 20px; overflow: auto; }
  }
  </style>
  