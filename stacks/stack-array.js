export class Stack {
    constructor() {
        this.items = [];
    }

    push(elements) {
        this.items.push(elements);
    }

    pop() {
        const lastItem = this.items.pop()
        return lastItem;
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    clear() {
        return this.items = [];
    }
}

