// sticky navbar
window.onscroll = function() {
  let poz = window.scrollY;
  let menuHeader = document.querySelector('.nav-also');
  let stickyMobile = document.querySelector('#mobileNav');

  console.log(poz);
  if (poz > 65) {
    menuHeader.classList.add('sticky');
    stickyMobile.classList.add('stickyMobile');
  } else {
    menuHeader.classList.remove('sticky');
    stickyMobile.classList.remove('stickyMobile');
  }
}


// mobilmenü lenyitása
function toggleMobileNav() {
  let mobilToggleButton = document.getElementById('mobileNav');

  if (mobilToggleButton.style.display === "none") {
    mobilToggleButton.style.display = "block";
  } else {
    mobilToggleButton.style.display = "none";
  }
}


// nyelv kiválasztás
function toggleLanguage() {
  let languageButton = document.getElementById('languagesDiv');

  if (languageButton.style.display === "none") {
    languageButton.style.display = "block";
  } else {
    languageButton.style.display = "none";
  }
}


// szín megváltoztató rész megnyitása
function changeColor() {
  let colorChangeSection = document.getElementById('colorChanger');

  if (colorChangeSection.style.display === "none") {
    colorChangeSection.style.display = "block";
  } else {
    colorChangeSection.style.display = "none";
  }
}


// színmegváltoztatás
let colorChangeSection = document.getElementById('colorChanger');
let r = document.querySelector(':root');

function changeToRed() {
  r.style.setProperty('--blue', '#b30000');
  r.style.setProperty('--black', '#cc0000');
  colorChangeSection.style.display = "none";
}

function changeToGreen() {
  r.style.setProperty('--blue', '#00b300');
  r.style.setProperty('--black', '#00cc00');
  colorChangeSection.style.display = "none";
}

function changeToOrange() {
  r.style.setProperty('--blue', '#e69500');
  r.style.setProperty('--black', '#ffa500');
  colorChangeSection.style.display = "none";
}

function changeToOriginal() {
  r.style.setProperty('--blue', '#47648b');
  r.style.setProperty('--black', '#000');
  colorChangeSection.style.display = "none";
}
