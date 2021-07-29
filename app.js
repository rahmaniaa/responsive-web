const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
const navLogo = document.querrySelector('#navbar__logo')

// Display Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu);

//Show active menu when scrolling
const highlightMenu = () => {
    const elem = document.querrySelector('.highlight');
    const homeMenu = document.querrySelector('#home-page');
    const aboutMenu = document.querrySelector('#about-page');
    const serviceMenu = document.querrySelector('#service-page');
    let scrollPos = window.scrollY
    // console.log(scrollPos);

    // adds 'highlight' class to my menu items
    if(window.innerWidth > 960 && scrollPos < 600) {
        homeMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return;
    }else if (window.innerWidth > 960 && scrollPos < 1400) {
        aboutMenu.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        serviceMenu.classList.remove('highlight');
    }else if (window.innerWidth > 960 && scrollPos < 2345) {
        serviceMenu.classList.add(highlight);
        aboutMenu.classList.remove('highlight');
        return;
    }

    if((elem && window.innerWidth < 960 && scrollPos < 600) || elem) {
        elem.classList.remove('highlight');
    }
}

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

// Close mobile Menu when clicking on menu item
const hideMobilemenu = () => {
    const hideMobilemenu = document.querySelector('.is-active')
    if(window.innerWidth <= 768 && menubars) {
        menu.classList.toggle('is-active');
        manuLinks.classList.remove('active');
    }
}

menuLinks.addEventListener('click', hideMobilemenu);
navLogo.addEventListener('click', hideMobilemenu);