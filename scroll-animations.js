// options for all the animations
const anim = ScrollReveal({
    reset: true,
    distance: '30px'
});

// <----- home section ----->

anim.reveal('h1', {
    origin: 'left',
    duration: 1500
});

anim.reveal('.portrait', {
    origin: 'right',
    duration: 1500,
    delay: 1000
    // rotate: {x: 90, y: 30, z: 0}
});

anim.reveal('nav li', {
    origin: 'top',
    duration: 1000,
    delay: 500
}, 200);

anim.reveal('.sd', {
    origin: 'left',
    duration: 1500,
    delay: 1000
});

anim.reveal('h2', {
    origin: 'left',
    duration: 1000
});

// <----- about-me section ----->

anim.reveal('.am-description p', {
    duration: 1200
});

anim.reveal('.skills h3, h4', {
    duration: 1200,
    delay: 500
});

anim.reveal('.langages div', {
    origin: 'left',
    delay: 1000,
    duration: 1200
}, 500);

anim.reveal('.softwares div', {
    origin: 'left',
    delay: 1500,
    duration: 1200
}, 500);

// <----- projects section ----->
anim.reveal('.project-description', {
    duration: 1200,
    delay: 500
});
anim.reveal('.projects-swiper', {
    duration: 1200,
    delay: 500,
    origin: 'right'
});

// <----- contact section ----->
anim.reveal('.contact-main h3', {
    duration: 1200,
    delay: 500
});

anim.reveal('.contact-intro', {
    duration: 1000,
    delay: 1000
});

anim.reveal('.card', {
    duration: 1200,
    delay: 1500
}, 500);