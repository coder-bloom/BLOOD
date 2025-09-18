// ------------------ Slider ------------------
let slideIndex = 0;
let slides = document.querySelectorAll(".carousel-inner img");
let dotsContainer = document.getElementById("dots");

// create dots dynamically
slides.forEach((_, i) => {
  let dot = document.createElement("span");
  dot.addEventListener("click", () => showSlide(i));
  dotsContainer.appendChild(dot);
});
let dots = dotsContainer.querySelectorAll("span");

function showSlide(index) {
  if (index >= slides.length) slideIndex = 0;
  else if (index < 0) slideIndex = slides.length - 1;
  else slideIndex = index;

  slides.forEach(slide => slide.classList.remove("active"));
  dots.forEach(dot => dot.classList.remove("active"));

  slides[slideIndex].classList.add("active");
  dots[slideIndex].classList.add("active");
}

function moveSlide(step) {
  showSlide(slideIndex + step);
}

// Auto-slide every 4s
setInterval(() => moveSlide(1), 4000);

// Initial slide
showSlide(slideIndex);

// ------------------ Navigation ------------------
document.querySelectorAll(".nav-links li").forEach(item => {
  item.style.cursor = "pointer"; // hover पर हाथ का cursor दिखेगा
  item.addEventListener("click", () => {
    let page = item.getAttribute("data-page");
    if (page) {
      window.location.href = page; // उसी tab में नया page खुलेगा
    }
  });
});

// Button actions (optional, for future linking)
document.querySelector(".btn1").addEventListener("click", () => {
  window.location.href = "donate.html";
});
document.querySelector(".btn2").addEventListener("click", () => {
  window.location.href = "request.html";
});
