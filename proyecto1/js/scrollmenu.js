
const items = document.querySelectorAll(".tituloicono");

const section1 = document.querySelector(".aboutme");
const section2 = document.querySelector(".titulosvisitas");
const section3 = document.querySelector(".services");
const section4 = document.querySelector(".experience");
const section5 = document.querySelector(".recentworks");
const section6 = document.querySelector(".latestposts");
const section7 = document.querySelector(".getintouch");






window.addEventListener("scroll",function(){
    let rect1 = section1.getBoundingClientRect();
    const alturaSection1=rect1.top;
    console.log("seccion1 ->TOP:"+rect1.top)
    
    

    let rect2 = section2.getBoundingClientRect();
    const alturaSection2=rect2.top;
    console.log("seccion2 ->TOP:"+rect2.top)

    let rect3 = section3.getBoundingClientRect();
    const alturaSection3=rect3.top;
    console.log("seccion3 ->TOP:"+rect3.top)

    let rect4 = section4.getBoundingClientRect();
    const alturaSection4=rect4.top;
    console.log("seccion4 ->TOP:"+rect4.top)

    let rect5 = section5.getBoundingClientRect();
    const alturaSection5=rect5.top;
    console.log("seccion5 ->TOP:"+rect5.top)

    let rect6 = section6.getBoundingClientRect();
    const alturaSection6=rect6.top;
    console.log("seccion6 ->TOP:"+rect6.top)
    let rect7 = section7.getBoundingClientRect();
    const alturaSection7=rect7.top;
    console.log("seccion7 ->TOP:"+rect7.top)


    



    const alturaPantalla=window.innerHeight;
    console.log("alturapantalla->:"+window.innerHeight)
    
    if(alturaSection1 < alturaPantalla && alturaSection1 >= 0){
        items[0].style.borderBottom="2px solid white";
        items[1].style.borderBottom="0px";
        items[2].style.borderBottom="0px";
        items[3].style.borderBottom="0px";
        items[4].style.borderBottom="0px";
        items[5].style.borderBottom="0px";
        items[6].style.borderBottom="0px";
       
        
    }
    if(alturaSection2 < alturaPantalla && alturaSection2 >= 0){
        items[0].style.borderBottom="0px";
        items[1].style.borderBottom="2px solid white";
        items[2].style.borderBottom="0px";
        items[3].style.borderBottom="0px";
        items[4].style.borderBottom="0px";
        items[5].style.borderBottom="0px";
        items[6].style.borderBottom="0px";
       

    }
    if(alturaSection3 < alturaPantalla && alturaSection3 >= 0){
        items[0].style.borderBottom="0px";
        items[1].style.borderBottom="0px";
        items[2].style.borderBottom="2px solid white";
        items[3].style.borderBottom="0px";
        items[4].style.borderBottom="0px";
        items[5].style.borderBottom="0px";
        items[6].style.borderBottom="0px";
       

    }
    if(alturaSection4 < alturaPantalla && alturaSection4 >= 0){
        items[0].style.borderBottom="0px";
        items[1].style.borderBottom="0px";
        items[2].style.borderBottom="0px";
        items[3].style.borderBottom="2px solid white";
        items[4].style.borderBottom="0px";
        items[5].style.borderBottom="0px";
        items[6].style.borderBottom="0px";
        

    }
    if(alturaSection5 < alturaPantalla && alturaSection5>= 0){
        items[0].style.borderBottom="0px";
        items[1].style.borderBottom="0px";
        items[2].style.borderBottom="0px";
        items[3].style.borderBottom="0px";
        items[4].style.borderBottom="2px solid white";
        items[5].style.borderBottom="0px";
        items[6].style.borderBottom="0px";
        

    }
    if(alturaSection6 < alturaPantalla && alturaSection6>= 0){
        items[0].style.borderBottom="0px";
        items[1].style.borderBottom="0px";
        items[2].style.borderBottom="0px";
        items[3].style.borderBottom="0px";
        items[4].style.borderBottom="0px";
        items[5].style.borderBottom="2px solid white";
        items[6].style.borderBottom="0px";
       
    }
    if(alturaSection7 < alturaPantalla && alturaSection7>= 0){
        items[0].style.borderBottom="0px";
        items[1].style.borderBottom="0px";
        items[2].style.borderBottom="0px";
        items[3].style.borderBottom="0px";
        items[4].style.borderBottom="0px";
        items[5].style.borderBottom="0px";
        items[6].style.borderBottom="2px solid white";
       
    }
 
        

    
    
    


});

