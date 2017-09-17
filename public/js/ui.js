
$(function(){





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






