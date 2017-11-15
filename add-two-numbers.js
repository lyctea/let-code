/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let list = new ListNode(0);
    var result = list;

    var sum,
        carry = 0;

    while (l1 || l2 || carry > 0) {
        sum = 0;

        if (l1 != null) {
            sum += l1.val;
            l1 = l1.next;
        }

        if (l2 != null) {
            sum += l2.val;
            l2 = l2.next;
        }

        sum += carry;

        list.next = new ListNode(sum % 10);
        carry = parseInt(sum / 10);

        list = list.next;
    }

    return result.next;
};

/**
 * 连接两个非负整数，越往前，位数越低。 需要注意是的进位的操作。用一个变量保存进位，循环结束的条件是
 * l1、l2、以及进位carry都为假值时，运算结束
 */
