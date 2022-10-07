"use strict";

alert("Exercise 1");

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d')

drawName();

function drawName() {

    //E
    context.beginPath();
    context.lineWidth = 10;
    context.moveTo(80,20);
    context.lineTo(20,20);
    context.lineTo(20,100);
    context.lineTo(80,100);
    context.stroke();

    context.beginPath();
    context.lineWidth = 10;
    context.moveTo(20,60);
    context.lineTo(80,60);
    context.stroke();

    //R
    context.beginPath();
    context.strokeStyle = "red";
    context.lineWidth = 10;
    context.moveTo(100,105);
    context.lineTo(100,20);
    context.lineTo(160,20);
    context.lineTo(160,60);
    context.lineTo(100,60);
    context.stroke();

    context.beginPath();
    context.lineWidth = 10;
    context.moveTo(100,60);
    context.lineTo(163,100);
    context.stroke();

    //N
    context.beginPath();
    context.strokeStyle = "black";
    context.lineWidth = 10;
    context.moveTo(185,105);
    context.lineTo(185,30);
    context.lineTo(240,92);
    context.lineTo(240,15);
    context.stroke();

    //E
    context.beginPath();
    context.strokeStyle = "red";
    context.lineWidth = 10;
    context.moveTo(325,20);
    context.lineTo(265,20);
    context.lineTo(265,100);
    context.lineTo(325,100);
    context.stroke();

    context.beginPath();
    context.lineWidth = 10;
    context.moveTo(265,60);
    context.lineTo(325,60);
    context.stroke();

    //S
    context.beginPath();
    context.strokeStyle = "black";
    context.lineWidth = 10;
    context.moveTo(410,20);
    context.lineTo(345,20);
    context.lineTo(345,60);
    context.lineTo(405,60);
    context.lineTo(405,100);    
    context.lineTo(340,100);    
    context.stroke();

    //T
    context.beginPath();
    context.lineWidth = 10;
    context.strokeStyle = "red";
    context.moveTo(430,20);
    context.lineTo(510,20);
    context.stroke();

    context.beginPath();
    context.lineWidth = 10;
    context.strokeStyle = "red";
    context.moveTo(470,15);
    context.lineTo(470,105);
    context.stroke();
}