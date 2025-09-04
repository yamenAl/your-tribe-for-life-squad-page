<script>
    export let data;
    const { localData } = data // hier word de lokale json data opgehaald en directus data
    const members=data.members
    console.log(members)
</script>
  
<h1>Squads</h1>

<article>
    <!-- filter voor squads -->
    <form>
        <fielset>
            <legend>Select a squad</legend>
            <input type="radio" name="squad" value="e">
            <label for="">squad E</label>
            <input type="radio" name="squad" value="f">
            <label for="">squad F</label>
        </fielset>
    </form>

    <!-- Nayome: Hier kan je werken aan de knoppen -->
    <!-- menu van profielfoto's -->
    <ul>
        {#each localData.data as item}
            <li>
                <button>
                    <img src={item.profilepicture} alt={item.name} width="80"/>
                </button>
            </li>
        {/each}
    </ul>

    <!-- Selecteerd een willekeurig profiel -->
    <button>random</button>
</article>