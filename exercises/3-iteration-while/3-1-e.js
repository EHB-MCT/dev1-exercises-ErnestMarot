"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawDiagonalGrid();
}

function drawDiagonalGrid() {
    let i = 0;
    let margin = 25;
    while (i <= 6) {
        Utils.drawLine(200 + (i * margin), 50 + (i * margin), 50 + (i * margin), 200 + (i * margin));
        Utils.drawLine(200 - (i * margin), 50 + (i * margin), 350 - (i * margin), 200 + (i * margin));
        i++;
    }
}