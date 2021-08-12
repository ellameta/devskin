const menu = document.querySelector('#mobile-menu');
const menuLink = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');
const mainImg = document.querySelector('#main');
const allImgs = document.querySelectorAll('.all-imgs img');
const arrow = document.querySelector('.arrow');
const descriptionPart = document.querySelector('.description-product');

// display toggle menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLink.classList.toggle('active');
}

// display full description
const showFullDescription = () => {
    arrow.classList.toggle('full');
    descriptionPart.classList.toggle('fullLength');
}

//event listeners
menu.addEventListener('click', mobileMenu);
allImgs.forEach(img => img.addEventListener('click', changeImg));
arrow.addEventListener('click', showFullDescription);

// function change img
function changeImg (e) {
    mainImg.src = e.target.src;
}

