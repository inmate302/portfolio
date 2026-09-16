
    // Terminal-style typing animation
    const typingElement = document.querySelector(".typing-text");
    const text = typingElement.dataset.text;
    let characterIndex = 0;

    function typeText() {
      if (characterIndex < text.length) {
        typingElement.textContent += text[characterIndex];
        characterIndex++;
        setTimeout(typeText, 100);
      }
    }

    typeText();

    // Scroll reveal animation
    const revealElements = document.querySelectorAll(".reveal");

    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    revealElements.forEach((element) => {
      revealObserver.observe(element);
    });

    // Current year
    document.getElementById("year").textContent = new Date().getFullYear();
