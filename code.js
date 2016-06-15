document.body.style.backgroundColor="black";
$( document ).ready(function() {
    var i=0;
    setInterval(function() {
        $(".badge-track").css("color", "white");
        $(".badge-evt").css("color", "white");
        $(".footer").css("background", "black");
    }, 2000);
});
