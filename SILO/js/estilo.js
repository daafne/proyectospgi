
// const imagenSilo = document.querySelector(".imagen");

// console.log(imagenSilo);

// console.log(imagenSilo.getAttribute("src"));

// imagenSilo.setAttribute("src", "img/logo-Google.png")



const icono_burger = document.getElementById("burger");
// console.log(icono_burger);

const menu = document.querySelector(".menu");

icono_burger.addEventListener("click", 
      function(){

      // console.log(menu.classList);
       // menu.classList.add("nuevo")
       // menu.classList.remove("menu")
       // console.log(menu.classList);
       //  console.log(menu.classList.contains("nuevo"));

       if (menu.classList.contains("ocultar") == true){
         menu.classList.remove("ocultar")
         menu.classList.add("mostrar")
       }
       else if (menu.classList.contains("mostrar") == true){
           menu.classList.remove("mostrar")
           menu.classList.add("ocultar")
       }

       // div.classList.replace("ocultar", "mostrar");    
       // div.classList.replace("mostrar", "ocultar"); 
     });

     
     

