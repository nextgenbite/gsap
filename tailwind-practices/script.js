document.addEventListener('DOMContentLoaded', () => {
    // Mobile nav toggle
    const navToggle = document.getElementById('nav-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const navOpen = document.getElementById('nav-open');
    const navClose = document.getElementById('nav-close');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            if (navOpen && navClose) {
                navOpen.classList.toggle('hidden');
                navClose.classList.toggle('hidden');
            }
        });
    }

    // GSAP animations
    if (window.gsap) {
        try {
            gsap.registerPlugin(ScrollTrigger);
        } catch (e) {
            // plugin may already be registered
        }

        // Intro reveals
        gsap.from('.hero-title', { y: 40, opacity: 0, duration: 0.9, ease: 'power3.out' });
        gsap.from('.feature', { y: 20, opacity: 0, duration: 0.7, stagger: 0.12, delay: 0.2, ease: 'power3.out' });

        // Reveal gallery items on scroll
        const items = document.querySelectorAll('.gallery-item');
        items.forEach((el) => {
            gsap.from(el, {
                scrollTrigger: {
                    trigger: el,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                },
                y: 30,
                opacity: 0,
                duration: 0.6,
                ease: 'power3.out'
            });
        });

        // Play demo button
        const playAll = document.getElementById('play-all');
        if (playAll) {
            playAll.addEventListener('click', () => {
                gsap.fromTo('.gallery-item', { y: 40, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.12, duration: 0.6, ease: 'power3.out' });
            });
        }

        // Header timeline (run after DOM is ready)
        const tl = gsap.timeline();
        tl.from('.logo', { y: -50, duration: 1.2, opacity: 0 });
        tl.from('.nav-links a', { y: -30, duration: 0.9, opacity: 0, stagger: 0.15 }, '-=0.9');
        tl.from('.hero-title', { x: -200, opacity: 0, duration: 1.2, ease: 'power3.out' }, '-=0.6');
        tl.from('.hero-subtitle', { x: 200, opacity: 0, duration: 1.2, ease: 'power3.out' }, '-=1');

        // Text scroll effect
    tl.to("#text-scroll", {
  "--target": "0%",
  ease: "none",
  scrollTrigger: {
    trigger: "#text-scroll",
    markers: {
      startColor: "yellow",
      endColor: "#42a6e0",
      fontSize: "14px"
    },
    start: "top top",
    end: "+=1000",
    pin: true,
    scrub: 1
  }
});
    }
});