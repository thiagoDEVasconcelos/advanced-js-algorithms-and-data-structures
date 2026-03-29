import { Stack } from "./stack-array.js";

function baseConverter(decimalNumber, base) {
    const remStack = new Stack();
    const digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let rem;
    let number = decimalNumber;
    let baseString = '';

    if (base < 2 || base > 36) {
        return '';
    }

    while (number > 0) {
        rem = Math.floor(number % base)
        remStack.push(rem);
        number = Math.floor(number / base);
    }

    while(!remStack.isEmpty()) {
        baseString += digits[remStack.pop()];
    }

    return baseString;
}

console.log(baseConverter(400, 2));
console.log(baseConverter(100, 16));
