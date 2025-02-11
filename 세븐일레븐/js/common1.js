function snbPos() {
    for(i=0; i<$('.snb').length; i++){
        let liPos = $("#gnbList > li:eq(" + i + ")").position().left
        let liWidth = $("#gnbList > li:eq(" + i + ") > a").width()/2;
        $(".snb:eq(" + i + ")").css({left: liPos + liWidth, transform: `translateX(-50%)` })
}
}
snbPos();
$(window).on('resize', snbPos)

// PushSubscriptionOptions();

$(".snb").hide();
$("#gnbList li").hover(function(){
    $(this).children('.snb').stop().fadeIn(200);
}, function(){
    $(this).children('.snb').stop().fadeOut(200);
})

// $(window).on('scroll', function(){
//     if($(this).scrollTop() < $(window).height()-100)
//         $("#header").css({backgroundColor: '#000'})
//     else
//     $("#header").css({backgroundColor: 'transparent'})
// })