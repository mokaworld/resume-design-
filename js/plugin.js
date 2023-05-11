// OWL CAROSEL
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:4
        },
        1000:{
            items:4
        }
    }
});

var owl = $('.owl-carousel');
owl.owlCarousel({
    items:4,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})

$(window).load(function(){

    $("body").css("overflow","auto");
    $(".loading-overlay").fadeOut(4000);

});

// SCROLL TOP

$(".scroll-top").click( function (){

    $("body, html").animate({

     scrollTop: 0

    },1000);


});

$(window).scroll(function(){


    if($(window).scrollTop() >= 500) {

        $(".scroll-top").fadeIn(400);
     }else{
    
        $(".scroll-top").fadeOut(400);

     }

   });
