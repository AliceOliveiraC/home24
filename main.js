function Preload()
{   
  
}

function setup()
{
    canvas = createCanvas(500,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(500, 500);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}



function draw()
{
    
}


function gotPoses(results)
{
    if(results.lenght > 0)
    {
      console.log(results);
      noseX = results[0].pose.nose.x-15;
      noseY = results[0].pose.nose.y-15;
    }
}

function modelLoaded ()
{
    console.log("PoseNet foi inicializada")

}

function takeSnapshot(){    
  save('myFilterImage.png');
}
    