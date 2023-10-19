/**
 * iteration
 * <a>https://en.wikipedia.org/wiki/Iteration</a>
 */

/**
 * 
 * @param {Array} nums 
 */
function print_arr(nums) {
    let len = nums.length
    for(let i = 0; i < len; i++) {
        console.log(nums[i]);
    }
}

print_arr([1,5,6,7,7])

/**
 * 1
 * 5
 * 6
 * 7
 * 7
 */


/**
 * 1..100求和
 * @param {number} num 
 * @returns sum
 */
function sum(num) {
    let sum = 0
    for(let i = 1; i <= num; i++) sum += i
    return sum
}

console.log(sum(100));

//5050

/**
 * <a>https://en.wikipedia.org/wiki/Fibonacci_sequence</a>
 * @param {number} num 
 * @returns number
 */
function fibobacci(num) {
    let sequence = [0, 1]
    for(let i = 2; i <= num; i++) sequence.push(sequence[i -1] + sequence[i - 2])
    return sequence[num]
}

console.log(fibobacci(5));

//5




