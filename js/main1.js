const img2 = document.getElementById("img2");
window.addEventListener("mousemove", (e) => {
  const { clientX, clientY } = e;
  gsap.to(img2, {
    x: clientX * -0.005,
    y: clientY * 0.01,
    ease: "power2.out",
  });
});

const img3 = document.getElementById("img3");
window.addEventListener("mousemove", (e) => {
  const { clientX, clientY } = e;
  gsap.to(img3, {
    x: clientX * 0.005,
    y: clientY * -0.01,
    ease: "power2.out",
  });
});

const img4 = document.getElementById("img4");
window.addEventListener("mousemove", (e) => {
  const { clientX, clientY } = e;
  gsap.to(img4, {
    x: clientX * -0.003,
    y: clientY * 0.02,

    ease: "power2.out",
  });
});

const img5 = document.getElementById("img5");
window.addEventListener("mousemove", (e) => {
  const { clientX, clientY } = e;
  gsap.to(img5, {
    x: clientX * 0.003,
    y: clientY * -0.04,

    ease: "power2.out",
  });
});

const img6 = document.getElementById("img6");
window.addEventListener("mousemove", (e) => {
  const { clientX, clientY } = e;
  gsap.to(img6, {
    x: clientX * -0.008,
    y: clientY * 0.04,

    ease: "power2.out",
  });
});

const img7 = document.getElementById("img7");
window.addEventListener("mousemove", (e) => {
  const { clientX, clientY } = e;
  gsap.to(img7, {
    x: clientX * 0.008,
    y: clientY * -0.01,

    ease: "power2.out",
  });
});
