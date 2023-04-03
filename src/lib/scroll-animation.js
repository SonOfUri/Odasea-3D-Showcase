import { gsap } from "gsap";

export const scrollAnimation = (position, target, onUpdate) => {
    const tl = gsap.timeline();

    tl.to(position, {
        scrollTrigger: {
            trigger: '.sound-section',
            start: "top bottom",
            end: "top top",
            scrub: 2,
            immediateRender: false
        },

        onUpdate
    })
    .to(target, {
        x: -5.16,
        y: -1.50,
        z: 1.28,
        scrollTrigger: {
            trigger: '.sound-section',
            start: "top bottom",
            end: "top top",
            scrub: 2,
            immediateRender: false
        },
    })
    .to('.jumbotron-section', {
        opacity: 0,
        scrollTrigger: {
            trigger: '.sound-section',
            start: "top bottom",
            end: "top top",
            scrub: 2,
            immediateRender: false
        },
    })
    .to('.sound-section-content', {
        opacity: 1,
        scrollTrigger: {
            trigger: '.sound-section',
            start: "top bottom",
            end: "top top",
            scrub: 2,
            immediateRender: false
        },
    })

    .to(position, {
        x: -3.16,
        y: -0.50,
        z: -7.28,
        scrollTrigger: {
            trigger: '.display-section',
            start: "top bottom",
            end: "top top",
            scrub: 2,
            immediateRender: false
        },

        onUpdate
    })
    .to(target, {
        x: -0.16,
        y: 0.20,
        z: 1.28,
        scrollTrigger: {
            trigger: '.display-section',
            start: "top bottom",
            end: "top top",
            scrub: 2,
            immediateRender: false
        },
    })
    .to('.display-section', {
        opacity: 1,
        scrollTrigger: {
            trigger: '.display-section',
            start: "top bottom",
            end: "top top",
            scrub: 2,
            immediateRender: false
        },
    })
}