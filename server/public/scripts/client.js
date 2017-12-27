class DataEntered {
    constructor (firstNumber, secondNumber, operator) {
        this.firstNumber = firstNumber;
        this.secondNumber = secondNumber;
        this.operator = operator;
    }
}

//Set up globals
let arrayCounter = 0;
let firstNum = null;
let secondNum = null; 
let operator = null; 

$(document).ready(start);

// event listeners
function start () {
    $('#resultsButton').on('click', main);
    $('#clearButton').on('click', clear);
}

function getInput()
{
    firstNum = $('#firstNumber').val();
    secondNum = $('#secondNumber').val();
    operation = $('#functionDropDown option:selected').text();
        
    console.log('length: ' + operation.length);
    
    if (firstNum.length == 0 || secondNum == null || operation == 'Select a Function'){
        alert("All input fields must have a value. Please check all inputs.")
        return false;
    }
    else {
        return true;
    }
} // End getInput

function main () {
   console.log('clicked in resultsButton');
    if (getInput()==true){sendAndGetCalc()}
}// end main


function sendAndGetCalc(){
    firstNum = $('#firstNumber').val();
    secondNum = $('#secondNumber').val();
    operation = $('#functionDropDown option:selected').text();
    console.log('variables assigned : ' + firstNum +
        ' ' + operation +
        ' ' + secondNum);
    dataObj = new DataEntered(firstNum, secondNum, operation);
    console.log('object to send - ' + dataObj);
    
    // start ajax to send data to calculate post on the server
    $.ajax ({
        method: 'POST',
        url:'/calculatePost',
        // data: {max: maxNum},
        data : dataObj,
        success: function (response) {
            console.log('caclulate response: ', response);
        }
    });

    $.ajax({
        method: 'GET',
        url: '/resultGet',
        //request went to the server - on success it gets the response and does what is
        //      in the function   'response' has the returned data from the server
        //        this is what is sent from the res.send on the server.js
        success: function (response) {
            console.log('get to /resultGet response: ', response);  
            $("#resultsContainer").append("<div> calculation: " + response[arrayCounter]);
            arrayCounter++;  
        } // End function response
    }); // End ajax Get
}//End sendAndGetCalc


//cancel button functions 
function clear () {
console.log('cancel button has been clicked');
// $('#statContainer').append();
// $('#firstNumber').empty();
// $('#secondNumber').empty();
// $('#functionDropDown').html("<option>Select a Function</option>");
// $('#plus').val("+");
arrayCounter = 0;
firstNum = null;
secondNum = null; 
operator = null; 
location.reload();
}// end cancel Submit

// submit button functions 
function submitGuess () {
    console.log('submit button clicked');

    let userInput = new GuessLog($('#playerOne').val(), $('#playerTwo').val(), $('#playerThree').val(), $('#playerFour').val(), maxNum);
    console.log(userInput);
    roundNum++;
    $('h3').text(roundNum); 
    $.ajax ({
        method: 'POST',
        url: '/userInput',
        data: userInput,
        success: function (response) {
            console.log('this is in submit guess: ', response);
            
        }
    }) 
}
