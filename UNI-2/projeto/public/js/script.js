//alert("Hello World");

// for(inicialização; condição; atualização)
for(i = 0;i < 1000; i = i + 2){
    /*if((i % 2) == 0){
        continue;
    }
    */
    console.log(i);

    /*
    if( (i % 2) == 0){
        console.log("Par");
    } else {
        console.log("Impar");
    }*/
}

/*
do {
    var i = prompt("0 - Sair \n 1 - Somar \n 2 - Subtração ");
} while(parseInt(i) != 0);

while(i < 3){
   
    console.log("Valor de I:", i);

    var nota = prompt("Digite sua nota:");
    i++; // i = i + 1; i += 1;
}


// ==    apenas o valor    5 == "5"
// ===   valor e tipo     5 === 5

var notaInt = parseInt(nota);

switch(nota){
    case 0: 
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
        alert("Reprovado");
        break;
    case 7:
    case 8:
    case 9:
    case 10:
        alert("Aprovado!");   
        break;
    default:
        alert("Nota inválida.");     
}


if(notaInt < 40){
    //reprovado
} else if(nota < 70){
    // recuperação
} else if(nota >= 70){
    // aprovado
} else {
    // inválida
}
*/