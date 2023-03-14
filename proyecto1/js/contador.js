
import { CountUp } from '../countUp/dist/countUp.js';

const activador= document.querySelector(".activacontador");

//cuando se cargue la pagina web del ordenador
//empieza a animarse

window.onload = function () {
    var contador1 = new CountUp('contador1',400);
    var countup2 = new CountUp('contador2',7000);
    var countup3 = new CountUp('contador3',700);
    var countup4 = new CountUp('contador4',100);
    contador1.start(); 
    countup2.start();
    countup3.start();
    countup4.start();
}







