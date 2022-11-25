"use strict";

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

drawMaze();

function drawMaze() {

    context.lineWidth = 20;

    for (let i = 0; i < 5; i++) {

        let random = Math.round(Math.random());

        if (random == 0) {
            Utils.drawLine(0, 0, 100, 100);
        } else {
            Utils.drawLine(0, 100, 100, 0);
        }
    }

}