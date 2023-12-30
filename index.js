const hambuger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const closeIcon = document.getElementById('close');
const classLink = document.querySelectorAll('.class_link');

classLink.forEach(link =>
    link.addEventListener("click",()=>{
        navMenu.classList.add('hidden');
    })
)

closeIcon.addEventListener("click",()=>{
    navMenu.classList.add('hidden');
})

hambuger.addEventListener("click",()=>{
    navMenu.classList.remove('hidden');
})