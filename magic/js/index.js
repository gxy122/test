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
    });


    //移动端搜索
    $(document).on('click','.search_a',function(e){
        e.stopPropagation();
        $('.search').stop().slideToggle();
    });
    $(document).on('click','.headerTop .search .box',function(e){
        e.stopPropagation();
    });
    $(document).click(function(){
        $('.search').stop().slideUp();
    });

    //导航
    $(document).on('click','.nav_m li',function(){
        $(this).find('ol').stop().slideToggle().closest('li').siblings().find('ol').stop().slideUp();
    });
    $(document).on('click','.nav_a',function(){
        $(this).toggleClass('on');
        if($(this).hasClass('on')){
            $('.nav_m').stop().slideDown();
        }else{
            $('.nav_m').stop().slideUp();
        }
    });
});