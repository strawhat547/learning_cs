

/**
 * selection sort: every outer cycle makes min number in nums array sorted on the left side.
 * @param {Array} nums 
 * @returns sorted array
 */
function selection_sort(nums) {
    let len = nums.length
    for(let i = 0; i < len; i++) {
        let min = i
        for(let j = i + 1; j < len; j++) {
           if(nums[j] < nums[min]) min = j
        }
       if(i !== min) [nums[i], nums[min]] = [nums[min], nums[i]]
   
    }
    return nums
}

console.log(selection_sort([5, 2, 4, 6, 1, 3]))
// [ 1, 2, 3, 4, 5, 6 ]
console.log(selection_sort([5, -1, 8, 6, 1, 3]));

// [ -1, 1, 3, 5, 6, 8 ]





