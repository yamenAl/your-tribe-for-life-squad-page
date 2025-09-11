// ik heb hier geregeld dat mijn data maar één keer geladen wordt voor alle pagina's
// ik heb dit gedaan zodat ik niet in elke aparte pagina dezelfde json opnieuw hoef op te halen
// ik heb dit in +layout.server.js gezet (en niet in +page.server.js)
// omdat de json data hetzelfde blijft voor alle pagina's
// (directus data zou vaker verschillen per pagina, daarom zou dat daar beter passen)

// src/routes/+layout.server.js
import localData from '$lib/data/data.json';

// ik heb de load functie gemaakt die de localData teruggeeft
// zodat elke pagina in mijn project deze data kan gebruiken
export function load() {
  return { localData };
}
