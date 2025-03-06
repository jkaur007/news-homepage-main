const menuButton = document.querySelector('.nav-toggle-btn')
const mobileNav = document.querySelector('.nav__links-mobile')
const pageOverlay = document.querySelector('.page-overlay')
const mobileNavLinks = document.querySelectorAll('.nav__links-mobile .nav__link')

const closeMobileNav = () => {
    mobileNavLinks.forEach(link => link.addEventListener('click', () => {
        mobileNav.classList.remove('active')
        pageOverlay.classList.remove('active')
        menuButton.setAttribute('aria-expanded', 'false')
    }))
}

menuButton.addEventListener('click', () => {
    const isOpened = menuButton.getAttribute('aria-expanded')

    mobileNav.classList.toggle('active')
    pageOverlay.classList.toggle('active')
    if(isOpened === 'true'){
        menuButton.setAttribute('aria-expanded', 'false')
    } else {
        menuButton.setAttribute('aria-expanded', 'true')
    }

    closeMobileNav()
})

pageOverlay.addEventListener('click', () => {
    mobileNav.classList.remove('active')
    pageOverlay.classList.remove('active')
    menuButton.setAttribute('aria-expanded', 'false')
})
