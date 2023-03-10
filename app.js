const swiper = new Swiper('.main-swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    spaceBetween: 20,
    autoplay: {
      delay: 3000,
      disableOnInteraction: true,
    },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
});

const projectsSwiper = new Swiper('.projects-swiper', {
    loop: true,
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
});

var lastScrollTop = 0;

// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
window.addEventListener("scroll", function(){
  // or window.addEventListener("scroll"....
  var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"

  if (screen.width >= 575){
    if (window.pageYOffset >= 500 || document.documentElement.scrollTop >= 500) {
      document.querySelector(".underline").classList.add("underline-reveal");
    } else if (window.pageYOffset <= 400 || document.documentElement.scrollTop <= 400) {
      document.querySelector(".underline").classList.remove("underline-reveal");
    }
    if (window.pageYOffset >= 900 || document.documentElement.scrollTop >= 900) {
      document.querySelectorAll(".underline-points").forEach((e) => e.classList.add("underline-reveal"));
    } else if (window.pageYOffset <= 700 || document.documentElement.scrollTop <= 700) {
      document.querySelectorAll(".underline-points").forEach((e) => e.classList.remove("underline-reveal"));
    }
  }else{
    document.querySelector(".underline").classList.add("underline-reveal");
    document.querySelectorAll(".underline-points").forEach((e) => e.classList.add("underline-reveal"));
  }

  if (st > lastScrollTop) {
    document.querySelector(".nav-main").classList.add("nav-main-hide");
  } else if (st < lastScrollTop) {
    document.querySelector(".nav-main").classList.remove("nav-main-hide");
  } // else was horizontal scroll
  lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
      });
  });
});

const nav = document.querySelector(".nav-main-mobile");
function menuToggle(){
  nav.classList.toggle("nav-main-hide-mobile");
  let hamburger = document.querySelector(".hamburger");
  hamburger.children[0].classList.toggle("x");
  hamburger.children[2].classList.toggle("y");
  hamburger.children[1].classList.toggle("x-fade");
}