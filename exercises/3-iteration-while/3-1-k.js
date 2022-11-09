"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawSunBeams();
}

function drawSunBeams() {
    let i = 50;
    while (i <= 30) {
        Utils.drawLine(i, i, 350, 0 + i);
        Utils.drawLine(i, i, 0 + i, 350);
        i = i + 10;
    }
}