//recupero


//const cajapar = document.querySelectorAll(".par");
//console.log(cajapar);

const cajaimpar = document.querySelectorAll("div");
console.log(cajaimpar);
// const boton= document.querySelectorAll(".boton");
// console.log(boton);
// const lila = document.querySelectorAll(".btn-lila");
//  console.log(lila);
//  const azul = document.querySelectorAll(".btn-azul");
//  console.log(azul);
//  const verde = document.querySelectorAll(".btn-verde");
//  console.log(verde);
//  const amarillo = document.querySelectorAll(".btn-amarillo");
//  console.log(amarillo);
//  const rojo = document.querySelectorAll(".btn-rojo");
//  console.log(rojo);


//Meto un array y un contador?
// si coloco igual q lo del classlist se me quita no entiendo nada xD


/*milista de seciones hacer una recorrido dntro de las secciones*/
//const botones = [lila, azul, verde, rojo, amarillo]
cajaimpar.forEach(impar => {

    const colores = impar.querySelectorAll("input");

    console.log(colores);
    //recupero  recorrido de colores dentro de cada tarjeta
    colores.forEach(color => {
    //cuando hago click en un color, cambiamos la clase de la caja por 
    //el del boton
        color.addEventListener("click",function(){

            console.log(impar.className)
            impar.className = color.className;
            console.log(impar.className)
    //Añadiremos una sombra al color seleccionado  
            color.classList.add("sombra");
    //Hacemos un recorrido de todos los colores para desactivar la sombra
            colores.forEach(colorSombra => {
                // solo se activa una bolita, el resto no 
                if(colorSombra != color){
                    colorSombra.classList.remove("sombra");
 
                }

               


            });
        
        
        });

        
    });
});




