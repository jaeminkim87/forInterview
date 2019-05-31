const { List } = require('./list');

class Queue {
  constructor() {
    this.list = new List();
  }

  enqueue(value) {
    const node = this.list.append(value);
    this.top = node;
  }

  dequeue() {
    const node = this.list;
    const value = node.head.element;
    node.head = node.head.next;
    return value;
  }
  fullList() {
    const node = this.list.display();
    return node;
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(4);
console.log(queue.fullList());
queue.dequeue();
console.log(queue.fullList());
