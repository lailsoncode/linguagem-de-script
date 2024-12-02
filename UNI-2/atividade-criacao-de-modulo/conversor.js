// 1.Crie um módulo conversor.js que converta:
// – Metros para quilômetros.
// – Celsius para Fahrenheit.
// 2.Integre esse módulo em uma aplicação Node.js que
// interaja com o usuário via terminal (readline).

function metrosParaKm(metros) {
    return metros / 1000;
  }
  
  function celsiusParaFahrenheit(celsius) {
    return (celsius * 1.8) + 32;
  }
  
  module.exports = {
      metrosParaKm,
      celsiusParaFahrenheit
  };