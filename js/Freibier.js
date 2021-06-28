$('.carousel').carousel()


$(function(){

    $('a[href*="#"]').click(function (e) {
        var href = $(this).attr('href'),
        $scrollAim = $(href);

        // Abbrechen wenn kein Sprungziel gefunden
        if ($scrollAim.length == 0) return;

        // Automatisches Scrollen verhindern
        e.preventDefault();

        // Zum Sprungziel animieren
        $('html,body').animate({
            scrollTop: $scrollAim.offset().top
        }, 700);
    });

});


$(function() {
   var menuVisible = false;
   $('#icon').click(function() {
     if (menuVisible) {
       $('#navliste').addClass("hidden-mobile");
       menuVisible = false;
       return;
     }
     $('#navliste').removeClass("hidden-mobile");
     menuVisible = true;
   });
 });

 $(document).ready(function() {

   $('#button').click( function () {
 if('#gewinnCode'="123") {
 alert("Du hast gewonnen!");
} else {
 alert("Du hast verloren!")
}
});
});
