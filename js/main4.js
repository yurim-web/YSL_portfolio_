gsap.registerPlugin(ScrollTrigger);

const timeline4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section_4",
    scrub: true,
    start: "top top",
    end: "600% bottom",
    pin: true,
  },
});

timeline4.to(".page_4_img", {
  y: -2500,
  duration: 30,
});
