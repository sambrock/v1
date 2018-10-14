//JS document -
//Created by Sam Brocklehurst

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    $(".work-col").on("click", function(){
        var allInfo = $(".work-col").children().next();
        allInfo.fadeOut(300);
        var thisInfo = $(this).children().next();
        thisInfo.fadeIn(300);
        e.preventDefault;
    })

}else{
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
}

//Resize parent element depending on absolute positined child element
function resize(){
    var parent = $("#my-skills")
    var child = $("#skills-container").height();
    parent.css("height", child-90);
}

//If user's browser is Microsoft Edge add a 10px margin around the work cols since grid-gap is not supported
function ifEdge(){
    if (/Edge\/\d./i.test(navigator.userAgent)){
        $(".work-col").css("margin", "10px");
    }
}

$(window).on('resize', function(e) {
    resize();
});

$( document ).ready(function(){
    resize();
    ifEdge();
})
