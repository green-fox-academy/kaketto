'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let numberOfLines: number = 15;
let numberOfQuarters: number = 16;
let numberOfRows: number = Math.sqrt(numberOfQuarters);
let diff: number = (canvas.height - 20) / numberOfLines / numberOfRows;

let topLeftCorner: number[] = [10 / numberOfRows, 10 / numberOfRows];

function drawLinePlay (coordinates: any[]) {
    for (let i: number = 1; i < numberOfLines; i++) {
        ctx.beginPath();
        ctx.strokeStyle = 'green';
        ctx.moveTo(coordinates[0], coordinates[1] + i * diff);
        ctx.lineTo(coordinates[0] + i * diff, coordinates[1] + diff * numberOfLines);
        ctx.stroke();
        ctx.beginPath();
        ctx.strokeStyle = 'purple';
        ctx.moveTo(coordinates[0] + i * diff, coordinates[1]);
        ctx.lineTo(coordinates[0] + numberOfLines * diff, coordinates[1] + i * diff);
        ctx.stroke();
    }
}

for (let xMove: number = 0; xMove < numberOfRows; xMove++) {
    for (let yMove: number = 0; yMove < numberOfRows; yMove++) {
        topLeftCorner[0] === xMove * (canvas.width / numberOfRows);
        topLeftCorner[1] === yMove * (canvas.width / numberOfRows);
        drawLinePlay(topLeftCorner);
    }
}
