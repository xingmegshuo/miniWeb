/***************************
@File        : mes
@Time        : 2021/5/19 14:15
@AUTHOR      : small_ant
@Email       : xms.chnb@gmail.com
@Desc        : 消息
****************************/

package handler

import (
	"errors"
	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
	"huakai/models"
	"huakai/pagination"
	"strconv"
)

// 获取消息

func GetMes(c *gin.Context) {
	db := DB
	paginationQuery, _ := c.Get("PaginationQuery")
	query := paginationQuery.(*pagination.PaginationQuery)
	var (
		memberRes []models.SystemMes
		count     int64
	)
	db.Model(&models.SystemMes{}).Scopes(pagination.PaginationScope(query)).Count(&count)
	// SELECT * FROM `users`  WHERE ((`age` = "5") or (`email` like "%user-1%")) ORDER BY id desc LIMIT 3 OFFSET 0
	db.Preload("Member.User").Scopes(pagination.PaginationScope(query)).Find(&memberRes)
	c.JSON(200, gin.H{
		"status": "success",
		"data":   memberRes,
		"count":  count,
		"page":   query.PageNum,
	})
}

// 修改消息

func ChangeMes(c *gin.Context) {
	db := DB
	id, _ := strconv.Atoi(c.DefaultPostForm("id", "0"))
	res := models.SystemMes{}
	result := db.First(&res, id)
	if errors.Is(result.Error, gorm.ErrRecordNotFound) && id != 0 {
		c.JSON(200, gin.H{
			"status":  "error",
			"message": "没有此信息",
		})
	} else {
		db.Model(&res).Update("status", c.PostForm("status"))
		c.JSON(200, gin.H{
			"status":  "success",
			"message": "更新成功",
			"data":    res,
		})
	}
}
