// login function and move to next page
function login() {
    var user = document.getElementById("userid").value;
    var pass = document.getElementById("password").value;
    if(user == "caiyi" && pass == "pass123") {
        alert("Logged In");
        window.location.href="main.html"
        return false;
    } else {
        alert("Wrong User ID or Password");
        return false;
    }
}

// slide show
let slideIndex = 0;
function showSlides(){
    let slides = document.getElementsByClassName("slide");
    //Hide all slides
    for(let i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    //Increment the slide index
    slideIndex++;
    //Reset to the first slide if the index exceeds the number of slides
    if(slideIndex > slides.length){
        slideIndex = 1;
    }
    //Display the current slide
    slides[slideIndex - 1].style.display = "block";
    //Call this function again after 3 seconds
    setTimeout(showSlides, 3000);
}
//Initialize the slideshow
showSlides();

// Progress Bar
function loadProgress() {
    const bar = document.getElementById("progressBar");
    let width = 0;

    const interval = setInterval(() => {
        if (width >= 80) {
            clearInterval(interval);
        } else {
            width++;
            bar.style.width = width + "%";
        }
    }, 20);
}

document.addEventListener("DOMContentLoaded", function () {
    const collapsibleButton = document.querySelector(".collapsible");
    const content = document.querySelector(".content");
    
    collapsibleButton.addEventListener("click", function () {
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
});