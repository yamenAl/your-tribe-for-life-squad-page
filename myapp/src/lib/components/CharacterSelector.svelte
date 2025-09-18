<script>
    // 'navigating' is een store die aangeeft of er momenteel naar een andere pagina wordt genavigeerd
    import { page, navigating } from '$app/stores';

    // Ontvangt een lijst met characters als prop
    export let characters = [];

    // Delay per character in seconden, hierdoor worden de karakters niet tegelijk maar na elkaar ingeladen
    const loadDelay = 0.025;
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
                {#each characters as item, i}

                    <!-- i staat voor alle items individueel, dus in dit geval elke li -->
                    <!-- Ik haal de waarde op bij de const loadDelay die in het script hierboven staat-->
                    <!-- Met s geef ik aan dat het om secondes gaat -->
                    <!-- Ik zet op elke li een animation delay waardoor elke li individueel reageerd -->
                    <li style="animation-delay: {i * loadDelay}s">
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
    nav {
        position: fixed;
        bottom: 0;
        left: 0;
        display: flex;       
        flex-direction: column;
        gap: 1rem;
        height: 35vh;
        width: 100%;
        box-sizing: border-box;
        padding: 1rem;
        margin: 0;
        background-color: #9E7BEE;
        
        /* Tablet & laptop */
        @media (min-width: 700px) {
            top: 0;
            height: 100vh;
            width: 50vw;
            padding: 2rem;
        }
    }

    h2 {
        margin: 0;
    }

    /* Algemeen */
    form, button {
        cursor: pointer;
    }

    /* FILTEREN OP SQUAD */
    fieldset {
        display: flex;
        flex-direction: row;
        border: none;
    }

    /* USER MENU */
    /* Positionering user buttons */
    ul {
        display: flex;
        flex-direction: row;
        gap: 0.5rem;
        width: 100vw;
        overflow: auto;
        padding: 0;
        margin: 0;

        /* Tablet & laptop */
        @media (min-width: 700px) {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
            grid-gap: 1rem 1rem;
            height: 75vh;
            width: 46vw;
            box-sizing: border-box;
            padding: 0.5rem;
        }
    }

    li {
        list-style-type: none;
        transform: translateY(10rem) scale(0.5);
        animation: fadeInUp 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
    }

    @keyframes fadeInUp {
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
}

    li:hover {
        scale: 1.1;
    }

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
        box-shadow: inset 0px -25px 0px 0px #351FB7;
        border-radius: 1rem;

        /* Tablet & laptop */
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

        /* Tablet & laptop */
        @media (min-width: 700px) {
            width: 11rem;
        }
    }

    /* Target buttons binnen even genummerde <li>-elementen */
    ul li:nth-child(even) .user-btn {
        margin-top: 1rem;

        /* Tablet & laptop */
        @media (min-width: 700px) {
            margin-top: 0;
        }
    }
</style>
  