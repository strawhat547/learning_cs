// https://leetcode.cn/problems/two-sum/ 




/**
 * leetcode problem 1
 * enumeration
 * @param {Array} nums 
 * @param {number} target 
 * @returns {Array} index
 */
function two_sum(nums, target) {
    let len = nums.length
    for(let i = 0; i < len; i++) {
        for(let j = i + 1; j < len; j++) {
            if(nums[i] + nums[j] === target)
            return [i, j]
        }
    }
}

let nums = [2,7,11,15], target = 9
console.log(two_sum(nums, target))
// [ 0, 1 ]

let nums1 = [3,2,4], target1 = 6
console.log(two_sum(nums1, target1))
// [ 1, 2 ]

let nums2 = [3,3], target2 = 6
console.log(two_sum(nums2, target2))
// [ 0, 1 ]