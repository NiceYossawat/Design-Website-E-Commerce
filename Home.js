let register = document.querySelector('.register');
let login = document.querySelector('.login');
let slider = document.querySelector('.slider');
let formcon = document.querySelector('.form-con')
let clickRegister = document.querySelector('.clickregister')
let clickLogin = document.querySelector('.clicklogin')


login.addEventListener('click',()=>{
    slider.classList.add('moveslider')
    login.classList.add('active')
    register.classList.remove('active')
    formcon.classList.add('form-move')
})

clickLogin.addEventListener('click',()=>{
    slider.classList.add('moveslider')
    login.classList.add('active')
    register.classList.remove('active')
    formcon.classList.add('form-move')
})

register.addEventListener('click',()=>{
    slider.classList.remove('moveslider')
    register.classList.add('active')
    login.classList.remove('active')
    formcon.classList.remove('form-move')
})

clickRegister.addEventListener('click',()=>{
    slider.classList.remove('moveslider')
    register.classList.add('active')
    login.classList.remove('active')
    formcon.classList.remove('form-move')
})

// Swiper slide CDN
const swiper = new Swiper('.swiper', {
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    loop: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});

