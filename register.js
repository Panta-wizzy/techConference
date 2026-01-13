const form = document.getElementById("registerForm");

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const profession = document.getElementById("profession").value;
  const ticket = document.getElementById("ticket").value;

  // Basic validation
  if (!name || !email || !phone || !profession || !ticket) {
    alert("Please fill in all fields");
    return;
  }

  if (!email.includes("@")) {
    alert("Enter a valid email address");
    return;
  }

  // Send data to backend
  /*const response = await fetch("http://localhost:5500/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      phone,
      profession,
      ticket,
    }),
  }); */

  // Mock response for demonstration
  const response = { ok: true };




  if (response.ok) {  
    window.location.href = "/register/success.html";
  } else {
    alert("Registration failed. Try again.");
  }
});
