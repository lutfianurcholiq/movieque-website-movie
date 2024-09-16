// Hamburger
const hamburger = document.querySelector('#hamburger')
const navMenu = document.querySelector('#nav-menu')

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active')
    navMenu.classList.toggle('hidden')
})

// Dropdown
const dropdownButton = document.querySelector('#dropdownButton')
const dropdown = document.querySelector('#dropdown')

dropdownButton.addEventListener('click', function () {
    dropdown.classList.toggle('hidden')
})

// Scroll On Top
const buttonScroll = document.querySelector('#scrollOnTop')

const scrollScreen = () => {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) 
    {
        buttonScroll.classList.remove('hidden')
    } else {
        buttonScroll.classList.add('hidden')
    }
}

const toTop = () => {
    window.scrollTo(
        {
            top: 0,
            behavior: "smooth"
        }
    )
}

buttonScroll.addEventListener('click', toTop)

window.addEventListener('scroll', scrollScreen)
