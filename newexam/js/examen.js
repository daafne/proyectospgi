

const azul = document.querySelector(".azul");
const rojo = document.querySelector(".rojo");
const amarillo = document.querySelector(".amarillo");
console.log(azul); 
console.log(rojo); 
console.log(amarillo); 

//recuperamos boton cierre
const cierreAzul = azul.querySelector(".ocultar");
const cierreRojo = rojo.querySelector(".ocultar");
const cierreAmarillo = amarillo.querySelector(".ocultar");

//recuperamos tarjetas
var tarjetas = document.querySelectorAll("article div");

azul.addEventListener("click", function(){

    

    azul.classList.add("amplia");
    cierreAzul.classList.add("mostrar");
    console.log("azul");
    

});
cierreAzul.addEventListener("click", function(e){
    e.stopImmediatePropagation();

    azul.classList.remove("amplia");
    cierreAzul.classList.remove("mostrar");
    console.log("cierre");

    
    

});

rojo.addEventListener("click", function(){

    

    rojo.classList.add("amplia");
    cierreRojo.classList.add("mostrar");
    console.log("rojo");
    

});
cierreRojo.addEventListener("click", function(e){
    e.stopImmediatePropagation();

    rojo.classList.remove("amplia");
    cierreRojo.classList.remove("mostrar");
    console.log("cierre");

    
    

});

amarillo.addEventListener("click", function(){

    

    amarillo.classList.add("amplia");
    cierreAmarillo.classList.add("mostrar");
    console.log("amarillo");
    

});
cierreAmarillo.addEventListener("click", function(e){
    e.stopImmediatePropagation();

    amarillo.classList.remove("amplia");
    cierreAmarillo.classList.remove("mostrar");
    console.log("cierre");

    
    

});


