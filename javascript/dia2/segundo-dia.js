let inputCores = document.getElementById('cores');
let titulo = document.getElementsByTagName('h1');

function trocandoCores(){
    titulo[0].style.color = inputCores.value
}

inputCores.addEventListener('input',trocandoCores)