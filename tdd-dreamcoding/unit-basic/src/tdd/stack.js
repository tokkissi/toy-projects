class Stack {
  constructor() {
    this._size = 0;
    this.head = null;
  }
  push(item) {
    const node = {
      item: item,
      next: this.head,
    };
    this.head = node;
    this._size++;
  }
  pop() {
    if (this.head === null) {
      throw new Error("스택이 비었습니다");
    }
    const node = this.head;
    this.head = node.next;
    this._size--;

    return node.item;
  }
  size() {
    return this._size;
  }

  peek() {
    if (this.head === null) {
      throw new Error("스택이 비었습니다");
    }
    return this.head.item;
    q;
  }
}

module.exports = Stack;
