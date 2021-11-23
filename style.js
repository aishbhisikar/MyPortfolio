// const hamburger = document.querySelector(".ham");
// const navsub = document.querySelector(".nav-sub");
// hamburger.addEventListener('click', () => {
//     hamburger.classList.toggle("change")
//     navsub.classList.toggle("nav-change")
// });

function classToggle() {
    const navs = document.querySelectorAll('.Navbar__Items')

    navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
}

document.querySelector('.Navbar__Link-toggle')
    .addEventListener('click', classToggle);