const { List } = require('./list');

class Stack {
  constructor() {
    this.list = new List();
    this.top = null;
  }

  pop() {
    if (this.top != null) {
      const value = this.list.last().element;
      const node = this.list.remove(this.list.last().element);
      this.top = node;
      return value;
    }
    return null;
  }

  push(element) {
    const node = this.list.append(element);
    this.top = node;
  }

  fullList() {
    const node = this.list.display();
    return node;
  }

  peek() {
    return this.top.element;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(4);
console.log(stack.peek());
console.log(stack.fullList());
console.log(stack.pop());
console.log(stack.pop());
