




setInterval(setClockDigital, 1000);

function setClockDigital()
{   
    var laDate = new Date();
    if(laDate.getHours() < 10)
    {
        var heure = "0"+laDate.getHours();
    }
    else var heure = laDate.getHours();

    if(laDate.getMinutes() < 10)
    {
        var minutes = "0"+laDate.getMinutes();
    }
    else var minutes = laDate.getMinutes();

    if(laDate.getSeconds() < 10)
    {
        var secondes = "0"+laDate.getSeconds();
    }
    else var secondes = laDate.getSeconds();    

    $("#time").html(heure+":"+minutes+":"+secondes);
}