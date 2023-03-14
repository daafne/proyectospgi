

const todo = document.querySelector(".todo");
console.log(todo);
const impar = document.querySelector(".im");
console.log(impar);
const par = document.querySelector(".par");
console.log(par);
// click en el impar
//recupero las cajas y le hago un recorrido a todas
//selecciono una caja datafilter en el html que sea igual
//el else es para q se vea en linea 
impar.addEventListener("click", function(){

    const cajas = document.querySelectorAll("section  div")
   cajas.forEach(caja =>{

    //aquellas cajas que sean pares
    //las escondemos con display:none;

    if(caja.getAttribute("data-filter") == "par"){

            caja.style.display="none";

    }
    else{
        
            caja.style.display="inline-flex";

        }
    
    });
  
   });

   par.addEventListener("click", function(){

    const cajas = document.querySelectorAll("section  div")
    cajas.forEach(caja =>{

    //aquellas cajas que sean pares
    //las escondemos con display:none;

    if(caja.getAttribute("data-filter")== "impar"){

            caja.style.display="none";

    }
    else{
        
            caja.style.display="inline-flex";

        }
    });
  

   });

//le quito el if y el else y solamente le dejo el estilo
   todo.addEventListener("click", function(){

    const cajas = document.querySelectorAll("section  div")
    cajas.forEach(caja =>{

    //aquellas cajas que sean pares
    //las escondemos con display:none;

            caja.style.display="inline-flex";
    });
  

   });




