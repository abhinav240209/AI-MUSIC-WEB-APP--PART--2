function setup() {
    canvas=createCanvas(500,400);
    canvas.position(400,240);
    video=createCapture(VIDEO);
    video.hide();
    
}

function draw() {
    image(video,0,0,canvas.width,canvas.height);
}

function preload() {
    Believer=loadSound("Believer.mp3");
    Born_for_this=loadSound("BornForThis.mp3");
}