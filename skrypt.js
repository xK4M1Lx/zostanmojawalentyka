function funkcja(){
    const nie =document.getElementById("nie");

    var boxnie =nie.getBoundingClientRect();

    var maxx=window.innerWidth-boxnie.width; 

    var maxy=window.innerHeight-boxnie.height; 


    var lewo = Math.floor(Math.random()*maxx);
    nie.style.left=lewo+"px";

    
    var góra = Math.floor(Math.random()*maxy);
    nie.style.top=góra+"px";

    
} 