$(".work-col").mouseenter(function(e){
    var info = $(this).children().next();
    info.fadeIn(300);
    e.preventDefault;
})

$(".work-info-container").mouseleave(function(e){
    var info = $(".work-info-container");
    info.fadeOut(300);
    e.preventDefault;
})

function resize(){
    var parent = $("#my-skills")
    var child = $("#skills-container").height();
    parent.css("height", child-90);
}

$(window).on('resize', function(e) {
    resize();
});

$( document ).ready(function(){
    resize();
})
