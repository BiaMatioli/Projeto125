noseX = 0;
noseY = 0;

rightWristX = 0;
leftWristX = 0;

diferenca = 0;

function setup(){
    canvas = createCanvas(550, 500);
    canvas.position(560, 200);

    webcam = createCapture(VIDEO);
    webcam.size(550, 500);

    poseNet = ml5.poseNet(webcam, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded(){
    console.log("O modelo foi carregado");
}

function gotPoses(results){
    if(results.lenght > 0){
        console.log(results);

        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;

        console.log(noseX, noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;

        diferenca = floor(leftWristX - rightWristX);

        console.log(leftWristX, rightWristX);
    }
}

function draw(){
    background("#553555");

    document.getElementById("pixels").innerHTML = "O tamanho do quadrado em pixels é " + diferenca;

    fill("#EFBC9B");
    stroke("#EFBC9B");
    square(noseX, noseY, diferenca);
}