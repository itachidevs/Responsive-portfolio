// A functionality oof toggler
const toggler = document.getElementById('navBar-toggler');
const navList = document.getElementById('nav-list');
toggler.addEventListener('click', (event) => {
    console.log(event)
    navList.classList.toggle('nav-list-show');
    toggler.classList.toggle('navbar-icon');
    toggler.classList.toggle('navbar-collapse')
})
// Functionality of sticky footer
const footer = document.getElementById('footer');
const footerLinks = document.getElementById('footer-links');
console.log(footerLinks)
footer.addEventListener('click', (event) => {
    console.log(event)
    footerLinks.classList.toggle('footer-links-show')
})