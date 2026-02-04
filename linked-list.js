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
    if (!this.listHead) {
      return undefined;
    }
    let current = this.listHead;
    while (current.nextNode != null) {
      current = current.nextNode;
    }
    return current;
  }

  at(index) {
    let listIndex = 0;
    let current = this.listHead;

    while (listIndex < index) {
      current = current.nextNode;
      if (!current) {
        return undefined;
      }
      listIndex++;
    }
    return current;
  }

  pop() {
    if (!this.listHead) {
      return undefined;
    }
    
    const popNode = this.listHead;
    this.listHead = popNode.nextNode;
    return popNode;
  }

  contains(value) {
    let current = this.listHead;

    while (current != null) {
      if (current.value === value) {
        return true;
      }
      current = current.nextNode;
    }
    return false;
  }

  findIndex(value) {
    let current = this.listHead;
    let index = 0;
    
    while (current != null) {
      if (current.value === value) {
        return index;
      }
      current = current.nextNode;
      index++;
    }
    return -1;
  }

  toString() {
    let current = this.listHead;
    let string = '';

    if (current === null) {
      return string;
    }

    while (current != null) {
      string += `( ${current.value} ) -> `;
      current = current.nextNode;
    }
    string += 'null';
    return string;
  }

  insertAt(index, ...values) {
    if (index < 0 || index > this.size()) {
      throw new RangeError('Index is out of bounds');
    }

    let previous = index === 0 ? null : this.at(index - 1);
    let next = this.at(index);

    for (let value of values) {
      const insert = new Node(value);

      if (previous === null) {
        this.listHead = insert;
      } else {
        previous.nextNode = insert;
      }
      insert.nextNode = next;
      previous = insert;
    }
  }

  removeAt(index) {
    if (index < 0 || index > this.size()) {
      throw new RangeError('Index is out of bounds');
    }
  }

}

const list = new LinkedList();

list.append('1');
list.append('2');
list.append('3');

console.log('list:', list);
console.log('head:', list.head())
console.log('size:', list.size())
console.log('tail:', list.tail())
console.log('at:', list.at(0))
console.log('contains:', list.contains('fish'))
console.log('findIndex:', list.findIndex('leek'))
console.log('toString:', list.toString())
list.insertAt(1, '10')
console.log('toString:', list.toString())



console.log('done')