

/**
 * 
 * @param {*} num 
 */
function print_num(num) {
    console.log(num) 
    if(num < 4) {
        print_num(num + 1)
    }
}

print_num(0)

console.log('*******************');

/**
 * 
 * @param {*} num 
 */
function print_nums(num) {
    if(num < 4) {
        print_nums(num + 1)
    }
    console.log(num);
}

print_nums(0)