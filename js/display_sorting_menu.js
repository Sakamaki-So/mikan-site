let toggleSortingMenu = () => {
    $(".sort-menu").hide();
    $(".sort-menu-button").on("click", () => {
        if(clickable) {
            clickable = false;
            setTimeout(() => clickable = true, 300);
            $(".sort-menu").slideToggle();
        }
    });
}

jQuery(() => toggleSortingMenu());