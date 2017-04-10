// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
  $("nav").toggleClass("lightNav", top.scrollY > 50);
  $("nav").toggleClass("gradientNav", top.scrollY <= 50);
});

// jQuery for page scrolling feature - requires jQuery ui
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 800, 'swing');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// remove the focused state after click,
// otherwise bootstrap will still highlight the link
$("a").mouseup(function(){
    $(this).blur();
});
