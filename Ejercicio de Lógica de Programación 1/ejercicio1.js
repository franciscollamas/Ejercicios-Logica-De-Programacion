let num1 = parseFloat(prompt("Escriba un número"));
let num2 = parseFloat(prompt("Escriba un segundo número"));
let num3 = parseFloat(prompt("Escriba un tercer número"));


if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {

let numeroMayor = Math.max(num1, num2, num3);
console.log("El número mayor es = " + numeroMayor);

let numeroMenor = Math.min(num1, num2, num3);
console.log("El número menor es = " + numeroMenor);

let numerosOrdenados = [num1, num2, num3].sort((a, b) => a - b);
let numeroDelCentro = numerosOrdenados[1];

console.log( "El numero de el centro es el " + numeroDelCentro)

} else {
    // Manejar el caso en que los valores ingresados no son números válidos
    console.log("Por favor, ingresa números válidos.");
}
