
$('.slider').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    // autoplay: true,
    // autoplaySpeed: 1000,
    // arrows:false,
    nextArrow: '<button type="button" class="my-right">➡️</button>',
    prevArrow: '<button type="button" class="my-left">⬅️</button>',
    dots:true,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },

    ]

  });