
$(function(){
    $('.nav li').mouseenter(function(){
        $(this).find('ol').stop().slideDown();
    });
    $('.nav li').mouseleave(function(){
        $(this).find('ol').stop().slideUp();
    });
});