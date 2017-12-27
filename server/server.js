const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// const random = require('./random-number.class');
const port = 9999;
const calculateFunc = require('./calculateFunc.js');
let data;
let result;

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));

app.post('/calculatePost', function (req, res) {
    dataObj = req.body;
    console.log('this is the data:', dataObj);
    result = calculateFunc(dataObj);
    console.log('Output from calculateFunc: ', result);
    
    res.sendStatus(201);
});

app.get('/resultGet', function (req, res) {
    // res.send('here are some gifts');
    res.send(String(result));
  });

// app.post('/rando', function (req, res) {
//     console.log('this is req body', req.body);
//     userMax = Number(req.body.max);
//    let randomGenerated = new random(userMax);
//    randomSum = randomGenerated.randomNumber(userMax);
//    console.log('This is our real random number: ', randomSum);
//     res.sendStatus(201);
// });

// app.post('/userInput', function (req, res) {
//     data = req.body;
//     console.log('this is the data:', data);
//     compare(data, randomSum);
//     res.sendStatus(201);
// });


app.listen(port, function () {
    console.log('server is up on:', port);
})

