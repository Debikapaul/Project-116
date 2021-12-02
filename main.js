lipX=0;
lipY=0;

function preload(){
lipstick=loadImage('https://i.postimg.cc/PxFvYgkv/l1.png');
}

function setup(){
    canvas=createCanvas(200,200);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(200,200);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video, 0, 0, 200, 200);
    image(lipstick, lipX, lipY, 50, 20);
}

function take_snapshot(){
    save('My Lipstick Filter Image.png');
}

function modelLoaded(){
    console.log("Posenet is Initialised");
}

function gotPoses(results){
    if(results.length > 0 ){
        console.log(results);
        lipX=results[0].pose.nose.x-25;
        lipY=results[0].pose.nose.y+15;
        console.log("lip x="+ results[0].pose.nose.x);
        console.log("lip y="+ results[0].pose.nose.y);
    }
}