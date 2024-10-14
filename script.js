//fixed mode
function setupNavbarLinks() {
  document.querySelectorAll(".navbar a").forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const activeSection = document.querySelector(".content section.active");
      const target = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(target);
      if (activeSection && activeSection !== targetSection) {
        activeSection.classList.remove("active");
        setTimeout(() => {
          targetSection.classList.add("active");
        }, 0);
      } else {
        targetSection.classList.add("active");
      }
    });
  });
}

//fixed mode
setupNavbarLinks();

// Contact form
const contactForm = document.getElementById("contact_form");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(contactForm);
  const name = formData.get("name");
  const message = formData.get("message");

  const mailTo = "thanabun9730@gmail.com";
  const href = `mailto:${mailTo}?subject=${encodeURIComponent(
    name
  )}&body=${encodeURIComponent(message)}`;

  window.location.href = href;
});
//theme
const themeToggleBtn = document.getElementById("themeToggleBtn");

themeToggleBtn.addEventListener("click", () => {
  const body = document.body;

  if (body.classList.contains("dark")) {
    body.classList.replace("dark", "light");
    body.style.backgroundColor = "#eee";
    themeToggleBtn.textContent = "Dark Theme";
  } else {
    body.classList.replace("light", "dark");
    body.style.backgroundColor = "rgb(30,29,29)";
    themeToggleBtn.textContent = "Light Theme";
  }
});
//start dark
window.onload = function () {
  document.body.classList.add("dark");
};
//scroll
const scrollBtn = document.querySelector("#scrollBtn");

scrollBtn.addEventListener("click", () => {
  const allSection = document.querySelectorAll(".content section");
  const content = document.querySelector(".content");

  if (scrollBtn.classList.contains("scroll-active")) {
    allSection.forEach((section) => {
      section.classList.remove("active");
      section.style.marginBottom = "0rem";
    });
    content.style.overflow = "hidden";
    content.style.justifyContent = "center";
    scrollBtn.textContent = "Scroll Site";
    scrollBtn.classList.remove("scroll-active");
    content.scrollTo({ top: 0, behavior: "smooth" });
    const homePage = document.querySelector(".home_page");
    homePage.classList.add("active");
    setupNavbarLinks();
  } else {
    allSection.forEach((section) => {
      section.classList.add("active");
      section.style.marginBottom = "8rem";
    });
    content.style.overflow = "auto";
    content.style.justifyContent = "start";
    scrollBtn.textContent = "Fixed Site";
    scrollBtn.classList.add("scroll-active");
    document.querySelectorAll(".navbar a").forEach((link) => {
      link.replaceWith(link.cloneNode(true));
    });
  }
});

const homeText = document.getElementById("homeText");
const texts = [
  "Competitive programmer",
  "Allrounder",
  "Debugger",
  "LoL Player",
];

let currentIndex = 0;

function switchText() {
  homeText.classList.remove("show");
  setTimeout(() => {
    currentIndex = (currentIndex + 1) % texts.length;
    homeText.textContent = texts[currentIndex];
    homeText.classList.add("show");
  }, 500);
}
homeText.classList.add("show");
setInterval(switchText, 3000);
