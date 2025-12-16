// login function and move to next page
function login() {
    var user = document.getElementById("userid").value;
    var pass = document.getElementById("password").value;
    if(user == "caiyi" && pass == "pass123") {
        alert("Logged In");
        window.location.href="main.html" // Move to next page
        return false;
    } else {
        alert("Wrong User ID or Password");
        return false;
    }
}

// slide show
let slideIndex = 0;
showSlides(); // Start slideshow automatically

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  // Move to next slide
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}   
  // Remove active class from dots 
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  // Show current slide and activate dot
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

// Progress Bar
function loadProgress() {
    const bar = document.getElementById("progressBar");
    let width = 0;
    // Increase progress width gradually
    const interval = setInterval(() => {
        if (width >= 80) {
            clearInterval(interval); // Stop at 80%
        } else {
            width++;
            bar.style.width = width + "%";
        }
    }, 20);
}

/**Collapsible section**/
document.addEventListener("DOMContentLoaded", function () {
    const collapsibleButton = document.querySelector(".collapsible");
    const content = document.querySelector(".content");
    
    // Toggle FAQ content display
    collapsibleButton.addEventListener("click", function () {
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
});