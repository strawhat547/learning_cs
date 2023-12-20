package main

import (
	"fmt"
	"runtime"
)

func main() {
	fmt.Println(runtime.GOMAXPROCS(8))
	fmt.Println(runtime.NumCPU())
}

// 8 8
