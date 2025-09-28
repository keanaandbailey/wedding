document.addEventListener("DOMContentLoaded", () => {

  gsap.registerPlugin(ScrollTrigger);

  // ===== HERO TYPING ===== (unchanged)
  const heroElement = document.getElementById("typing");
  const heroText = heroElement.textContent.trim();
  heroElement.textContent = "";

  heroText.split("").forEach(letter => {
    const span = document.createElement("span");
    span.textContent = letter;
    span.style.display = "inline-block";
    span.style.transform = "translateX(-100%)";
    span.style.opacity = 0;
    heroElement.appendChild(span);
  });

  const heroTimeline = gsap.timeline();
  heroTimeline.from("#titletext", {
    opacity: 0,
    y: 30,
    duration: 1.5,
    delay: 0.5,
    ease: "power3.out"
  });
  heroTimeline.to(heroElement.querySelectorAll("span"), {
    x: 0,
    opacity: 1,
    duration: 0.2,
    stagger: 0.05,
    ease: "power3.out"
  });

  // ===== BODY TEXT ANIMATION =====
  gsap.utils.toArray(".typing-body").forEach((paragraph, index) => {

    gsap.from(paragraph, {
      scrollTrigger: {
        trigger: paragraph,
        start: "top 80%",
        toggleActions: "play none none none",
        onEnter: () => paragraph.classList.add("in-view"),  // add in-view to bold highlights
        onLeaveBack: () => paragraph.classList.remove("in-view") // optional: remove when scrolling up
      },
      opacity: 0,
      y: 30,
      duration: 1,
      delay: index * 0.3,  // optional stagger between paragraphs
      ease: "power3.out"
    });
  });


});
