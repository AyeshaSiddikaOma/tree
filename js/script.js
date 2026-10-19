let burger = document.querySelector('#burger')
let mark = document.querySelector('#mark')
let ul = document.querySelector('ul')

let menuJs = burger.addEventListener('click',()=>{
ul.style.display = "block"
})

mark.addEventListener('click',()=>{
ul.style.display = "none"
})
//======================================
//====================================
let left = document.querySelector('#left')
let right = document.querySelector('#right')
let slider = document.querySelector('#slider')
let num = 1;
let pic = document.querySelectorAll('.pic')

function oma (){
slider.style.transform = `translateX(${num*-100}%)`;
num++
}




right.addEventListener('click',()=>{
if(num  < pic.length){
oma()
}
else{
slider.style.transform = `translateX(0px)`;
num=1;
    

}
})



    

// left.addEventListener('click',()=>{
//     console.log("hello world")
// })