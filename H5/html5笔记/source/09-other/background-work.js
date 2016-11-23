onmessage = function(e) {

}

// var fibonacci = function(n) {
//   return n < 2 ? n : arguments.callee(n - 1) + arguments.callee(n - 2);
// };
function fibonacci(n) {
  return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

var res = fibonacci(39);
self.postMessage(res);
