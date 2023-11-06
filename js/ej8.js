let altura = parseInt(prompt("Ingrese la altura no mayor a 50 porfavor"));
if(altura<=50){
for(let i = 0; i<altura ; i++){
    for(let j = 0; j<i ; j++){
        document.write(j+1);
    }
    document.write("<br>");
}
}else{
    alert("Ingrese un valor valido");
}
