/* ===================================
    * Template Name: Startup
    * Author: Naim Zaaraoui
    * Updated: Oct 21 2023 with Bootstrap v5.3.1
======================================*/

(function ($) {
  "use strict";
  //*** Preloader
  $(window).on("load", () => {
    $(".spinner").addClass("is-hide");
  });
  //*** Toggle *navbar-top* when scrolling
  const navbarTop = () => {
    $(window).scrollTop() >= topbarHeight
      ? $(".navbar").addClass("is-sticky shadow-sm")
      : $(".navbar").removeClass("is-sticky shadow-sm");
  };
  $(window).on("scroll", () => navbarTop());

  //*** Dropdown on mouse hover
  const dropdown = $(".dropdown"),
    dropdownToggle = $(".dropdown-toggle"),
    dropdownMenu = $(".dropdown-menu");

  $(window).on("load resize", function () {
    if (this.matchMedia("(min-width: 992px)").matches) {
      dropdown.hover(
        function () {
          console.log("red");
          $(this).addClass("show");
          $(this).find(dropdownToggle).attr("aria-expanded", "true");
          $(this).find(dropdownMenu).addClass("show");
        },
        function () {
          $(this).removeClass("show");
          $(this).find(dropdownToggle).attr("aria-expanded", "false");
          $(this).find(dropdownMenu).removeClass("show");
        }
      );
    } else {
      dropdown.off("mouseenter mouseleave");
    }
  });
  //*** Scroll to section with header offset

  //*** Set *Hero* section height
  const topbarHeight = $(".top-bar").innerHeight(),
    winHeight = $(window).height();
  $("#hero .carousel-item").css("height", winHeight - topbarHeight + 65);

  //*** Facts counter
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 2000,
  });

  //*** Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    dots: true,
    loop: true,
    center: true,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });

  //*** Vendors carousel
  $(".vendors-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    margin: 45,
    dots: false,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 2,
      },
      576: {
        items: 4,
      },
      768: {
        items: 6,
      },
      992: {
        items: 8,
      },
    },
  });

  //*** Initiate AOS
  AOS.init({
    duration: 1000,
    mirror: false,
    once: true,
  });

  //*** Back to top
  const backTopBtn = $(".back-to-top");
  $(window).on("scroll load", function () {
    $(this).scrollTop() > 100
      ? backTopBtn.fadeIn("slow")
      : backTopBtn.fadeOut("slow");
  });
  backTopBtn.click(function () {
    $("html, body").scrollTop(0);
  });
})(jQuery);
