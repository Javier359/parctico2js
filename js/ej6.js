let altura = 30;

for (let i = 1; i <= altura; i++) {
    let linea = "";
    for (let j = 1; j <= i; j++) {
        linea += i;
    }
    document.write(linea + "<br>");
}