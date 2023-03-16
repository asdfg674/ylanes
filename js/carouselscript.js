
$(document).ready(function() {
    var owl = $('.popular_tutors_id .owl-carousel');
    owl.owlCarousel({
      margin: 0,
      nav: true,
      autoplay: true,
      loop: true,
      responsive: {
        0: {
          items: 1
        },
        576: {
          items: 2
        },
        767: {
          items: 2
        },
        991: {
          items: 3
        },
        1199: {
          items: 3
        },
        1200: {
          items: 4
        }
      }
    })
  })

$(document).ready(function() {
    var owl = $('.clients_say_slid .owl-carousel');
    owl.owlCarousel({
      margin: 0,
      nav: true,
      autoplay: true,
      loop: true,
      responsive: {
        0: {
          items: 1
        },
         767: {
          items: 2
        },
        991: {
          items: 2
        },
        1000: {
          items: 2
        }
      }
    })
  })