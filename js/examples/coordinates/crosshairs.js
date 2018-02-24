function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);

}

var textPosX, textPosY;
draw = function() {
    stroke(0, 150, 255);
    background(255, 255, 255);
    line(0,mouseY,windowWidth,mouseY);
    line(mouseX,0,mouseX,windowHeight);
    fill(255, 0, 0);
    if(mouseY < 20) {
        text(mouseX + ", " + mouseY, mouseX, mouseY + 20);
    } else if (mouseX > windowWidth-80) {
        text(mouseX + ", " + mouseY, mouseX - 55, mouseY);
    } else {
        text(mouseX + ", " + mouseY, mouseX, mouseY);
    }
};