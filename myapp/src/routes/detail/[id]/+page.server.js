import MemberData from '$lib/data/data.json';
import { error } from '@sveltejs/kit';


export async function load({ params, fetch }) {
  //  Get the member from Directus API
  const res = await fetch(
    `https://fdnd.directus.app/items/person/${params.id}?fields=id,name,nickname,avatar,bio,role,squads,website`
  );
  const { data } = await res.json();

  // If no member is found throw a 404 error
  if (!data) throw error(404, `Member not found: ${params.id}`);

  // Try to find the same member in our local JSON
  const local = MemberData.data.find(m => String(m.id) === String(params.id));

 
  return {
    member: {
      //  "...data" means: copy all properties from the Directus object
      ...data,

      // Then add (or overwrite) profilepicture from our local JSON
      profilepicture: local?.profilepicture ?? null
    }
  };
}
