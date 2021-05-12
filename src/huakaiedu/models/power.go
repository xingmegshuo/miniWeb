/***************************
@File        : power.go
@Time        : 2021/5/12 11:37
@AUTHOR      : small_ant
@Email       : xms.chnb@gmail.com
@Desc        : 企业赋能配置
****************************/

package models

import "gorm.io/gorm"

// 赋能列表

type Power struct {
	gorm.Model
	Type        string
	User        User `gorm:"ForeignKey:UserID"`
	UserID      int
	Name        string
	ImgUrl      string `bson:"imgUrl"`
	Description string
}

// 赋能中的留言评论消息处理

type PowerComment struct {
	gorm.Model
	Message string
	Power   Power `gorm:"ForeignKey:PowerID"`
	PowerID int
	User    User `gorm:"ForeignKey:UserID"`
	UserID  int
}
