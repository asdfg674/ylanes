	$('.carousel').carousel({
	  interval: 5000,
   	  pause: "false"
	})




$(".navbar-toggler").click(function(){
  $(".navbar-toggler").toggleClass("showtoggle");
}); 







// js for menu out off



$(document).ready(function(){
    $("#profidrop").click(function(){
        $("#profidropdid").slideToggle();
    });
});
$(document).on('click', function () {
  var $target = $(event.target);
  if (!$target.closest('#profidropdid').length
    && !$target.closest('#profidrop').length
    && $('#profidropdid').is(":visible")) {
    $('#profidropdid').slideUp();
  }
  
});
$(document).ready(function(){
    $("#profidrop2").click(function(){
        $("#profidropdid2").slideToggle();
    });
});
$(document).on('click', function () {
  var $target = $(event.target);
  if (!$target.closest('#profidropdid2').length
    && !$target.closest('#profidrop2').length
    && $('#profidropdid2').is(":visible")) {
    $('#profidropdid2').slideUp();
  }
  if (!$target.closest('#navbarSupportedContent').length
    && !$target.closest('.navbar-toggler').length
    && $('#navbarSupportedContent').is(":visible")) {
    $(".navbar-toggler").toggleClass("showtoggle");
    $('#navbarSupportedContent').removeClass('show');
  }
})





// ===== Scroll to Top ==== 

$(window).scroll(function() {

    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px

        $('#return-to-top').fadeIn(200);    // Fade in the arrow

    } else {

        $('#return-to-top').fadeOut(200);   // Else fade out the arrow

    }

});

$('#return-to-top').click(function() {      // When arrow is clicked

    $('body,html').animate({

        scrollTop : 0                       // Scroll to top of body

    }, 500);

});



$(window).scroll(function() { 



    var scroll = $(window).scrollTop();

    if (scroll >= 300) {



        $(".foot_arw").addClass("fixed");



    } else {



        $(".foot_arw").removeClass("fixed");



    }



});


  $(document).ready(function() {
  $("#moreless-button").click(function() {
    var elem = $("#moreless-button").text();
    if (elem == "Learn more") {
      $("#moreless-button").text("Learn less");
      $(".moretext").slideDown();
    } else {
      $("#moreless-button").text("Learn more");
      $(".moretext").slideUp();
    }
  });
});


  $(document).ready(function() {
  $("#moreless-button1").click(function() {
    var elem = $("#moreless-button1").text();
    if (elem == "Learn more") {
      $("#moreless-button1").text("Learn less");
      $(".moretext1").slideDown();
    } else {
      $("#moreless-button1").text("Learn more");
      $(".moretext1").slideUp();
    }
  });
});


    $(document).ready(function() {
  $("#moreless-button2").click(function() {
    var elem = $("#moreless-button2").text();
    if (elem == "Learn more") {
      $("#moreless-button2").text("Learn less");
      $(".moretext2").slideDown();
    } else {
      $("#moreless-button2").text("Learn more");
      $(".moretext2").slideUp();
    }
  });
});

    $(document).ready(function() {
  $(".moreless-button2").click(function() {
    var elem = $(".moreless-button2").text();
    if (elem == "Read More +") {
      $(".moreless-button2").text("Learn less");
      $(".moretext2").slideDown();
    } else {
      $(".moreless-button2").text("Read Less -");
      $(".moretext2").slideUp();
    }
  });
});
 $(document).ready(function() {
  $(".moreless-button1").click(function() {
    var elem = $(".moreless-button1").text();
    if (elem == "Read More +") {
      $(".moreless-button1").text("Read Less -");
      $(".moretext1").slideDown();
    } else {
      $(".moreless-button1").text("Read More +");
      $(".moretext1").slideUp();
    }
  });
});



 $(document).ready(function() {
  $(".moreless-button3").click(function() {
    var elem = $(".moreless-button3").text();
    if (elem == "Read More +") {
      $(".moreless-button3").text("Read Less -");
      $(".moretext3").slideDown();
    } else {
      $(".moreless-button3").text("Read More +");
      $(".moretext3").slideUp();
    }
  });
});



 $(document).ready(function() {
  $(".moreless-button4").click(function() {
    var elem = $(".moreless-button4").text();
    if (elem == "Read More +") {
      $(".moreless-button4").text("Read Less -");
      $(".moretext4").slideDown();
    } else {
      $(".moreless-button4").text("Read More +");
      $(".moretext4").slideUp();
    }
  });
});


