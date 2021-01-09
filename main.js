
$(document).ready(function(){
  var scrollTop = 0;
  $(window).scroll(function(){
    scrollTop = $(window).scrollTop();
     $('.counter').html(scrollTop);
    
    if (scrollTop >= 5) {
      $('#global-nav').removeClass('scrolled-nav');
    } else if (scrollTop < 5) {
      $('#global-nav').addClass('scrolled-nav');
    } 
    
  }); 
  
});

$(document).ready(function () {
  $(document).on("scroll", onScroll);
  
  //smoothscroll
  $('a[href^="#"]').on('click', function (e) {
      e.preventDefault();
      $(document).off("scroll");
      
      $('a').each(function () {
          $(this).removeClass('active');
      })
      $(this).addClass('active');
    
      var target = this.hash,
          menu = target;
      $target = $(target);
      $('html, body').stop().animate({
          'scrollTop': $target.offset().top
      }, 200, 'swing', function () {
          window.location.hash = target;
          $(document).on("scroll", onScroll);
      });
  });
});

function onScroll(event){
  var scrollPos = $(document).scrollTop();
  $('#global-nav a').each(function () {
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));
      if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
          $('#global-nav ul li a').removeClass("active");
          currLink.addClass("active");
      }
      else{
          currLink.removeClass("active");
      }
  });
}

$(document).ready(function() {
  // Transition effect for navbar 
  $(window).scroll(function() {
    // checks if window is scrolled more than 500px, adds/removes solid class
    if($(this).scrollTop() > 100) { 
        $('.navbar').addClass('solid');
        $('.navbar a').addClass('s');
        $('.nav').removeClass('active');
        
        
    } else {
        $('.navbar').removeClass('solid');
        $('.navbar a').removeClass('s');
        $('.navbar').addClass('active');
        
        
    }
  });
});

  


var scrollItems = menuItems.map(function () {
  var id = $(this).attr("href");
  try {
      var item = $(id);
    if (item.length) {
      return item;
    }
  } catch {}
});

//Navbar active change 





