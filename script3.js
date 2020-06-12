//a javascript function iterating intergers from 1 to 100,prints fizz for multiples of 3,buzz for multiples of 5 and fizzbuzz for multiples of both 3 and 5
function fizzBuzz() {
    for(var i= 1; i< 100; i++) {
        if(i % 3 === 0) {
            console.log("Fizz");
        } else if(i % 5 === 0) {
            console.log("Buzz");
        } else if(i % 3 && i % 5) {
            console.log("FizzBuzz");
        }
        }
}
console.log(fizzBuzz(90));
