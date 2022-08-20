const header = document.querySelector(".header");
const plusIcon = document.querySelector('#plus-i')
const menuIcon = document.querySelector('.menu-icon');
const mainNav = document.querySelector('.main-nav'),
    navItems = document.querySelector('.main-nav-items'),
    navDiv = document.querySelector('.nav-div');
menuToggleState = 'close';
responsiveMenuState = 'closed';
const windowWidth = window.innerWidth


/* DOM Click Events Model */

function clickEvents(type, selector, callback) {
    document.addEventListener(type, (e) => {
        if (e.target.matches(selector)) callback(e);
    })
}



clickEvents('click', '.more-plus', (e) => {
    if (header.matches('.close')) {
        header.classList.remove('close');
        header.classList.add('open');

        plusIcon.removeAttribute('name', 'plus')
        plusIcon.setAttribute('name', 'minus')
        menuToggleState = 'open';

    } else {
        header.classList.add('close');
        header.classList.remove('open');

        plusIcon.removeAttribute('name', 'minus')
        plusIcon.setAttribute('name', 'plus')
        menuToggleState = 'close';
    }

})


document.addEventListener('keydown', (e) => {
    if (e.target == "Escape") {
        header.classList.remove('close');
        header.classList.add('open');

        /* header.style.height = '62vh'; */
        plusIcon.removeAttribute('name', 'plus')
        plusIcon.setAttribute('name', 'minus')
        menuToggleState = 'open';
    } else {
        header.classList.add('close');
        header.classList.remove('open');

        header.style.height = '12vh';
        plusIcon.removeAttribute('name', 'minus')
        plusIcon.setAttribute('name', 'plus')
        menuToggleState = 'close';
    }
})

clickEvents('click', '.menu-icon', (e) => {
    if (menuIcon.matches('.close')) {
        /* menuIcon.classList.remove('close');
        menuIcon.classList.add(open);
        responsiveMenuState = 'open'; */
        alert('menu clicked')

    }
})


menuIcon.addEventListener('click', () => {
    if (navDiv.matches('.close')) {

        navDiv.classList.remove('close');
        navDiv.classList.add('open');

        navDiv.style.cssText = 'transform: translateY(10.5vh)';

        responsiveMenuState = 'opened';

    } else {
        navDiv.classList.remove('open');
        navDiv.classList.add('close');

        navDiv.style.cssText = 'transform: translateY(-500%)';

        responsiveMenuState = 'closed';
    }

})