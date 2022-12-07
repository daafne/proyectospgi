
//recupero elementos//
const img_der = document.querySelector(".img_derecha");
console.log(img_der);
const img_izq = document.querySelector(".img_izq");
console.log(img_izq);
const derecho = document.querySelector(".derecho");
console.log(derecho);
const izquierdo = document.querySelector(".izquierdo");
console.log(izquierdo);


const boton = document.querySelector(".boton");
console.log(boton);


boton.addEventListener("click",function(){

   const src_der = img_der.getAttribute("src");
   const src_izq = img_izq.getAttribute("src");
   console.log(src_der);
   console.log(src_izq);

   //preguntamos si el atributo src es vacio
   if(src_der == "") {

      //aqui ya sabemos que src es vacio
      //por tanto, hago intercambio de src de una imagen
      //a otra.
      img_der.setAttribute("src",src_izq);
      img_izq.setAttribute("src","");
      //izquierdo.style="background-color: lightgrey;";
      //derecho.style="background-color: #fff;";
      izquierdo.style="background-color: transparent;";
      derecho.style="background-color: skyblue;";


   }
   else{

      img_izq.setAttribute("src",src_der);
      img_der.setAttribute("src","");
      //derecho.style="background-color: lightgrey;";
      //izquierdo.style="background-color: #fff;";
      derecho.style="background-color: transparent;";
      izquierdo.style="background-color: skyblue;";

   }


   
});



