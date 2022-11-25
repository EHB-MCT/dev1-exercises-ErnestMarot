"use strict";

import context from "../../script/context.js";
import * as Utils from "../../script/utils.js";

let width = context.canvas.width;
let height = context.cavans.height;

window.onmousemove = changeColor;

let frameCount = 0;

update();

function update() {
    if (frameCount % 2 == 0) {
        console.log(mouseHue);
        let x = Utils.randomNumber(0, width);
        let y = Utils.randomNumber(0, height);
        let size = Utils.randomNumber(10, 100);
        drawBubble(x, y, size, hue);
    } else {
        console.log("dont");
    }
    frameCount++;
    requestAnimationFrame(update);

    function drawBubble(x, y, size, hue) {
        context.fillStyle = Utils.hsl(hue, 50, 50);
        Utils.fillCirlce(x, y, size);
        context.fillStyle = Utils.hsl(hue, 50, 75);
        Utils.fillCirlce(x + size / 3, y - size / 3, size / 4);
    }
}

function changeColor(eventData) {
    mouseHue = eventData.pageX;
}
