var randomInt = require('random-int');

module.exports = function (line, column, min, max) {
    var arr = [];
    for (var i = 0; i < line; i++) {
        let sub_arr = [];
        for (let j = 0; j < column; j++) {
            sub_arr.push(randomInt(min, max))
        }
        arr.push(sub_arr);
    }
    return arr;
};