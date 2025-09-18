// Request Blood form handler
document.querySelector(".request-form").addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.getElementById("fullname").value;
  let blood = document.getElementById("bloodgroup").value;
  let hospital = document.getElementById("hospital").value;
  let city = document.getElementById("city").value;
  let contact = document.getElementById("contact").value;

  if (name && blood && hospital && city && contact) {
    alert("✅ Request Submitted!\n\n" +
          "Name: " + name +
          "\nBlood Group: " + blood +
          "\nHospital: " + hospital +
          "\nCity: " + city +
          "\nContact: " + contact);

    this.reset();
  } else {
    alert("❌ Please fill all the required fields!");
  }
});
