// const btn = document.querySelector(".toggle-btn");
// const menu = document.querySelector()

// Lav en variabel, der refererer til ".toggle-btn"
const btn = document.querySelector(".toggle-btn");
// Lav en variabel, der refererer til "nav"
const menu = document.querySelector(".main-menu");

// Lav en function, der hedder toggleMenu()
function toggleMenu() {
  // 1. Toggle en klasse på nav vha. classList.toggle
  // 2. Toggle en klasse, der hedder "shown"
  menu.classList.toggle("shown");

  // 1. Lav en variabel, der hedder menuShown
  // 2. Den skal være lig med, om nav-variablen indeholder klassen "shown" vha. classList.contains("")
  const menuShown = menu.classList.contains("shown");

  // 1. Lav en if/else sætning => if (...) {...} else {...}
  // 2. Spørg om menu i if-sætningen => if (menu)
  if (menuShown) {
    // hvis nav har klassen "shown", sæt da btn.textContent til "Luk"
    console.log(menuShown);
    btn.textContent = "MENU";
  } else {
    // hvis IKKE nav har klassen "shown", sæt da btn.textContent til "Menu"
    console.log(menuShown);
    btn.textContent = "MENU";
  }
  /* Tilføj et klik-event til btn, der sætter toggleMenu-funktionen i gang */
}
btn.addEventListener("click", toggleMenu);
