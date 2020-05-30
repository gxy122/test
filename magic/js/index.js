
$(function(){
    $(window).resize(function(event) {
        /* Act on the event */
        $('body,html').css('min-width','1230px')
    });
    $('.nav li').mouseenter(function(){
        $(this).find('ol').stop().slideDown();
    });
    $('.nav li').mouseleave(function(){
        $(this).find('ol').stop().slideUp();
    });
});