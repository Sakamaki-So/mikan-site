let clickable = true;
jQuery(function() {
    $(window).resize(()=> {
        if(window.matchMedia("(max-width: 800px)").matches) {
            $(".header-site-menu").hide();
            $(".toggle-menu-button").on("click", function() {
                if(clickable) {
                    clickable = false;
                    setTimeout(() => clickable = true, 300);
                    $(".header-site-menu").slideToggle();
                }
            });
        }
        else {
            $(".header-site-menu").show();
        }
    });
});