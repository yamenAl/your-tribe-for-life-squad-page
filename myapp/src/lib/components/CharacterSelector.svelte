<script>
    // 'navigating' is een store die aangeeft of er momenteel naar een andere pagina wordt genavigeerd
    import { page, navigating } from '$app/stores';
    export let characters = [];
</script>
  
<section class="app">
    {#key $page.params.id}
        <nav class="sidebar">
        <h2>Members</h2>

            <!-- filter voor squads -->
            <form>
                <fieldset>
                    <legend>Select a squad</legend>
                    <input id="squad-e" type="radio" name="squad" value="e">
                    <label for="squad-e">squad E</label>
                    <input id="squad-f" type="radio" name="squad" value="f">
                    <label for="squad-f">squad F</label>
                </fieldset>
            </form>

            <!-- Members knoppen -->
            <ul>
                <!-- ik heb een each-loop gemaakt die door alle members uit mijn MemberData gaat -->
                {#each characters as item}
                    <li>
                        <!-- ik heb voor elke member een link gemaakt naar /id -->
                        <!-- ik heb class:selected gebruikt zodat de geselecteerde member visueel wordt aangegeven -->
                        <!-- ik preload de data alvast zodat als er op geklikt word het niet lang hoeft te laden-->
                        <a class="user-btn" href={`/characters/${item.id}`} data-sveltekit-preload-data="hover" data-sveltekit-preload-code="hover" class:selected={String($page.params.id) === String(item.id)}>
                            <!-- met async komt het beeld wat later maar de rest van de pagina kan sneller laden. Met fetch prioroty focus de browser eerst op laden van de belangerijkste dingen -->
                            <img src={item.profilepicture} alt={item.name} width="90" loading="lazy" decoding="async" fetchpriority="low"/>
                        </a>
                    </li>
                {/each}
            </ul>

            <!-- Selecteerd een willekeurig profiel -->
            <button aria-label="Generate a random user">random</button>

        </nav>
    {/key}
  
    <main class="detail" aria-busy={$navigating ? 'true' : 'false'}>
        <!-- dit is de loading state , ik heb een if-statement gemaakt: als er genavigeerd wordt laat ik "Laden..." zien -->
        {#if $navigating}
            <div class="loading">Laden…</div>
        {/if}  
    </main>
</section>

<style>
  /* Positionering sidebar */
nav.sidebar {
  position: fixed; 
  bottom:0;
  left: 0;            
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  overflow-y:auto;              
  box-sizing: border-box;
  padding: 1rem;
  margin: 0;
  background-color: #9E7BEE;
}

/* Top-level media query (niet genest) */
@media (min-width: 700px) {
  nav.sidebar {
    padding: 2rem;
  }
}

/* Algemeen */
h2 { margin: 0; }
form, button { cursor: pointer; }

/* FILTEREN OP SQUAD */
fieldset {
  display: flex;
  flex-direction: row;
  border: none;
}

/* USER MENU */
ul {
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  width: 100%;            
  overflow: auto;
  padding: 0;
  margin: 0;
  -webkit-overflow-scrolling:touch;
}

@media (min-width: 700px) {
  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
    gap: 1rem;
    max-height: none;
    width: 100%;           
  }
}

@media (min-width: 1000px) {
  ul {
    grid-template-columns: repeat(3, minmax(8rem, 1fr)); 
  }
}

li { list-style: none; }

/* Styling user buttons */
.user-btn {
  display: flex;
  justify-content: center;
  align-items: start;
  overflow: hidden;
  width: 4rem;
  height: 4rem;
  background-color: #211C75;
  border: solid black 3px;
  box-shadow: inset 0 -25px 0 0 #351FB7;
  border-radius: 1rem;
}

@media (min-width: 700px) {
  .user-btn {
    width: 8rem;
    height: 8rem;
    border: solid black 6px;
    box-shadow: inset 0 -40px 0 0 #351FB7;
  }
}

img {
  position: relative;
  width: 5.625rem;
}

@media (min-width: 700px) {
  img { width: 11rem; }
}

/* zig-zag offset op mobile, vlak op desktop */
ul li:nth-child(even) .user-btn { margin-top: 1rem; }
@media (min-width: 700px) {
  ul li:nth-child(even) .user-btn { margin-top: 0; }
}

</style>
  