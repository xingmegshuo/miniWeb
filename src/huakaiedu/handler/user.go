/***************************
@File        : user.go
@Time        : 2021/04/19 17:48:22
@AUTHOR      : small_ant
@Email       : xms.chnb@gmail.com
@Desc        : 用户登录
****************************/

package handler

import (
	"encoding/json"
	"errors"
	"huakai/models"
	"huakai/pagination"
	"io/ioutil"
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

var DB = models.Db

type firstParse struct {
	Openid       string
	Access_token string
}

type userParse struct {
	Openid     string
	NickName   string
	Sex        int
	Headimgurl string
	City       string
}

/**
	* @api {Post} /wx/user/login 用户登录
	* @apiVersion 0.1.0
	* @apiName 登录
	* @apiGroup 微信
	* @apiParam {String} nickname 微信昵称
	* @apiParam {String} openId 微信标识
	* @apiParam {String} gender 性别
	* @apiParam {String} avatar 头像地址ec
	* @apiParam {String} city 城市
	* @apiParamExample {json} Request-Example
	* {
	*  "nickname": "Eve",
	*	"openId":"b9999",
	*	"gender":"男",
	*	"avatar":"https://.....png",
	*	"city":"成都"
	* }
	*
	* @apiSuccessExample  {json} Response-Example
	* 第一次登录
	* {
	*	"status":"success",
	*	"message":"注册登录成功"
	* }
	* 普通登录
	* {
	*	"status":"success",
	*	"message":"登录成功"
	* }
 **/

func Login(c *gin.Context) {
	db := DB
	code := c.PostForm("code")
	firstData := WxGet(`https://api.weixin.qq.com/sns/oauth2/access_token?appid=wx68223a3992542e20&secret=b00e68a156dd5971870cdcf196a23801&code=` + code + `&grant_type=authorization_code`)
	var first firstParse
	var u userParse
	json.Unmarshal(firstData, &first)
	userData := WxGet(`https://api.weixin.qq.com/sns/userinfo?access_token=` + first.Access_token + `&openid=` + first.Openid + `&lang=zh_CN`)
	json.Unmarshal(userData, &u)
	sex := "男"
	if u.Sex != 1 {
		sex = "女"
	}
	user := models.User{
		OpenId: u.Openid,
		Gender: sex,
	}
	res := models.User{}
	result := db.Where(&user).First(&res)
	if errors.Is(result.Error, gorm.ErrRecordNotFound) {
		user.Iden = "游客"
		user.Avatar = u.Headimgurl
		user.City = u.City
		user.NickName = u.NickName
		db.Create(&user)
		c.JSON(200, gin.H{
			"status":  "success",
			"message": "注册登录成功",
			"data":    user,
		})
	} else {
		newUser := models.User{
			NickName: u.NickName,
			City:     u.City,
		}
		db.Model(&res).Updates(&newUser)
		c.JSON(200, gin.H{
			"status":  "success",
			"message": "登录成功",
			"data":    res,
		})
	}
}

/**
	* @api {Post} /web/user/login 用户登录
	* @apiVersion 0.1.0
	* @apiName 登录
	* @apiGroup web
	* @apiParam {String} nickname 微信昵称
	* @apiParam {String} openId 微信标识
	* @apiParamExample {json} Request-Example
	* {
	*  "account": "111",//账号
	*	"password:"xxx",//密码
	* }
	*
	* @apiSuccessExample  {json} Response-Example
	* {
	*	"status":"success",
	*	"message":"登录成功"
	* }
	* @apiErrorExample {json} Response-Example
	* {
	*	"status":"error",
	* 	"message":"登录失败"
	* }
 **/

func LoginWeb(c *gin.Context) {
	db := DB
	user := models.User{
		NickName: c.PostForm("account"),
		OpenId:   c.PostForm("password"),
	}
	res := models.User{}
	result := db.Where(&user).First(&res)
	if errors.Is(result.Error, gorm.ErrRecordNotFound) {
		c.JSON(200, gin.H{
			"status":  "error",
			"message": "登录失败,联系管理员",
		})
	} else {
		c.JSON(200, gin.H{
			"status":  "success",
			"message": "登录成功",
			"data":    res,
		})
	}
}

/**
	* @api {Get} /web/getUsers 获取用户
	* @apiVersion 0.1.0
	* @apiName 获取用户
	* @apiGroup web
	* @apiParam {String} PageNum 页数
	* @apiParam {String} Search 搜索内容
	* @apiParam {String} OrderBy 排序方式
	* @apiParamExample {json} Request-Example
	* {
	*  "PageNum": 10,//页数
	*	"orderBy":"asc",//排序方式
	* }
	*
	* @apiSuccessExample  {json} Response-Example
	*{
	*	"count": 1,
	*	"data": [
	*		{
	*			"ID": 1,
	*			"CreatedAt": "2021-04-20T17:45:07.550026+08:00",
	*			"UpdatedAt": "2021-04-20T17:45:07.550026+08:00",
	*			"DeletedAt": null,
	*			"NickName": "superuser",
	*			"Gender": "",
	*			"Avatar": "",
	*			"City": "",
	*			"Phone": "",
	*			"Mail": "",
	*			"Ident": "admin",
	*			"OpenId": "123456789"
	*		}
	*	],
	*	"page": 1,
	*	"status": "success"
	*}
 **/

func GetUsers(c *gin.Context) {
	db := DB
	paginationQuery, _ := c.Get("PaginationQuery")
	query := paginationQuery.(*pagination.PaginationQuery)
	var (
		users []models.User
		count int64
	)
	db.Model(&models.User{}).Scopes(pagination.PaginationScope(query)).Count(&count)
	// SELECT * FROM `users`  WHERE ((`age` = "5") or (`email` like "%user-1%")) ORDER BY id desc LIMIT 3 OFFSET 0
	db.Model(&models.User{}).Scopes(pagination.PaginationScope(query)).Find(&users)
	c.JSON(200, gin.H{
		"status": "success",
		"data":   users,
		"count":  count,
		"page":   paginationQuery,
	})
}

/**
	* @api {Post} /web/addSuper 创建管理员用户
	* @apiVersion 0.1.0
	* @apiName 创建用户
	* @apiGroup web
	* @apiParam {String} account 账号
	* @apiParam {String} password 密码
	* @apiParamExample {json} Request-Example
	* {
	*  "account": "1111111",//账号
	*	"password":"**********",//密码
	* }
	*
	* @apiSuccessExample  {json} Response-Example
	*{
	*	"status":  "success",
	*	"message": "添加管理员成功",
	*}
	* @apiErrorExample {json} Response-Example
	* {
	*	"status": "error",
	*	"message":"该账号已经存在",
	* }
 **/

func AddSuperUser(c *gin.Context) {
	db := DB
	superuser := models.User{
		NickName: c.PostForm("account"),
		OpenId:   c.PostForm("password"),
		Iden:     "admin",
	}
	res := models.User{}
	result := db.Where(&superuser).First(&res)
	if errors.Is(result.Error, gorm.ErrRecordNotFound) {
		db.Create(&superuser)
		c.JSON(200, gin.H{
			"status":  "success",
			"message": "添加管理员成功",
		})
	} else {
		c.JSON(200, gin.H{
			"status":  "error",
			"message": "该账号已经存在",
		})
	}
}

/**
	* @api {Put} /web/changeUser 修改用户信息
	* @apiVersion 0.1.0
	* @apiName 修改用户
	* @apiGroup web
	* @apiParam {String} id 主键
	* @apiParam {String} or 其它字段
	* @apiParamExample {json} Request-Example
	* {
	*  "id": "1",//主键id
	*	"nickname":"新名字",//新名字
	* }
	*
	* @apiSuccessExample  {json} Response-Example
	*{
	*	"status":  "success",
	*	"message": "修改成功",
	*}
	* @apiErrorExample {json} Response-Example
	* {
	*	"status": "error",
	*	"message":"没有此用户",
	* }
 **/

func ChangeUser(c *gin.Context) {
	db := DB
	id, _ := strconv.Atoi(c.DefaultQuery("id", "0"))
	res := models.User{}
	result := db.First(&res, id)
	if errors.Is(result.Error, gorm.ErrRecordNotFound) && id != 0 {
		c.JSON(200, gin.H{
			"status":  "error",
			"message": "没有此用户",
		})
	} else {
		newUser := models.User{}
		if len(c.Query("iden")) > 0 {
			newUser.Iden = c.Query("iden")
		}

		if res.Iden == "admin" {
			newUser.OpenId = c.Query("openid")
		}

		if len(c.Query("t")) > 0 {
			newUser.T = c.Query("t")
		}
		db.Model(&res).Updates(&newUser)
		c.JSON(200, gin.H{
			"status":  "success",
			"message": "更新成功",
		})
	}
}

// 发送请求

func WxGet(url string) []byte {
	resp, err := http.Get(url)
	if err != nil {
		return []byte("false")
	}
	defer resp.Body.Close()
	body, _ := ioutil.ReadAll(resp.Body)
	return body
}

// 修改头像

func ChangeImg(c *gin.Context) {
	db := DB
	filename := Upload(c)
	id, _ := strconv.Atoi(c.DefaultPostForm("id", "0"))
	if id != 0 {
		user := models.User{}
		db.Where("id = ?", id).Find(&user)
		user.Avatar = "http://app.menguoli.com/" + filename
		db.Save(&user)
		c.JSON(200, gin.H{
			"status":  "success",
			"message": "修改头像成功",
		})
	} else {
		c.JSON(200, gin.H{
			"status":  "success",
			"message": "修改头像失败",
		})
	}
}
