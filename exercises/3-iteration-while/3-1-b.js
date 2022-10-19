"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawGrid();
}

function drawGrid() {
    let i = 0;
    let margin = 50;
    while (i < 6) {
        let x = 75;
        let y = x;
        Utils.drawLine(75, (i * margin) + y, 325, (i * margin) + y);
        Utils.drawLine((i * margin) + x, 75, (i * margin) + x, 325);
        i++;
    }
}