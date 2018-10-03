$(".work-col").mouseenter(function(e){
    var info = $(this).children().next();
    info.fadeIn(300);
    e.preventDefault;
})

$(".work-info").mouseleave(function(e){
    var info = $(".work-info");
    info.fadeOut(300);
    e.preventDefault;
})
