/***************************
@File        : test
@Time        : 2021/5/11 18:53
@AUTHOR      : small_ant
@Email       : xms.chnb@gmail.com
@Desc        :	测试
****************************/

package main

import (
	"encoding/json"
	"fmt"
	"huakai/handler"
	"huakai/models"
	"log"
)

var db = handler.DB

func main() {
	log.Println("hello")
	var tables []models.JoinUs
	//var count int64
	//query := &pagination.PaginationQuery{
	//	PageSize: 10,
	//	PageNum:  1,
	//	OrderBy:  "id",
	//	Order:    "asc",
	//}
	//log.Print(pagination.PaginationScope(query))
	//db.Model(&models.JoinUs{}).Scopes(pagination.PaginationScope(query)).Count(&count)
	//db.Model(&models.JoinUs{}).Scopes(pagination.PaginationScope(query)).Find(&tables)

	db.Preload("User").Find(&tables)
	jsons, errs := json.Marshal(tables) //转换成JSON返回的是byte[]
	if errs != nil {
		fmt.Println(errs.Error())
	}
	log.Println(string(jsons))

}
