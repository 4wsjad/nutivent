// ===========================
// GSAP Registration
// ===========================

gsap.registerPlugin(ScrollTrigger);

// ===========================
// Hero Animation
// ===========================

gsap.from("header", {
    y: -80,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
});

gsap.from(".hero-content .tag", {
    y: 40,
    opacity: 0,
    duration: 0.8,
    delay: 0.3
});

gsap.from(".hero-content h1", {
    y: 80,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    ease: "power4.out"
});

gsap.from(".hero-content p", {
    y: 40,
    opacity: 0,
    duration: 1,
    delay: 0.8
});

gsap.from(".hero-buttons", {
    y: 30,
    opacity: 0,
    duration: 1,
    delay: 1
});

gsap.from(".hero-image img", {
    x: 120,
    opacity: 0,
    duration: 1.4,
    ease: "power4.out"
});

// ===========================
// Floating Machine Effect
// ===========================

gsap.to(".hero-image img", {
    y: -20,
    duration: 2.8,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});

// ===========================
// Section Fade Animation
// ===========================

gsap.utils.toArray("section").forEach(section => {

    gsap.from(section, {

        opacity: 0,
        y: 80,

        duration: 1,

        scrollTrigger: {

            trigger: section,
            start: "top 80%"

        }

    });

});

// ===========================
// Product Cards
// ===========================

gsap.utils.toArray(".product-card").forEach((card, i) => {

    gsap.from(card, {

        y: 80,

        opacity: 0,

        duration: 0.7,

        delay: i * 0.12,

        scrollTrigger: {

            trigger: card,
            start: "top 85%"

        }

    });

});

// ===========================
// Technology Cards
// ===========================

gsap.utils.toArray(".tech-grid div").forEach((card, i) => {

    gsap.from(card, {

        scale: .8,

        opacity: 0,

        duration: .8,

        delay: i * .1,

        scrollTrigger: {

            trigger: card,
            start: "top 85%"

        }

    });

});

// ===========================
// Statistics Counter
// ===========================

document.querySelectorAll(".stats h2").forEach(counter => {

    const finalValue = counter.innerText;

    const number = parseInt(finalValue);

    if (!isNaN(number)) {

        let obj = { value: 0 };

        gsap.to(obj, {

            value: number,

            duration: 2,

            ease: "power2.out",

            scrollTrigger: {

                trigger: counter,

                start: "top 85%"

            },

            onUpdate: () => {

                if (finalValue.includes("%")) {

                    counter.innerText = Math.floor(obj.value) + "%";

                } else if (finalValue.includes("+")) {

                    counter.innerText = Math.floor(obj.value) + "+";

                } else {

                    counter.innerText = Math.floor(obj.value);

                }

            }

        });

    }

});

// ===========================
// Button Hover Animation
// ===========================

document.querySelectorAll("button,.btn,.primary-btn,.secondary-btn").forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        gsap.to(btn, {

            scale: 1.06,
            duration: .25

        });

    });

    btn.addEventListener("mouseleave", () => {

        gsap.to(btn, {

            scale: 1,
            duration: .25

        });

    });

});

// ===========================
// Mouse Parallax
// ===========================

document.addEventListener("mousemove", (e) => {

    const x = (e.clientX / window.innerWidth - 0.5) * 30;
    const y = (e.clientY / window.innerHeight - 0.5) * 30;

    gsap.to(".hero-image img", {

        x,
        y,

        duration: .8,

        ease: "power2.out"

    });

});

// ===========================
// Header Background
// ===========================

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {

        header.style.background = "rgba(5,10,15,.95)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";

    } else {

        header.style.background = "rgba(11,15,20,.75)";
        header.style.boxShadow = "none";

    }

});

// ===========================
// Scroll Progress Bar
// ===========================

const progress = document.createElement("div");

progress.style.position = "fixed";
progress.style.top = "0";
progress.style.left = "0";
progress.style.height = "4px";
progress.style.width = "0%";
progress.style.background = "#22c55e";
progress.style.zIndex = "99999";

document.body.appendChild(progress);

window.addEventListener("scroll", () => {

    const total = document.documentElement.scrollHeight - window.innerHeight;

    const percent = (window.scrollY / total) * 100;

    progress.style.width = percent + "%";

});

// ===========================
// Smooth Anchor Links
// ===========================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({
                behavior:"smooth"
            });

        }

    });

});