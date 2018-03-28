$(document).ready(function(){
    $("li > a").mouseenter(function(){
        $(this).toggleClass("topes");
    });
    $("li > a").mouseout(function(){
        $(this).toggleClass("topes");
    });
    $("#butos").focus(function(){
          $(this).css("background-color", "#6FC0FF");
      });
      $("#butos").blur(function(){
          $(this).css("background-color", "rgb(254, 96, 51)");
      });
      $( ".h-50" ).mouseenter(function() {
        $( this ).animate({
          width: "70%",
          opacity: 0.4,
        }, 1000 );
      });

  $( ".h-50" ).mouseleave(function() {
    $( this ).animate({
      width: "100%",
      opacity: 1,
      }, 15 );
  });
});

  $('a[href*="#"]:not([href="#"])').click( function(event) {
  	       event.preventDefault();
           var anchor = 0;
           if($(this.hash).offset().top > $(document).height()-$(window).height()){
                anchor=$(document).height()-$(window).height();
           }else{
    		  anchor = $(this.hash).offset().top - 24 ;
  	       }
           $('html,body').stop().animate({scrollTop:anchor}, 1000,'swing');
       });
   $('.nav li a').click(function() {
      $(this).parent().find('a').removeClass('highlight');
      $(this).addClass('highlight');
  });
  $(window).scroll(function() {
      $('.section').each(function() {
          if($(window).scrollTop() >= $(this).offset().top - 50) {
              var id = $(this).attr('id');
              $('.nav li a').removeClass('highlight');
  			$('.nav li a[href=#'+ id +']').addClass('highlight');
          }
      });
  });
