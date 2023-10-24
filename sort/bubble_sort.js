

/**
 * bubble sort: every outer cycle makes max number in nums array sorted on the right side. 
 * o(n^2)
 * @param {Array} nums 
 * @returns sorted array
 */
function bubble_sort(nums) {
    let len = nums.length
    for(let i = 0; i < len; i++) {
        for(let j = 0; j < len -i - 1; j++) { //comparatoion count
            if(nums[j] > nums[j + 1]) 
                [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
        }
    }
    return nums
}

console.log(bubble_sort([-1,8,19,2,40,0]));
// [ -1, 0, 2, 8, 19, 40 ]

console.log(bubble_sort([4,9,3,-6,0,80,7]))
// [-6, 0,  3, 4, 7, 9, 80]