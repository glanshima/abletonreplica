const slideInNav = document.querySelector('.slidein-nav'),
    stickyNavHeader = document.querySelector('.sticky-nav-header');
const header = document.querySelector(".header");
const plusIcon = document.querySelector('#plus-i')
const menuIcon = document.querySelector('.menu-icon');
const responsiveNav = document.querySelector('.responsive-navigation'),
    navDiv = document.querySelector('.nav-div'),
    mainContainer = document.querySelector('.container'),
    arrowDown = document.querySelector('.fa-caret-down');
menuToggleState = 'close';
responsiveMenuState = 'closed';
const navPos = stickyNavHeader.getBoundingClientRect().top;


/* DOM Click Events Model */

function clickEvents(type, selector, callback) {
    document.addEventListener(type, (e) => {
        if (e.target.matches(selector)) callback(e);
    })
}

window.addEventListener('resize', () => {
    if (window.innerWidth <= 1023) {

        header.classList.remove('open');
        header.classList.add('close')
        header.style.cssText = "height: 4rem";
        plusIcon.setAttribute('name', 'plus')
        arrowDown.classList.add('fa-caret-down');
        arrowDown.classList.remove('fa-caret-up')
    } else if (window.innerWidth >= 1024) {
        responsiveNav.classList.remove('open');
        responsiveNav.classList.add('close');
        header.style.cssText = "height: 4rem"
        responsiveNav.style.cssText = "transform: translateY(-500%)";
        arrowDown.classList.add('fa-caret-up');
        arrowDown.classList.remove('fa-caret-down')
    }
})




clickEvents('click', '.more-plus', (e) => {
    if (header.matches('.close')) {
        header.classList.remove('close');
        header.classList.add('open');
        header.style.cssText = "height: 30rem; transition: .580s ease-in-out;";
        plusIcon.removeAttribute('name', 'plus')
        plusIcon.setAttribute('name', 'minus')
        plusIcon.style.cssText = 'transition: 1s;';
        menuToggleState = 'open';

    } else {
        header.classList.add('close');
        header.classList.remove('open');
        header.style.cssText = "height: 4rem; transition: .580s ease-in-out;";
        plusIcon.removeAttribute('name', 'minus')
        plusIcon.setAttribute('name', 'plus')
        plusIcon.style.cssText = 'transition: 1s;';
        menuToggleState = 'close';


    }

})


document.addEventListener('keydown', (e) => {
    if (e.target == "Escape") {
        header.classList.remove('close');
        header.classList.add('open');
        plusIcon.removeAttribute('name', 'plus')
        plusIcon.setAttribute('name', 'minus')
        menuToggleState = 'open';

    } else {
        header.classList.add('close');
        header.classList.remove('open');
        header.style.height = '4rem';
        plusIcon.removeAttribute('name', 'minus')
        plusIcon.setAttribute('name', 'plus')
        menuToggleState = 'close';
    }
})


menuIcon.addEventListener('click', () => {
    if (responsiveNav.matches('.close')) {
        responsiveNav.classList.remove('close');
        responsiveNav.classList.add('open');
        responsiveNav.style.cssText = 'transform: translateY(4rem)';
        arrowDown.classList.remove('fa-caret-down');
        arrowDown.classList.add('fa-caret-up')
        responsiveMenuState = 'opened';

    } else {
        responsiveNav.classList.remove('open');
        responsiveNav.classList.add('close');
        responsiveNav.style.cssText = 'transform: translateY(-500%)';
        arrowDown.classList.add('fa-caret-down');
        arrowDown.classList.remove('fa-caret-up');
        responsiveMenuState = 'closed';
    }

})
window.addEventListener('resize', () => {
    if (window.innerWidth <= 640) {
        document.querySelector('.main-nav__logo__image').setAttribute('fill', 'white')
    } else {
        document.querySelector('.main-nav__logo__image').removeAttribute('fill', 'white')
    }
})
window.addEventListener('load', () => {
    if (window.innerWidth <= 640) {
        document.querySelector('.main-nav__logo__image').setAttribute('fill', 'white');

    }
})


function setStickyNavbar() {
    const viewportHeight = window.innerHeight;
    const scrollPos = window.scrollY;
    const headSection = document.querySelector('.head-section');
    const stickNavLinks = document.querySelectorAll('.second-nav a');
    if (scrollPos > navPos) {

        stickyNavHeader.classList.add('sticky');
        headSection.classList.add('navbarOffsetMargin')
    } else {

        stickyNavHeader.classList.remove('sticky')
        headSection.classList.remove('navbarOffsetMargin')
    }
    stickNavLinks.forEach(link => {
        const section = document.querySelector(link.hash);
        if (scrollPos + 100 > section.offsetTop && scrollPos + 100 < section.offsetTop + section.offsetHeight) {
            link.classList.add('active')
        } else {
            link.classList.remove('active')
        }


    });
}
window.addEventListener('scroll', e => {
    _.throttle(setStickyNavbar(), 100)

})


document.addEventListener('click', e => {
    links = document.querySelectorAll('a');
    for (link of links) {
        if (e.target === link) {

            responsiveNav.classList.remove('open');
            responsiveNav.classList.add('close');
            responsiveNav.style.cssText = 'transform: translateY(-500%)';
            arrowDown.classList.add('fa-caret-down');
            arrowDown.classList.remove('fa-caret-up');
            responsiveMenuState = 'closed';
        }
    }

})