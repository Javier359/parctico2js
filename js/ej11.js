let nombres = [];
let edades = [];

for (let i = 1; i <= 3; i++) {
  let nombre = prompt("Ingresa un nombre:");
  let edad = parseInt(prompt("Ingresa la edad de " + nombre + ":"));

  if (!isNaN(edad)) {
    nombres.push(nombre);
    edades.push(edad);
  } else {
    alert("La edad ingresada no es un número válido. Inténtalo de nuevo.");
    i--;
  }
}

let indiceMayor = 0;
for (let i = 1; i < edades.length; i++) {
  if (edades[i] > edades[indiceMayor]) {
    indiceMayor = i;
  }
}

alert("La persona de mayor edad es: " + nombres[indiceMayor]);
