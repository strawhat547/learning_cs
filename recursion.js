


function print_num(num) {
    console.log(num) 
    if(num < 4) {
        print_num(num + 1)
    }
}

print_num(0)

console.log('*******************');