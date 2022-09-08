
        
//Creat object of the html button classes
const slider = document.querySelector(".slider");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");

//Creat an object of the html slide and the slide-icons class
const slides = document.querySelectorAll(".slide");
const slideIcons = document.querySelectorAll(".slide-icon");

//Get the length of the slides object to iterate through
const numberOfSlides = slides.length;
// Initialied the variable slides number to 0
var slideNumber = 0;

//Image slide next buttons
nextBtn.addEventListener("click", () => {
    //Remove active from the slide and slide-icon class as it loops through
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    slideIcons.forEach((slideIcon) => {
        slideIcon.classList.remove("active");
    });
    //increament the slide number
    slideNumber++;

    if(slideNumber > (numberOfSlides - 1)){
        slideNumber = 0;
    }
    // Add active to slide and slide-icon class
    slides[slideNumber].classList.add("active");
    slideIcons[slideNumber].classList.add("active");
});

// Image slider previous button
prevBtn.addEventListener("click", () => {
    //Remove active from the slide and slide-icon class as it loops through
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    slideIcons.forEach((slideIcon) => {
        slideIcon.classList.remove("active");
    });
    //increament the slide number
    slideNumber--;

    if(slideNumber < 0){
        slideNumber = numberOfSlides - 1;
    }

    slides[slideNumber].classList.add("active");
    slideIcons[slideNumber].classList.add("active");
});

// Image slider autoplay
var playSlider;

var repeater = () => {
    playSlider = setInterval(function(){
        slides.forEach((slide) => {
            slide.classList.remove("active");
        });
    
        slideIcons.forEach((slideIcon) => {
            slideIcon.classList.remove("active");
        });
        //increament the slide number
        slideNumber++;
    
        if(slideNumber > (numberOfSlides - 1)){
            slideNumber = 0;
        }
    
        slides[slideNumber].classList.add("active");
        slideIcons[slideNumber].classList.add("active");
    }, 4000);
}

repeater();

// STop the image auto-play upon mouseover
slider.addEventListener("mouseover", () => {
    clearInterval(playSlider);
});

// Start the image auto-slider upon mouseout
slider.addEventListener("mouseout", () => {
    repeater();
});