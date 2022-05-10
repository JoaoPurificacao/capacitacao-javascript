// let inputCores = document.getElementById('cores'); //Peguei o input
// let titulo = document.getElementsByTagName('h1'); //Peguei os H1

// let botao = document.getElementById('botao__mudar')

// function trocandoCores(){
//     titulo[0].style.color = inputCores.value
// }

// // inputCores.addEventListener('input',trocandoCores)
// botao.addEventListener('click', trocandoCores)

let div = document.getElementsByTagName('div');

//div[0].innerHTML +=  '<input type="text">'

let novoInput = document.createElement('input');
novoInput.setAttribute('maxlength', '14')
novoInput.setAttribute('placeholder', 'CPF')
novoInput.setAttribute('id', 'input-novo')
div[0].appendChild(novoInput)

