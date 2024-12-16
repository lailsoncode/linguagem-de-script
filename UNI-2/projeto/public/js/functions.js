function gerarTabuada(operacao){

    // tabuada de soma
    for(i = 0; i < 10; i++){         
        for(j = 0; j < 10; j++){  
            
            switch(operacao){
                case 'soma':
                    soma = i + j;
                    document.getElementById("tabuada-soma").innerHTML += "<br />" + i + "+" + j + "=" + soma;        
                    break;
                case 'subtracao':        
                    subtracao = i - j;
                    document.getElementById("tabuada-subtracao").innerHTML += "<br />" + i + "-" + j + "=" + subtracao;        
                    break;
                case 'multiplicacao':
                    multiplicacao = i * j;
                    //...
                    break;
                case 'divisao':
                    // ....
                    break;
                default:
                    alert("Operação Inválida...");
            }            
        }
    }
}

function digitarValor(valor){
   var display =  document.getElementById("display");

    switch(valor){
        case "c":
            display.value = "";
            break;
        case "*":
        case "/":
            if(display.value.length == 0){
                break;
            }
        default:
           display.value += valor;
    }
}