"use strict";

import context from "../../scripts/context.js";
import * as utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;
let margin = 200;

drawBubbles();

function drawBubbles() {
    for (let i = 0; i < 50; i++) {
        let x = margin + (Math.random() * (width - margin * 2));
        let y = margin + (Math.random() * (height - margin * 2));
        let randomHue = Math.random() * 360;
        let randomSize = 10 + Math.random() * 40;


        let radius = Math.random() * 80;
        let color = utils.rgb;
        let r = Math.random() * 225;
        let g = Math.random() * 225;
        let b = Math.random() * 225;
        context.fillStyle = color(r, g, b);
        utils.fillCircle(x, y, radius);
    }
}