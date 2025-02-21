$(document).ready(function() {
    $('.worksslider').slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false
    });
  });
  document.addEventListener("DOMContentLoaded", function () {
    const serviceItems = document.querySelectorAll(".services");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        },
        { threshold: 0.2 }
    );

    serviceItems.forEach((item) => {
        observer.observe(item);
    });
});
const mobilemenu = document.querySelector('.mobilemenu');
const mainmenu = document.querySelector('.mainmenu');

mobilemenu.addEventListener('click', function(){
  mobilemenu.classList.toggle('open')
  mainmenu.classList.toggle('show')
});
document.querySelectorAll(".faq-question").forEach((question) => {
  question.addEventListener("click", () => {
      const answer = question.nextElementSibling;
      const plus = question.querySelector(".plus");

      if (answer.style.display === "block") {
          answer.style.display = "none";
          plus.style.transform = "rotate(0deg)";
      } else {
          document.querySelectorAll(".faq-answer").forEach((ans) => ans.style.display = "none");
          document.querySelectorAll(".plus").forEach((p) => p.style.transform = "rotate(0deg)");

          answer.style.display = "block";
          plus.style.transform = "rotate(45deg)";
      }
  });
});
223

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 500) {
        $("header").addClass("stick");
    }else{
        $("header").removeClass("stick");  
    }
});


document.addEventListener("DOMContentLoaded", function () {
    // Select both the navmenu and the logo
    const navmenu = document.querySelector(".navmenu");
    const logo = document.querySelector(".logo");
    const mobileTogg = document.querySelector(".mobilemenu")
  
    if (!navmenu || !logo) {
      console.error("Navigation menu or logo element not found!");
      return;
    }
  
    document.addEventListener("scroll", function () {
      // Get all sections on the page
      const sections = document.querySelectorAll("section");
  
      // Loop through each section to check if it is in view
      sections.forEach(section => {
        let rect = section.getBoundingClientRect();
        // Check if the section is near the top of the viewport (50px threshold)
        if (rect.top <= 50 && rect.bottom >= 50) {
          // If it's a light section, add classes to change navmenu & logo colors
          if (section.classList.contains("light-section")) {
            navmenu.classList.add("black-nav");
            logo.classList.add("black-logo");
            mobileTogg.classList.add('darkToggle')
          } else {
            // Otherwise, remove the modifier classes
            navmenu.classList.remove("black-nav");
            logo.classList.remove("black-logo");
            mobileTogg.classList.remove('darkToggle')
          }
        }
      });
    });
  });
  
