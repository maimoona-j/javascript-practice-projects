// JavaScript code to handle form submission
document.getElementById("registerForm") .addEventListener("submit", function (e) {
    e.preventDefault();  
    Swal.fire("Registration successful!").then((result) => {
      // Check if the user clicked "OK" on the alert
      if (result.isConfirmed) {
        document.getElementById("registerForm").submit();  
      }
    });
  });
