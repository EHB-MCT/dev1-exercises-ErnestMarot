"use strict";

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let xPos = [];
let yPos = [];
let size = [];

let ySpeed = 5;
let xSpeed

setup();

function setup() {

    for (let i = 0; i < 50; i++) {
        xPos[0] = width / 2;
        yPos[0] = height;
        size[0] = Utils.randomNumber(25, 50);
    }

    console.log(xPos);
    /*
    x = width / 2;
    y = height;
    size = 50;

    update();
    */

}

function update() {

    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);

    yPos -= ySpeed;
    drawBubble(x, y, size, 100);

    requestAnimationFrame(update);



}

function drawBubble(x, y, size) {

    context.fillStyle = Utils.hsl(hue, 50, 50);
    context.fillCircle(x, y, size);
    context.fillStyle = Utils.hsl(hue, 50, 50);
    context.fillCircle(x + size / 3, y - size / 3, size / 4);
}