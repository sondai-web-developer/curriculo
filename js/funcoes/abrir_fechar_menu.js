import clickOutside from "./clickoutside";

export default function abrirFecharMenu() {
  const iconeMenu = document.getElementById('iconeMenu'),
  menuNav = document.getElementById('menuNav'),
  eventos = ['touchstart', 'click'];

  function abrirFechar(event) {
    event.preventDefault();
    this.classList.add('transformarIcone');
    menuNav.classList.add('exibirMenuNav');

    clickOutside(menuNav, ['touchstart', 'click'], () => {
      this.classList.remove('transformarIcone');
      menuNav.classList.remove('exibirMenuNav');
    });
  }

  function addIconeEvents() {
    eventos.forEach((evento) => {
      iconeMenu.addEventListener(evento, abrirFechar);
    });
  }

  function init() {
    if (iconeMenu && menuNav) {
      addIconeEvents();
    }
  }

  init();

}