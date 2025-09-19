<script>
  import { HomeIcon, MapIcon, GoBackIcon } from '$lib';
</script>
<main>
  <input id="menu-toggle" type="checkbox" hidden>

  <header class="site-header">
    <label for="menu-toggle" class="open-btn" label="Open menu" aria-label="Open menu">
      <!-- hamburger -->
      <svg width="40" height="32" viewBox="0 0 74 57" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M67.8332 35.625H70.9165V38H67.8332V40.375H27.7498V38H24.6665V35.625H27.7498V33.25H67.8332V35.625Z" fill="#88E2C1"/>
        <path d="M70.9165 4.75V7.125H67.8332V9.5H27.7498V7.125H24.6665V4.75H27.7498V2.375H67.8332V4.75H70.9165Z" fill="#88E2C1"/>
        <path d="M67.8335 19H70.9168V21.375H67.8335V23.75H6.16683V21.375H3.0835V19H6.16683V16.625H67.8335V19Z" fill="#88E2C1"/>
        <path d="M67.8335 49.875H70.9168V52.25H67.8335V54.625H6.16683V52.25H3.0835V49.875H6.16683V47.5H67.8335V49.875Z" fill="#88E2C1"/>
      </svg>
    </label>
  </header>

  <nav class="overlay" aria-modal="true" role="dialog">
    <label for="menu-toggle" class="close-btn" label="Close menu" aria-label="Close menu">
      <!-- close -->
      <svg width="28" height="28" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M26.8749 23.2913H28.6666V25.083H30.4583V26.8747H32.2499V28.6663H34.0416V30.458H35.8333V32.2497H37.6249V34.0413H39.4166V35.833H37.6249V37.6247H35.8333V39.4163H34.0416V37.6247H32.2499V35.833H30.4583V34.0413H28.6666V32.2497H26.8749V30.458H25.0833V28.6663H23.2916V26.8747H19.7083V28.6663H17.9166V30.458H16.1249V32.2497H14.3333V34.0413H12.5416V35.833H10.7499V37.6247H8.95825V39.4163H7.16659V37.6247H5.37492V35.833H3.58325V34.0413H5.37492V32.2497H7.16659V30.458H8.95825V28.6663H10.7499V26.8747H12.5416V25.083H14.3333V23.2913H16.1249V19.708H14.3333V17.9163H12.5416V16.1247H10.7499V14.333H8.95825V12.5413H7.16659V10.7497H5.37492V8.95801H3.58325V7.16634H5.37492V5.37467H7.16659V3.58301H8.95825V5.37467H10.7499V7.16634H12.5416V8.95801H14.3333V10.7497H16.1249V12.5413H17.9166V14.333H19.7083V16.1247H23.2916V14.333H25.0833V12.5413H26.8749V10.7497H28.6666V8.95801H30.4583V7.16634H32.2499V5.37467H34.0416V3.58301H35.8333V5.37467H37.6249V7.16634H39.4166V8.95801H37.6249V10.7497H35.8333V12.5413H34.0416V14.333H32.2499V16.1247H30.4583V17.9163H28.6666V19.708H26.8749V23.2913Z" fill="white"/>
      </svg>
    </label>

    <ul class="cards">
      <li>
        <a href="/" aria-label="Home">
          <HomeIcon class="icon" aria-hidden="true" focusable="false" />
        </a>
      </li>
      <li>
        <a href="/map" aria-label="Map">
          <MapIcon class="icon" aria-hidden="true" focusable="false" />
        </a>
      </li>
      <li>
        <a href="/" aria-label="Go back">
          <GoBackIcon class="icon" aria-hidden="true" focusable="false" />
        </a>
      </li>
    </ul>
  </nav>
</main>

<style>

.site-header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 1rem;
}

.open-btn {
  cursor: pointer;
}

.overlay {
  position: fixed;
  inset: 0;
  background: var(--primary-color);
  display: none;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 6vh 6vw;
  overflow-y: auto;
  z-index: 9999;
}

/* open the overlay when the checkbox is checked */
input[type="checkbox"]:checked ~ .overlay {
  display: flex;
}

.close-btn {
  position: absolute;
  top: 16px;
  right: 18px;
  cursor: pointer;
}

/* Cards list (menu) */
.cards {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 10vh auto 8vh;
  padding: 0;
  a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 44px;
  min-height: 44px;
  line-height: 0;       
  text-decoration: none;
}}


.cards a :global(svg) {
         width: 40vw;
        height: 20vh;
}
.cards li {
  opacity: 0;
  transform: translateX(-120vw) scale(0.8);
}

/* animate in when menu opens */
input[type="checkbox"]:checked ~ .overlay .cards li {
  animation: animation-load-in-vertical 0.9s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

/* delay for animation */
input[type="checkbox"]:checked ~ .overlay .cards li:nth-child(1) { animation-delay:   0ms; }
input[type="checkbox"]:checked ~ .overlay .cards li:nth-child(2) { animation-delay: 150ms; }
input[type="checkbox"]:checked ~ .overlay .cards li:nth-child(3) { animation-delay: 300ms; }

/* keyframes: right load in the screen */

@keyframes animation-load-in-vertical {
  to {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
}
.cards li:hover {
  transform: translateX(0) scale(1.1) !important;
  transition: transform 0.3s ease;
}



/* --- Desktop  --- */
@media (min-width: 900px) {
  .overlay {
    align-items: center;
  }

  .cards {
    display: grid;
    grid-template-columns: repeat(2, minmax(280px, 1fr));
    gap: 32px 40px;
    width: min(820px, 90vw);
    margin: 12vh auto;
  }

  .cards > li:last-child {
    grid-column: 1 / -1;
    justify-self: center;
    width: min(400px, 60vw);
  }

  .cards a :global(svg) {
      width: 20vw;
      height: 30vh;
  }
}
</style>
