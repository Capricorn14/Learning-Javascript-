//using logical AND && operator
var score = 8;
console.log("Mid-level skills:", score > 0 && score < 10);

//using logical OR || operator
var timeRemaining = 0;
var energy = 10;
console.log("Game over:", timeRemaining == 0 || energy == 0);

//using the modulus % operator
var num1 = 2;
var num2 = 5;
var test1 = num1 % 2;
var test2 = num2 % 2;
var result1 = (test1 == 0);
var result2 = (test2 == 0);
console.log("Is", num1, "an even number?", result1);
console.log("Is", num2, "an even number?", result2);

//using addition + operator
console.log(5 + 10);

//using concatenation + operator
var now = "Now in ";
var three = 3;
var d = "D!";
console.log(now + three + d);

//using the += operator
var counter = 0;
counter += 5;
counter += 3;
console.log(counter);