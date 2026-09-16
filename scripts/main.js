document.addEventListener("DOMContentLoaded", () => {

const translations = {
  en: {
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.contact": "Contact",

    "hero.description":
      "Teacher, developer, and a creative problem solver.",
    "hero.button": "View my work",

    "about.title": "A little about me",
    "about.description": `With my interest in programming kickstarted by my interest in games,
I'm a developer with a background in teaching and I have spent the last 2 years
learning backend and fullstack development.`,

    "projects.project1.description":
      `The toughest project yet. A web application for library management
       with persistance, authentication and authorization written in Java. 
       A balancing act in not overscoping while dealing with a vague set of
      project requirements.`,

    "projects.project2.description":
      `A simple CLI task manager app.
      Tasks can be created and marked as completed.
      A learning project for practicing OOP principles.`,

    "projects.project3.description":
      `Baby's first widdle app. This tui app of unfortunate name
              shows the inputs of your controller in the terminal screen.
              It was my first personal project at boot.dev.
              While not proud of its juvenile name, I am proud of the lessons learned in
              modularity and using external libraries. Also available in GO`,

    "projects.viewProject": "View project",

    "contact.title": "Let's connect",
    "contact.description":
      `Whether you have a project in mind, a question, or simply want to say
      hello, you can find me through any of the channels below.`,

    "contact.email": "Email",
    "contact.github": "GitHub",
    "contact.linkedin": "LinkedIn",
    "footer": " Nelson Retamal. Built with HTML, CSS, and JavaScript."
  },

  es: {
    "nav.about": "Sobre mí",
    "nav.projects": "Proyectos",
    "nav.contact": "Contacto",

    "hero.description":
      "Profesor, Desarrollador, creativo y resolutivo",
    "hero.button": "Mi trabajo",

    "about.title": "Un poco sobre mí",
    "about.description": `Con los videojuegos dándole un puntapié inicial a mi interés por la programación,
Me he vuelto un desarrollador con experiencia de profesor y he pasado los últimos dos años aprendiendo desarrollo backend y fullstack.`,


    "projects.project1.description":
      `Uno de los proyectos más duros que he enfrentado. Una aplicación web para administrar 
      una biblioteca con persistencia, autenticación y autorización escrito en Java.
      Un balance delicado entre no sobredimensionar el proyecto y lidiar con vagas especificaciones`,

    "projects.project2.description":
      `Una aplicación de línea de comandos simple.
      Se pueden crear tareas y marcar como completadas.
      Un proyecto de aprendizaje para poner en práctica principios POO`,

    "projects.project3.description":
      `El primer proyecto del nene. Esta aplicación TUI de desafortunado nombre
      muestra las entradas de tu mando en la pantalla de la terminal.
      Fue mi primer proyecto personal en boot.dev. Aunque no estoy orgulloso de su nombre
      si estoy orgulloso de las lecciones aprendidas en cuanto a modularidad y uso de bibliotecas externas.
      También está disponible en GO`,

    "projects.viewProject": "Ver proyecto",

    "contact.title": "Conectemos",
    "contact.description":
      `Si tienes algún proyecto en mente, alguna pregunta o si tan sólo me quieres saludar, 
      me puedes encontrar a través de los siguientes canales.`,

    "contact.email": "Correo electrónico",
    "contact.github": "GitHub",
    "contact.linkedin": "LinkedIn",
    "footer": " Nelson Retamal. Hecho con HTML, CSS, y JavaScript."
  }
};

const languageButtons = document.querySelectorAll(".language-button");

function setLanguage(language) {
  const selectedTranslations = translations[language];

  document.documentElement.lang = language;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const translationKey = element.dataset.i18n;
    const translatedText = selectedTranslations[translationKey];

    if (translatedText) {
      element.textContent = translatedText;
    }
  });

  languageButtons.forEach((button) => {
    button.classList.toggle(
      "active",
      button.dataset.language === language
    );
  });

  localStorage.setItem("portfolio-language", language);

  restartTypingAnimation();
}

function restartTypingAnimation() {
  const typingElement = document.querySelector(".typing-text");

  if (!typingElement) return;

  const text = typingElement.dataset.text;

  typingElement.textContent = "";

  let characterIndex = 0;

  function typeText() {
    if (characterIndex < text.length) {
      typingElement.textContent += text[characterIndex];
      characterIndex++;

      setTimeout(typeText, 100);
    }
  }

  typeText();
}


languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.language);
  });
});

const savedLanguage =
  localStorage.getItem("portfolio-language") || "en";

setLanguage(savedLanguage);

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
      threshold: 0.15
    }
  );

  revealElements.forEach((element) => {
    revealObserver.observe(element);
  });

  const yearElement = document.getElementById("year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

});
