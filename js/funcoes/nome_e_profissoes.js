import debounce from './debounce.js';

export default function nomeEProfissoes() {
    let nomeLeoSelecao = document.getElementById('nomeLeo'),
        nomeDevSelecao = document.getElementById('nomeDev'),
        nomeDsgSelecao = document.getElementById('nomeDsg');

    const eventos = ['DOMContentLoaded', 'resize'],
        nomeLeoMesmaLinha = `Leonardo Rodrigues da Silva`,
        nomeLeoQuebrado = `Leonardo Rodrigues<br>da Silva`,
        nomeDevMesmaLinha = `Desenvolvedor Web Front End`,
        nomeDevQuebrado = `Desenvolvedor Web<br>Front End`,
        nomeDsgMesmaLinha = `Web Designer`,
        nomeDsgQuebrado = `Web<br>Designer`;

    function quebrarRecuperarLinhas() {
        let larguraTela = window.innerWidth;

        if (larguraTela < 880) {
            nomeLeoSelecao.innerHTML = nomeLeoQuebrado;
            nomeDevSelecao.innerHTML = nomeDevQuebrado;
            nomeDsgSelecao.innerHTML = nomeDsgQuebrado;
        }
        
        if (larguraTela >= 880) {
            nomeLeoSelecao.innerHTML = nomeLeoMesmaLinha;
            nomeDevSelecao.innerHTML = nomeDevMesmaLinha;
            nomeDsgSelecao.innerHTML = nomeDsgMesmaLinha;
        }
        
        if(larguraTela >= 1000){
            nomeDevSelecao.innerHTML = nomeDevQuebrado;
            nomeDsgSelecao.innerHTML = nomeDsgQuebrado;
        }
    }

    function addWindowEvents() {
        const formatarNome = debounce(quebrarRecuperarLinhas, 200);

        eventos.forEach(evento => {
            window.addEventListener(evento, formatarNome);
        });
    }

    addWindowEvents();

}