// navbar responsive
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

let close = document.querySelector(".navbar li a");
menu.onclick = () => {
    menu.classList.toggle("bx-x");
    navbar.classList.toggle("open");
}

navbar.onclick = () => {
    navbar.classList.remove("open");
    menu.classList.remove("bx-x");
}

// navbar position
window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})

// klik di luar navbar untuk menghilangkannya
const hamburger = document.querySelector('#menu-icon');

document.addEventListener('click', function(event) {
    if (!hamburger.contains(event.target) && !toggleButton.contains(event.target)) {
      menu.style.display = 'none';
    }
  });
