
gsap.registerPlugin(ScrollTrigger);
function init(){
    gsap.to('.intro', {opacity: 0, scrollTrigger: {
        trigger: ".intro",
        start: "top top",
        end: "center+=20% center",
        scrub: true,
    }})
    gsap.from('.one', {opacity:0, scrollTrigger:{
        trigger: '.one',
        start: "top bottom-=20%",
        end: "top center",
        scrub: true,
    }})
    gsap.from('.two', {opacity:0, scrollTrigger:{
        trigger: '.two',
        start: "top bottom-=20%",
        end: "center center",
        scrub: true,
    }})
    gsap.from('.three-t', {opacity:0, scrollTrigger:{
        trigger: '.three-t',
        start: "top bottom-=20%",
        end: "bottom center+=15%",
        scrub: true,
    }})
    gsap.from('#sun', {duration: 3, y: "50%", opacity: 0, scrollTrigger:{
        trigger: '#sun',
        start: "center center+=40%",
        toggleActions: "play none none reverse"
    }})
    gsap.from('.four', {opacity: 0, scrollTrigger:{
        trigger: '.four',
        start: "top center+=20%",
        end: "bottom center", 
        scrub: true
    }})
}
window.addEventListener('load', function(){
    init();
}
)