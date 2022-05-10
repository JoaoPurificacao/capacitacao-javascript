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

let inputCPF = document.getElementById('input-novo')

inputCPF.addEventListener('input', mascaraCPF)

function mascaraCPF(){
    let numerosCPF = inputCPF.value
    let arrayCPF = []
    if(numerosCPF.length == 11 && numerosCPF.indexOf('.') == -1){
       for(let i = 0; i < 11; i++){
            if(i == 2 || i==5){
                arrayCPF.push(numerosCPF[i])
                arrayCPF.push('.')
            }else if(i == 8){
                arrayCPF.push(numerosCPF[i])
                arrayCPF.push('-')
            }
            else{
                arrayCPF.push(numerosCPF[i])
            }
       }
        inputCPF.value = arrayCPF.join('')
    }else if(numerosCPF.indexOf('.') != -1){
        let x = 0
        while(numerosCPF.indexOf('.') != -1 && x <=3){

            numerosCPF = numerosCPF.replace('.','');
            numerosCPF = numerosCPF.replace('-','')

            inputCPF.value = numerosCPF
            x++
        }
    }
}