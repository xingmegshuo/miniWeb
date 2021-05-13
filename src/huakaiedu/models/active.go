/***************************
@File        : active.go
@Time        : 2021/04/19 14:04:25
@AUTHOR      : small_ant
@Email       : xms.chnb@gmail.com
@Desc        : 活动表
****************************/

package models

import "gorm.io/gorm"

type Active struct {
	gorm.Model
	Name       string //活动名称
	Content    string //活动内容
	Image      string `bson:"imageUrl" ` //活动图片
	Address    string //活动地址
	Contact    string //联系方式
	Time       string //活动时间
	NeedPeople int    //活动预期人数
	Status     string // 活动状态
	NowPeople  int    //现在报名人数
	IsShow     string //是否展示
}
