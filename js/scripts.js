$(document).ready(function () {

    // tout ce que vous voulez ici
    $("#swap").click(function(){
        searchIfHide();
    });
   

});

setClockDigital();
setInterval(setClockDigital, 1000);
setClock();
setInterval(setClock, 1000);

