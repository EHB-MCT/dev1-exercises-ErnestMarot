"use strict";

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let xPos = [0, 0, 0, 0, 0];

setup();
draw();

function setup() {

    context.textAlign = "center";
    context.fillStyle = "white";

}

function draw() {
    drawLines();
    let space = height / 5;

    for (let i = 0; i < xPos.length;) {
        drawSnail[xPos[i], space * i, space, i++];
    }

    drawSnail(space / 2, space / 2, space, 1);
}

function drawLines() {
    let space = height;
    for (let i = 0; i < 5; i++) {
        if (i % 2) {
            context.fillStyle = "lightgray";
        } else {
            context.fillStyle = "gray";
        }
        context.fillRect(0, space * i, width, space);
    }
}