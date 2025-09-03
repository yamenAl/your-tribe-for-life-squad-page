// hier word de data geladen voor alle pagina's zodat we dat
// niet steeds opnieuw hoeven te doen in elke pagina
// waarom hier niet in +page.server.js? de json  data blijft bij beide pagina hetzelfe
// dirctus data is vaak verschillend per pagina 

import localData from '$lib/data/data.json';

export const load = async () => {
  return { localData }; // dit geef je mee aan ALLE pagina’s
};
