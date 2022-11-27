function setup(){
    canvas = createCanvas(400,400);
    canvas.position(660, 200);
    video = createCapture(VIDEO);
    video.size(400, 400)
    video.position(250, 200)
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw(){
    background("lightgrey");
}
function modelLoaded(){
    console.log("PoseNet is initialized")
}
function gotPoses(results){
    if (results.length > 0){
        console.log(results);
    }
}