// ik heb mijn lokale json bestand (mijn fake database) binnengehaald
import MemberData from '$lib/data/data.json';

// ik heb ook de error functie van SvelteKit geïmporteerd zodat ik een 404 kan teruggeven
import { error } from '@sveltejs/kit';

// ik heb een load functie gemaakt die elke keer draait als iemand naar /[id] gaat
export function load({ params }) {
  // ik heb het id uit de url opgehaald (bijv. /5 → id = "5")
  const id = String(params.id);

  // ik heb in mijn MemberDatagezocht naar een member die hetzelfde id heeft
  const member = MemberData.data.find((member) => String(member.id) === id);

  // ik heb geregeld dat als er geen member wordt gevonden, er een 404 error komt
  if (!member) throw error(404, `Deze member bestaat niet: "${id}"`);

  // ik heb ervoor gezorgd dat als er wel een member is, ik die terugstuur naar +page.svelte
  return { member, id };
}
