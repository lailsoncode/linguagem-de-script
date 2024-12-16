// tabuada de soma
for(i = 0; i < 10; i++){         
    for(j = 0; j < 10; j++){          
        soma = i + j;
        document.getElementById("tabuada-soma").innerHTML += "<br />" + i + "+" + j + "=" + soma;
        
        if(j == 9){
            document.getElementById("tabuada-soma").innerHTML += "<br /><br />"
        }
    }
}

// tabuada de subtração
for(i = 0; i < 10; i++){         
    for(j = 0; j < 10; j++){          
        subtracao = i - j;
        document.getElementById("tabuada-subtracao").innerHTML += "<br />" + i + "-" + j + "=" + subtracao;
        
        if(j == 9){
            document.getElementById("tabuada-subtracao").innerHTML += "<br /><br />"
        }
    }
}
