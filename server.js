const express = require('express')
const port = process.env.PORT || 8080;
const app = express();

const routes = require('./routes/route.js');

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));


routes(app);

// Start the server
const server = app.listen(port, (error) => {
    if(error){
        return console.log(`Error: ${error}`);
    }
    console.log(`Example app listening at http://localhost:${port}`);
    console.log('Welcome!!!!!');
})