function clicked () {
    
    var name = document.getElementById("name");
    var color = document.getElementById("color");
    var message = document.getElementById("message");
    var font = document.getElementById("font");
    var submit = document.getElementById("submit");
    var gradient = document.getElementById("gradient");
    var letters = document.getElementById("letters");
    var square = document.getElementById("square");
    
    var id = setInterval (frame,50);
    var pos = 0;
    var c = 105;
    
    var b = setInterval("fade();", 100);
    
    function fade() {
        if (color.value == "blue") {
            gradient.style.backgroundColor ="rgb(255,255,"+c +")";
        }
    }
    
    function frame() {
        
        if (pos == 500) {
            clearInterval();
        }
        else {
            pos++;
            square.style.top=pos+ "px";
            square.style.left=pos + "px";
            
        }
    }
    
    
    name.style.display ="none";
    color.style.display ="none";
    message.style.display ="none";
    font.style.display ="none";
    submit.style.display ="none";
    
    square.style.backgroundColor =color.value;
    letters.style.fontSize = font.value + "px";
    letters.innerHTML = message.value;
}