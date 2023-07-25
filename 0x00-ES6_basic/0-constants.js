// write a function tackfirst to instantiate variables using const
// write a function tackNext to instantiate variables using let

function tackFirst() {
    const task = 'I prefer const when I can.';
    return task;
    }

function tackNext() {
    const combination = 'But sometimes let is necessary.';
    return combination;
    }

module.exports = {
    tackFirst, tackNext     
}

// Path: 0x00-ES6_basic\1-arrow.js
