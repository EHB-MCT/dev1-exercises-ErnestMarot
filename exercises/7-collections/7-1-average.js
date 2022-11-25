"use strict";

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let numbers = [0, 0, 98, 46, 23];


setup();

function setup() {

    calculateAverage(numbers);
    console.log(calculateAverage(numbers));

}

function calculateAverage(listOfNumbers) {

    let sum = 0;

    for (let i = 0; i < listOfNumbers.length; i++) {
        numbers[i] = Utils.randomNumber(0, 100);
        sum += listOfNumbers[i];

    }
    return sum / listOfNumbers.length;

}