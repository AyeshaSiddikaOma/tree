let burger = document.querySelector('#burger')
let mark = document.querySelector('#mark')
let ul = document.querySelector('ul')

let menuJs = burger.addEventListener('click',()=>{
ul.style.display = "block"
})

mark.addEventListener('click',()=>{
ul.style.display = "none"
})

