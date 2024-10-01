function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
  }
  
  window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
  
    loader.classList.add("loader--hidden");
  
    loader.addEventListener("transitionend", () => {
      document.body.removeChild(loader);
    });
  });
  

  const form = document.querySelector(".contact-form");
  form.addEventListener("submit", function (event) {
    alert("Form submitted successfully!");
  });
