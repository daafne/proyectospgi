const recuperoContador= document.querySelector(".textonumero");
var activado = 0
function Animacion (){
    
    var alturaElemento = recuperoContador.getBoundingClientRect().top;
    var alturaScrollY = window.scrollY;
    var diferencia = alturaScrollY -alturaElemento

    console.log("alturaElemento:" + alturaElemento);
    console.log("alturaScrollY:" + alturaScrollY);
    console.log("diferencia:"+ diferencia);

    // si entramos aqui el objeto se anima
    //diferencia altura scroll+altura elemento pagina

    if(diferencia > 0 && activado == 0){
       recuperoContador.classList.add("animate__animated" , "animate__fadeInUp");
        activado = 1
    }
    if(diferencia < 0 && activado == 1){
        activado= 0
        recuperoContador.classList.remove("animate__animated" , "animate__fadeInUp");
       
    }
    
    

}


window.addEventListener("scroll",Animacion);