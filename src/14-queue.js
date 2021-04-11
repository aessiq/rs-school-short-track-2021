const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  get size() {
    let index = 0;
    let current = this.head;
    while (current) {
      current = current.next;
      index++;
    }
    return index;
  }

  enqueue(element) {
    if (this.length === 0) {
      this.head = new ListNode(element);
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = new ListNode(element);
    }
    this.length++;
  }

  dequeue() {
    const result = this.head.value;
    this.head = this.head.next;
    this.length--;
    return result;
  }
}

module.exports = Queue;
