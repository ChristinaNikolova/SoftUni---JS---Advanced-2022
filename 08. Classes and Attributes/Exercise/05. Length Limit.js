class Stringer {
    constructor(str, initialLength) {
        this.innerString = str;
        this.innerLength = initialLength;
    }

    increase(length) {
        this.innerLength += length;
    }

    decrease(length) {
        this.innerLength = Math.max(0, this.innerLength - length);
    }

    toString() {
        let result = this.innerString.slice(0, this.innerLength);

        if (this.innerString.length > this.innerLength) {
            result += '...';
        }

        return result;
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test 
test.decrease(3);
console.log(test.toString()); // Te...
test.decrease(5);
console.log(test.toString()); // ... 
test.increase(4);
console.log(test.toString()); // Test 