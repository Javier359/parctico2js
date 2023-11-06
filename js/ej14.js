const texto = prompt("Ingresa una cadena de texto:");
let textoCambiado = "";

for (let i = 0; i < texto.length; i++) {
    textoCambiado += texto[i];
    if (i < texto.length - 1) {
        textoCambiado += "-";
    }
}
document.write(textoCambiado);
