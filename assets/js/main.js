
document.addEventListener("DOMContentLoaded", function () {
    let activeItemIndicator = CSSRulePlugin.getRule(".menu-item p#active::after");
    const toggleBtn = document.querySelector(".burger");
    let isOpen = false;

    gsap.set(".menu-item p", {
        y: 225
    });

    const tl = gsap.timeline({ paused: true });

    tl.to(".overlay", {
        duration: 1.5,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "power4.inOut"
    });

    tl.to(".menu-item p", {
        duration: 1.5,
        y: 0,
        stagger: 0.2,
        ease: "power4.out"
    }, "-=1");

    tl.to(activeItemIndicator, {
        width: "100%",
        duration: 1,
        ease: "power4.out",
        delay: 0.5
    }, "<");

    tl.to(".sub-nav", {
        bottom: "10%",
        opacity: 1,
        duration: 0.5,
        delay: 0.5
    }, "<");

    toggleBtn.addEventListener("click", function () {
        if (isOpen) {
            tl.reverse();
        } else {
            tl.play();
        }

        isOpen = !isOpen;
    });
});



















