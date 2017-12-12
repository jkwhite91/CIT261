function textColor(){
    var colorpicker = document.getElementById("color");
    var color = colorpicker.value;
    var text = document.getElementById("text");
    console.log(color);
    text.style.color=color;
};

var clicks = 0;
function changeImage(){
    var image = document.getElementById("photograph");
    clicks++;
    switch(clicks){
        case 0:
            image.style.backgroundImage="URL('Lesson 7/image1.jpeg')";
            break;
        case 1:
            image.style.backgroundImage="URL('Lesson 7/image2.jpg')";
            break;
        case 2:
            image.style.backgroundImage="URL('Lesson 7/image3.jpg')";
            break;
        case 3:
            image.style.backgroundImage="URL('Lesson 7/image4.jpg')";
            clicks=-1;
            break;
    }
};