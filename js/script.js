console.log('linked');

//conditional statement
//to find the bigger number of two values
//'if' statements give a boolean result


// var firstNumber = 81;
// var secondNumber = 213247;
//
// if (firstNumber > secondNumber) {
//   document.getElementById('result').innerHTML = firstNumber + ' is the biggest <br>';
// }
// else {
//   document.getElementById('result').innerHTML = secondNumber + ' is the biggest <br>';
// }
//
//
//
// //logical operators 'and, or, not'
// //used to combine multiple conditions
//
// var age1 = 451 ;
// var age2 = 342 ;
// var age3 = 67 ;
//
//
// if ((age1 > age2) && (age1 > age3)) {
//   document.getElementById('secRes').innerHTML = age1 + ' is the biggest';
// }
// else if ((age2 > age1) && (age2 > age3)) {
//   document.getElementById('secRes').innerHTML = age2 + ' is the biggest';
// }
// else if ((age3 > age1) && (age3 > age2)) {
//   document.getElementById('secRes').innerHTML = age3 + ' is the biggest';
//
// }







//calculate coffee price, consider discount.. condition 5 coffee

//coffee section

var coffeePrice = 3.45;
var quantity = prompt ('how many coffees?')

var cost = coffeePrice * quantity;
var discountedCost = coffeePrice * 95/100 * quantity;

if (quantity >= 5 ){
  document.getElementById('coffRes').innerHTML = 'your coffee total is $' + discountedCost;
}
else {
  document.getElementById('coffRes').innerHTML = 'your coffee total is $' + cost;
}


var coffeType = prompt ('espresso or flat white?')
if (coffeType == 'espresso') {
  document.getElementById('coffeeImage').innerHTML = '<img src="images/espresso.jpg">';
}
else if (coffeType == 'flat white') {
  document.getElementById('coffeeImage').innerHTML = '<img src="images/flatwhite.jpg">';
}

//muffin section

var muffQuant = prompt ('mow many muffins?');

if (muffQuant < 9 ) {
  var muffPrice = 2.35 * muffQuant;
}
else if (muffQuant < 25) {
  var muffPrice = 2.10 * muffQuant;
}
else {
  var muffPrice = 1.90 * muffQuant;
}

document.getElementById('muffinRes').innerHTML = 'your muffin total is $' + muffPrice;




//steak section

// var steakQuant = prompt ('how many steaks?')
//
// if (steakQuant <= 2 ) {
//   var steakPrice = 25.60 * steakQuant;
// }
// else if (steakQuant = 3 ) {
//   var steakPrice = 25.60 * steakQuant - 25.60;
// }
//
//
// document.getElementById('steakPrice').innerHTML = 'your steak total is $' + steakPrice;


var steakQuant = parseInt(prompt ('how many steaks?'));

if (steakQuant >= 2) {

  document.getElementById('steakPrice').innerHTML = 'you get free steak!';
  var sauce = prompt ('do you want sauce?');
  if (sauce === 'yes'){
    var sauceQuant = parseInt(prompt('how many sauce>'));
    var steakCost = steakQuant * 25.60;
  }
}


document.getElementById('steakPrice').innerHTML = 'steakCost=' + steakCost;
