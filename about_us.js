let  imgContainer = document.querySelector(".image_our_dedicated")
let imgContainerText = document.querySelector(".img_container_text")


imgContainer.addEventListener('mouseover',() => {
    imgContainerText.style.display = "block"
})
imgContainer.addEventListener('mouseout',() => {
    imgContainerText.style.display = "none"
})



let  imgContainer1 = document.querySelector(".image_our_dedicated1")
let imgContainerText1 = document.querySelector(".img_container_text1")


imgContainer1.addEventListener('mouseover',() => {
    imgContainerText1.style.display = "block"
})
imgContainer1.addEventListener('mouseout',() => {
    imgContainerText1.style.display = "none"
})



let  imgContainer2 = document.querySelector(".image_our_dedicated2")
let imgContainerText2 = document.querySelector(".img_container_text2")


imgContainer2.addEventListener('mouseover',() => {
    imgContainerText2.style.display = "block"
})
imgContainer2.addEventListener('mouseout',() => {
    imgContainerText2.style.display = "none"
})






let navLink_second = document.querySelector(".nav_link_second")
let hthhthhfhhfh = document.querySelector(".hthhthhfhhfh")
let icons8Close = document.querySelector(".icons8_close")


hthhthhfhhfh.addEventListener('click', () => {
    hthhthhfhhfh.style.display = "none"
    icons8Close.style.display = "block"
    navLink_second.style.display = "flex"
})

icons8Close.addEventListener('click', () => {
    icons8Close.style.display = "none"
    hthhthhfhhfh.style.display = "block"
    navLink_second.style.display = "none"
})