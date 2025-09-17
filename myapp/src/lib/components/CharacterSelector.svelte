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
        height: 35vh;
        padding: 25px;
        box-sizing: border-box;
        background-color: #9E7BEE;
        padding: 1rem;

        @media (min-width: 700px) {
            bottom: auto;
            width: 50vw;
            height: 100vh;
            top: 0;
            padding: 2rem;
        }
    }

    h2 {
        margin: 0;
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
        border: none;
    }

    /* USER MENU */
    ul {
        display: flex;
        flex-direction: row;
        gap: 0.5rem;
        width: 100vw;
        overflow: auto;
        padding: 0;
        margin: 0;

        @media (min-width: 700px) {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
            grid-gap: 1rem 1rem;
            overflow: auto;
            height: 75vh;
            width: 46vw;
        }
    }

    li {
        list-style-type: none;
    }

    .user-btn {
        display: flex;
        justify-content: center;
        align-items: start;
        width: 4rem;
        height: 4rem;
        background-color: #211C75;
        box-shadow: inset 0px -25px 0px 0px #351FB7;
        border: solid black 3px;
        border-radius: 1rem;
        overflow: hidden;
        position: block;

        @media (min-width: 700px) {
            width: 8rem;
            height: 8rem;
            border: solid black 6px;
            box-shadow: inset 0px -40px 0px 0px #351FB7;
        }
    }

    img {
        position: relative;
        width: 5.625rem;

        @media (min-width: 700px) {
            width: 11rem;
        }
    }

    /* Target buttons binnen even genummerde <li>-elementen */
    ul li:nth-child(even) .user-btn {
        margin-top: 1rem;

        @media (min-width: 700px) {
            margin-top: 0;
        }
    }
</style>
  