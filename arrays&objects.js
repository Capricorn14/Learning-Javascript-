//Creating arrays and objects
var clothes = [];

//add 5 clothing items in the array using the push() method
clothes.push('t-shirts');
clothes.push("Baggy jeans");
clothes.push("skirt");
clothes.push("scarf");
clothes.push("beanie");
console.log(clothes);

//pop() the 5th item from the array
clothes.pop();
console.log(clothes);

//add another item into the array using the push() method
clothes.push("Turtle neck");
console.log(clothes);

//console.log the 3rd item from the array
console.log(clothes[2]);

//create a new empty object literal
var favCar = {};

//Adding properties to the car object
favCar.color = "red";
favCar.convertible = true;

//console log the favCar object
console.log(favCar);