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


 $(function() {
   const code = document.getElementById('code')
    $('#button').click( function () {
  if (code.value === "freibier") {
  $('.modaleins').modal('show');
} else {
  $('.modalzwei').modal('show');
 }
 });
 });
