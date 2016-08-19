$(document).ready(function () {
    // Closes the sidebar menu
    $("#menu-close").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });
    // Opens the sidebar menu
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });
    
    //Skills bar
    $('.skillbar').each(function () {
       $(this).find('.skillbar-bar').animate({
          width: $(this).attr('data-percent')
       }, 5000);
    });
});
