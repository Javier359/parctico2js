let suma = 0;
while (true) {
  let entrada = prompt("Ingresa un número o pulsa Cancelar para finalizar:");
  if (entrada === null) {
    break;
  }
  let numero = parseFloat(entrada);
  if (!isNaN(numero)) {
    suma += numero;
  } else {
    alert("¡No ingresaste un número válido! Por favor, intenta de nuevo.");
  }
}
if (suma !== 0) {
  alert(`La suma total de los números introducidos es: ${suma}`);
} else {
  alert("No se ingresaron números.");
}
