const numbers = [1, 2, 3, 4];

Array.prototype.reIndex = function(array) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== undefined) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

Array.prototype.removeFirstPosition = function() {
    for (let i = 0; i < this.length; i++) {
        this[i] = this[i + 1];
    }
    return this.reIndex(this);
}

const result = numbers.removeFirstPosition()
console.log(result);
