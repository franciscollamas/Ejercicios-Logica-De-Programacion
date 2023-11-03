

let cantidadTerminos = parseInt(prompt("Ingrese la cantidad de términos de la serie de Fibonacci que desea calcular:"));

function calcularFibonacci(n) {
    let fibonacciArray = [0, 1];
  
    for (let i = 2; i < n; i++) {
      let siguienteTermino = fibonacciArray[i - 1] + fibonacciArray[i - 2];
      fibonacciArray.push(siguienteTermino);
    }
  
    return fibonacciArray;
  }
  
 
  
  

  if (!isNaN(cantidadTerminos) && cantidadTerminos > 0) {
    
    let serieFibonacci = calcularFibonacci(cantidadTerminos);
  
    console.log(`Los primeros ${cantidadTerminos} términos de la serie de Fibonacci son: ${serieFibonacci.join(', ')}`);
  } else {
    console.log("Por favor, ingrese un número válido y mayor que cero.");
  }