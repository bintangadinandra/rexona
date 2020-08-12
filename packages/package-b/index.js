const quoteMeFromA = require('package-a');

function appendBFromA() {
    const a = quoteMeFromA();
    return a + ' From B'
}

module.exports = appendBFromA