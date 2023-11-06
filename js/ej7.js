let altura = parseInt(prompt("Ingrese la altura de la piramide. No mayor a 50"));
if(altura <=50 ){
    for(let i=altura ; i>0; i--){
        for(let j=0; j<i; j++ ){
            document.write(i);
        }
        document.write("<br>");
    }
}else{
    alert("Ingrese un numero valido porfavor");
}
