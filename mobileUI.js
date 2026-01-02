const humburger = document.getElementById('humburgerBtn')
const navlinks = document.getElementById('navlinks')

humburger.addEventListener('click',() =>{
    humburger.classList.toggle('active')
    navlinks.classList.toggle('open')
})
const teamCard = document.querySelectorAll('.teamCard')
const cardService = document.querySelectorAll('.Card')
function isMobile(){
    return window.innerWidth <= 768;
}
teamCard.forEach(card =>{
    card.addEventListener('click', () =>{
        if (isMobile()) {
            teamCard.forEach(c =>{
            if(c !== card){
                c.classList.remove('active')
            }
        })
        card.classList.toggle('active')
        }
    })
})
cardService.forEach(card =>{
    card.addEventListener('click',()=>{
        if (isMobile()){
            card.classList.toggle('active')
        }
    })
})