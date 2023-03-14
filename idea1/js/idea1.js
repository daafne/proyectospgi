
//textoaparezca
const sections = document.querySelectorAll("article");
console.log(sections);


/*milista de seciones hacer una recorrido dntro de las secciones*/
sections.forEach(section => {
//detectamos el hover sobre el section
    section.addEventListener("mouseover",function(){

        const titulo = section.querySelector("h1");
        
        console.log(titulo);

        titulo.classList.add("animate__animated" ,"animate__fadeInUp");

    });

    section.addEventListener("mouseout",function(){

        const titulo = section.querySelector("h1");
        
        console.log(titulo);

        titulo.classList.remove("animate__animated" ,"animate__fadeInUp");

});

});






/*const caja= document.querySelectorid(".caja");
console.log(caja);
const boton = document.querySelector("a");
console.log(boton);


caja.addEventListener("click", 
      function(){
         caja.classList.toggle("mostrar");
         boton.classList.toggle("ocultar");

      });*/

/*const activador = document.querySelector(".caja");
const caja1 = document.querySelector(".caja1");
const caja2 = document.querySelector(".caja2");
const caja3 = document.querySelector(".caja3");

const boton = document.querySelector("a");


console.log(activador);     
console.log(caja1);
console.log(caja2);
console.log(caja3);
console.log(boton);


activador.addEventListener("click",function(){
    caja1.classList.toggle("mostrar");
    boton.classList.toggle("ocultar");

});
activador.addEventListener("click",function(){
    caja2.classList.toggle("mostrar");
    boton.classList.toggle("ocultar");

})*/