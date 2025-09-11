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
        <fielset>
            <legend>Select a squad</legend>
            <input type="radio" name="squad" value="e">
            <label for="squad-e">squad E</label>
            <input type="radio" name="squad" value="f">
            <label for="squad-f">squad F</label>
        </fielset>
    </form>

    <!-- Nayome: Hier kan je werken aan de knoppen -->
    <!-- menu van profielfoto's -->
    <ul>
        {#each localData.data as item}
            <li>
                <button class="user-btn">
                    <img src={item.profilepicture} alt={item.name} width="80" />
                </button>
            </li>
        {/each}
    </ul>

    <!-- Selecteerd een willekeurig profiel -->
    <button>random</button>
</div>

<style>

    div {
        display: flex;
        flex-direction: column;
    }

    fieldset {
        display: flex;
        flex-direction: row;
    }

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
    
    button, form {
        cursor: pointer;
    }

    .user-btn {
        background-color: #211C75;
        box-shadow: inset 0px -35px 0px 0px #351FB7;
        border: solid 4px;
        border-radius: 1rem;
    }

</style>