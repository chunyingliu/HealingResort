//Sets variable
const openMenuButtons = document.querySelectorAll('[data-menu-target]')
const closeMenuButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

//Hooks the button function
openMenuButtons.forEach(button => {
    button.addEventListener('click', () => {
        const menu = document.querySelector(button.dataset.menuTarget)
        openMenu(menu)
    })
})

closeMenuButtons.forEach(button => {
    button.addEventListener('click', () => {
        const menu = button.closest('.menu')
        closeMenu(menu)
    })
})


//Define the functions of openmenu and close menu
function openMenu(menu) {
    menu.classList.add('active')
    overlay.classList.add('active')
}

function closeMenu(menu) {
    menu.classList.remove('active')
    overlay.classList.remove('active')
}