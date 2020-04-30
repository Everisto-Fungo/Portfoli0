
$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() >= 100) { 
            $('#scroll').fadeIn(); 
            $('.fff').addClass('scrolled-navs');
            // $('.fff').removeClass('navbar-dark');
            // $('.fff').addClass('navbar-light');

        } else { 
            $('#scroll').fadeOut(); 
            $('.fff').removeClass('scrolled-navs');
            // $('.fff').addClass('navbar-dark');
            // $('.fff').removeClass('navbar-light');

        } 
    }); 
    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
    $('.test-popup-link').magnificPopup({
        type: 'image',
        gallery:{enabled:true}
        // other options
      });

});

