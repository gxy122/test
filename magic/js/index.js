function scro() {
    if ($(document).scrollTop() > 300) {
        $(".comTop").fadeIn()
    } else {
        $(".comTop").fadeOut()
    }
}
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

    $(window).scroll(function () {
        scro();
    });
    $(document).on("click", ".comTop", function () {
        $("html,body").animate({
            "scrollTop": 0
        }, 500)
    })
});