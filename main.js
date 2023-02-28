// ---------------Секундомер------------

let counter = 0;
let timerID;

const counterElement = document.querySelector('#counter');
const startElement = document.querySelector('#start');
const pauseElement = document.querySelector('#pause');
const resetElement = document.querySelector('#reset');

startElement.onclick = function () {
    timerID = setInterval (function () {
        counter = counter + 1;
        // counter +=1
        // counter ++;
        // console.log(counter);
        counterElement.innerText = counter;
    }, 1000);
}

pauseElement.onclick = function () {
    clearInterval(timerID);
}

resetElement.onclick = function () {
    // console.log(resetElement);
    counter = 0;
    counterElement.innerText = counter
    clearInterval(timerID);
}