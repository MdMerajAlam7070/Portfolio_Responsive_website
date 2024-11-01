
const hamburger = document.getElementById("hamburger");
const navlist = document.getElementById("navlist");

hamburger.addEventListener("click", () =>{
    navlist.classList.toggle("navlist-active");

})
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay:{
        delay:3000
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
