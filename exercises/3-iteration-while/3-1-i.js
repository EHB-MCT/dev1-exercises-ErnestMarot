"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawMultipleConcentricCircles();
}

function drawMultipleConcentricCircles() {
    context.lineWidth = 2;
    let i = 0;
    while (i <= 10) {
        let size = i * 15;
        //middle
        Utils.strokeCircle(200, 200, size);
        //upper-left
        Utils.strokeCircle(50, 50, size);
        //upper-right
        Utils.strokeCircle(350, 50, size);
        //lower-left
        Utils.strokeCircle(50, 350, size);
        //lower-right
        Utils.strokeCircle(350, 350, size);
        i++;
    }
}