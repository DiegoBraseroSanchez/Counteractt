'use strict'

//Cuando hago CLICK en Conciertos-img
    // Lightbox se le AÑADE la clase isActive

    /* Este código selecciona elementos del documento HTML usando sus nombres de clase y asignándolos a
    constantes usando los métodos `document.querySelector` y `document.querySelectorAll`. Luego
    agrega un detector de eventos de clic a cada elemento con el nombre de clase `Conciertos-img`
    usando un bucle `forEach`. Cuando se hace clic en un elemento `Conciertos-img`, recupera la
    fuente de la imagen seleccionada y la asigna al atributo `src` del elemento `Lightbox-img`.
    Luego agrega la clase `isActive` al elemento `Lightbox`, que lo muestra en la pantalla.
    Finalmente, agrega un detector de eventos de clic al elemento `Lightbox-btn`, que elimina la
    clase `isActive` del elemento `Lightbox` cuando se hace clic, ocultándolo de la pantalla. */

    //Cuando hago CLICK en Conciertos-img
    // Lightbox se le AÑADE la clase isActive
    const conciertosImg = document.querySelectorAll(`.Conciertos-img`)
    const lightbox = document.querySelector(`.Lightbox`)
    const lightboxBtn = document.querySelector(`.Lightbox-btn`)
    const lightboxImg = document.querySelector(`.Lightbox-img`)
    
    conciertosImg.forEach((eachImg,i)=>{
        conciertosImg[i].addEventListener(`click`,()=>{

            let source = conciertosImg[i].src
            lightboxImg.src = source
            lightbox.classList.add(`isActive`)
        })
    })
    
    
    
    /* Este código agrega un detector de eventos de clic al elemento `lightboxBtn`. Cuando se hace clic
    en el botón, se elimina la clase `isActive` del elemento `lightbox`, que lo oculta de la
    pantalla. */

    // Cuando hago CLICK en Lightbox-cerrar
        // Lightbox le QUITAMOS la clase isActive
    lightboxBtn.addEventListener(`click`,()=>{
        lightbox.classList.remove(`isActive`)
    })