

//recupero elmento
const imagenG = document.getElementById("icono1");
console.log(imagenG)
const imagen1 = document.getElementById("icono2");
console.log(imagen1)
const imagen2 = document.getElementById("icono3");
console.log(imagen2)
const imagen3 = document.getElementById("icono4");
console.log(imagen3)

//declaro variable, y guardo en cada una de ellas el atributo src de cada uno de los elementos recuperados
const url1 = icono1.getAttribute("src");
const url2 = icono2.getAttribute("src");
const url3 = icono3.getAttribute("src");
const url4 = icono4.getAttribute("src");

//declarar un array de valores booleanos que nos van a servir para saber si una imagen esta selecionada para
//ser mostrada en la img grande. Todas estan puestas en false porque ninguna esta seleccionada por defecto (pequeñas)
let selectedImage = [false, false, false];

//realizancion 3 addeventlistenner a cada una de las imagenes pequeñas.
//este addeventlistener preguntara si el valor correspondiente a la posicion del array
//selectedImage es false (en cuyo caso realizara un cambio de atributos, de la imagen que queremos mostrar por la de la grande, y
//viceversa en caso de que no se cumpla la condicion)
icono2.addEventListener ("click", function(){
    if(!selectedImage[0]) {
        imagenG.setAttribute("src", url2); 
        imagen1.setAttribute("src", url1);
        selectedImage[0] = true;
    } else {
        imagenG.setAttribute("src", url1); 
        imagen1.setAttribute("src", url2);
        selectedImage[0] = false;
    }
})

icono3.addEventListener ("click", function(){
    if(!selectedImage[1]) {
        imagenG.setAttribute("src", url3); 
        imagen2.setAttribute("src", url1);
        selectedImage[1] = true;
    } else {
        imagenG.setAttribute("src", url1); 
        imagen2.setAttribute("src", url3);
        selectedImage[1] = false;
    }
})

icono4.addEventListener ("click", function(){
    if(!selectedImage[2]) {
        imagenG.setAttribute("src", url4); 
        imagen3.setAttribute("src", url1);
        selectedImage[2] = true;
    } else {
        imagenG.setAttribute("src", url1); 
        imagen3.setAttribute("src", url4);
        selectedImage[2] = false;
    }
})