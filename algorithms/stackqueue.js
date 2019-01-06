class Stack {
    constructor() {
        this.length = 0;
    }

    _reset(val) {
        let head = { val };
        this.head = head;
        this.length = 1;
    }

    push(val) {
        let node = { val };

        if (!this.head) {
            this._reset(val);
        } else {
            node.prev = this.head;
            this.head = node;
            this.length++;
        }
    }

    pop() {
        if (this.head) {
            let head = this.head;
            this.head = head.prev;
            this.length--;
            return head.val;
        }
    }

    pick() {
        if (this.head) {
            return this.head.val;
        }
    }
}

class Queue {
    constructor() {
        this.length = 0;
    }

    _reset(val) {
        let head = { val };
        this.head = head;
        this.tail = head;
        this.length = 1;
    }

    enqueue(val) {
        let node = { val };

        if (!this.head) {
            this._reset(val);
        } else {
            node.next = this.tail;
            this.tail.prev = node;
            this.tail = node;
            this.length++;
        }
    }

    dequeue() {
        let head = this.head;
        this.head = head.prev;
        this.length--;
        return head.val;
    }

    pick() {
        return this.head.val;
    }
}

class QueueFromStacks {
    constructor() {
        this.s1 = new Stack();
        this.s2 = new Stack();
        this.length = 0;
    }

    enqueue(val) {
        for (let i = 0; i < this.length; i++) {
            this.s2.push(this.s1.pop());
        }

        this.s1.push(val);

        for (let i = 0; i < this.length; i++) {
            this.s1.push(this.s2.pop());
        }

        this.length++;
    }

    dequeue() {
        this.length--;
        return this.s1.pop();
    }

    pick() {
        return this.s1.pick();
    }
}
