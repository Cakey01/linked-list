import Node from './node.js';

class LinkedList {
  constructor() {
    this.listHead = null;
  }

  append(value) {
    // create node
    const node = new Node(value);

    // if no head node
    if (!this.head()) {
      this.listHead = node;
    } else {
      // start from beginning
      let current = this.listHead;
      // find last node
      while (current.nextNode != null) {
        current = current.nextNode;
      }
      // set node to next of last node
      current.nextNode = node;
    }
  }

  prepend(value) {
    // create node
    const node = new Node(value);
    
    // if there is no head
    if (!this.listHead) {
      this.listHead = node;
    } else {
      // if there is a list head
      node.nextNode = this.listHead;
      this.listHead = node;
    }
  }

  size() {
    let size = 0;
    let current = this.listHead;

    if (!current) {
      return size;
    } else {
      size++;
      while (current.nextNode != null) {
        size++;
        current = current.nextNode;
      }
    }
    return size;
  }

  head() {
    return this.listHead || undefined;
  }

  tail() {
    let current = this.listHead;
    while (current.nextNode != null) {
      current = current.nextNode;
    }
    return current || undefined;
  }

  at(index) {
    index = index - 1;
    return index
  }

  pop() {

  }

  contains(value) {

  }

  findIndex(value) {

  }

  toString() {

  }

  insertAt(index, ...values) {

  }

  removeAt(index) {

  }

}

const list = new LinkedList();

list.append('cat');
list.append('dog');
list.append('fish');
list.prepend('lizard')

console.log('list:', list);
console.log('head:', list.head())
console.log('size:', list.size())
console.log('tail:', list.tail())
console.log('at:', list.at(1))


console.log('done')