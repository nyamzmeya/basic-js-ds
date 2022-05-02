const { NotImplementedError } = require("../extensions/index.js");

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
  let index = getIndex(l, k);
  while (index !== null) {
      l = removeFromIndex(l, index);
      index = getIndex(l, k);
  }
  return l;

}

function removeFromIndex(l, index) {
    
  let prev;
  let current = l;
  if (index == 0) {
    l = l.next;
    return l;
  }
  for (let i = 0; i < index; i++) {
      prev = current;
      current = current.next;
  }
  prev.next = current.next;
  

  return l;
}

function getIndex(l, k) {
 
  let index = 0;
  
  while (l.next) {
    if (l.value == k) {
      return index;
    }
    l = l.next;
    index += 1;
  }
  if (l.value == k) {
      return index;
  }
  return null;
  
}




module.exports = {
  removeKFromList,
};
