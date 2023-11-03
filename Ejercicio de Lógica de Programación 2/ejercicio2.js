let temperaturacelsius = parseFloat(prompt("Temperatura en grados Celsius"));

if (!isNaN(temperaturacelsius)) {
  
    let temperaturafarenheit = temperaturacelsius * 9 / 5 + 32;
  console.log("La temperatura en grados Fahrenheit es: " + temperaturafarenheit);

  let temperaturagradoskelvin = temperaturacelsius + 273;
  
  console.log("La temperatura en grados Kelvin es: " + temperaturagradoskelvin);
} 
else {
  
    console.log("Por favor, ingrese un número válido");
}

