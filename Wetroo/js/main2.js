
/*------------------------------------
  HT Particles
--------------------------------------*/

function particles() {
  jQuery("#particles-js").each(function () {
    particlesJS( {
  "particles": {
    "number": {
      "value": 160,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#1360ef"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#f94f15"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 1,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 1,
        "opacity_min": 0,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 4,
        "size_min": 0.3,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 1,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 600
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "bubble"
      },
      "onclick": {
        "enable": true,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 250,
        "size": 0,
        "duration": 2,
        "opacity": 0,
        "speed": 3
      },
      "repulse": {
        "distance": 400,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});

  })
}



/* Thanks to CSS Tricks for pointing out this bit of jQuery
https://css-tricks.com/equal-height-blocks-in-rows/
It's been modified into a function called at page load and then each time the page is resized. One large modification was to remove the set height before each new calculation. */

equalheight = function(container){

  var currentTallest = 0,
       currentRowStart = 0,
       rowDivs = new Array(),
       $el,
       topPosition = 0;
   $(container).each(function() {
  
     $el = $(this);
     $($el).height('auto')
     topPostion = $el.position().top;
  
     if (currentRowStart != topPostion) {
       for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
         rowDivs[currentDiv].height(currentTallest);
       }
       rowDivs.length = 0; // empty the array
       currentRowStart = topPostion;
       currentTallest = $el.height();
       rowDivs.push($el);
     } else {
       rowDivs.push($el);
       currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
    }
     for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
       rowDivs[currentDiv].height(currentTallest);
     }
   });
  }
  
  $(window).load(function() {
    equalheight('.equilizer_row .equilizer_block .equilizer_block_container');
  });
  
  
  $(window).resize(function(){
    equalheight('.equilizer_row .equilizer_block .equilizer_block_container');
  });









 







$('.product_img_slider').slick({
 slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,  
  adaptiveHeight: true,
  infinite: true,
  dots: true,
  autoplaySpeed: 2000,
 
  
  responsive: [
	{
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
      
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
      
        infinite: true,
        dots: true
      }
    },
	{
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
       
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  
  
  
});

















$('.home_gallery_area').slick({
 slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  arrows: true,
  infinite: true,
  adaptiveHeight: true,
 infinite: true,
        dots: false,
  autoplaySpeed: 2000,
 
  
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
      
        infinite: true,
        dots: true
      }
    },
	{
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
       
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  
  
  
});









$(document).ready(function(){
    $("#testimonial-slider").owlCarousel({
        items:1,
        itemsDesktop:[1199,1],
        itemsDesktopSmall:[979,1],
        itemsTablet:[768,1],
        pagination: true,
        navigation:true,
        navigationText:["",""],
        autoPlay:false
    });
});












$(".nav_main_menu .navbar-nav > li").click( function(){
    $(this).toggleClass('curent');
    $(".nav_main_menu .navbar-nav > li").not(this).removeClass('curent');
   
   });	
 $(".mobile_search_bar").click( function(){
    $(".search_area").toggleClass('search_bar_open');
    
   
   });  
 
 $(document).ready(function(){
    //FANCYBOX
    //https://github.com/fancyapps/fancyBox
    $(".fancybox").fancybox({
        openEffect: "none",
        closeEffect: "none"
    });
});
     
   
   
   
// BY KAREN GRIGORYAN

$(document).ready(function() {
  /******************************
      BOTTOM SCROLL TOP BUTTON
   ******************************/

  // declare variable
  var scrollTop = $(".scrollTop");

  $(window).scroll(function() {
    // declare variable
    var topPos = $(this).scrollTop();

    // if user scrolls down - show scroll to top button
    if (topPos > 100) {
      $(scrollTop).css("opacity", "1");

    } else {
      $(scrollTop).css("opacity", "0");
    }

  }); // scroll END

  //Click event to scroll to top
  $(scrollTop).click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
    return false;

  }); // click() scroll top EMD

  /*************************************
    LEFT MENU SMOOTH SCROLL ANIMATION
   *************************************/
  // declare variable
  var h1 = $("#h1").position();
  var h2 = $("#h2").position();
  var h3 = $("#h3").position();

  $('.link1').click(function() {
    $('html, body').animate({
      scrollTop: h1.top
    }, 500);
    return false;

  }); // left menu link2 click() scroll END

  $('.link2').click(function() {
    $('html, body').animate({
      scrollTop: h2.top
    }, 500);
    return false;

  }); // left menu link2 click() scroll END

  $('.link3').click(function() {
    $('html, body').animate({
      scrollTop: h3.top
    }, 500);
    return false;

  }); // left menu link3 click() scroll END

}); // ready() END   




$(document).ready(function(){

function scrollNav() {
  $('.nav a').click(function(){  
    //Toggle Class
    $(".active").removeClass("active");      
    $(this).closest('li').addClass("active");
    var theClass = $(this).attr("class");
    $('.'+theClass).parent('li').addClass('active');
    //Animate
    $('html, body').stop().animate({
        scrollTop: $( $(this).attr('href') ).offset().top - 60
    }, 500);
    return false;
  });
  $('.scrollTop a').scrollTop();
}
scrollNav();







});











$(document).ready(function() {
    $('a[href*=\\#]').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop : $(this.hash).offset().top-30
        }, 500);
    });
});


$(document).ready(function() {
    if (window.location.hash) {
        var hash = window.location.hash;
        $('html, body').animate({
            scrollTop :  $(hash).offset().top-30
        }, 500);
    };
});
