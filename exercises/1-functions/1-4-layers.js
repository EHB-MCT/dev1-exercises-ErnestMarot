"use strict";

alert("Exercise 4");

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

drawMaze();

function drawMaze() {

    //rect 1
    context.fillStyle = "#ADD9E6";
    context.strokeStyle = "black";
    context.lineWidth = 1.5;
    context.beginPath();
    context.rect(50, 50, 300, 300);
    context.fill();
    context.stroke();

    //rect 2
    context.fillStyle = "#ADD9E6";
    context.strokeStyle = "black";
    context.lineWidth = 1.5;
    context.beginPath();
    context.rect(50, 50, 250, 250);
    context.fill();
    context.stroke();

    //rect 3
    context.fillStyle = "#ADD9E6";
    context.strokeStyle = "black";
    context.lineWidth = 1.5;
    context.beginPath();
    context.rect(100, 50, 200, 200);
    context.fill();
    context.stroke();

    //rect 4
    context.fillStyle = "#ADD9E6";
    context.strokeStyle = "black";
    context.lineWidth = 1.5;
    context.beginPath();
    context.rect(150, 100, 150, 150);
    context.fill();
    context.stroke();

    //rect 5
    context.fillStyle = "#ADD9E6";
    context.strokeStyle = "black";
    context.lineWidth = 1.5;
    context.beginPath();
    context.rect(150, 150, 100, 100);
    context.fill();
    context.stroke();
}