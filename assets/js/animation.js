gsap.registerPlugin(ScrollTrigger);

function animateNumbers(target, start, end, duration) {
    let obj = { value: start };
    gsap.to(obj, {
        value: end,
        duration: duration,
        ease: "power1.out",
        onUpdate: function () {
            target.innerText = Math.floor(obj.value);
        }
    });
}

document.querySelectorAll(".about__bottom__item .number span").forEach(el => {
    let endValue = parseInt(el.innerText.replace(/\D/g, ""), 10);
    el.innerText = "0";

    ScrollTrigger.create({
        trigger: el,
        start: "top 95%",
        once: true,
        onEnter: () => animateNumbers(el, 0, endValue, 1)
    });
});

gsap.fromTo(".about__top__img img", 
    { scale: 1.2 },
    { 
        scale: 1,
        duration: 1.5, 
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".about__top",
            start: "top 100%",
            toggleActions: "play none none none"
        }
    }
);

gsap.fromTo(".advantages__item img", 
    { scale: 1.2 },
    { 
        scale: 1,
        duration: 1.5, 
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".advantages__main",
            start: "top 100%",
            toggleActions: "play none none none"
        }
    }
);

gsap.fromTo(".project-page__img img",
    { scale: 1.2 },
    {
        scale: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".project-page",
            start: "top 100%",
            toggleActions: "play none none none"
        }
    }
);

gsap.fromTo(".project-characterization__img img",
    { scale: 1.2 },
    {
        scale: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".project-characterization",
            start: "top 100%",
            toggleActions: "play none none none"
        }
    }
);

gsap.fromTo(
    ".project-gallery__item:first-child img",
    { scale: 1.2 },
    {
        scale: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".project-gallery__item:first-child",
            start: "top 100%",
            toggleActions: "play none none none"
        }
    }
);

gsap.utils.toArray(".services-page__item__img img").forEach(img => {
    gsap.fromTo(img, 
        { scale: 1.2 },
        { 
            scale: 1,
            duration: 1.5, 
            ease: "power2.out",
            scrollTrigger: {
                trigger: img,
                start: "top 100%",
                toggleActions: "play none none none"
            }
        }
    );
});