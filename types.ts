function add(n1:number, n2:number) { //setup types
    return n1 + n2
}

const number1 = 5;
const number2 = 7;

const number3 = '6';
const number4 = '8';



// const result  = add(number1, number2);
// console.log(result)

// output is 12

const result1 = add(number3,number4)
console.log(result1)

// output: error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.
// typescript compiler translate typescript code to javascript, and Javascript is not a typed language.
//Therefore as a result2 we are seeing 68 on the console, which is wrong canculation
//javascript just concat two strings
