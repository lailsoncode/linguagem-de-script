const readline = require('readline');
const conversor = require('./conversor');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function menu() {
    console.log('1. Metros para quilômetros');
    console.log('2. Celsius para Fahrenheit');
    console.log('3. Sair');
    
}

function startApp () {
    menu();
    rl.question('Escolha uma opção: ', function(option) {
        switch (option) {
            case '1':
                rl.question('Digite a quantidade de metros: ', function(metros) {
                    console.log(`${metros} metros é igual a ${conversor.metrosParaKm(metros)} km.`);
                    startApp();
                });
                break;
            case '2':
                rl.question('Digite a temperatura em Celsius: ', function(celsius) {
                    console.log(`${celsius}°C é igual a ${conversor.celsiusParaFahrenheit(celsius)}°F.`);
                    startApp();
                });
                break;
            case '3':
                rl.close();
                break;
            default:
                console.log('Opção inválida.');
                startApp();
        }
    });
}

startApp();