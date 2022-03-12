function preload() {
}

function setup() {
  canvas = createCanvas(640, 480);
  canvas.position(110, 250);
  video = createCapture(VIDEO);
  video.hide();

  tint_color = "";
}

function draw() {
  image(video, 100, 50, 440, 380);
  tint(tint_color);
  fill("yellow");
  stroke("red");
  rect(85,10,460,40);
  rect(80,420,475,40);
  rect(65,9,35,450);
  rect(530,9,35,450);
  fill("blue");
  stroke("red");
  circle(80, 30, 40);
  circle(550, 30, 40);
  circle(80, 440, 40);
  circle(550, 440, 40);

}

function take_snapshot(){    
  save('student_name.png');
}

function filter_tint()
{
  tint_color = document.getElementById("color_name").value;
}
