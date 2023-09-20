// const open=document.querySelectorAll(".vc .dict1 .gri .cl")
const cl = document.querySelectorAll(".vc .dict1 .gri .cl .card")
const hide = document.querySelector(".vc .dict1 .gri span .hide")
const hide1 = document.querySelector(".vc .dict1 .gri span .hide1")
const hide2 = document.querySelector(".vc .dict1 .gri span .hide2")
const show = document.querySelector(".vc .dict1 .gri span .show")
const show1 = document.querySelector(".vc .dict1 .gri span .show1")
const show2 = document.querySelector(".vc .dict1 .gri span .show2")
console.log(cl)
function run() {

    cl[0].style.display = "none"
    hide.style.display = "block"
    show.style.display = "none"


}
function ru() {
    cl[0].style.display = "block"
    hide.style.display = "none"
    show.style.display = "block"
}
function run1() {
    cl[1].style.display = "none"
    cl[2].style.display = "none"
    cl[3].style.display = "none"
    hide1.style.display = "block"
    show1.style.display = "none"
}
function ru1() {
    cl[1].style.display = "block"
    cl[2].style.display = "block"
    cl[3].style.display = "block"
    hide1.style.display = "none"
    show1.style.display = "block"
}

function run2() {
    cl[4].style.display = "none"
    cl[5].style.display = "none"
    cl[6].style.display = "none"
    hide2.style.display = "block"
    show2.style.display = "none"
}
function ru2() {
    cl[4].style.display = "block"
    cl[5].style.display = "block"
    cl[6].style.display = "block"
    hide2.style.display = "none"
    show2.style.display = "block"
}

const imp = document.querySelector(".para")
console.log(imp);
function open() {
    imp.style.display = "block"
}

const form = document.querySelector(".form")


const com = document.querySelector(".com")
const data = document.querySelector("#scratchpad").value
console.log(data);
var co = 0
data.innerHTML = co






// window.stop()


