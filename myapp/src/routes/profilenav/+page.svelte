<script>
    export let data;
    const { localData } = data // hier word de lokale json data opgehaald en directus data
    const members=data.members
    console.log(members)
</script>
  
<h1>Squads</h1>

<div>
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

    <!-- Nayome: Hier kan je werken aan de knoppen -->
    <!-- menu van profielfoto's -->
    <ul>
        {#each localData.data as item}
            <li>
                <button class="user-btn">
                    <img src={item.profilepicture} alt={item.name} width="90" />
                </button>
            </li>
        {/each}
    </ul>

    <!-- Selecteerd een willekeurig profiel -->
    <button aria-label="Generate a random user">random</button>
</div>

<style>
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
    }

    /* Target buttons binnen even genummerde <li>-elementen */
    ul li:nth-child(even) .user-btn {
        margin-top: 1rem;
    }
</style>