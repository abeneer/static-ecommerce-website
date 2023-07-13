let searchform = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchform.classList.toggle('active');
    ShoppingCart.classList.remove('active');
    LoginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let ShoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>{
    ShoppingCart.classList.toggle('active');
    searchform.classList.remove('active');
    LoginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let LoginForm = document.querySelector('.Login-form');

document.querySelector('#login-btn').onclick = () =>{
    LoginForm.classList.toggle('active');
    ShoppingCart.classList.remove('active');
    searchform.classList.remove('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    LoginForm.classList.remove('active');
    ShoppingCart.classList.remove('active');
    searchform.classList.remove('active');
}

window.onscroll = () =>{
    searchform.classList.remove('active');
    ShoppingCart.classList.remove('active');
    LoginForm.classList.remove('active');
    navbar.classList.remove('active');
}

var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay:{
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
});


var swiper = new Swiper(".review-slider", {
  loop:true,
  spaceBetween: 20,
  autoplay:{
      delay: 7500,
      disableOnInteraction: false,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});




// $(document).ready(function() {
//   $('#media').carousel({
//     pause: true,
//     interval: false,
//   });
// });


















