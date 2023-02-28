// ---------------setInterval------------

// const timerIntervalID = setInterval(function () {
//     console.log('Fired!')
// }, 2000);

// clearInterval(timerIntervalID)

// ------------setTimeout-------------

// setTimeout(function () {
//     console.log('Dodo')
// }, 3000);

// --------setInterval + setTimeout-----------

const timerID = setInterval(function () {
    console.log('Ogonb')
}, 1000);

setTimeout(function () {
    clearInterval(timerID)
}, 10000)

//