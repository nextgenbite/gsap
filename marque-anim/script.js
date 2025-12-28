let tl = gsap.timeline();
tl.from('.logo', { y: -20, opacity: 0, duration: .5, delay: .5 })
tl.from('nav ul li', { y: -20, opacity: 0, duration: .5, stagger: .2 })
tl.from('.page h1', { y: 20, opacity: 0, duration: 1.5, scale: 0.2, ease: "elastic.out(1, 0.3)" })


// Custom Cursor
let body = document.getElementById('body');
let cursor = document.getElementById('coursor');
let image = document.querySelector('.image img');
body.addEventListener('mousemove', function (e) {
    // cursor.style.left = e.pageX + 'px';
    // cursor.style.top = e.pageY + 'px';
    gsap.to(cursor, { x: e.x, y: e.y, duration: 0.3, ease: "power2.out" });
});

image.addEventListener('mouseenter', function () {
    cursor.innerHTML = 'View';
    gsap.to(cursor, { scale: 3, backgroundColor: 'rgba(255,255,255,0.2)', duration: 0.3, ease: "power2.out" });
});
image.addEventListener('mouseleave', function () {
    cursor.innerHTML = '';
    gsap.to(cursor, { scale: 1, backgroundColor: 'white', duration: 0.3, ease: "power2.out" });
});


//sidebar
let menuBtn = document.querySelector('.menu-btn');
let sidebar = document.querySelector('.sidebar');
let sidebarClose = document.querySelector('.sidebar .close-btn');
let sidebarTl = gsap.timeline();
    sidebarTl.to(sidebar, { left: 0, duration: 0.3, ease: "power2.out" });
    sidebarTl.from('.sidebar ul li ', { x: -150, duration: 0.5, stagger: 0.2, opacity: 0 });
sidebarTl.pause();

sidebarClose.addEventListener('click', function () {
    sidebarTl.reverse();
});
menuBtn.addEventListener('click', function () {
    sidebarTl.play();
})


//text transition
// let page2 = document.querySelector('.page2 h2');
// if (page2) {
//     let h2Text = page2.textContent || "";
//     let splittedText = h2Text.split("");
//     let newText = "";
//     splittedText.forEach(function (char) {
//         newText += `<span>${char === " " ? "&nbsp;" : char}</span>`;
//     });
//     page2.innerHTML = newText;

//     tl.to('.page2 h2 span', { y: -40, duration: 1.5, stagger: 0.2 });
// }

function splitTextToSpans(element) {
    let text = element.textContent || "";
    let splittedText = text.split("");
    let newText = "";
    let HalfLength = Math.floor(splittedText.length / 2);

    splittedText.forEach(function (char, index) {
        if (index < HalfLength) {
            newText += `<span class="left">${char === " " ? "&nbsp;" : char}</span>`;
        } else {
            newText += `<span class="right">${char === " " ? "&nbsp;" : char}</span>`;
        }
    });
    element.innerHTML = newText;
}

let page2H2 = document.querySelector('.page2 h2');
splitTextToSpans(page2H2);

gsap.from('.page2 h2 span.left', { y: 20, opacity: 0, duration: 0.3, stagger: 0.1 }, "-=1.5");
gsap.from('.page2 h2 span.right', { y: -20, opacity: 0, duration: 0.3, stagger: -0.1 }, "-=1.5");


let page3H2 = document.querySelector('.page3 .marquee');

// gsap.to('.page3 .marquee', { xPercent: -50, ease: "none", duration: 10, repeat: -1 });

window.addEventListener('wheel', function (e) {
    let delta = e.deltaY;
    if (delta > 0) {
        gsap.to('.page3 .marquee', { xPercent: -50, ease: "none", duration: 5, repeat: -1 });
    } else {
        gsap.to('.page3 .marquee', { xPercent: 0, ease: "none", duration: 5, repeat: -1 });
    }
});


// let lastTouchY = 0;

// function handleMarquee(direction) {
//     if (direction > 0) {
//         // Scrolling Down
//         gsap.to('.page3 .marquee', { xPercent: -50, ease: "none", duration: 5, repeat: -1 });
//     } else {
//         // Scrolling Up
//         gsap.to('.page3 .marquee', { xPercent: 0, ease: "none", duration: 5, repeat: -1 });
//     }
// }

// // 1. DESKTOP: Wheel Event
// window.addEventListener('wheel', function (e) {
//     handleMarquee(e.deltaY);
// });

// // 2. MOBILE: Touch Events
// window.addEventListener('touchstart', function (e) {
//     lastTouchY = e.touches[0].clientY;
// }, { passive: false });

// window.addEventListener('touchmove', function (e) {
//     let currentTouchY = e.touches[0].clientY;
//     let deltaY = lastTouchY - currentTouchY; // Positive if swiping up (scrolling down)
    
//     // Only trigger if the movement is significant (prevents jitter)
//     if (Math.abs(deltaY) > 5) {
//         handleMarquee(deltaY);
//         lastTouchY = currentTouchY;
//     }
// }, { passive: false });