// index.
function distanceFromHqInBlocks(block){

}
// index.js

// Function 1: Distance from HQ in blocks
function distanceFromHqInBlocks(block) {
    const hqLocation = 42;  // Headquarters located at block 42
    return Math.abs(block - hqLocation);  // Return the absolute difference
}

// Function 2: Distance from HQ in feet (assuming each block is 264 feet)
function distanceFromHqInFeet(block) {
    const blocks = distanceFromHqInBlocks(block);  // Use the previous function to get the block distance
    return blocks * 264;  // Multiply by 264 feet per block
}

// Function 3: Distance travelled in feet between two points (start and destination)
function distanceTravelledInFeet(start, destination) {
    const blocks = Math.abs(destination - start);  // Get the block distance
    return blocks * 264;  // Convert to feet
}

// Function 4: Fare calculation based on the distance travelled
function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);  // Get the distance in feet
    
    if (distance <= 400) {
        return 0;  // First 400 feet are free
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02;  // 2 cents per foot after the first 400 feet
    } else if (distance > 2000 && distance <= 2500) {
        return 25;  // Flat fare of 25 dollars for distances over 2000 feet
    } else {
        return 'cannot travel that far';  // If the distance exceeds 2500 feet
    }
}

module.exports = {
    distanceFromHqInBlocks,
    distanceFromHqInFeet,
    distanceTravelledInFeet,
    calculatesFarePrice,
};


