gsap.registerPlugin(ScrollTrigger);

const timeline6 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section_6",
    scrub: true,
    start: "top top",
    end: "200% bottom",
    pin: true,
  },
});

timeline6.to(".back_effect", {
  y: 0,
  duration: 1,
  background: "linear-gradient(to bottom, #000000, #ffffff)",
  opacity: 1,
});

timeline6.to(
  ".page6_box",
  {
    opacity: 1,
    y: 0,
  },
  ">"
);
