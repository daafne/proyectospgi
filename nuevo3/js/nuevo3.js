//textoaparezca
// recupero la tarjeta
const texto = document.querySelector(".texto");
console.log(texto);


// detecto evento hover
texto.addEventListener("mouseover",function(){

    const titulo = texto.querySelector("h1");
    const numero = texto.querySelector("h2");

    titulo.classList.add("animate__animated" ,"animate__fadeInDown");
    numero.classList.add("animate__animated" ,"animate__backInUp");
});

// detecto evento salida de raton
texto.addEventListener("mouseout",function(){

    const titulo = texto.querySelector("h1");
    const numero = texto.querySelector("h2");


    titulo.classList.remove("animate__animated" ,"animate__fadeInDown");
    numero.classList.remove("animate__animated" ,"animate__backInUp");
});

