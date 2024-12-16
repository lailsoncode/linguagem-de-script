const numeros = [100, 5, 15, 20, 80];

function gerarTabela(){
    var num1 = parseInt(prompt("Digite o número 1:"));
    var num2 = parseInt(prompt("Digite o número 2:"));

    document.getElementById("operacaoSoma").innerHTML 
        = num1 + " + " + num2;
    document.getElementById("resultadoSoma").innerHTML
        = num1 + num2;   
        
    document.getElementById("operacaoSubtracao").innerHTML
        = num1 + " - " + num2;
    document.getElementById("resultadoSubtracao").innerHTML
        = num1 - num2;  
        
    document.getElementById("operacaoDivisao").innerHTML
        = num1 + " / " + num2;
    
     if(num2 == 0){
        document.getElementById("resultadoDivisao").innerHTML
            = "Não é possível dividir um número por 0."
     }else{
        document.getElementById("resultadoDivisao").innerHTML
        = num1/num2;
     }   
        
    document.getElementById("operacaoMultiplicacao").innerHTML
        = num1 + " x " + num2;
    
    document.getElementById("resultadoMultiplicacao").innerHTML
        = num1*num2;
}

function apagarDados(){
    document.getElementById("operacaoSoma").innerHTML = "";
    document.getElementById("resultadoSoma").innerHTML = "";
    document.getElementById("operacaoSubtracao").innerHTML = "";
    document.getElementById("resultadoSubtracao").innerHTML = "";
    document.getElementById("operacaoMultiplicacao").innerHTML = "";
    document.getElementById("resultadoMultiplicacao").innerHTML = "";
    document.getElementById("operacaoDivisao").innerHTML = "";
    document.getElementById("resultadoDivisao").innerHTML = "";
}

function maiorNumero(){
    var maior = numeros[0];
    for(i = 0; i < numeros.length; i++){
        console.log("Números: " +numeros[i]);

        if(numeros[i] > maior){
            maior = numeros[i];
        }
    }
    console.log("Maior número: " + maior);
}
