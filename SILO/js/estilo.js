
// const imagenSilo = document.querySelector(".imagen");

// console.log(imagenSilo);

// console.log(imagenSilo.getAttribute("src"));

// imagenSilo.setAttribute("src", "img/logo-Google.png")

const body= document.body;





const checkbox = document.querySelector(".checkbox");
console.log(checkbox); 

checkbox.addEventListener("click", function(){
    document.body.classList.toggle("dark");
})

const icono_burger = document.getElementById("burger");
console.log(burger);

const menu = document.querySelector(".menu");
console.log(menu);

//hago que al click salga el menu, aplicando estas sentancias, 


icono_burger.addEventListener("click", 
      function(){


      // estas lineas se pueden sustituir utilizando el metodo toggle

      menu.classList.toggle("mostrar");

       /*
       if (menu.classList.contains("mostrar") == true){
          menu.classList.remove("mostrar");
       }
       else {
          menu.classList.add("mostrar");
       }
       */

     });


//recupero el elemento html que hace referencia al corazon
//const corazon= document.querySelector(".heart");
//console.log(heart);

//corazon.addEventListener("click",function)(){
//this.

//});
const cajacorazon= document.querySelector(".cajacorazon");
console.log(cajacorazon);
cajacorazon.addEventListener("click", 
      function(){
         cuadro.classList.toggle("mostrar");
         body.classList.toggle("ocultar");

      });



const lupa= document.querySelector(".lupa");
console.log(lupa);
const cuadro = document.querySelector(".cuadro-busqueda");
console.log(cuadro);


lupa.addEventListener("click", 
      function(){
         cuadro.classList.toggle("mostrar");
         body.classList.toggle("ocultar");

      });
     

const btn_cierre = document.querySelector(".btn-cierre");
console.log(btn_cierre);

btn_cierre.addEventListener("click", 
function(){
   cuadro.classList.toggle("mostrar");
   body.classList.toggle("ocultar");
});
