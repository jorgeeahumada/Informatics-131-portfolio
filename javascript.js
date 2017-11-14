function adaptiveMenu(){
    var x = document.getElementById("navigation-bar");
    if(x.className === "topnav"){
        x.className +=" responsive";
    }
    else{
        x.className = "topnav";
    }
}