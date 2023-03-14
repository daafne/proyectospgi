const lineas = document.querySelectorAll(".progressbar");
console.log(lineas);

const alturaPantalla = window.innerHeight;
console.log ("altura pantalla: " + window.innerHeight)

const  sectionLin  =document.querySelector(".titulobarras");
let al1 = sectionLin.getBoundingClientRect();
console.log("TOP s1: "+al1.top);

tamaños=["80%", "95%", "70%"]

window.addEventListener("scroll",function(){

    const alturaPantalla = window.innerHeight;
    console.log ("altura pantalla: " + window.innerHeight)

    const  sectionLin  = document.querySelector(".titulobarras");
    let al1 = sectionLin.getBoundingClientRect();
    console.log("TOP s1: "+ al1.top);
    
    var contador = 0

    lineas.forEach(linea => {
        
        if(al1.top <= "800"){
           
            linea.style.width = tamaños[contador] 
            contador = contador +1 
        }
        else{
            linea.style.width = "0%" 
        
        }
    })
}) 
