$(document).ready(function() {

  // Navbar fadeIn/Out
  $(window).scroll(function() {
    if ($(this).scrollTop() + 2 >= $('.profile').offset().top) {
      $('.navbar').fadeIn();
      $('.navbar').removeClass("hidden");
      }
    else  
      {
        $('.navbar').fadeOut();
      }
  });
  
  // navbar addClass/removeClass on scroll
  $(window).scroll(function() {
    if ($(this).scrollTop() + 2 >= $('.profile').offset().top) {
      $('.navbar li a').removeClass('active-nav');
      $('.navbar li a:eq(0)').addClass('active-nav');
    }
    if ($(this).scrollTop() + 2 >= $('.abilities').offset().top) {
      $('.navbar a').removeClass('active-nav');
      $('.navbar a:eq(1)').addClass('active-nav');
    }
  });
 
});