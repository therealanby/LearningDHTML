document.getElementById("default").click();

function openTab(evt, cityName){
    var i;
    var tabcontent;
    var tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for(i = 0; i < tabcontent.length; i++){
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("links");
    for(i = 0; i < tabcontent.length; i++){
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}