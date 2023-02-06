//codigo principal
// nombre listado declaracion
//con el igual asigno valores
//lista asignacion lo de dentro son objetos
const listado = ["Back-End",
                  "Designer",
                  "Developed",
                  "Front-End developer"];

//recuperamos el numero de palabras que tiene guardadas con el lenght
console.log(listado.length)

//recupero el objeto
const obj_texto = document.querySelector(".recutext");
console.log(obj_texto);

//variable numerica que controla el indice de listado
//la inicializazo 1 vez

var posicion = 0



//codigo secundario
//definimos un comportamiento
function cambiaTexto(){
    //accedemos a la propiedad texto del objeto html y le asignamos un valor nuevo
    obj_texto.textContent = listado[posicion]
    //condicion si pasa X si no Y 

    //posicion == listado.length -1, el primer elemento del vector accedemos con 0,
    // el -1 para q lo contabilice correctamente
    if (posicion == listado.length - 1){
        posicion = 0
    }
    else{
        posicion = posicion + 1

    }
    
    setTimeout(cambiaTexto,2000)
    
    
}

//es necesario poner el set time ou para q el programa se ejecute
setTimeout(cambiaTexto, 2000);




