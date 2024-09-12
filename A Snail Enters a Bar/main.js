// A Snail Enters a Bar

// A snail is crawling along a rubber band that has an initial length of x units. The snail moves at a constant speed of y units per minute. As the snail crawls from the left end of the rubber band to the right end, the rubber band increases in length from the right side every minute, adding z units to its length.

// The question is: Will the snail be able to reach the right end of the rubber band within 1 year?

// Parameters:

// x: Initial length of the rubber band (in units), where 0.01 ≤ x ≤ 1,000,000.
// y: Speed of the snail (in units per minute), where 0.01 ≤ y ≤ 1,000,000.
// z: Amount by which the rubber band increases in length every minute (in units), where 0.01 ≤ z ≤ 1,000,000.
// Examples:

// Example 1:

// Initial length of the rubber band: x = 10 units
// Speed of the snail: y = 2 units/minute
// Increase rate of the rubber band: z = 1 unit/minute
// Outcome: True (The snail will reach the end in 10 minutes.)
// Example 2:

// Initial length of the rubber band: x = 100 units
// Speed of the snail: y = 1 unit/minute
// Increase rate of the rubber band: z = 2 units/minute
// Outcome: False (The snail will never reach the end.)
// Example 3:

// Initial length of the rubber band: x = 100,000 units
// Speed of the snail: y = 0.1 units/minute
// Increase rate of the rubber band: z = 0.05 units/minute
// Outcome: False (The snail will not be able to reach the end within one year.)


// Logical Solution
function canSnailReachEnd(length, speed, lengthIncreases) {
    return lengthIncreases < speed
      && (length / (speed - lengthIncreases) < 365.25 * 24 * 60);
}


// Other Solutions
function canSnailReachEnd(length, speed, lengthIncreases) {
    if (lengthIncreases >= speed) return false;
    if (length / (speed - lengthIncreases) < 525960) return true;
    return false;
}


// 2
function canSnailReachEnd(length, speed, lengthIncreases) {
    let y = speed
    let z = lengthIncreases+ length
    for(let i = 0;i < 365;i++){
      y+=speed
      z+=lengthIncreases
      if(y >= z) {
        return true
      }
    }
    return false;
}


// 3
function canSnailReachEnd(length, speed, lengthIncreases) {
    const minuteYear = 60 * 24 * 365
    const snailDistance = speed * minuteYear;
    const rubberBandYear = length + minuteYear * lengthIncreases;
  
    return snailDistance >= rubberBandYear;
}