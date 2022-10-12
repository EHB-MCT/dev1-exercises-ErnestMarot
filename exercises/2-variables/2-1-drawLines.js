"use strict";

alert("Exercise 1");

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

let width = context.canvas.width;
let height = context.canvas.height;
let margin = 50;

drawLines();

function drawLines() {

    context.beginPath();
    context.lineWidth = 3;
    context.moveTo(margin, height - (9 * (height / 10)));
    context.lineTo(width - margin, height - (9 * (height / 10)));
    context.lineTo(margin, height - (7 * (height / 10)));
    context.lineTo(width - margin, height - (7 * (height / 10)));
    context.lineTo(margin, height - (5 * (height / 10)));
    context.lineTo(width - margin, height - (5 * (height / 10)));
    context.lineTo(margin, height - (3 * (height / 10)));
    context.lineTo(width - margin, height - (3 * (height / 10)));
    context.lineTo(margin, height - (1 * (height / 10)));
    context.lineTo(width - margin, height - (1 * (height / 10)));
    context.lineTo(margin, height - (9 * (height / 10)));
    context.stroke();

}
