// Count of Positives , Sum of Negatives

// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].


// Logical Solution
function countPositivesSumNegatives(input) {
    if (input == null || input.length == 0)
      return [];
    
    var positive = 0;
    var negative = 0;
    
    for (var i=0, l=input.length; i<l; ++i)
    {
      if (input[i] > 0)
        ++ positive;
      else
        negative += input[i];
    }
    
    return [positive, negative];
}


// Other Solutions
function countPositivesSumNegatives(input) {
    return input && input.length ? [input.filter(p => p > 0).length, input.filter(n => n < 0).reduce((a, b) => a + b, 0)] : [];
}


// 2
function countPositivesSumNegatives(input) {
    if (!Array.isArray(input) || !input.length) return [];
    return input.reduce((arr, n) => {
      if (n > 0) arr[0]++;
      if (n < 0) arr[1] += n;
      return arr;
    }, [0, 0]);
}


// 3
function countPositivesSumNegatives(input) {
    var newArr = [];
    var positiveNumber = 0;
    var negativeNumber = 0;
    
    // Validate Input
    if (input === null || input.length === 0)
      return newArr;
    
    // Loop through array of Numbers 
    for (var i = 0; i < input.length; i++) {
      if (input[i] == 0)
       continue;
    
      // Count positives
      else if (input[i] > 0) 
        positiveNumber++;     
          
      // Sum negatives
      else if (input[i] < 0) 
        negativeNumber += input[i];
      
    }
    
    // Prepare Output
    newArr.push(positiveNumber);
    newArr.push(negativeNumber);
    
    return newArr;
}


// 4
function countPositivesSumNegatives(input) {
    return (input && input.length) ? [
      input.filter(x => x > 0).length,
      input.reduce((t, c) => c < 0 ? t + c : t, 0)
    ] : [];
}
