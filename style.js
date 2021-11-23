const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener('click', () => {
   hideSection();
   toggleNavbar()
    document.body.classList.toggle("hide-scrolling")
});

function hideSection(){
    document.querySelector("section.active").classList.toggle("fade-out")
}
function toggleNavbar(){
    document.querySelector(".header").classList.toggle("active");
}
