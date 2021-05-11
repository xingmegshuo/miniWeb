/***************************
@File        : test
@Time        : 2021/5/11 18:53
@AUTHOR      : small_ant
@Email       : xms.chnb@gmail.com
@Desc        :	测试
****************************/

package main

import (
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

	db.Preload("user").Preload("user.id").Where("join_us.user_id = ?", 2).Find(&tables)
	log.Println(tables)

}
