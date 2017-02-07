var sketchProc= function(processingInstance) {
with(processingInstance) {
size(400, 400);
frameRate(30);
//Write your code here
}};
var canvas = document.getElementById("myCanvas");
var processingInstance = new Processing(canvas, sketchProc);
