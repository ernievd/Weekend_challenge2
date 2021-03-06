const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 9999;
const calculateFunc = require('./calculateFunc.js');
let data;
let result;
let historyArray = [];
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));

app.post('/calculatePost', function (req, res) {
    dataObj = req.body;
    console.log('this is the data:', dataObj);
    result = calculateFunc(dataObj);
    console.log('Output from calculateFunc: ', result);
    //Add input and results to the history array
    historyArray.push(dataObj.firstNumber +
        ' ' + dataObj.operator +
        ' ' + dataObj.secondNumber +
        ' = ' + result);
    res.sendStatus(201);
});

app.get('/resultGet', function (req, res) {
    res.send(historyArray);
  });

app.listen(port, function () {
    console.log('server is up on:', port);
})

