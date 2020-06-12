//1. a javascript function that takes in 2 intergers and display the larger
function displayLarger(x, y) {
  if(y > x) {
   return y;
    } else if(x === y) {
      return 0;
    } else {
      return x;
    }
}
var first = 10;
var second = 50;
console.log(displayLarger(10, 50));