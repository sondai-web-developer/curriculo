import debounce from './debounce.js';

export default function destacarItemMenu() {
    const sessoes = document.querySelectorAll('.sessao'),
        eventos = ['DOMContentLoaded', 'scroll', 'resize'];

    function infosSessoes() {
        const infosSessoesArray = [...sessoes].map((sessao) => {
            const sessaoHeight = sessao.offsetHeight,
                sessaoOffsetTop = sessao.offsetTop,
                sessaoId = sessao.getAttribute('id'),
                itemMenu = document.querySelector(`a[href="#${sessaoId}"]`);

            return { sessaoHeight, sessaoOffsetTop, sessaoId, itemMenu }
        });

        return infosSessoesArray;
    }

    function destacarItem() {
        const scrollTop = document.documentElement.scrollTop,
            infosSessoesArray = infosSessoes();

        infosSessoesArray.forEach((infosSessao => {
            if (scrollTop >= infosSessao.sessaoOffsetTop - 55 && scrollTop <= infosSessao.sessaoOffsetTop + infosSessao.sessaoHeight - 55) {
                infosSessao.itemMenu.classList.add('destacarItem');
            } else {
                infosSessao.itemMenu.classList.remove('destacarItem');
            }
        }));
    }

    function addDestacarItemEvents() {
        const debouncedDestacarItem = debounce(destacarItem, 200);

        eventos.forEach((evento) => {
            window.addEventListener(evento, debouncedDestacarItem);
        });

    }

    function init() {
        if (sessoes.length) {
            addDestacarItemEvents();
        }
    }

    init();
}