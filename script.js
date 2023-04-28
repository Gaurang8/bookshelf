// index Page

const togglebutton = document.getElementById('navbar-toggle')
const navbarlink = document.getElementById('navbar-link')
const lform = document.getElementsByClassName('l-form')
const sform = document.getElementsByClassName('s-form')
const loginform = document.getElementsByClassName('login-form')
const cicon = document.getElementsByClassName('close-icon')
const usericon = document.getElementsByClassName('user-acc')

togglebutton.addEventListener('click', () => {
  navbarlink.classList.toggle('nav-active')
})

function signup() {
  lform[0].style.left = '-100%';
  sform[0].style.left = '0'
}
function login() {
  lform[0].style.left = '0';
  sform[0].style.left = '100%';
}
cicon[0].addEventListener('click', () => {
  loginform[0].classList.toggle('f-inactive')
}
)
usericon[0].addEventListener('click', () => {
  loginform[0].classList.toggle('f-inactive')
})

