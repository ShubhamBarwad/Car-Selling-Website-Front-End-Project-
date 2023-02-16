const header = document.querySelector('.header')
let menu
let navbar
const renderHeader = () => {
    fetch('/header.html').then(Response => {
        Response.text().then((data) => {
            header.innerHTML = (data)
        })
    })
}

renderHeader()


// Expanding Menu items
document.addEventListener('click', (e) => {
    menu = document.querySelector('#menu-btn')
    navbar = document.querySelector('.navbar')
    if (e.target.id == 'menu-btn') {
        console.log('clicked')
        menu.classList.toggle('fa-times')
        navbar.classList.toggle('active')
    } 
    if(e.target.id == 'login' || e.target.id == 'login-btn'){
        document.querySelector('.login-form-container').classList.toggle('active')
    }
    if(e.target.id == 'close-login-form'){
        document.querySelector('.login-form-container').classList.remove('active')
    }
})


window.onload = () => {
    if (window.scrollY > 0) {
        document.querySelector('.header').classList.add('active')
    } else {
        document.querySelector('.header').classList.remove('active')
    }
}

window.onscroll = () => {
    if (window.scrollY > 0) {
        document.querySelector('.header').classList.add('active')
    } else {
        document.querySelector('.header').classList.remove('active')
    }

    menu.classList.remove('fa-times')
    navbar.classList.remove('active')
}
//Expanding Menu items ends