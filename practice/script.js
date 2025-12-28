let tl = gsap.timeline();
tl.from('.logo', {y:-20, opacity:0, duration:.5, delay:.5})
tl.from('nav ul li', {y:-20, opacity: 0, duration:.5, stagger:.2})
tl.from('.page h1', {y:20, opacity:0, duration:1.5, scale:0.2, ease:"elastic.out(1, 0.3)"})
tl.to('.page2', {
    transform:'translateX(-150%)',
    scrollTrigger:{
        trigger:'.page2',
        marker:true,
        scroller:'body',
        start:'top 0%',
        end:'top -100%',
        scrub:true,
        pin:true

    }
})

