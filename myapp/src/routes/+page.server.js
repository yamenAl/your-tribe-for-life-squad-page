
// hier laden we directus data voor alle pagina's
export async function load ({url, params}) {
    const memberResponse = await fetch('https://fdnd.directus.app/items/person?fields=*,squads.squad_id.name,squads.squad_id.cohort,squads.squad_id.tribe.name&filter[squads][squad_id][cohort][_eq]=2526&filter[squads][squad_id][tribe][name][_eq]=FDND%20Jaar%202')

    const memberData = await memberResponse.json();

    // console.log(memberData)
    return { members: memberData.data}
    
}