$(document).ready(function(){
    $(".filter_menu").click(function(){
        $("#filter_div").slideToggle();
    });
});    



$(document).ready(function(){
    $(".mobile_menu").click(function(){
        $("#mobile_menu_dv").slideToggle();
    });
});


$(document).ready(function() {
  $("#action4").click(function() {
    $("#show-action4").slideToggle();
  });
});
$(document).ready(function() {
  $("#action5").click(function() {
    $("#show-action5").slideToggle();
  });
});
$(document).ready(function() {
  $("#action6").click(function() {
    $("#show-action6").slideToggle();
  });
});
$(document).ready(function() {
  $("#action7").click(function() {
    $("#show-action7").slideToggle();
  });
});
$(document).ready(function() {
  $("#action8").click(function() {
    $("#show-action8").slideToggle();
  });
});
$(document).ready(function() {
  $("#action9").click(function() {
    $("#show-action9").slideToggle();
  });
});
$(document).ready(function() {
  $("#action10").click(function() {
    $("#show-action10").slideToggle();
  });
});
$(document).ready(function() {
  $("#action1").click(function() {
    $("#show-action1").slideToggle();
  });
});
$(document).ready(function() {
  $("#action2").click(function() {
    $("#show-action2").slideToggle();
  });
});
$(document).ready(function() {
  $("#action3").click(function() {
    $("#show-action3").slideToggle();
  });
});
$(document).ready(function() {
  $("#action11").click(function() {
    $("#show-action11").slideToggle();
  });
});
$(document).ready(function() {
  $("#action12").click(function() {
    $("#show-action12").slideToggle();
  });
});
$(document).ready(function() {
  $("#action13").click(function() {
    $("#show-action13").slideToggle();
  });
});
$(document).ready(function() {
  $("#action14").click(function() {
    $("#show-action14").slideToggle();
  });
});
$(document).ready(function() {
  $("#action15").click(function() {
    $("#show-action15").slideToggle();
  });
});
$(document).on('click', function() {
  var $target = $(event.target);
  if(!$target.closest('#show-action1').length && !$target.closest('#action1').length && $('#show-action1 ').is(":visible")) {
    $('#show-action1 ').slideUp();
  }
});
$(document).on('click', function() {
  var $target = $(event.target);
  if(!$target.closest('#show-action2').length && !$target.closest('#action2').length && $('#show-action2 ').is(":visible")) {
    $('#show-action2 ').slideUp();
  }
});
$(document).on('click', function() {
  var $target = $(event.target);
  if(!$target.closest('#show-action3').length && !$target.closest('#action3').length && $('#show-action3 ').is(":visible")) {
    $('#show-action3 ').slideUp();
  }
});
$(document).on('click', function() {
  var $target = $(event.target);
  if(!$target.closest('#show-action4').length && !$target.closest('#action4').length && $('#show-action4 ').is(":visible")) {
    $('#show-action4').slideUp();
  }
});
$(document).on('click', function() {
  var $target = $(event.target);
  if(!$target.closest('#show-action5').length && !$target.closest('#action5').length && $('#show-action5 ').is(":visible")) {
    $('#show-action5 ').slideUp();
  }
});
$(document).on('click', function() {
  var $target = $(event.target);
  if(!$target.closest('#show-action6').length && !$target.closest('#action6').length && $('#show-action6 ').is(":visible")) {
    $('#show-action6 ').slideUp();
  }
});
$(document).on('click', function() {
  var $target = $(event.target);
  if(!$target.closest('#show-action7').length && !$target.closest('#action7').length && $('#show-action7 ').is(":visible")) {
    $('#show-action7 ').slideUp();
  }
});
$(document).on('click', function() {
  var $target = $(event.target);
  if(!$target.closest('#show-action8').length && !$target.closest('#action8').length && $('#show-action8 ').is(":visible")) {
    $('#show-action8 ').slideUp();
  }
});
$(document).on('click', function() {
  var $target = $(event.target);
  if(!$target.closest('#show-action9').length && !$target.closest('#action9').length && $('#show-action9 ').is(":visible")) {
    $('#show-action9 ').slideUp();
  }
});
$(document).on('click', function() {
  var $target = $(event.target);
  if(!$target.closest('#show-action10').length && !$target.closest('#action10').length && $('#show-action10').is(":visible")) {
    $('#show-action10').slideUp();
  }
});
$(document).on('click', function() {
  var $target = $(event.target);
  if(!$target.closest('#show-action11').length && !$target.closest('#action11').length && $('#show-action11').is(":visible")) {
    $('#show-action11').slideUp();
  }
});
$(document).on('click', function() {
  var $target = $(event.target);
  if(!$target.closest('#show-action12').length && !$target.closest('#action12').length && $('#show-action12').is(":visible")) {
    $('#show-action12').slideUp();
  }
});
$(document).on('click', function() {
  var $target = $(event.target);
  if(!$target.closest('#show-action13').length && !$target.closest('#action13').length && $('#show-action13').is(":visible")) {
    $('#show-action13').slideUp();
  }
});
$(document).on('click', function() {
  var $target = $(event.target);
  if(!$target.closest('#show-action14').length && !$target.closest('#action14').length && $('#show-action14').is(":visible")) {
    $('#show-action14').slideUp();
  }
});
$(document).on('click', function() {
  var $target = $(event.target);
  if(!$target.closest('#show-action15').length && !$target.closest('#action15').length && $('#show-action15').is(":visible")) {
    $('#show-action15').slideUp();
  }
});

    $(document).ready(function() {
  $("#moreless-button3").click(function() {
    var elem = $("#moreless-button3").text();
    if (elem == "Read More+") {
      $("#moreless-button3").text("Read Less -");
      $(".moretext3").slideDown();
    } else {
      $("#moreless-button3").text("Read More+");
      $(".moretext3").slideUp();
    }
  });
});

    $(document).ready(function() {
  $("#moreless-button4").click(function() {
    var elem = $("#moreless-button4").text();
    if (elem == "More Reviews") {
      $("#moreless-button4").text("Less Reviews");
      $(".moretext4").slideDown();
    } else {
      $("#moreless-button4").text("More Reviews");
      $(".moretext4").slideUp();
    }
  });
});

    // $(function() {
    //         $("#datepicker").datepicker();
    //     });
    //     $(function() {
    //         $("#datepicker2").datepicker();
    //     });
    //     $(function() {
    //         $("#datepicker3").datepicker();
    //     });


