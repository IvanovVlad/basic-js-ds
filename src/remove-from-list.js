const {NotImplementedError} = require('../lib');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {

  const result = [];

  let next = l;

  while (next !== null) {
    const currentValue = next.value;
    if (currentValue !== k) {
      result.push(currentValue)
    }
    next = next.next;
  }

  return result.reverse().reduce((acc, cur) => {
    if (acc) {
      const node = { value: cur, next: acc };
      return node;
    }
    return { value: cur, next: null };
  }, null);
}

module.exports = {
  removeKFromList
};
