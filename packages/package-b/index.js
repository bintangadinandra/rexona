const quoteMeFromA = require('package-a');

function appendBFromA() {
    const a = quoteMeFromA();
    return a + ' From B, Whoops! another update'
}

module.exports = appendBFromA