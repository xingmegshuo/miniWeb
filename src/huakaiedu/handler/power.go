/***************************
@File        : power
@Time        : 2021/5/12 13:20
@AUTHOR      : small_ant
@Email       : xms.chnb@gmail.com
@Desc        : 赋能信息
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

// 获取赋能列表

func GetPowers(c *gin.Context) {
	db := DB
	paginationQuery, _ := c.Get("PaginationQuery")
	query := paginationQuery.(*pagination.PaginationQuery)
	//log.Println(query)
	var (
		tables []models.Power
		count  int64
	)
	db.Model(&models.Power{}).Scopes(pagination.PaginationScope(query)).Count(&count)
	db.Preload("User").Scopes(pagination.PaginationScope(query)).Find(&tables)
	c.JSON(200, gin.H{
		"status": "success",
		"data":   tables,
		"count":  count,
		"page":   query.PageNum,
	})
}

// 获取信息

func GetPowerMes(c *gin.Context) {
	db := DB
	paginationQuery, _ := c.Get("PaginationQuery")
	query := paginationQuery.(*pagination.PaginationQuery)
	//log.Println(query)
	var (
		tables []models.PowerComment
		count  int64
	)
	db.Model(&models.PowerComment{}).Scopes(pagination.PaginationScope(query)).Count(&count)
	db.Preload("User").Preload("RecvUser").Scopes(pagination.PaginationScope(query)).Find(&tables)
	c.JSON(200, gin.H{
		"status": "success",
		"data":   tables,
		"count":  count,
		"page":   query.PageNum,
	})
}

// 新建赋能信息

func CreatePower(c *gin.Context) {
	db := DB
	id, _ := strconv.Atoi(c.DefaultPostForm("id", "0"))
	active := models.Power{
		Name:        c.PostForm("name"),
		Type:        c.PostForm("type"),
		Img:         c.PostForm("img"),
		Description: c.PostForm("desc"),
		Contact:     c.PostForm("contact"),
		UserID:      id,
	}
	res := models.Power{}
	result := db.Where(&active).First(&res)
	if errors.Is(result.Error, gorm.ErrRecordNotFound) && id != 0 {
		db.Create(&active)
		c.JSON(200, gin.H{
			"status":  "success",
			"message": "新建赋能信息成功",
		})
	} else {
		c.JSON(200, gin.H{
			"status":  "error",
			"message": "新建赋能信息失败",
		})
	}
}

// 新建留言信息

func CreatePowerMes(c *gin.Context) {
	db := DB
	userId, _ := strconv.Atoi(c.Query("user"))
	powerId, _ := strconv.Atoi(c.Query("power"))
	uId, _ := strconv.Atoi(c.Query("u_id"))
	lou, _ := strconv.Atoi(c.Query("lou"))

	active := models.PowerComment{
		Message:   c.Query("message"),
		UserID:    userId,
		PowerID:   powerId,
		UID:       uId,
		Lou:       lou,
		LouStatus: c.Query("status"),
	}
	power := models.Power{}
	db.Where("id=?", powerId).Find(&power)
	res := models.PowerComment{}
	result := db.Where(&active).First(&res)
	if errors.Is(result.Error, gorm.ErrRecordNotFound) {
		var count int64
		db.Model(&models.PowerComment{}).Where("power_id = ?", powerId).Count(&count)
		db.Model(&power).Update("CommentCount", count)
		db.Create(&active)
		c.JSON(200, gin.H{
			"status":  "success",
			"message": "新建留言成功",
		})
	} else {
		c.JSON(200, gin.H{
			"status":  "error",
			"message": "新建留言失败",
		})
	}
}

// 修改赋能信息

func UpdatePower(c *gin.Context) {
	db := DB
	id, _ := strconv.Atoi(c.DefaultPostForm("id", "0"))
	uid, _ := strconv.Atoi(c.PostForm("uid"))

	res := models.Power{}
	result := db.First(&res, id)
	if errors.Is(result.Error, gorm.ErrRecordNotFound) && id != 0 {
		c.JSON(200, gin.H{
			"status":  "error",
			"message": "没有此赋能信息",
		})
	} else {
		newActive := models.Power{
			Name:        c.PostForm("name"),
			Img:         c.PostForm("img"),
			Description: c.PostForm("desc"),
			Contact:     c.PostForm("contact"),
			UserID:      uid,
		}
		db.Model(&res).Updates(&newActive)
		c.JSON(200, gin.H{
			"status":  "success",
			"message": "更新成功",
			"data":    res,
		})
	}
}
