

/**
 * 
 * @param {Array} nums 
 * @param {number} target 
 * @returns {number} index
 */
function binary_search(nums, target) {
    let left = 0,
    right = nums.length - 1
    while(left <= right) {
        let mid = Math.floor((left + right) / 2)
        if(target === nums[mid]) {// on the middle position
            return mid
        }else if(target > nums[mid]) {// on the [mid + 1, right]
            left = mid + 1
        }else{// on the [left, mid - 1]
            right = mid - 1
        }
    }
}


console.log(binary_search([-7,-9,0,4,7,13,49], 7))
console.log(binary_search([-7,-9,0,4,7,13,49], -9))
//4 1