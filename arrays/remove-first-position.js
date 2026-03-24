const numbers = [1, 2, 3];

for (i = 0; i < numbers.length; i++) {
    numbers[i] = numbers[i + 1];
}

//last index is undefined
console.log(numbers);
