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
	"huakai/pagination"
	"log"
)

var db = handler.DB

func main() {
	log.Println("hello")
	var tables []models.JoinUs
	var count int64
	query := &pagination.PaginationQuery{
		PageSize: 10,
		PageNum:  1,
		OrderBy:  "id",
		Order:    "asc",
	}
	db.Model(&models.JoinUs{}).Scopes(pagination.PaginationScope(query)).Count(&count)
	db.Model(&models.JoinUs{}).Scopes(pagination.PaginationScope(query)).Find(&tables)
	log.Println(tables)
}
