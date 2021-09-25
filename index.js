/*show menu*/

const showMenu = (toggleId,navId)=>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    //check if variables are present
    if(toggle && nav){
        toggle.addEventListener('click',()=>{
            nav.classList.toggle('show-menu')
        })
    }
}

showMenu('nav-toggle', 'nav-menu');


/*remove mobile menu*/

const navLink = document.querySelectorAll('nav__link')

    function linkAction(){
        const navMenu = document.getElementById('nav-menu')
        navMenu.classList.remove('show-menu')
    }
    navLink.forEach(n=>n.addEventListener('click', linkAction))



/*scroll link*/

const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll',scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current=>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('nav__menu a[href*='+ sectionId+']').classList.add('active-link')
        }else{
            document.querySelector('nav__menu a[href*=' + sectionId+']').classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)

/*change background of header*/
function scrollHeader(){
    const nav = document.getElementById('header')
    if(this.scrollY>=200) nav.classList.add('scroll-header');
    else nav.classList.remove('scroll-header');

}

window.addEventListener('scroll',scrollHeader)


/*show scroll top*/
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top')
    if(this.scrollY>=560) scrollTop.classList.add('scroll-top');
    else scrollTop.classList.remove('scroll-top');

}

window.addEventListener('scroll',scrollTop)


//Scroll reveal animation
const sr = ScrollReveal({
    origin:'top',
    distance: '30px',
    duration:1000,
    reset:true,
    easing: 'ease-in-out',
    reset:false

});

sr.reveal(`.home__data, .home__img, .about__data, .about__img, .services__content, .menu__content, .contact__data, .contact__button, .footer__content`,{
    interval:200
    
})
aScrollReveal().destroy();

