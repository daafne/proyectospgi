const lineas = document.querySelectorAll(".barramovible");
console.log(lineas);

const cajaconjunto = document.querySelector(".cajaconjunto")
console.log(cajaconjunto);

const alturaPantalla = window.innerHeight;
console.log ("altura pantalla: " + window.innerHeight)

const  sectionLin  =document.querySelector(".barraprincipal");
let al1 = sectionLin.getBoundingClientRect();
console.log("TOP s1: "+al1.top);

tamaños=["22%", "18%", "25%"]

window.addEventListener("scroll",function(){

    const alturaPantalla = window.innerHeight;
    console.log ("altura pantalla: " + window.innerHeight)

    const  sectionLin  = document.querySelector(".barraprincipal");
    let al1 = sectionLin.getBoundingClientRect();
    console.log("TOP s1: "+ al1.top);
    
    var contador = 0

    lineas.forEach(linea => { 
        
        window.addEventListener("scroll",function(){

        
       
    });

        
        if(al1.top <= alturaPantalla){
           
            linea.style.width = tamaños[contador] 
            contador = contador +1  
            cajaconjunto.classList.add("animate__animated" ,"animate__bounce");
        }
       
    })
    




   

}) 





