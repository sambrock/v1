//$(".work-img").hover(function(){
//    var info = $(".work-info");
//    info.fadeToggle(300);
//})

$(".work-col").mouseenter(function(e){
    var info = $(this).children().next();
    info.fadeIn(300);
    e.preventDefault;
    console.log(info);
})

$(".work-info").mouseout(function(e){
    var info = $(".work-info");
    info.fadeOut(300);
    e.preventDefault;
})

