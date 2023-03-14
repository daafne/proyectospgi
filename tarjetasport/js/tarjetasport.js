const usuarios = document.querySelector(".users");
console.log(usuarios);
const mascara = document.querySelector(".capamascara");
console.log(mascara);
const boton_izq = document.querySelector(".botonrojo_izq");
console.log(boton_izq);
const boton_der = document.querySelector(".botonrojo_der");
console.log(boton_der);




boton_izq.addEventListener("click",function(){
    
    
    usuarios.classList.add("derecha")
    usuarios.classList.remove("izquierda")
    
    console.log(usuarios);
    
    

});
boton_der.addEventListener("click",function(){
    
    
    usuarios.classList.add("izquierda")
    usuarios.classList.remove("derecha")
    
    console.log(usuarios);
    
    

});
    
    
       



