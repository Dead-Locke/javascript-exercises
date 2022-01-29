const sumAll = function(a,b) {
    if ((typeof a != "number" || typeof b != "number" )|| (a < 0 || b < 0)) return 'ERROR'; // ERROR for negative and NaN
    
    if(a > b){ // switch the numbers if the bigger number is the first argument
        var temp;
        temp = a; 
        a = b;
        b = temp;
    }

    return (a+b)*(b-a+1)/2 //
};

// Do not edit below this line
module.exports = sumAll;
