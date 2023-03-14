const todo = document.querySelector(".todo");
console.log(todo);
const creative = document.querySelector(".creative");
console.log(creative);
const art = document.querySelector(".art");
console.log(art);
const design = document.querySelector(".design");
console.log(design);
const branding = document.querySelector(".branding");
console.log(branding);
// click en el impar
//recupero las cajas y le hago un recorrido a todas
//selecciono una caja datafilter en el html que sea igual
//el else es para q se vea en linea 
creative.addEventListener("click", function(){

   const cajas = document.querySelectorAll(".tarjeta")
   cajas.forEach(caja =>{

    //aquellas cajas que sean pares
    //las escondemos con display:none;

    if(caja.getAttribute("data-filter") == "creative"){

            caja.style.display="none";

    }
    else{
        
            caja.style.display="inline-flex";

        }
    
    });
  
   });

art.addEventListener("click", function(){

    const cajas = document.querySelectorAll(".tarjeta")
    cajas.forEach(caja =>{

    //aquellas cajas que sean pares
    //las escondemos con display:none;

    if(caja.getAttribute("data-filter")== "art"){

            caja.style.display="none";

    }
    else{
        
            caja.style.display="inline-flex";

        }
    });
  

   });

design.addEventListener("click", function(){

        const cajas = document.querySelectorAll(".tarjeta")
        cajas.forEach(caja =>{
    
        //aquellas cajas que sean pares
        //las escondemos con display:none;
    
        if(caja.getAttribute("data-filter")== "design"){
    
                caja.style.display="none";
    
        }
        else{
            
                caja.style.display="inline-flex";
    
            }
        });
      
    
       });

branding.addEventListener("click", function(){

        const cajas = document.querySelectorAll(".tarjeta")
       cajas.forEach(caja =>{
    
        //aquellas cajas que sean pares
        //las escondemos con display:none;
    
        if(caja.getAttribute("data-filter") == "branding"){
    
                caja.style.display="none";
    
        }
        else{
            
                caja.style.display="inline-flex";
    
            }
        
        });
      
       });

//le quito el if y el else y solamente le dejo el estilo

todo.addEventListener("click", function(){

    const cajas = document.querySelectorAll(".tarjeta")
    cajas.forEach(caja =>{

    //aquellas cajas que sean pares
    //las escondemos con display:none;

            caja.style.display="inline-flex";
    });
  

   });





   



