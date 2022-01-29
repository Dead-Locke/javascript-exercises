const repeatString = function(string, num) {
    var final = '';
    for(let i = 0; i < num; i++){
        final += string;
    }
    return num < 0? 'ERROR' : final;
};

// Do not edit below this line
module.exports = repeatString;
