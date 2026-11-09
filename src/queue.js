const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  list = {};

  getUnderlyingList() {
    return this.list;
  }

  enqueue(value) {
    const node = new ListNode(value);
    if (this.list.value !== undefined) {
      let current = this.list;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
    } else {
      this.list = node;
    }
  }

  dequeue() {
    if (this.list.value === undefined) return undefined;

    const currentValue = this.list.value;
    const next = this.list.next;
    this.list = next ? next : {};
    return currentValue;
  }
}

module.exports = {
  Queue
};
