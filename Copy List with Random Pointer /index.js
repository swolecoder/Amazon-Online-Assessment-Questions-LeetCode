/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
    let node = head;
    let dummyNode = new Node(0);
    let returnList = dummyNode;
    let map = new Map();

    while (node) {
        dummyNode.next = new Node(node.val);
        map.set(node, dummyNode.next);
        node = node.next;
        dummyNode = dummyNode.next;
    }

    //set random value
    map.forEach((val, key) => {
        val.random = map.get(key.random) || null;
    })

    return returnList.next;

};