document.addEventListener("scroll", () => {
  const sections = document.querySelectorAll(".rule-section");
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach(sec => {
    const boxTop = sec.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      sec.classList.add("visible");
    }
  });
});

// garante que já mostra algo quando a página carrega
window.addEventListener("load", () => {
  const sections = document.querySelectorAll(".rule-section");
  sections.forEach(sec => sec.classList.add("visible"));
});
