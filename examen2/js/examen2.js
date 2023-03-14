const tarjeta = document.querySelector(".tarjeta");
console.log(tarjeta);

const overlay = document.querySelector(".overlay");
console.log(overlay);
const textob = document.querySelector(".textoboton");
console.log(textob);

const icono = document.querySelector(".icono");
console.log(icono);
/*milista de seciones hacer una recorrido dntro de las secciones*/


    tarjeta.addEventListener("mouseover",function(){

        textob.classList.add("animate__animated" ,"animate__fadeInUp");

    });

    tarjeta.addEventListener("mouseout",function(){

        textob.classList.remove("animate__animated" ,"animate__fadeInUp");

});
//contains(caja contenedora) y replace alternativo al add y remove

    tarjeta.addEventListener("click",function(){
if(icono.classList.contains("fa-regular"))
{ //icono.classList.remove("fa-regular");
//icono.classList.add("fa-solid");
icono.classList.replace("fa-regular","fa-solid");
}
    
else{icono.classList.replace("fa-solid","fa-regular");}

});

   




