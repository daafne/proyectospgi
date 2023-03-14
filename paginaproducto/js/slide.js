
//DEFINO OBJETOS URL DE LAS IMAGENES DEL SLIDE
const galeria = [
    "imagenes/paletaa.jpg",
    "imagenes/paletab.jpg",
    "imagenes/paletac.jpg",
    "imagenes/paletad.jpg"

]

//RECUPERAR OBJETOS DEL MODAL
const derecho = document.querySelector(".btn-der");
console.log(derecho)

const izquierdo = document.querySelector(".btn-izq"); 
console.log(izquierdo)

const imagenmodal= document.querySelector(".mod");
console.log(imagenmodal)

var clicks = 0


// DEFINIMOS LOS MÉTODOS PARA IR PASANDO DE IMAGEN A IMAGEN
derecho.addEventListener("click", function() {
    if (clicks == 3){ //he llegado al final de mi lista
        clicks = 0
    }
    else{
        clicks = clicks + 1
    }    
   
    const cadena = "url('" + galeria[clicks] + "');" 

    console.log(cadena)
    
    //Alternativa 1
    imagenmodal.style.backgroundImage = cadena; 

    console.log(imagenmodal.style.backgroundImage);

    //Alternativa 2
    imagenmodal.style  = "background-image: " + cadena; 


}); 

izquierdo.addEventListener("click", function() {

    if (clicks == 0){ //he llegado al final de mi lista
        clicks = 3
    }
    else{
        clicks = clicks - 1
    }    
   
    const cadena = "url('" + galeria[clicks] + "');" 

    console.log(cadena)
    
    //Alternativa 1
    imagenmodal.style.backgroundImage = cadena; 

    console.log(imagenmodal.style.backgroundImage);

    //Alternativa 2
    imagenmodal.style  = "background-image: " + cadena; 




}); 

