function factorialNumberCalculation (n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    else {
        return n * factorialNumberCalculation (n - 1);
    }
}
var result = factorialNumberCalculation (10);
console.log (result);