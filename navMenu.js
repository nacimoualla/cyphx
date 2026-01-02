const humburger = document.getElementById('humburgerBtn')
const navlinks = document.getElementById('navlinks')

humburger.addEventListener('click',() =>{
    humburger.classList.toggle('active')
    navlinks.classList.toggle('open')
})