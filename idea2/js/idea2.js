const overlay = document.querySelector(".overlay");
const botonclick = document.querySelector("a");

console.log(overlay);
console.log(botonclick);

//Aqui al igual que en la otra opcion me dice que no es una funcion, no entiendo nada xD
botonclick.addEventListener("click", function(){
        overlay.classList.toggle("overlay");
        overlay.classList.toggle("overlay1");
       
         

});
