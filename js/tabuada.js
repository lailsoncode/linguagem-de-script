// Soma

for (i = 0; i < 10; i++) {
    for (j = 0; j < 10; j++) {
    document.getElementById("tabuada-soma").innerHTML += "<br />" + i + " + " + j + " = " + (i + j);

    if (j == 9) {
        document.getElementById("tabuada-soma").innerHTML += "<br />";
    }
    }
}

// Subtração

for (i = 0; i < 10; i++) {
    for (j = 0; j < 10; j++) {
    document.getElementById("tabuada-sub").innerHTML += "<br />" + i + " - " + j + " = " + (i - j);

    if (j == 9) {
        document.getElementById("tabuada-sub").innerHTML += "<br />";
    }
    }
}

// Divisão

for (i = 0; i < 10; i++) {
    for (j = 0; j < 10; j++) {
    document.getElementById("tabuada-div").innerHTML += "<br />" + i + " / " + j + " = " + (i / j);

    if (j == 9) {
        document.getElementById("tabuada-div").innerHTML += "<br />";
    }
    }
}

// Multiplicação

for (i = 0; i < 10; i++) {
    for (j = 0; j < 10; j++) {
    document.getElementById("tabuada-mult").innerHTML += "<br />" + i + " * " + j + " = " + (i * j);

    if (j == 9) {
        document.getElementById("tabuada-mult").innerHTML += "<br />";
    }
    }
}