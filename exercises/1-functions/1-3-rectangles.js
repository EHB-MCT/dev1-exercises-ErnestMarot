"use strict";

alert("Exercise 3");

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

drawCrossedBox();

function drawCrossedBox() {

    //white rect w/ red borders
    context.strokeStyle = "red";
    context.fillStyle = "white";
    context.beginPath();
    context.rect(50, 50, 150, 150);
    context.rect(200, 200, 150, 150);
    context.rect(75, 275, 50, 50);
    context.rect(275, 75, 50, 50);
    context.fill();
    context.stroke();

    //black middle rect
    context.strokeStyle = "red";
    context.fillStyle = "black";
    context.beginPath();
    context.rect(125, 125, 150, 150);
    context.fill();
    context.stroke();

    //small black rect
    context.fillStyle = "black";
    context.beginPath();
    context.rect(50, 325, 25, 25);
    context.rect(325, 50, 25, 25);
    context.fill();

}