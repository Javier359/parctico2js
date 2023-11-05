// Solicitar una nota al usuario
let nota = parseInt(prompt("Por favor, ingresa una nota del 0 al 10:"));
if (nota >= 0 && nota <= 10) {
  switch (true) {
    case (nota >= 0 && nota <= 2):
      alert(`Un ${nota} Muy deficiente`);
      break;
    case (nota >= 3 && nota <= 4):
   alert(`Un ${nota} es insuficiente`);
      break;
    case (nota >= 5 && nota <= 6):
      alert(`Un ${nota} es suficiente`);
      break;
    case (nota === 7):
      alert(`Un ${nota} está bien`);
      break;
    case (nota >= 8 && nota <= 9):
      alert(`Un ${nota} es notable`);
      break;
    case (nota === 10):
      alert(`Un ${nota} es sobresaliente`);
      break;
    default:
      alert("nota fuera de rango");
      break;
  }
} else {
  alert("Por favor, ingresa una nota válida entre 0 y 10.");
}
