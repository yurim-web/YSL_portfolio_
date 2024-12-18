gsap.registerPlugin(ScrollTrigger);

const timeline3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section_3",
    // markers: true,
    scrub: true,
    start: "top top",
    end: "500% bottom",
    pin: true,
  },
});

timeline3.to(".page_3_2", {
  x: 0,
  duration: 20,
});
timeline3.to(".page_3_3", {
  x: 0,
  duration: 20,
});

timeline3.to(".page_3_4", {
  x: 0,
  duration: 20,
});

timeline3.to(".page_3_5", {
  x: 0,
  duration: 20,
});

timeline3.to(".page_3_6", {
  x: 0,
  duration: 20,
});
