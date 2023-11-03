// Definir la función calcularFactorial
function calcularFactorial(numero) {
    if (numero < 0) {
      return "El factorial no está definido para números negativos.";
    } else if (numero === 0 || numero === 1) {
      return 1;
    } else {
      let factorial = 1;
      for (let i = 2; i <= numero; i++) {
        factorial *= i;
      }
      return factorial;
    }
  }
  

  let numeroIngresado = parseInt(prompt("Ingrese un número para calcular el factorial:"));

  if (!isNaN(numeroIngresado)) {
 
    let resultadoFactorial = calcularFactorial(numeroIngresado);

    console.log(`El factorial de ${numeroIngresado} es: ${resultadoFactorial}`);
  } else {
    console.log("Por favor, ingrese un número válido.");
  }