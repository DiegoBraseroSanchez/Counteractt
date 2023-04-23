'use strict'

/* El código define una función llamada `Slider` que toma un parámetro `selector`. Dentro de la
función, establece una variable `contador` en 0, selecciona el elemento deslizante utilizando el
parámetro `selector` y establece variables para los botones siguiente y anterior y las imágenes del
control deslizante. */
function Slider( selector ) {
    let contador = 0
    const slider =document.querySelector(selector)
    const sliderNext = slider.querySelector(`.next`)
    const sliderPrev = slider.querySelector(`.prev`)
    const sliderImg = slider.querySelectorAll(`.Slider-img`)



   /* Este bloque de código agrega un detector de eventos al elemento del botón `sliderNext`. Cuando se
   hace clic en el botón, incrementa la variable `contador` en 1 y verifica si ha alcanzado el valor
   máximo de 3. Si lo ha hecho, restablece la variable `contador` a 0. Luego elimina la clase
   `isActive` de todos los elementos `sliderImg` y lo agrega solo al elemento `sliderImg` en el
   índice `contador` actual. También elimina la clase `isActive` de todos los elementos
   `sliderPunto` y la agrega solo al elemento `sliderPunto` en el índice `contador` actual. */

    sliderNext.addEventListener(`click`,()=>{

    contador= contador + 1

    if(contador >=3){
        contador = 0
    }

    sliderImg.forEach((eachImg,i)=>{
        sliderImg[i].classList.remove(`isActive`)
    })
    sliderImg[contador].classList.add(`isActive`)

    sliderPunto.forEach((eachPunto, i)=>{
        sliderPunto[i].classList.remove(`isActive`)
    })
    sliderPunto[contador].classList.add(`isActive`)


})



   /* Este bloque de código define un detector de eventos de clic para el botón `sliderPrev`. Cuando se
   hace clic en el botón, comprueba si la variable `contador` es menor o igual a 0. Si lo es,
   establece `contador` en 3 (el valor máximo). Luego decrementa `contador` en 1 y registra su valor
   en la consola. Luego elimina la clase `isActive` de todos los elementos `sliderImg` y la agrega
   solo al elemento `sliderImg` en el índice `contador` actual. Finalmente, llama a la función
   `Slider` con diferentes argumentos de selector para inicializar los controles deslizantes en
   diferentes elementos. */
   
    sliderPrev.addEventListener(`click`,()=>{

    if(contador <=0){
        contador = 3
    }

    contador = contador -1
    console.log(contador)

    sliderImg.forEach((eachImg,i)=>{
        sliderImg[i].classList.remove(`isActive`)
    })
    sliderImg[contador].classList.add(`isActive`)

    

})

}
Slider(`.slider1`)
Slider(`.slider2`)
Slider(`.slider3`)
Slider(`.slider4`)
Slider(`.slider5`)
Slider(`.slider6`)






