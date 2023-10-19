/**
 * recursion
 * https://en.wikipedia.org/wiki/Recursion_(computer_science)#Recursive_functions_and_algorithms
 */

/**
 * 
 * @param {number} num 
 */
function print_num(num) {
    console.log(num) 
    if(num < 4) {
        print_num(num + 1)
    }
}

/***
 * diagram
 * |                        |
 * |    print_num(0)        |
 * |    console.log(0)      |
 * |    print_num(0 + 1)    |
 * |    console.log(1)      |
 * |    print_num(1 + 1)    |
 * |    console.log(2)      |
 * |    print_num(2 + 1)    |
 * |    console.log(3)      |
 * |    print_num(3 + 1)    |
 * |    console.log(4)      |
 * |________________________|
 *          call stack
 */

print_num(0)
/**
 * 0
 * 1
 * 2
 * 3
 * 4
 */

console.log('*******************');

/**
 * 
 * @param {number} num 
 */
function print_nums(num) {
    if(num < 4) {
        print_nums(num + 1)
    }
    console.log(num);
}

/***
 * |                            |
 * |    print_nums(0)           |
 * |    print_nums(0 + 1)       |
 * |    print_nums(1 + 1)       |
 * |    print_nums(2 + 1)       |
 * |    print_nums(3 + 1)       |
 * |    console.log(4)          |
 * |    console.log(3)          |
 * |    console.log(2)          |
 * |    console.log(1)          |
 * |    console.log(0)          |
 * |____________________________|   
 *          call stack
 */

print_nums(0)

/**
 * 4
 * 3
 * 2
 * 1
 * 0
 */