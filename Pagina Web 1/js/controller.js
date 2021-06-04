const d = document, $btnHambuerguer = d.querySelector(".hamburger"), $nav = d.querySelector(".menu-navegacion"),
    $imagenLigh = d.querySelector(".imagen-light");


d.addEventListener("click", e=>{
    //console.log($btnHambuerguer, e.target);
    //console.log(e.target, document)
    if ((e.target === $btnHambuerguer.querySelector("*")) || (e.target === $btnHambuerguer.querySelector("*").querySelector("span"))) {
        if (!$btnHambuerguer.classList.contains("is-active")) {
            $nav.style.transform="translate(0)"
            $btnHambuerguer.classList.add("is-active");
        }else{
            $btnHambuerguer.classList.remove("is-active");
            $nav.style.transform = "translate(-40vw)";
        }

    }
    if(e.target === $imagenLigh.querySelector(".close")){
        $imagenLigh.classList.add("hidden");
        $imagenLigh.classList.remove("look");
    }
    if (e.target.classList.contains("img-gallery")) {
        $imagenLigh.classList.remove("hidden");
        $imagenLigh.classList.add("look");
        $imagenLigh.querySelector(".add-img").setAttribute("src",e.target.src);
    }
})