const express = require('express');
// load the routes
const routes = require('./routes/routes');
// define the app
const app = express();
// define the port
const port = process.env.PORT || 3010;
// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-disposition, Content-Type, Accept, Authorization');
  next();
});
app.use('/naluri/v1', routes);

// create start async function
const start = async () => {
  try {
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
};
// start the server
start();
