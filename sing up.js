const signupForm = document.getElementById('signupForm');

    signupForm.addEventListener('submit', function(event) {
      event.preventDefault(); 

      const username = document.getElementById('username').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      if (username === "prasad" && email === "prasad12@gmail.com" && password === "123456") {

        window.location.href = "homepage.html";
      } else {
        alert("Incorrect username, email, or password."); 
      }
    });