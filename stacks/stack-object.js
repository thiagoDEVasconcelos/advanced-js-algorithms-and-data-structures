class Stack {
    constructor() {
        this.count = 0;
        this.items = {};
    }

    push(element) {
        this.items[this.count] = element;
        this.count++;
    }

    pop() {
        if (this.count === 0) return undefined;
        this.count--;
        const removedItem = this.items[this.count];
        delete this.items[this.count];
        return removedItem;
    }

    size() {
        return this.count;
    }

    isEmpty() {
        return this.count === 0;
    }

    peek() {
        if (this.isEmpty()) return undefined;

        return this.items[this.count - 1];
    }

    toString() {
        if(this.isEmpty()) return undefined;

        let objString = `${this.items[0]}`;

        for (let i = 1; i < this.count; i++) {
            objString = `${objString},${this.items[i]}`;
        }

        return objString;
    }
}

const numberStack = new Stack() 
numberStack.push(1);
numberStack.push(2);
numberStack.push(3);
numberStack.push(4);
numberStack.push(5);
numberStack.pop();
console.log(numberStack.toString());
console.log(numberStack.items);