$('#slectorid').change(function() {
  console.log($(this).val())
  if($(this).val()=="others"){
    $('.selctothers').show();
  }else{
     $('.selctothers').hide();
  }
})

        



/*29-11-21 (puja)*/

 
$(document).ready(function() {
  $(".moreless-buttonrati1").click(function() {
    var elem = $(".moreless-buttonrati1").text();
    if (elem == "Read More +") {
      $(".moreless-buttonrati1").text("Read Less -");
      $(".moretext-rati1").slideDown();
    } else {
      $(".moreless-buttonrati1").text("Read More +");
      $(".moretext-rati1").slideUp();
    }
  });
});

 
$(document).ready(function() {
  $(".moreless-buttonrati2").click(function() {
    var elem = $(".moreless-buttonrati2").text();
    if (elem == "Read More +") {
      $(".moreless-buttonrati2").text("Read Less -");
      $(".moretext-rati2").slideDown();
    } else {
      $(".moreless-buttonrati2").text("Read More +");
      $(".moretext-rati2").slideUp();
    }
  });
});
 
$(document).ready(function() {
  $(".moreless-buttonrati3").click(function() {
    var elem = $(".moreless-buttonrati3").text();
    if (elem == "Read More +") {
      $(".moreless-buttonrati3").text("Read Less -");
      $(".moretext-rati3").slideDown();
    } else {
      $(".moreless-buttonrati3").text("Read More +");
      $(".moretext-rati3").slideUp();
    }
  });
});
 
