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
                        <a class="user-btn" href={`/${item.id}`} data-sveltekit-preload-data="hover" data-sveltekit-preload-code="hover" class:selected={String($page.params.id) === String(item.id)}>
                            <!-- met async komt het beeld wat later maar de rest van de pagina kan sneller laden. Met fetch prioroty focus de browser eerst op laden van de belangerijkste dingen -->
                            <img src={item.profilepicture} alt={item.name} width="90" loading="lazy" decoding="async" fetchpriority="low"/>
                        </a>
                    </li>
                {/each}
            </ul>

            <!-- Selecteerd een willekeurig profiel -->
            <button aria-label="Generate a random user">random</button>

        </aside>
    {/key}
  
    <main class="detail" aria-busy={$navigating ? 'true' : 'false'}>
        <!-- dit is de loading state , ik heb een if-statement gemaakt: als er genavigeerd wordt laat ik "Laden..." zien -->
        {#if $navigating}
            <div class="loading">Laden…</div>
        {/if}  
    </main>
</section>
  

<style>
    aside {
        margin: 0;
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        padding: 25px;
        box-sizing: border-box;
    }

    /* ALGEMEEN */
    form, button {
        cursor: pointer;
    }

    div {
        display: flex;
        flex-direction: column;
    }

    /* FILTEREN OP SQUAD */
    fieldset {
        display: flex;
        flex-direction: row;
    }

    /* USER MENU */
    ul {
        display: flex;
        flex-direction: row;
        gap: 0.5rem;
        width: 100vw;
        overflow: auto;
    }

    li {
        list-style-type: none;
    }

    .user-btn {
        display: flex;
        justify-content: center;
        align-items: start;
        width: 5rem;
        height: 5rem;
        background-color: #211C75;
        box-shadow: inset 0px -25px 0px 0px #351FB7;
        border: solid 4px;
        border-radius: 1rem;
        overflow: hidden;
        position: block;
    }

    img {
        position: relative;
    }

    /* Target buttons binnen even genummerde <li>-elementen */
    ul li:nth-child(even) .user-btn {
        margin-top: 1rem;
    }

    /* @media (min-width: 1000px) {
        .app { display: grid; grid-template-columns: 300px 1fr; height: 100dvh; }
        .sidebar { order: 1; border-right: 1px solid #eee; padding: 12px; overflow: auto; }
        .detail { order: 2; position: relative; padding: 20px; overflow: auto; } 
    }  */
</style>
  