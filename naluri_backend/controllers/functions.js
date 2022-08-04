// function to calculate the Pi value
const calculatePI = async (PI, n, one) => {
   // The number of iteratios is set to 1000000 for better accuracy
   for (let i = 0; i <= 1000000; i++) {
    PI = PI + (one * (4 / ((n) * (n + 1) * (n + 2))));
    
    // multiply one by -1 on each iteration
    one = one * (-1);

    // Increase n by 2 based on the formula
    n += 2;
}

    // Return the value of Pi
    return PI;
}
// function to calculate the circumference of a circle
const CALCULATE_CIRCUMFERENCE = async (pi, radius) => {
    try{
        const circumference = pi * 2 * radius;
        return circumference;
    } catch(err){
        console.log(err);
    }
}

// calculate the value of PI and circumference of the sun
console.time('calculatePI');
const CALCULATE_PI_CIRCUMFERENCE = async () => new Promise(async(resolve) => {
    try{
        const pi = await calculatePI(3, 2, 1);
        const circumference = await CALCULATE_CIRCUMFERENCE(pi, 696340);
        const info = {
            pi,
            circumference
        }
        resolve(info);
    } catch(err){
        console.log(err);
    }
}
);
console.timeEnd('calculatePI');

module.exports = {
    CALCULATE_PI_CIRCUMFERENCE
}