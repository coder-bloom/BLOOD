// Contact form submission handler
document.querySelector(".contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  if (name && email && message) {
    alert("Thank you " + name + "! Your message has been sent.");
    this.reset();
  } else {
    alert("Please fill all the fields!");
  }
});
