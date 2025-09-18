// Simulated user storage
let users = [];

function registerUser(event) {
  event.preventDefault();
  
  const name = document.getElementById("signupName").value;
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;
  const confirm = document.getElementById("signupConfirm").value;

  if (password !== confirm) {
    alert("Passwords do not match!");
    return false;
  }

  // Check if user exists
  if (users.find(u => u.email === email)) {
    alert("User already exists!");
    return false;
  }

  users.push({ name, email, password });
  alert("Signup successful! Please login.");
  window.location.href = "login.html";
  return true;
}

function loginUser(event) {
  event.preventDefault();
  
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    alert(Welcome, user.name);
    window.location.href = "index.html"; // redirect to homepage
  } else {
    alert("Invalid email or password!");
  }
}