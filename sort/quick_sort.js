

function quick_sort(nums) {
    let len = nums.length
    if(len <= 1) return nums
    let pivot = nums[len - 1]
    let left  = []
    let right = []
    for(let i = 0; i < len - 1; i++) {
        if(nums[i] < pivot) {
            left.push(nums[i])
        } else {
            right.push(nums[i])
        }
    }
    return [...quick_sort(left), pivot, ...quick_sort(right)]
}

console.log(quick_sort([-1,8,19,2,40,0]))
// [ -1, 0, 2, 8, 19, 40 ]