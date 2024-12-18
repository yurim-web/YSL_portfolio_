gsap.registerPlugin(ScrollTrigger);

const timeline7 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section_7",
    scrub: true,
    start: "top top",
    end: "900% bottom",
    pin: true,
  },
});

timeline7.fromTo(
  ".page7_img_1",
  {
    y: 200,
    opacity: 0,
  },
  { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
);

timeline7.fromTo(
  ".page7_img_2",
  {
    y: 200,
    opacity: 0,
  },
  { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
);
timeline7.fromTo(
  ".page7_img_3",
  {
    y: 200,
    opacity: 0,
  },
  { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
);
timeline7.fromTo(
  ".page7_img_4",
  {
    y: 200,
    opacity: 0,
  },
  { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
);
timeline7.fromTo(
  ".page7_img_5",
  {
    y: 200,
    opacity: 0,
  },
  { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
);
