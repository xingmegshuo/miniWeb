/***************************
@File        : mes
@Time        : 2021/5/19 13:53
@AUTHOR      : small_ant
@Email       : xms.chnb@gmail.com
@Desc        : 消息
****************************/

package models

import "gorm.io/gorm"

type SystemMes struct {
	gorm.Model
	User    User `gorm:"ForeignKey:UserID"`
	UserID  int
	Message string
	Status  string
}
