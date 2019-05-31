class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class List {
  constructor() {
    this.head = null;
    this.listLength = 0;
  }

  append(element) {
    const node = new Node(element);
    let current = this.head;
    if (current === null) {
      this.head = node;
    } else {
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    return node;
  }

  remove(element) {
    let current = this.head;
    if (current.element === element) {
      this.head = current.next;
      return current;
    }

    while (current) {
      if (current.next.element === element) {
        current.next = current.next.next;
        return this.head;
      }
      current = current.next;
    }
    return current;
  }

  last() {
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    return current;
  }

  display() {
    let str = '';
    let current = this.head;

    while (current) {
      str += `${current.element}`;
      str += ' -> ';
      current = current.next;
    }
    str += 'Null';
    return str;
  }
}

const list = new List();
list.append(1);
list.append(2);
list.remove(1);
list.remove(2);

module.exports = { List, Node };
