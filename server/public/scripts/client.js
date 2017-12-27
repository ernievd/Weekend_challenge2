class DataEntered {
    constructor (firstNumber, secondNumber, operator) {
        this.firstNumber = firstNumber;
        this.secondNumber = secondNumber;
        this.operator = operator;
    }
}

// let roundNum = 1;
// let guessCount = 0;
// let maxNum; // used to store max number selected

$(document).ready(start);

// event listeners
function start () {
    $('#resultsButton').on('click', main);
    // $('#mainContainer').on('click', '#cancelGame', cancel);
    // $('#mainContainer').on('click', '#submitUserGuess', submitGuess);
}

function main () {
   console.log('clicked in resultsButton');

//    let $input = $('<input type="number>');
    let $container = $('#mainContainer');
    let firstNum = $('#firstNumber').val();
    let secondNum = $('#secondNumber').val();
    let operation = $('#functionDropDown option:selected').text();
    console.log('variables assigned : ' + firstNum +
        ' ' + operation +
        ' ' + secondNum);
    
    dataObj = new DataEntered(firstNum, secondNum, operation);
    console.log('object to send - ' + dataObj);
    
    // start ajax to send random number to server upon clicking the button.
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
            $("#resultsContainer").append("<div> calculation: " + firstNum +
            ' ' + operation +
            ' ' + secondNum + 
            " = " + response + "</div>");   
        } // End function response
    }); // End ajax Get

//    $container.append('<div id="resultsCont"><label>Player 1</label><input type="number" id="playerOne"></div>')
//    $container.append('<div id="two"><label>Player 2</label><input type="number" id="playerTwo"></div>')
//    $container.append('<div id="three"><label>Player 3</label><input type="number" id="playerThree"></div>')
//    $container.append('<div id="four"><label>Player 4</label><input type="number" id="playerFour"></div>')
//    $container.append('<div><button id="submitUserGuess">Submit Guess</button><button id="cancelGame">Quit Loser</button></div>')
//    console.log('this is the max num upon click start:', maxNum);
//    $('h2').html('The maximum number is: ' + maxNum); // appending maximum number to the h2 element.
//    $('h3').text(roundNum); // Displays the count of rounds every time submit is clicked.
//    $(this).toggle();// this toggles the start button to remove the start game/quit button.
//    $('#dropDown').toggle(); // remove drop down on toggle of start button. 
//    // get dropdown value

}// end main

//cancel button functions 
function cancel () {
console.log('cancel button has been clicked');
// $('#statContainer').append();
$('#startGame').toggle();
$('#dropDown').toggle();
$('h2').empty();
$('#mainContainer').empty();
$('h3').empty();
roundNum = 1;
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

// To DO
// total guess counter = total number of guesses overall
// high or low

//after server. 
// reset button to restart game upon winning.  
