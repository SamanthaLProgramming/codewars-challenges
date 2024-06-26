// Small Enough?

// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.


// My Solution
function smallEnough(a, limit){
    return a.every( num => num <= limit)
}


// Other Solutions
function smallEnough(a, limit){
    return Math.max(...a) <= limit
}


// 2
function smallEnough(a, limit){
    for(var i of a){
      if(i > limit)
        return false;
    }
    return true;
}


// 3
function smallEnough(array, limit){
    return array.filter( (value) => value > limit ).length > 0 ? false : true;
}


// 4
const smallEnough = (arr, limit) => arr.every( num => num <= limit)