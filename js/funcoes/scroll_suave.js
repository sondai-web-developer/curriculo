export default function scrollSuave() {
    const linksInternos = document.querySelectorAll('#menuNav a'),
    eventos = ['touchstart', 'click'];

    function scrollToSection(event) {
        event.preventDefault();

        const href = event.currentTarget.getAttribute('href'),
        section = document.querySelector(href),
        topo = section.offsetTop-54;

        window.scrollTo({
            top: topo,
            behavior: 'smooth',
        });
    }

    function addLinksEvents() {
        eventos.forEach(evento => {
            linksInternos.forEach((link) => {
                if(link.getAttribute('href').startsWith('#')){
                    link.addEventListener(evento, scrollToSection);
                }
            });
        });
    }

    function init() {
        if (linksInternos.length) {
            addLinksEvents();
        }
    }

    init();

}