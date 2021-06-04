const d = document, $btnHambuerguer = d.querySelector(".hamburger"),
$nav = d.querySelector(".cabecera-menu-navegacion");


d.addEventListener("click", e=>{
    //console.log($btnHambuerguer, e.target);
    //console.log(e.target, document)
    if ((e.target === $btnHambuerguer.querySelector("*")) || (e.target === $btnHambuerguer.querySelector("*").querySelector("span")) || (e.target === $btnHambuerguer)) {
        if (!$btnHambuerguer.classList.contains("is-active")) {
            $nav.classList.add("menuActivo");
            $btnHambuerguer.classList.add("is-active");
        }else{
            $btnHambuerguer.classList.remove("is-active");
            $nav.classList.remove("menuActivo");
        }

    }

})