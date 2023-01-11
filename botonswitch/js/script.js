
const checkbox = document.querySelector(".checkbox");
console.log(checkbox); 

checkbox.addEventListener("click", function(){
    document.body.classList.toggle("dark");
})

