// Solicitar al usuario que ingrese una cadena de texto
const texto = prompt("Ingresa una cadena de texto:");
const textoEnMinusculas = texto.toLowerCase();
const vocales = "aeiou";
let posicionPrimeraVocal = 0;

for (let i = 0; i <= textoEnMinusculas.length; i++) {
    const caracter = textoEnMinusculas[i];
    if (vocales.includes(caracter)) {
        posicionPrimeraVocal = i;
        break;
    }
}
if (posicionPrimeraVocal !== 0) {
    document.write(`La primera vocal se encuentra en la posición ${posicionPrimeraVocal}.`);
} else {
    document.write("No se encontraron vocales en el texto.");
}
