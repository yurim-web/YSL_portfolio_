gsap.registerPlugin(ScrollTrigger);
const timeline1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section_2",
    // markers: true,
    scrub: true,
    start: "top center",
    end: "bottom bottom",
  },
});

timeline1.to(".section_2", {
  duration: 1,
  opacity: 1,
  y: 0,
});

timeline1.to(".btn_text", {
  duration: 0.3,
  opacity: 1,
  x: 0,
});
