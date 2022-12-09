
// const imagenSilo = document.querySelector(".imagen");

// console.log(imagenSilo);

// console.log(imagenSilo.getAttribute("src"));

// imagenSilo.setAttribute("src", "img/logo-Google.png")



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
const corazon= document.querySelector(".heart");
console.log(heart);

//corazon.addEventListener("click",function)(){
//this.

//});
     
     

