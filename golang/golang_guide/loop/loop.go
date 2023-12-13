package main

import "fmt"

func main() {
	fmt.Println("for循环")
	//for 循环
	for i := 0; i < 10; i++ {
		println(i)
	}

	fmt.Println("while循环:")
	//while 循环
	for i := 0; i < 10; {
		println(i)
		i++
	}

	fmt.Println("for range循环:")
	//for range 循环 切片
	for i, v := range []int{1, 2, 3} {
		fmt.Println(i, v)
	}

	fmt.Println("for range 循环 map:")
	//for range 循环 map
	for v := range map[string]int{"a": 1, "b": 2} {
		fmt.Println(v)
	}

	fmt.Println("无线循环:")
	//无线循环
	for i := 0; ; i++ {

		fmt.Println(i)
	}
}
