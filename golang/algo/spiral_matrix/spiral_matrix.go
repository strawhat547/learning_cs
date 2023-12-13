// 螺旋矩阵
package main

import "fmt"

func main() {

	arr := [][]int{
		{1, 2, 3, 4},
		{5, 6, 7, 8},
		{9, 10, 11, 12},
		{13, 14, 15, 16},
	}
	fmt.Println(spiral_matrix(arr))
	//[1 2 3 4 8 12 16 15 14 13 9 5 6 7 11 10]
}

func spiral_matrix(arr [][]int) []int {
	var result []int
	if len(arr) == 0 {
		return result
	}
	left, right, top, bottom := 0, len(arr[0])-1, 0, len(arr)-1
	var x, y int
	for left <= right && top <= bottom {
		for y = left; y <= right && checkBound(left, right, top, bottom); y++ {
			result = append(result, arr[x][y])
		}
		y--
		top++
		for x = top; x <= bottom && checkBound(left, right, top, bottom); x++ {
			result = append(result, arr[x][y])
		}
		x--
		right--
		for y = right; y >= left && checkBound(left, right, top, bottom); y-- {
			result = append(result, arr[x][y])
		}
		y++
		bottom--
		for x = bottom; x >= top && checkBound(left, right, top, bottom); x-- {
			result = append(result, arr[x][y])
		}
		x++
		left++
	}
	return result
}

func checkBound(left, right, top, bottom int) bool {
	hasOutOfBound := left <= right && top <= bottom
	return hasOutOfBound
}
