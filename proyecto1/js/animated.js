
/*milista de seciones hacer una recorrido dntro de las secciones*/

const tarjetas = document.querySelectorAll(".tarjeta");
console.log(tarjetas);

 tarjetas.forEach(tarjeta =>{
    const overlay = tarjeta.querySelector(".overlay1");
    console.log(overlay);
    const texto1 = tarjeta.querySelector(".texto1 h1");
    console.log(texto1);
    const croja = tarjeta.querySelector(".croja");
    console.log(croja);

    const icono = tarjeta.querySelector(".imagenestarjeta");
    console.log(icono);

    tarjeta.addEventListener("mouseover",function(){

        texto1.classList.add("animate__animated" ,"animate__fadeInUp");
        croja.classList.add("animate__animated" ,"animate__fadeInDown");
    });

    tarjeta.addEventListener("mouseout",function(){

        texto1.classList.remove("animate__animated" ,"animate__fadeInUp");
        croja.classList.remove("animate__animated" ,"animate__fadeInDown");

});
 });
//contains(caja contenedora) y replace alternativo al add y remove

