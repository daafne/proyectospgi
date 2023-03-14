
const hamburguesa = document.getElementById("burger");
console.log(hamburguesa);


hamburguesa.addEventListener("click", function(){
    const clasificacion = document.querySelector(".clasificacion");
    console.log(clasificacion);
    
    
    if(clasificacion.style.display === "inline-flex")
    {
        clasificacion.style.display = "none"    
    }
    else 
    {
        clasificacion.style.display = "inline-flex"
    }
});
      









  
