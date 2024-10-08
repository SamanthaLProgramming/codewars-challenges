// By 3, or not by 3? That is the question . . .

// A trick I learned in elementary school to determine whether or not a number was divisible by three is to add all of the integers in the number together and to divide the resulting sum by three. If there is no remainder from dividing the sum by three, then the original number is divisible by three as well.

// Given a series of digits as a string, determine if the number represented by the string is divisible by three.

// Example:

// "123"      -> true
// "8409"     -> true
// "100853"   -> false
// "33333333" -> true
// "7"        -> false


// My Solution
function divisibleByThree(str){
    return str.split('').reduce( (a, b) => +a + +b, 0) % 3 === 0
}



// Other Solutions
function divisibleByThree(str){
    return [...str].reduce( (s, d) => +d + s,0) % 3 === 0;
}



// 2
function divisibleByThree(str) {
    let s = 0;
    for (const c of str)
      s += parseInt(c);
    return s % 3 == 0;
}



// 3
const divisibleByThree = (str) => {
    const num = [...str].reduce((a, b)=> +a + +b, 0)
    return parseInt(num / 3) === num / 3
}



// 4
function divisibleByThree(str){
    let sum = 0
    for (let i = 0; i < str.length; i++) sum += Number(str[i])
    if (Number.isInteger(sum / 3)) return true
    else return false
}