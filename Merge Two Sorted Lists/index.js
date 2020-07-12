/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    let dummList = new ListNode(0);
    let returnList = dummList;

    while (l1 && l2) {
        if (l1.val < l2.val) {
            dummList.next = new ListNode(l1.val);
            dummList = dummList.next;
            l1 = l1.next
        } else {
            dummList.next = new ListNode(l2.val);
            dummList = dummList.next;
            l2 = l2.next
        }
    }

    if (l1) dummList.next = l1;
    if (l2) dummList.next = l2;

    return returnList.next;
};