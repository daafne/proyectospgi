//textoaparezca
const sections = document.querySelectorAll("article");
console.log(sections);


/*milista de seciones hacer una recorrido dntro de las secciones*/


const iconos = document.querySelectorAll(".icono");
console.log(iconos);


iconos.forEach(icono => {
    icono.addEventListener("click",function(){
        
        console.log(icono);

        icono.classList.toggle("fondoblanco");
    });

        

});
     
