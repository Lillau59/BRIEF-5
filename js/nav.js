$(window).scroll(
    {
        previousTop: 0
    }, 
    function () {
    var currentTop = $(window).scrollTop();
    if (currentTop < this.previousTop) {
        $(".sidebar em").text("Up");
        $("nav").show();
    } else {
        $(".sidebar em").text("Down");
        $("nav").hide();
    }
    this.previousTop = currentTop;
});