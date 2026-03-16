// Passive event listeners
jQuery.event.special.touchstart = {
  setup: function (_, ns, handle) {
    this.addEventListener("touchstart", handle, {
      passive: !ns.includes("noPreventDefault"),
    });
  },
};
jQuery.event.special.touchmove = {
  setup: function (_, ns, handle) {
    this.addEventListener("touchmove", handle, {
      passive: !ns.includes("noPreventDefault"),
    });
  },
};

(function ($) {
  "use strict";

  // Preloader js
  $(window).on("load", function () {
    // preloader
    $(".preloader").fadeOut(100);

    // filter
    setTimeout(() => {
      var containerEl = document.querySelector(".filtr-container");
      var filterizd;
      if (containerEl) {
        filterizd = $(".filtr-container").filterizr({});
      }
      //Active changer
      $(".filter-controls li").on("click", function () {
        $(".filter-controls li").removeClass("active");
        $(this).addClass("active");
      });
      setTimeout(() => {
        $(".filtr-container").css("opacity", "1");
      }, 600);
    }, 500);
  });

  // Background-images
  if ("[data-background]") {
    $("[data-background]").each(function () {
      $(this).css({
        "background-image": "url(" + $(this).data("background") + ")",
      });
    });
  }

  //  Search Form Open
  $("#searchOpen").on("click", function () {
    $(".search-wrapper").addClass("open");
    setTimeout(function () {
      $(".search-box").focus();
    }, 400);
  });
  $("#searchClose").on("click", function () {
    $(".search-wrapper").removeClass("open");
  });

  //Hero Slider
  if (".hero-slider") {
    $(".hero-slider").slick({
      autoplay: true,
      infinite: true,
      arrows: true,
      prevArrow:
        "<button type='button' class='prevArrow' aria-label='previous slider button'></button>",
      nextArrow:
        "<button type='button' class='nextArrow' aria-label='next slider button'></button>",
      dots: false,
      autoplaySpeed: 7000,
      pauseOnFocus: false,
      pauseOnHover: false,
    });
    $(".hero-slider").slickAnimation();
  }

  //  Count Up
  if (".count") {
    function counter() {
      var oTop;
      if ($(".count").length !== 0) {
        oTop = $(".count").offset().top - window.innerHeight;
      }
      if ($(window).scrollTop() > oTop) {
        $(".count").each(function () {
          var $this = $(this),
            countTo = $this.attr("data-count");
          $({
            countNum: $this.text(),
          }).animate(
            {
              countNum: countTo,
            },
            {
              duration: 1000,
              easing: "swing",
              step: function () {
                $this.text(Math.floor(this.countNum));
              },
              complete: function () {
                $this.text(this.countNum);
              },
            }
          );
        });
      }
    }
    $(window).on("scroll", function () {
      counter();
    });
  }

  //testimonial slider
  if (".testimonial-slider") {
    $(".testimonial-slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 6000,
      dots: false,
      arrows: true,
      prevArrow:
        "<button type='button' class='prevArrow' aria-label='previous slider button'></button>",
      nextArrow:
        "<button type='button' class='nextArrow' aria-label='next slider button'></button>",
      pauseOnFocus: false,
      pauseOnHover: false,
    });
  }

  // venobox popup
  if (".venobox") {
    $(".venobox").venobox();
  }

  // map initialize
  $(map);
})(jQuery);
