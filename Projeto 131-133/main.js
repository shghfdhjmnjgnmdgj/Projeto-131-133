img = "";
objects = [];
modelStatus = "";

function preload()
{
    img = loadImage('foto.jpg');
}


function setup()
{
    canvas = createCanvas (640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "status: Detectando objetos";
}

function modelLoaded()
{
    console.log("Modelo carregado");
    modelStatus = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error,results)
{
    if(error){
        console.log(error);
    }
    console.log(results);
    objects = results;
}

function draw()
{
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("Pessoa 1", 45, 75);
    noFill();
    stroke("#7FFFD4");
    rect(30, 60, 450, 350);

    fill("#FF0000");
    text("Pessoa 2", 320, 99);
    noFill();
    stroke("#7FFFD4");
    rect(300, 90, 270, 320);

    
}