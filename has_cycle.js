



function ListNode(val) {
    this.val = val
    this.next = null
}

/**
 * check whether a linklist has a cycle or not
 * @param {ListNode} head 
 * @returns boolean
 */
function has_cycle(head) {
    let [slow, fast] = [head, head]
    while(fast && fast.next) {
        if(fast === slow) return true
        slow = slow.next
        fast = fast.next.next
    }
    return false
}