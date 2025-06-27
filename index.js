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