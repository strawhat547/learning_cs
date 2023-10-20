


/**
 * dp
 * @param {number} num 
 * @returns number
 */
function fibonacci(num) {
    let dp = new Array(2)
    dp[0] = 0
    dp[1] = 1
    for(let i = 2; i <= num; i++) {
        let temp = dp[0] + dp[1]
        dp[0] = dp[1]
        dp[1] = temp
    }
    return dp[1]
}

console.log(fibonacci(2))//1
console.log(fibonacci(3))//2
console.log(fibonacci(4))//3
console.log(fibonacci(5))//5