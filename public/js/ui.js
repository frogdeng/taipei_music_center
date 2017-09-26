
$(function(){



$('.switch').click(function(){
	$('.fat_footer').toggleClass( "fat-footer_show" )
	return false
});




  $(window).scroll(function (event) {
      var keyimage_h = $('.main_slider').height();
      var inside_slider_h = $('.inside_slider').height();

      var sc_1 = $(window).scrollTop() ;

      // console.log(keyimage_h);
      // console.log(sc);

      if(sc_1 > 400){
        $(".index_menu").addClass('index_menu_bg')
      }
      else{
        $(".index_menu").removeClass('index_menu_bg')
      }

      if(sc_1 > inside_slider_h){
        $(".inside_menu").addClass('index_menu_bg')
      }
      else{
        $(".inside_menu").removeClass('index_menu_bg')
      }

  });







$('.search_btn').click(function(){
		$('.magnifier').toggleClass( "w_flexible" )
  // 		if($(this).hasClass("open")){
		// 	$(this).removeClass("open");
		// 	$(this).parent().find('.display_1').slideUp(200);
		// } else{
		// 	$(this).addClass("open");
		// 	$(this).parent().find('.display_1').slideDown(300);
		// }

	});



  $(".hamburg").click(function(){
     $('.aside').delay(200).toggleClass("hamburg-open");
     $(this).delay(200).toggleClass("active");
    });

  $(".hamburg").click(function(){
      $('.m-second_bg').removeClass("second-open");

  	});

   $(".second-goback").click(function(){
      $('.m-second_bg').removeClass("second-open");

    });


	  $(".show-1").click(function(){
	      $('.active-1').addClass("second-open");
	    });
	  $(".show-2").click(function(){
	      $('.active-2').addClass("second-open");
	    });
	  $(".show-3").click(function(){
	      $('.active-3').addClass("second-open");
	    });
	  $(".show-4").click(function(){
	      $('.active-4').addClass("second-open");
	    });
	  $(".show-5").click(function(){
	      $('.active-5').addClass("second-open");
	    });


});






