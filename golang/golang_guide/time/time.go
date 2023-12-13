package main

import (
	"fmt"
	"time"
)

func main() {
	now := time.Now()
	//自定义时间布局
	fmt.Println("now datetime is:", now)
	fmt.Println("now datetime is:", now.Format("2006-01-02 15:04:05"))
	fmt.Println(now.Format("2006/01/02 15:04:05"))
	//时间戳 秒数
	fmt.Println(now.Unix())
	//时间戳 纳秒数
	fmt.Println(now.UnixNano())
	//时间戳转时间
	fmt.Println(time.Unix(now.Unix(), 0).Format("2006-01-02 15:04:05"))

	start := time.Now()
	time.Sleep(5 * time.Second)
	curTime := time.Since(start)
	fmt.Println(curTime)

}
