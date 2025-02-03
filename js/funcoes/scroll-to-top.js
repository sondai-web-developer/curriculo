export default function scrollToTop() {
    const nomeLeo = document.getElementById('nomeLeoRodape');
    const eventos = ['touchstart', 'click'];

    function scrollTop(event) {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    function addNomeLeoEvents() {
        eventos.forEach((evento) => {
            nomeLeo.addEventListener(evento, scrollTop);
        });
    }

    function init() {
        if (nomeLeo) {
            addNomeLeoEvents();
        }
    }

    init();

}