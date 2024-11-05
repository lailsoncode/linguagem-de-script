function gerarTabuada(operacao){
    switch(operacao){
        case 'soma':
            alert("Você Clicou no btn de soma")
            for (i = 0; i < 10; i++) {
                for (j = 0; j < 10; j++) {
                document.getElementById("tabuada-soma").innerHTML += "<br />" + i + " + " + j + " = " + (i + j);
            
                if (j == 9) {
                    document.getElementById("tabuada-soma").innerHTML += "<br />";
                }
                }
            }
            break;
        case 'subtracao':
            alert("Você Clicou no btn de subtracao")

            for (i = 0; i < 10; i++) {
                for (j = 0; j < 10; j++) {
                document.getElementById("tabuada-sub").innerHTML += "<br />" + i + " - " + j + " = " + (i - j);
            
                if (j == 9) {
                    document.getElementById("tabuada-sub").innerHTML += "<br />";
                }
                }
            }
            break;
        case 'multiplicacao':
            alert("Você Clicou no btn de multiplicacao")

            for (i = 0; i < 10; i++) {
                for (j = 0; j < 10; j++) {
                document.getElementById("tabuada-div").innerHTML += "<br />" + i + " / " + j + " = " + (i / j);
            
                if (j == 9) {
                    document.getElementById("tabuada-div").innerHTML += "<br />";
                }
                }
            }
            break;
        case 'divisao':
            alert("Você Clicou no btn de divisao")

            for (i = 0; i < 10; i++) {
                for (j = 0; j < 10; j++) {
                document.getElementById("tabuada-mult").innerHTML += "<br />" + i + " * " + j + " = " + (i * j);
            
                if (j == 9) {
                    document.getElementById("tabuada-mult").innerHTML += "<br />";
                }
                }
            }
            break;
        default:
            alert("Opção Inválida")
    }
}

let numeros = [];
let operacao = null;

function digitarNumeros(n) {
    var display = document.getElementById("display")
    if (n == "C"){
        display.innerHTML = "";
        numeros = [];
    } else if (n == "+"){
        operacao = 'soma';
        numeros.push(display.innerHTML)
        display.innerHTML += "+"
    } else if (n == "-"){
        operacao = 'subtracao';
        numeros.push(display.innerHTML)
        display.innerHTML += "-"
    } else if (n == "="){
        if (operacao == 'soma'){
            numeros.push(display.innerHTML)
            console.log(numeros)
            console.log(operacao)
            display.innerHTML = parseInt(numeros[0]) + parseInt(numeros[1])

        } else if (operacao == 'subtracao'){
            numeros.push(display.innerHTML)
            console.log(numeros)
            console.log(operacao)
            display.innerHTML = parseInt(numeros[0]) - parseInt(numeros[1])
        }
    } else {
        display.innerHTML += n
    }
}