const d = document, $btnHamburguesa = d.querySelector(".btn-hamburguesa"),
    $menu = d.querySelector(".menu");

d.addEventListener("click", e =>{
    if((e.target === $btnHamburguesa) || (e.target === d.querySelector(".hamburger-box") ||(e.target === d.querySelector(".hamburger-inner")))){
        if(!$btnHamburguesa.classList.contains("is-active")){
            $btnHamburguesa.classList.add("is-active");
            $menu.classList.add("move");
        }else{
            $btnHamburguesa.classList.remove("is-active");
            $menu.classList.remove("move");
        }
    }
})