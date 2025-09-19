<div class="start-screen preset--purple-night">
   
   <h1> ARE YOU READY?</h1>
<h2>PRESS START TO ENTER LEVEL 2</h2>
<h3>FDND</h3>


    <a href="/characters" class="start-btn">Start</a>
  </div>
  
  <style>
    :root{
      --dark-blue:#211C75;
      --blue:#351FB7;
      --purple:#9E7BEE;
      --mint:#88E2C1;
      --yellow:#FFFB96;
      --rose:#E25F7B;
      --white:#FFFFFF;
      --black:#000000;
    }
  
     /* TITELS */
  h1, h2, h3 {
    font-family: "Silkscreen", monospace;
    text-align: center;
    color: var(--white);
    margin: 0.5rem 0;
    text-shadow: 2px 2px 0 var(--black);
  }

  h1 {
    font-size: clamp(1.5rem, 5vmin, 3rem);
    margin-top: 10vh;
  }

  h2 {
    font-size: clamp(1.2rem, 4vmin, 2.2rem);
  }

  h3 {
    font-size: clamp(1rem, 3vmin, 1.8rem);
    color: var(--mint);
  }
  
    .start-screen {
      position: relative;
      width: 100vw; height: 100vh;
      overflow: hidden;
      isolation: isolate; 
    }
  

    .start-screen::before {
      content: "";
      position: absolute; inset: 0;
      background: url('/start.gif') center/cover no-repeat;
      transform: scale(1.2);
      animation: zoomout 15s ease-out forwards;
      z-index: -2;
      filter: contrast(1.1) saturate(1.2) brightness(1.02);
    }
  
    
    .start-screen::after {
      content: "";
      position: absolute; inset: 0;
      z-index: -1;
      pointer-events: none;
      opacity: 0.85;                
      mix-blend-mode: color;        
      background: linear-gradient(140deg,
        var(--dark-blue) 0%,
        var(--blue) 22%,
        var(--purple) 45%,
        var(--mint) 60%,
        var(--yellow) 78%,
        var(--rose) 100%
      );
    }
  
 
    .start-screen .grade-softlight {
      content: "";
      position: absolute; inset: 0;
      z-index: -1;
      pointer-events: none;
      mix-blend-mode: soft-light;
      opacity: .4;
      background:
        radial-gradient(120% 120% at 80% 20%, rgba(255,255,255,.25), transparent 60%),
        radial-gradient(120% 120% at 20% 80%, rgba(0,0,0,.25), transparent 60%);
    }
  
   
    .preset--purple-night::after {
      background: linear-gradient(150deg,
        var(--dark-blue) 0%,
        var(--blue) 30%,
        var(--purple) 65%,
        var(--mint) 100%
      );
    }
  

    .preset--mint-rose::after {
      background: linear-gradient(135deg,
        var(--mint) 0%,
        var(--yellow) 35%,
        var(--rose) 80%,
        var(--black) 100%
      );
      opacity: 0.8;
    }
  

    .preset--arcade::after {
      background: conic-gradient(from 210deg at 50% 50%,
        var(--rose) 0 20%,
        var(--yellow) 20% 35%,
        var(--mint) 35% 55%,
        var(--blue) 55% 75%,
        var(--purple) 75% 100%
      );
      opacity: 0.9;
    }
  
    /* Zoom-animatie */
    @keyframes zoomout {
      0%   { transform: scale(1.2); }
      100% { transform: scale(1); }
    }
  
    /* Start-knop */
    .start-btn {
  position: absolute;
  left: 50%;
  top: 35%;  
  transform: translateX(-50%);
  font-family: "Silkscreen", monospace;

  font-size: clamp(2rem, 8vmin, 5rem);
  padding: clamp(1rem, 3vmin, 2.5rem) clamp(2rem, 6vmin, 5rem);

  background: var(--dark-blue);
  color: var(--mint);
  border: 6px solid var(--mint);
  border-radius: 16px;
  text-decoration: none;
  cursor: pointer;

  box-shadow: 0 8px 0 var(--black);
  animation: pulse 1.5s infinite ease-in-out;
}


    @keyframes pulse {
      0% { transform: translateX(-50%) scale(1); }
      50%{ transform: translateX(-50%) scale(1.08); }
      100%{transform: translateX(-50%) scale(1); }
    }
    @media (hover:hover) and (pointer:fine){
      .start-btn:hover {
        transform: translateX(-50%) scale(1.12);
        background: var(--mint);
        color: var(--dark-blue);
        border: 6px solid var(--dark-blue);
      }
    }
  

    @media (prefers-reduced-motion: reduce){
      .start-screen::before, .start-btn { animation: none !important; }
    }
  </style>
  