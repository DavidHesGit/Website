window.addEventListener("scroll", nav)

function nav(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0)
}