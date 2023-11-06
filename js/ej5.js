while (true) {
    let numeroDNI = prompt("Ingresa el número del DNI o pulsa Cancelar para salir:");

    if (numeroDNI === null) {
        break; 
    }

    numeroDNI = parseInt(numeroDNI);

    if (!isNaN(numeroDNI) && numeroDNI >= 0 && numeroDNI <= 99999999) {
        let letras = "TRWAGMYFPDXBNJZSQVHLCKE";
        let indice = numeroDNI % 23;
        let letraDNI = letras.charAt(indice);

        alert(`La letra del DNI ${numeroDNI} es: ${letraDNI}`);
    } else {
        alert("Número de DNI no válido. Debe estar entre 0 y 99999999. Por favor, inténtalo de nuevo.");
    }
}