/**************start js file index *******************/
/* 
1- navbar shrink 
2- smotth scroll
3-
4- start gallery 
5- mixitup
6- active class 
7- counter up 
8- carowsel 
/*************end js file index**********************/
$(function (){

	/* 1- start navbar shrink */
	/* start navbar shrink */
	$(document).ready(function(){
      $(window).scroll(function() { 
        if ($(document).scrollTop() > 150) { 
          $('.navbar').addClass('shrink'); 
        } else { 
          $('.navbar').removeClass('shrink'); 
        } 
      }); 
     });
	/* end navbar shrink */
$(document).ready(function() {
  
  var scrollLink = $('.scroll');
  
  // Smooth scrolling
  scrollLink.click(function(e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000 );
  });
  

  
})
      
          
    
     /*start by arrow scroll */
     $("#arrows").click(function(){
        $('html, body').animate ({
          scrollTop: $("#about").offset().top
        },2000);
     });
     /* end by arrow scroll*/
       /* start mixitup */
  var mixer = mixitup('.main', {
         selectors: {
            control: '[data-mixitup-control]',
          }
     });
  /* end mixitup */
  /* start gallery */
     $('.view').magnificPopup({
    
    type: 'image',
     gallery: {
      enabled: true
    },
  });
 $(".grids li").click(function() {
    $(this).addClass('active').siblings().removeClass('active');

    }); 
 /* counter */

/* owl carousel*/ 
    $(document).ready(function(){
    $("#testimonial-slider").owlCarousel({
        items:3,
        itemsDesktop:[1000,3],
        itemsDesktopSmall:[979,2],
        itemsTablet:[768,2],
        itemsMobile:[650,1],
        pagination:true,
        autoPlay:true
    });
});
    // scrool button 
     // scroll
                 var scrollButton = $("#scroll-top");
                $(window).scroll(function()
                   { 
                     $(this).scrollTop() >= 700 ? scrollButton.show() : scrollButton.hide();
                  });     
                        // click on button scroll
                    scrollButton.click(function()
                    {
                        $("html,body").animate({scrollTop: 0}, 600);
                    });


});