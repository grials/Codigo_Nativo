const $btnContainerGallery = document.querySelectorAll(".containerGallery-item img")
        $portafolioItemActiveClick = document.querySelector(".portafolio-item-activeClick"),
        $activeClickContainerImage = document.querySelector(".activeClick-container-image img");


$btnContainerGallery.forEach(img=>{
    img.addEventListener("mouseenter", e=>{
        const $divActiveContenido = e.target.nextSibling;
        //console.log(e.target, $divActiveContenido)
        $divActiveContenido.classList.add("containerGallery-item-activeScale");
        $divActiveContenido.addEventListener("mouseleave", e =>{
            //console.log(e.target)
            e.target.classList.remove("containerGallery-item-activeScale");
            e.stopPropagation();
        })
        $divActiveContenido.addEventListener("click", e =>{
            $portafolioItemActiveClick.classList.remove("disabledd");
            
            $activeClickContainerImage.setAttribute("src", img.getAttribute("src"));
            $activeClickContainerImage.setAttribute("alt", img.getAttribute("alt"));
        })
    })
})

document.addEventListener("click", e=>{
    if(e.target.matches(".btnCerrar-portafolio-item-activeClick") || 
    e.target.matches(".btnCerrar-portafolio-item-activeClick img")){
        $portafolioItemActiveClick.classList.add("disabledd");
    }
})