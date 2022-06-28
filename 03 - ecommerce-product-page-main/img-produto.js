const select = document.getElementById("img-selecionada") //imagem que muda
const img_1 = document.querySelector('.img-1') //img 1 das abas
const img_2 = document.querySelector('.img-2') //img 2 das abas
const img_3 = document.querySelector('.img-3') //img 3 das abas
const img_4 = document.querySelector('.img-4') //img 4 das abas

//formatação inicial
img_1.style.opacity = '0.5'
img_1.style.border = '2px solid hsl(26, 100%, 55%)'

img_1.addEventListener('click', () => {
    select.innerHTML = `<img id="select" src="images/image-product-1.jpg" alt="">`
    img_1.style.opacity = '0.5'
    img_1.style.border = '2px solid hsl(26, 100%, 55%)'

    img_2.style.opacity = '1'
    img_2.style.border = '0px solid hsl(26, 100%, 55%)'
    img_3.style.opacity = '1'
    img_3.style.border = '0px solid hsl(26, 100%, 55%)'
    img_4.style.opacity = '1'
    img_4.style.border = '0px solid hsl(26, 100%, 55%)'
})
img_2.addEventListener('click', () => {
    select.innerHTML = `<img id="select" src="images/image-product-2.jpg" alt="">`

    img_2.style.opacity = '0.5'
    img_2.style.border = '2px solid hsl(26, 100%, 55%)'

    img_1.style.opacity = '1'
    img_1.style.border = '0px solid hsl(26, 100%, 55%)'
    img_3.style.opacity = '1'
    img_3.style.border = '0px solid hsl(26, 100%, 55%)'
    img_4.style.opacity = '1'
    img_4.style.border = '0px solid hsl(26, 100%, 55%)'
})
img_3.addEventListener('click', () => {
    select.innerHTML = `<img id="select" src="images/image-product-3.jpg" alt="">`

    img_3.style.opacity = '0.5'
    img_3.style.border = '2px solid hsl(26, 100%, 55%)'

    img_2.style.opacity = '1'
    img_2.style.border = '0px solid hsl(26, 100%, 55%)'
    img_1.style.opacity = '1'
    img_1.style.border = '0px solid hsl(26, 100%, 55%)'
    img_4.style.opacity = '1'
    img_4.style.border = '0px solid hsl(26, 100%, 55%)'
})
img_4.addEventListener('click', () => {
    select.innerHTML = `<img id="select" src="images/image-product-4.jpg" alt="">`

    img_4.style.opacity = '0.5'
    img_4.style.border = '2px solid hsl(26, 100%, 55%)'

    img_2.style.opacity = '1'
    img_2.style.border = '0px solid hsl(26, 100%, 55%)'
    img_3.style.opacity = '1'
    img_3.style.border = '0px solid hsl(26, 100%, 55%)'
    img_1.style.opacity = '1'
    img_1.style.border = '0px solid hsl(26, 100%, 55%)'
})