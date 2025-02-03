export default function anoAtual() {
    let data = new Date(),
    anoHoje = data.getFullYear(),
    anoHojeString = anoHoje.toString(),
    anoAtual = document.getElementById('anoAtual');

    anoAtual.innerHTML = anoHojeString;
}