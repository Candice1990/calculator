
var numbers = [];
var calc = [];
var result = 0;

// functions for the basic operations
function add (num1, num2){
 return (num1 + num2);
};

function subtract(num1, num2){
  return (num1 - num2);
};

function multiply(num1, num2){
  return(num1*num2);
};

function divide(num1, num2){
  return(num1/num2);
};

/*function equalPressedAgain(num1, num2){
  var holdNumber = num2;
  return()
}*/


$(document).ready(function(){
// function prints number for the button that is pressed
function pressButton(){
	var printNumber = $(this).text();
	numbers.push(printNumber);
  //var display = $('.display');
  //display.text(display.text()+printNumber);
};

//function keeps track of operator pressed
function pressOperators(){
  getNum();
  var printOperator = $(this).text();
  calc.push(printOperator);
  //var display = $('.display');
  //display.text(display.text()+ printOperator);
  console.log(calc);

};


// function clears the numbers to "0" in the numbers array.
function clearButton(){
 	numbers = [];
  calc = []
  result = 0;
	console.log(numbers);
};


function pressEqual(){
    getNum();
    switch(calc[1]){
      case ('+'):
        result = add(calc[0],calc[2]);
        break;
      case('-'):
        result = subtract(calc[0],calc[2]);
        break;
      case('x'):
        result = multiply(calc[0],calc[2]);
        break;
      case('/'):
        result = divide(calc[0],calc[2]);
        break;
      default:
        result = calc[2];
        break;
      }
    calc = [];
    console.log(result);
    calc.push(result);

    console.log(calc);


};

function getNum(){
  if (numbers.length > 0){
    var n = parseFloat(numbers.join(''));
    calc.push(n);
    numbers=[];
    console.log(calc)
  }
};


$(".num").click(pressButton);

$(".clearButton").click(clearButton);
$(".equal").click(pressEqual);
$(".operator").click(pressOperators);

});
