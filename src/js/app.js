const burger = document.querySelector('.burger')
const sidebar = document.querySelector('#sidebar')
const links = document.querySelectorAll('#sidebar ul li a')

burger.addEventListener('click',()=>{
    sidebar.classList.toggle('is-active')
    burger.classList.toggle('is-active') /*this will display/close the sidebar when we click on the burger*/
})

links.forEach(link => link.addEventListener('click',()=>{
    links.forEach(link => link.classList.remove('is-active')) /*this is to remove the active (is-active) of home link and shift it to the whatever the link we click on*/
    link.classList.add('is-active')
    sidebar.classList.remove('is-active')
    burger.classList.toggle('is-active')
}))

AOS.init({
    duration: 900
});


document.getElementById('read-more').addEventListener('click', () =>{
    var extracontent = document.getElementById('extra-content')
    var card = document.getElementById('card')
    
    if (extracontent.style.display == 'block') {
        extracontent.style.display = 'none'
        this.textContent = 'Read More'
        card.style.height = 'auto'
    }
    else {
        extracontent.style.display = 'block'
        this.textContent = 'Read less'
        card.style.height = 'auto'
    }

});