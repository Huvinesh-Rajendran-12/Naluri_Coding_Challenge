const calculatePI = async (PI, n, sign) => {
   // The number of iteratios is set to 1000000 for better accuracy
   for (let i = 0; i <= 1000000; i++) {
    PI = PI + (sign * (4 / ((n) * (n + 1) * (n + 2))));
    
    // multiply the sign by -1 on each iteration
    sign = sign * (-1);

    // Increase n by 2 based on the formula
    n += 2;
}

    // Return the value of Pi
    return PI;
}

const CALCULATE_PI = async () => new Promise(async(resolve) => {
    try{
        const pi = await calculatePI(3, 2, 1);
        resolve(pi);
    } catch(err){
        console.log(err);
    }
}
);

module.exports = {
    CALCULATE_PI
}