
const boton = document.querySelector(".ver");
console.log(boton);
const tarjetas = document.querySelectorAll("article");
console.log(tarjetas); 
const icono = document.querySelector(".iconito");
console.log(icono);


    boton.addEventListener("click",function(){
        tarjetas.forEach(tarjeta =>{
            tarjeta.style.display="inline-flex";
        });
        

    });
tarjetas.forEach(tarjeta =>{

    const icono = tarjeta.querySelector(".iconito");
    console.log(icono);

    icono.addEventListener("click",function(){
            
            
            tarjeta.style.display="none";
            
        });

    
    });

            
