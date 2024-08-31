const nav = document.querySelector(".nav"),
  searchIcon = document.querySelector("#searchIcon"),
  navOpenBtn = document.querySelector(".navOpenBtn"),
  navCloseBtn = document.querySelector(".navCloseBtn");

searchIcon.addEventListener("click", () => {
  nav.classList.toggle("openSearch");
  nav.classList.remove("openNav");
  if (nav.classList.contains("openSearch")) {
    return searchIcon.classList.replace("uil-search", "uil-times");
  }
  searchIcon.classList.replace("uil-times", "uil-search");
});

navOpenBtn.addEventListener("click", () => {
  nav.classList.add("openNav");
  nav.classList.remove("openSearch");
  searchIcon.classList.replace("uil-times", "uil-search");
});
navCloseBtn.addEventListener("click", () => {
  nav.classList.remove("openNav");
});

// let section = document.querySelectorAll('section');
// let navLinks = document.querySelectorAll('header nav a i');
// window.scroll = () => {
//   section.forEach(sec => {
//     let top = window.scrollY;
//     let offset = sec.offsetTop;
//     let height = sec.offsetHeight;
//     let id = sec.getAttribute('id');

//     if(top >= offset && top < offset + height){
//       navLinks.forEach(links =>{
//         links.classList.remove('active');
//         document.querySelector('header nav a i [href*='+ id +']').classList.add('active');

//       });
//     };
//   });
// };

// cotact
document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault();

  // Clear previous errors
  const errorElements = document.querySelectorAll('.error-message');
  errorElements.forEach(el => el.style.display = 'none');

  // Get form values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const message = document.getElementById('message').value.trim();

  // Validation flags
  let isValid = true;

  // Name validation
  if (name === '') {
      document.getElementById('nameError').textContent = 'Name is required';
      document.getElementById('nameError').style.display = 'block';
      isValid = false;
  }

  // Email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === '' || !emailPattern.test(email)) {
      document.getElementById('emailError').textContent = 'Valid email is required';
      document.getElementById('emailError').style.display = 'block';
      isValid = false;
  }

  // Phone validation
  const phonePattern = /^[0-9]{10}$/;
  if (phone === '' || !phonePattern.test(phone)) {
      document.getElementById('phoneError').textContent = 'Valid phone number is required';
      document.getElementById('phoneError').style.display = 'block';
      isValid = false;
  }

  // Message validation
  if (message === '') {
      document.getElementById('messageError').textContent = 'Message is required';
      document.getElementById('messageError').style.display = 'block';
      isValid = false;
  }

  // If form is valid, you can submit it or perform any other action
  if (isValid) {
      alert('Form submitted successfully!');
      // You can also submit the form here using AJAX or similar methods
  }
});