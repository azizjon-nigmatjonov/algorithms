function factorial (n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result = result * i
    }
    return result
}

console.log(factorial(5))

function calcFactorial (n) {
    if (n == 1) {
        return 1
    }
    return n * calcFactorial(n - 1)
}

console.log(calcFactorial(5))