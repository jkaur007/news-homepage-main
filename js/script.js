
const burgerBtn = document.querySelector('.nav__burger-btn')
const sideNavbar = document.querySelector('.nav__links-mobile')
const overlay = document.querySelector('.overlay')
const navLinks = document.querySelectorAll('.nav__links-mobile .nav__link')


const closeNavbar = () => {
    navLinks.forEach(link => link.addEventListener('click', () => {
        sideNavbar.classList.remove('active')
        overlay.classList.remove('active')
        burgerBtn.setAttribute('aria-expanded', 'false')
    }))
}

burgerBtn.addEventListener('click', () => {
    const isOpened = burgerBtn.getAttribute('aria-expanded')

    sideNavbar.classList.toggle('active')
    overlay.classList.toggle('active')
    if(isOpened === 'true'){
        burgerBtn.setAttribute('aria-expanded', 'false')
    }else {
        burgerBtn.setAttribute('aria-expanded', 'true')
    }

    closeNavbar()
})

overlay.addEventListener('click', () => {
    sideNavbar.classList.remove('active')
    overlay.classList.remove('active')
    burgerBtn.setAttribute('aria-expanded', 'false')
})