// Hero section background effect
const effect = VANTA.WAVES({
  el: '#personal-info',
  color: 0x193d47,
  waveHeight: 10,
  shininess: 20,
  waveSpeed: 0.3,
  zoom: 0.75,
});

setTimeout(() => {
  effect.resize();
}, 100);

// hamburger menu
const menuBtn = document.querySelector('#hamburger-button');
const hamburgerMenu = document.querySelector('#hamburger-menu');
const navLinks = document.querySelectorAll('.nav-right > .menu-link');

navLinks.forEach((link) => {
  const navLink = document.createElement('a');
  navLink.setAttribute('href', link.href);
  navLink.textContent = link.textContent;

  hamburgerMenu.appendChild(navLink);
});

menuBtn.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('hidden');
});

// set theme
const themeSwitch = document.querySelector('#theme-switch');
const root = document.documentElement;

function setTheme() {
  const newTheme = root.className === 'dark' ? 'light' : 'dark';
  root.className = newTheme;

  if (newTheme === 'dark') {
    console.log('dark')
    themeSwitch.innerHTML = '<i class="fa-solid fa-moon"></i>'

    effect.setOptions({
      color: 0x282a2f
    });
  } else {
    console.log('light')
    themeSwitch.innerHTML = '<i class="fa-solid fa-sun"></i>'

    effect.setOptions({
      color: 0x193d47
    });
  }

};

themeSwitch.addEventListener('click', setTheme)
