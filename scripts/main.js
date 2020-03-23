//hide navbar
$(window).scroll(function(e) {
    var scroll = $(window).scrollTop();
    var isOpened = $(".navbar-collapse").hasClass("navbar-collapse collapse show");
    if (scroll >= 150 && !isOpened) {
        $('.navbar').addClass("navbar-hide");
    } else {
        $('.navbar').removeClass("navbar-hide");
    }

});

$(document).ready(function() {
    $(document).click(function(event) {
        var clickover = $(event.target);
        var isOpened = $(".navbar-collapse").hasClass("navbar-collapse collapse show");
        if (isOpened === true && !clickover.hasClass("navbar-toggler")) {
            $("button.navbar-toggler").click();
        }
    });
});