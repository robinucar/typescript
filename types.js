function add(n1, n2) {
    return n1 + n2;
}
var number1 = 5;
var number2 = 7;
var number3 = '6';
var number4 = '8';
// const result  = add(number1, number2);
// console.log(result)
// output is 12
var result1 = add(number3, number4);
console.log(result1);
// output: error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.
// typescript compiler translate typescript code to javascript, and Javascript is not a typed language.
//Therefore as a result2 we are seeing 68 on the console, which is wrong canculation
//javascript just concat two strings
console.log(typeof (number1));
console.log(typeof (number2));
console.log(typeof (number3));
console.log(typeof (number4));
