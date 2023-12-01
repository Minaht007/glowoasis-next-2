
const navLink = document.querySelector('.navLink')

document.getElementById('.headerNav').onmouseover = function(event) {
    const target = event.target
    if(target.className == navLink) {
        const subMenu = target.getElementsByClassName('.subNavLink')
        closeMenu()
        subMenu[0].style.display = 'block'
    }
}

document.onmouseover= function(event) {
    const target = event.target
    if(target.className != 'navLink' && target.className != 'subNavLink')
    closeMenu()

}

const closeMenu = () => {
    const menu = document.getElementsByClassName('headerNav')
    const subMenu = document.getElementsByClassName('subNavLink')
    for (const i = 0; i < subMenu.length; i++) {
        subMenu[i].style.display="none"
    }
}