/*Realiza un script que pida cadenas de texto hasta que se pulse “cancelar”. Al
salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un
guión -.
Nota: usar confirm()*/
let cadena = "";
let entrada;
do {
    let resultado = confirm("Introduce una cadena o cancela para salir");
    if(resultado==true){
        entrada = prompt("Ingrese cadena");
        cadena += `${entrada}-`;
    }else if (entrada === null){
        alert("La cadena esta vacia");
        break;
    } else{
        break;
    }
        }while(resultado=true);
        alert(`Las cadenas introducidas son ${cadena}`);
