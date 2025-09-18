// Donate Blood form handler
document.querySelector(".donate-form").addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.getElementById("fullname").value;
  let blood = document.getElementById("bloodgroup").value;
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let city = document.getElementById("city").value;
  let contact = document.getElementById("contact").value;
  let availability = document.getElementById("availability").value;

  if (name && blood && age && weight && city && contact && availability) {
    if (age < 18 || age > 65) {
      alert("❌ Donors must be between 18 and 65 years old.");
      return;
    }
    if (weight < 50) {
      alert("❌ Donors must weigh at least 50 kg.");
      return;
    }

    alert("✅ Donor Registered Successfully!\n\n" +
          "Name: " + name +
          "\nBlood Group: " + blood +
          "\nAge: " + age +
          "\nWeight: " + weight + "kg" +
          "\nCity: " + city +
          "\nContact: " + contact +
          "\nAvailability: " + availability);

    this.reset();
  } else {
    alert("❌ Please fill all the required fields!");
  }
});
