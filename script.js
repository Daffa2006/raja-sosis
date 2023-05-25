ScrollReveal().reveal('.title', {
    duration: 500,
    reset: true,
    distance: '320px',
    origin: 'right',
});

ScrollReveal().reveal('.subtitle', {
    duration: 500,
    reset: true,
    distance: '320px',
    origin: 'left',
});

ScrollReveal().reveal('.section-title', {
    duration: 500,
    reset: true,
    distance: '60px',
    origin: 'bottom',
    opacity: 0
});

ScrollReveal().reveal('.section-content', {
    duration: 500,
    reset: true,
    delay: 300,
    distance: '40px',
    origin: 'bottom',
});

ScrollReveal().reveal('.card', {
    duration: 1000,
    reset: true,
    delay: 200,
    origin: 'right',
    rotate: {
        y:100
    }
});


const hamburger = document.querySelector('.hamburger');
const list = document.querySelector('.nav-list')
hamburger.addEventListener('click', function (){
    list.classList.toggle('translate-y-0')
})

const send = document.querySelector('.send');
const message = document.querySelector('.input-message');
send.addEventListener('click', function() {
    send.href = "https://api.whatsapp.com/send?phone=6285852637808&text=" + message.value
})