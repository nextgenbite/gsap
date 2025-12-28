let tl = gsap.timeline();
tl.from('.logo', {y:-20, opacity:0, duration:.5, delay:.5})
tl.from('nav ul li', {y:-20, opacity: 0, duration:.5, stagger:.2})
tl.from('.page h1', {y:20, opacity:0, duration:1.5, scale:0.2, ease:"elastic.out(1, 0.3)"})


let initialPath = d="M 10 100 Q 500 100 990 100";
let finalPath = d="M 10 100 Q 500 100 990 100";
let string = document.querySelector('.dynamic_svg');

string.addEventListener('mousemove', (dets) => {
let path = `M 10 100 Q ${dets.x}  ${dets.y} 990 100`;

gsap.to('svg path',{
    duration: 0.3,
    attr: {d: path},
    ease: "power2.out"
})

});

string.addEventListener('mouseleave', () => {
    gsap.to('svg path',{
        duration: 0.3,
        attr: {d: finalPath},
        ease: 'elastic.out(1, 0.3)'
    })
});