$(document).ready(function() {
  $(".moreless-buttonrati4").click(function() {
    var elem = $(".moreless-buttonrati4").text();
    if (elem == "Read More +") {
      $(".moreless-buttonrati4").text("Read Less -");
      $(".moretext-rati4").slideDown();
    } else {
      $(".moreless-buttonrati4").text("Read More +");
      $(".moretext-rati4").slideUp();
    }
  });
});

$(document).ready(function() {
  $(".moreless-buttonrati5").click(function() {
    var elem = $(".moreless-buttonrati5").text();
    if (elem == "Read More +") {
      $(".moreless-buttonrati5").text("Read Less -");
      $(".moretext-rati5").slideDown();
    } else {
      $(".moreless-buttonrati5").text("Read More +");
      $(".moretext-rati5").slideUp();
    }
  });
});
 
$(document).ready(function() {
  $(".moreless-buttonrati6").click(function() {
    var elem = $(".moreless-buttonrati6").text();
    if (elem == "Read More +") {
      $(".moreless-buttonrati6").text("Read Less -");
      $(".moretext-rati6").slideDown();
    } else {
      $(".moreless-buttonrati6").text("Read More +");
      $(".moretext-rati6").slideUp();
    }
  });
});
 



$(document).ready(function(){
  $("#show_bx_btn1").click(function(){
    $("#show_bx2").hide();
  });
  $("#show_bx_btn1").click(function(){
    $("#show_bx1").show();
  });
});


$(document).ready(function(){
  $("#show_bx_btn2").click(function(){
    $("#show_bx1").hide();
  });
  $("#show_bx_btn2").click(function(){
    $("#show_bx2").show();
  });
});



$('#cou_typ').change(function() {
    console.log($(this).val())
    if($(this).val()=="dayweek"){
      $('.cou_typ_opn').show();
    }else{
       $('.cou_typ_opn').hide();
    }
  })

$('#cou_typ').change(function() {
    console.log($(this).val())
    if($(this).val()=="special"){
      $('.pric_of_co').show();
    }else{
       $('.pric_of_co').hide();
    }
  })
$('.new-diif').show();
$('#radio2:radio').on('change', function() {
  if($(this).is(":checked")) {
    $('.new-diif').slideUp();
  } else {
    $('.new-diif').slideDown();
  }
});

$('#radio1:radio').on('change', function() {
  if($(this).is(":checked")) {
    $('.new-diif').slideDown();
  } else {
    $('.new-diif').slideUp();
  }
});
$('.new-diifnew').show();
$('#radio1:radio').on('change', function() {
  if($(this).is(":checked")) {
    $('.new-diifnew').slideUp();
  } else {
    $('.new-diifnew').slideDown();
  }
});
$('.new-diifnew').hide();
$('#radio2:radio').on('change', function() {
  if($(this).is(":checked")) {
    $('.new-diifnew').slideDown();
  } else {
    $('.new-diifnew').slideUp();
  }
});







$(document).ready(function() {
  $("#action16").click(function() {
    $("#show-action16").slideToggle();
  });
});
$(document).ready(function() {
  $("#action17").click(function() {
    $("#show-action17").slideToggle();
  });
});
$(document).ready(function() {
  $("#action18").click(function() {
    $("#show-action18").slideToggle();
  });
});
$(document).ready(function() {
  $("#action19").click(function() {
    $("#show-action19").slideToggle();
  });
});
$(document).ready(function() {
  $("#action20").click(function() {
    $("#show-action20").slideToggle();
  });
});




