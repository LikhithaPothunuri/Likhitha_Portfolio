// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.querySelectorAll("#navLinks a").forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

// Active link on scroll
const sections = document.querySelectorAll("section");
const navA = document.querySelectorAll("#navLinks a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 140;
    if (scrollY >= sectionTop) current = section.getAttribute("id");
  });

  navA.forEach(a => {
    a.classList.remove("active");
    if (a.getAttribute("href") === "#" + current) a.classList.add("active");
  });
});

// Skill animation
const skillFills = document.querySelectorAll(".fill");
const skillsSection = document.getElementById("skills");

function animateSkills(){
  const rect = skillsSection.getBoundingClientRect();
  if(rect.top < window.innerHeight - 120){
    skillFills.forEach(fill => fill.style.width = fill.dataset.width);
    window.removeEventListener("scroll", animateSkills);
  }
}
window.addEventListener("scroll", animateSkills);
animateSkills();

// Reveal animations
const revealEls = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("show");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => revealObserver.observe(el));

// Form (demo)
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Message sent! (Frontend demo only)");
  e.target.reset();
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();
