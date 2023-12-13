// import './bootstrap';
// import Alpine from "alpinejs";

// window.Alpine = Alpine;
// Alpine.start();

//Navbar Fixed
window.onscroll = function() {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector('#to-top');

  if(window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed');
    toTop.classList.remove('hidden');
    toTop.classList.add('flex');
  }
  else {
    header.classList.remove('navbar-fixed');
    toTop.classList.remove('flex');
    toTop.classList.add('hidden');
  }
}

// Menu
const menu = document.querySelector('#menu');
const navMenu = document.querySelector('#nav-menu');

menu.addEventListener("click", function(){
  menu.classList.toggle('menu-active');
  navMenu.classList.toggle('hidden');
})

//Klik di luar Menu
window.addEventListener('click', function(e) {
  if(e.target != menu && e.target != navMenu) {
    menu.classList.remove('menu-active');
    navMenu.classList.add("hidden");
  }
})

