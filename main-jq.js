
$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() >= 100) { 
            $('#scroll').fadeIn(); 
            $('.ff').addClass('scrolled-navs');
            $('.ff').removeClass('navbar-dark');
            $('.ff').addClass('navbar-light');

        } else { 
            $('#scroll').fadeOut(); 
            $('.ff').removeClass('scrolled-navs');
            $('.ff').addClass('navbar-dark');
            $('.ff').removeClass('navbar-light');

        } 
    }); 
    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 

  
  
});


// $(document).ready(function(){
//     var scrollTop = 0;
//     $(window).scroll(function(){
//       scrollTop = $(window).scrollTop();
//        $('.counter').html(scrollTop);
      
//       if (scrollTop >= 100) {
//         $('#global-nav').addClass('scrolled-nav');
//       } else if (scrollTop < 100) {
//         $('#global-nav').removeClass('scrolled-nav');
//       } 
      
//     }); 
    
//   });