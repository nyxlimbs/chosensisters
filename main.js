var sketchProc= function(processingInstance) {
with(processingInstance) {
size(400, 400);
frameRate(30);
  fill(20, 22, 20);
text("This is a placeholder for a magical colaboration", 200, 200); //Write your code here
}};
var canvas = document.getElementById("myCanvas");
var processingInstance = new Processing(canvas, sketchProc);
