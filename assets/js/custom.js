(function ($) {
	
	"use strict";

	// Header Type = Fixed
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var box = $('.header-text').height();
    var header = $('header').height();

    if (scroll >= box - header) {
      $("header").addClass("background-header");
    } else {
      $("header").removeClass("background-header");
    }
  });


	$('.loop').owlCarousel({
      center: true,
      items:1,
      loop:true,
      autoplay: true,
      nav: true,
      margin:0,
      responsive:{ 
          1200:{
              items:5
          },
          992:{
              items:3
          },
          760:{
            items:2
        }
      }
  });
	

	// Menu Dropdown Toggle
  if($('.menu-trigger').length){
    $(".menu-trigger").on('click', function() { 
      $(this).toggleClass('active');
      $('.header-area .nav').slideToggle(200);
    });
  }


  // Menu elevator animation
  // Smooth scroll to section with debug logs
$('.scroll-to-section a[href^="#"]').on('click', function (e) {
  e.preventDefault();  // Prevent default anchor behavior

  console.log("Anchor link clicked!");  // Log when the link is clicked
  console.log("Clicked link href:", this.getAttribute('href'));  // Log the href value of the clicked link

  var target = $(this.getAttribute('href')); // Use 'getAttribute' to ensure it's a valid string, not an object
  
  console.log("Target element:", target);  // Log the target element to check if it's being selected correctly

  if (target.length) {
    var width = $(window).width();
    console.log("Window width:", width);  // Log the window width

    if (width < 991) {
      console.log("Mobile view detected, hiding menu.");
      $('.menu-trigger').removeClass('active');
      $('.header-area .nav').slideUp(200);
    }

    // Animate scroll to the target section
    $('html, body').animate({
      scrollTop: target.offset().top
    }, 700, function () {
      // After animation, update window location hash
      console.log("Scroll animation complete, setting window location hash.");
      window.location.hash = target.attr('id');  // Set the hash to the section ID, e.g., "#about"
      console.log("Updated hash to:", window.location.hash);  // Log the updated hash
    });
  } else {
    console.log("No target found for href:", this.getAttribute('href'));  // Log if no target was found
  }
});


  $(document).ready(function () {
      $(document).on("scroll", onScroll);
      
      //smoothscroll
      $('.scroll-to-section a[href^="#"]').on('click', function (e) {
          e.preventDefault();
          $(document).off("scroll");
          
          $('.scroll-to-section a').each(function () {
              $(this).removeClass('active');
          })
          $(this).addClass('active');
        
          var target = this.hash,
          menu = target;
          var target = $(this.hash);
          $('html, body').stop().animate({
              scrollTop: (target.offset().top) + 1
          }, 500, 'swing', function () {
              window.location.hash = target;
              $(document).on("scroll", onScroll);
          });
      });
  });

  function onScroll(event){
      var scrollPos = $(document).scrollTop();
      $('.nav a').each(function () {
          var currLink = $(this);
          var refElement = $(currLink.attr("href"));
          if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
              $('.nav ul li a').removeClass("active");
              currLink.addClass("active");
          }
          else{
              currLink.removeClass("active");
          }
      });
  }


  // Acc
  $(document).on("click", ".naccs .menu div", function() {
    var numberIndex = $(this).index();

    if (!$(this).is("active")) {
        $(".naccs .menu div").removeClass("active");
        $(".naccs ul li").removeClass("active");

        $(this).addClass("active");
        $(".naccs ul").find("li:eq(" + numberIndex + ")").addClass("active");

        var listItemHeight = $(".naccs ul")
          .find("li:eq(" + numberIndex + ")")
          .innerHeight();
        $(".naccs ul").height(listItemHeight + "px");
      }
  });


	// Page loading animation
	 $(window).on('load', function() {

        $('#js-preloader').addClass('loaded');

    });

	

	// Window Resize Mobile Menu Fix
  function mobileNav() {
    var width = $(window).width();
    $('.submenu').on('click', function() {
      if(width < 767) {
        $('.submenu ul').removeClass('active');
        $(this).find('ul').toggleClass('active');
      }
    });
  }




})(window.jQuery);