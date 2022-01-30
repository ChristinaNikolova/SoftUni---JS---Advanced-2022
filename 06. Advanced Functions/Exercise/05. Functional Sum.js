function add(a) {
    let sum = 0;
    sum += a;

    calc.toString = () => {
        return sum;
    }
    return calc;

    function calc(b) {
        sum += b
        return calc;
    }
}

console.log(add(1));
console.log(add(1)(6)(-3));