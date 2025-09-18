// Highlight active nav item
document.querySelectorAll(".nav-links li").forEach(li => {
  if (li.dataset.page === "about.html") {
    li.classList.add("active");
  }
});

// Button actions (optional, for future linking)
document.querySelector(".btn-donate").addEventListener("click", () => {
  window.location.href = "donate.html";
});
document.querySelector(".btn-request").addEventListener("click", () => {
  window.location.href = "request.html";
});


document.querySelectorAll(".nav-links li").forEach(item => {
  item.addEventListener("click", () => {
    let page = item.getAttribute("data-page");
    if (page) {
      window.location.href = page;  // same tab
      // window.open(page, "_blank"); // if you want new tab
    }
  });
});
