const drawerButton = document.getElementById('hamburger')
const navList = document.getElementById('nav-list')
const switchElement = document.querySelector('.switch')


function toggleButton() {
    navList.classList.toggle('show')
}

drawerButton.addEventListener('click', toggleButton)

switchElement.addEventListener('click', () => {
    document.body.classList.toggle('dark')
})