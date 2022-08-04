// import the CALCULATE_PI method from the functions.js file
const { CALCULATE_PI_CIRCUMFERENCE } = require('../controllers/functions');
// import the express module
const express = require('express');
// define the router
const router = express.Router();

// define get method to get the value of PI
router.get('/getPI', async (req, res) => {
    try {
        const data = await CALCULATE_PI_CIRCUMFERENCE();
        res.status(200).json({
            message: 'Successfully retrieved PI',
            pi: data.pi,
            circumference: data.circumference,
        });
    } catch (err) {
        res.status(500).json({
            message: 'Error retrieving PI',
            err
        });
    }
}
);

// export the router
module.exports = router;