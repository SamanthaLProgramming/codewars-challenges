// What Is Between?

// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]


// My Solution
function between(a, b) {
    let result = []
    
    for (let i = a; i <= b; i++) {
      result.push(i)
    }
    
    return result
}


// Other Solutions
const between = (a, b) => Array.from(new Array(b-a+1), (_, i) => a + i);



// 2
function between(a, b) {  
    const betweenArray = []
    
    while (a <= b) {
      betweenArray.push(a);
      a++;
    }
    
    return betweenArray;
}



// 3
const between = (a, b) =>
    [...Array(b - a + 1)].map((_, idx) => idx + a);