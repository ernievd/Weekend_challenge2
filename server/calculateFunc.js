function calculateFunc (obj) {
   console.log('from calculate', obj);

    //    for(let user in obj) {
    //     console.log(obj[user]); 
    // }
    switch (obj.operator) {
        case "+":
            console.log('switch is a plus');
            calculatedResults = Number(obj.firstNumber) + Number(obj.secondNumber);
            break;
        case "-":
            console.log('switch is a minus');
            calculatedResults = Number(obj.firstNumber) - Number(obj.secondNumber);
            break;
        case "*":
            console.log('switch is a multiply');
            calculatedResults = Number(obj.firstNumber) * Number(obj.secondNumber);
            break;
        case "-":
            console.log('switch is a divide');
            calculatedResults = Number(obj.firstNumber) / Number(obj.secondNumber);
            break;

    } //End switch

    return calculatedResults;
};

module.exports = calculateFunc;




// for (let i = 1; i < 5; i++) {
//     if (obj.guess+[i] == random;) {
        
//     }
//     else if (obj.guess+[i] > random;) {
        
//     }
//     el
// }