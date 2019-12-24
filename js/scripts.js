$(document).ready(function () {

    // tout ce que vous voulez ici
    setInterval(setClockDigital, 1000);
    setInterval(setClock, 1000);

});




function setClockDigital()
{   
    var laDate = new Date();

    var heure = putZeroHour(laDate);
    var minutes = putZeroMinutes(laDate);
    var secondes = putZeroSecond(laDate);

    $("#time").html(heure+":"+minutes+":"+secondes);
}

/*fonction pour faire tourner les aiguilles */
function setClock()
{
    var today = new Date();

    /* Gestion des heures */
    var heure = today.getHours();
    var heureDeg = ((heure / 12) * 360); /* permet d'avoir l'angle pour la rotation de l'aiguille */
    $(".hourTick").css("transform",  "rotate("+heureDeg+"deg)");
    
    /* Gestion des minutes */
    var minute = today.getMinutes();
    var minuteDeg = ((minute / 60) * 360); /* permet d'avoir l'angle pour la rotation de l'aiguille */
    $(".minuteTick").css("transform",  "rotate("+minuteDeg+"deg)");

    /* Gestion des secondes */
    var secondes = today.getSeconds();
    var secondesDeg = ((secondes / 60) * 360); /* permet d'avoir l'angle pour la rotation de l'aiguille */
    $(".secondTick").css("transform",  "rotate("+secondesDeg+"deg)");

}

/*fin fonction pour faire tourner les aiguilles*/


/* fonction pour ajouter un zéro au début de heure,minutes,secondes*/ 
function putZeroHour(maDate)
{
    if(maDate.getHours() < 10)
    {
        return  "0"+maDate.getHours();
    }
    else return maDate.getHours();

}

function putZeroMinutes(maDate)
{
    if(maDate.getMinutes() < 10)
    {
        return "0"+maDate.getMinutes();
    }
    else return maDate.getMinutes();

}

function putZeroSecond(maDate)
{
    if(maDate.getSeconds() < 10)
    {
        return "0"+maDate.getSeconds();
    }
    else return maDate.getSeconds();  

}

/* fin fonction pour ajouter un zéro au début de heure,minutes,secondes*/ 