$(document).on('click', function() {
  var $target = $(event.target);
  if(!$target.closest('#show-action16').length && !$target.closest('#action16').length && $('#show-action16').is(":visible")) {
    $('#show-action16').slideUp();
  }
});
$(document).on('click', function() {
  var $target = $(event.target);
  if(!$target.closest('#show-action17').length && !$target.closest('#action17').length && $('#show-action17').is(":visible")) {
    $('#show-action17').slideUp();
  }
});
$(document).on('click', function() {
  var $target = $(event.target);
  if(!$target.closest('#show-action18').length && !$target.closest('#action18').length && $('#show-action18').is(":visible")) {
    $('#show-action18').slideUp();
  }
});
$(document).on('click', function() {
  var $target = $(event.target);
  if(!$target.closest('#show-action19').length && !$target.closest('#action19').length && $('#show-action19').is(":visible")) {
    $('#show-action19').slideUp();
  }
});
$(document).on('click', function() {
  var $target = $(event.target);
  if(!$target.closest('#show-action20').length && !$target.closest('#action20').length && $('#show-action20').is(":visible")) {
    $('#show-action20').slideUp();
  }
});
$(document).on('click', function() {
  var $target = $(event.target);
  if(!$target.closest('#show-action21').length && !$target.closest('#action21').length && $('#show-action21').is(":visible")) {
    $('#show-action21').slideUp();
  }
});




   $(document).ready(function(){
    $("#chat_list_id").click(function(){
        $("#chat_list_open").slideToggle();
    });
});


$('#slectoridnew').change(function() {
  console.log($(this).val())
  if($(this).val()=="daily"){
    $('.selctothersnew').show();
  }else{
     $('.selctothersnew').hide();
  }
})
$('#slectoridnew').change(function() {
  console.log($(this).val())
  if($(this).val()=="weekly"){
    $('.selctothersnewest').show();
  }else{
     $('.selctothersnewest').hide();
  }
})

$('.new-diifone').show();
$('#radio12:radio').on('change', function() {
  if($(this).is(":checked")) {
    $('.new-diifone').slideUp();
  } else {
    $('.new-diifone').slideDown();
  }
});
$('.new-diifone').hide();
$('#radio13:radio').on('change', function() {
  if($(this).is(":checked")) {
    $('.new-diifone').slideDown();
  } else {
    $('.new-diifone').slideUp();
  }
});
$('.new-diiftwo').show();
$('#radio13:radio').on('change', function() {
  if($(this).is(":checked")) {
    $('.new-diiftwo').slideUp();
  } else {
    $('.new-diiftwo').slideDown();
  }
});
$('.new-diifnew').hide();
$('#radio12:radio').on('change', function() {
  if($(this).is(":checked")) {
    $('.new-diiftwo').slideDown();
  } else {
    $('.new-diiftwo').slideUp();
  }
});



$('.new-diifone').show();
$('#radio12:radio').on('change', function() {
  if($(this).is(":checked")) {
    $('.new-diifone').slideUp();
  } else {
    $('.new-diifone').slideDown();
  }
});
$('.new-diifone').hide();
$('#radio13:radio').on('change', function() {
  if($(this).is(":checked")) {
    $('.new-diifone').slideDown();
  } else {
    $('.new-diifone').slideUp();
  }
});
$('.new-diiftwo').show();
$('#radio13:radio').on('change', function() {
  if($(this).is(":checked")) {
    $('.new-diiftwo').slideUp();
  } else {
    $('.new-diiftwo').slideDown();
  }
});
$('.new-diifnew').hide();
$('#radio12:radio').on('change', function() {
  if($(this).is(":checked")) {
    $('.new-diiftwo').slideDown();
  } else {
    $('.new-diiftwo').slideUp();
  }
});




$('.new-daily').show();
$('#radiowe:radio').on('change', function() {
  if($(this).is(":checked")) {
    $('.new-daily').slideUp();
  } else {
    $('.new-daily').slideDown();
  }
});
$('.new-daily').hide();
$('#radioda:radio').on('change', function() {
  if($(this).is(":checked")) {
    $('.new-daily').slideDown();
  } else {
    $('.new-daily').slideUp();
  }
});
$('.new-weekly').show();
$('#radioda:radio').on('change', function() {
  if($(this).is(":checked")) {
    $('.new-weekly').slideUp();
  } else {
    $('.new-weekly').slideDown();
  }
});
$('.new-weekly').hide();
$('#radiowe:radio').on('change', function() {
  if($(this).is(":checked")) {
    $('.new-weekly').slideDown();
  } else {
    $('.new-weekly').slideUp();
  }
});
