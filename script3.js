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