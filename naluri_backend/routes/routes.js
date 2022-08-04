// import the CALCULATE_PI method from the functions.js file
const { CALCULATE_PI } = require('../controllers/functions');
// import the express module
const express = require('express');
// define the router
const router = express.Router();

// define get method to get the value of PI
router.get('/getPI', async (req, res) => {
    try {
        const pi = await CALCULATE_PI();
        res.status(200).json({
            message: 'Successfully retrieved PI',
            pi
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