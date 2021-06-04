const $btnRadio= document.querySelectorAll(".radio-btn"),
    $labelRadio = document.querySelectorAll(".manual-btn");
let interval;

function sliderAuto(cont){
    interval = setInterval(()=>{
        if (cont === $labelRadio.length) {
            cont=0;
        }
        $btnRadio[cont].checked=true;
        if(cont === 0){
            $labelRadio[0].classList.add("selected");
            $labelRadio[$labelRadio.length-1].classList.remove("selected")
        }else{
            $labelRadio[cont-1].classList.remove("selected");
            $labelRadio[cont].classList.add("selected");
        }
        cont++;
    },3000);
}


document.addEventListener("DOMContentLoaded", sliderAuto(0));

document.addEventListener("click", (e)=>{

    if(e.target.classList.contains("manual-btn")){
        clearInterval(interval);
        let atributoFor = e.target.getAttribute("for"),
            selected = parseInt(atributoFor.substr(-1));
            let i = 0;
            while(i < $labelRadio.length){
                $labelRadio[i].classList.remove("selected");
                ++i;
            }
            document.querySelector(`.manual-btn[for=radio${selected}]`).classList.add("selected");

        sliderAuto(selected);

    }
})

