define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./static/doc/main.js",
    "group": "/Users/ant/Desktop/project/note/go/project/ginTest/HuaKai/src/huakaiedu/static/doc/main.js",
    "groupTitle": "/Users/ant/Desktop/project/note/go/project/ginTest/HuaKai/src/huakaiedu/static/doc/main.js",
    "name": ""
  },
  {
    "type": "Post",
    "url": "/join",
    "title": "会员申请",
    "version": "0.1.0",
    "name": "会员申请",
    "group": "All",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>用户ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>申请表格中的内容</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example",
          "content": "{\n \"userId\": \"1\",//页数\n\t\"data\":\"xxxx\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response-Example",
          "content": "{\n\t\"status\":\"success\",\n\t\"message\":\"会员申请表提交成功,等待审核\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Response-Example",
          "content": "{\n\t\"status\":\"error\",\n\t\"message\":\"该用户已经申请\",\n}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./handler/join.go",
    "groupTitle": "All",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/join"
      }
    ]
  },
  {
    "type": "Put",
    "url": "/active",
    "title": "修改会员成果",
    "version": "0.1.0",
    "name": "修改会员成果",
    "group": "All",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Title",
            "description": "<p>标题</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>内容</p>"
          },
          {
            "group": "Parameter",
            "type": "file",
            "optional": false,
            "field": "image",
            "description": "<p>图片</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "memberId",
            "description": "<p>会员</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>主键</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example",
          "content": "{\n \"id\": \"1\",\n\t\"content\":\"bug消失术\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response-Example",
          "content": "{\n\t\"status\":\"success\",\n\t\"message\":\"更新成功\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Response-Example",
          "content": "{\n\t\"status\":\"error\",\n\t\"message\":\"没有此信息\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./handler/member.go",
    "groupTitle": "All",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/active"
      }
    ]
  },
  {
    "type": "Put",
    "url": "/active",
    "title": "修改活动信息",
    "version": "0.1.0",
    "name": "修改活动",
    "group": "All",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>活动名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>活动内容</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>活动地址</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "contact",
            "description": "<p>联系方式</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Time",
            "description": "<p>活动时间</p>"
          },
          {
            "group": "Parameter",
            "type": "file",
            "optional": false,
            "field": "image",
            "description": "<p>图片</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>主键</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example",
          "content": "{\n \"id\": \"1\",\n\t\"content\":\"bug消失术\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response-Example",
          "content": "{\n\t\"status\":\"success\",\n\t\"message\":\"修改活动成功\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Response-Example",
          "content": "{\n\t\"status\":\"error\",\n\t\"message\":\"修改活动失败\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./handler/active.go",
    "groupTitle": "All",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/active"
      }
    ]
  },
  {
    "type": "Delete",
    "url": "/delete",
    "title": "删除数据",
    "version": "0.1.0",
    "name": "删除数据",
    "group": "All",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>主键</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "table",
            "description": "<p>表名</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example",
          "content": "{\n\t\"id\":\"1\",\n\t\"table\":\"user\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response-Example",
          "content": "{\n\t\"status\":\"success\",\n\t\"message\":\"删除成功\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Response-Example",
          "content": "{\n\t\"status\":\"error\",\n\t\"message\":\"删除失败\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./handler/delete.go",
    "groupTitle": "All",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/delete"
      }
    ]
  },
  {
    "type": "Put",
    "url": "/sign",
    "title": "取消活动报名",
    "version": "0.1.0",
    "name": "取消活动报名",
    "group": "All",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>取消申请</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example",
          "content": "{\n \"id\": \"1\",//页数\n\t\"status\":\"取消申请\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response-Example",
          "content": "{\n\t\"status\":\"success\",\n\t\"message\":\"取消活动申请\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Response-Example",
          "content": "{\n\t\"status\":\"error\",\n\t\"message\":\"没有这个记录\",\n}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./handler/sigin.go",
    "groupTitle": "All",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/sign"
      }
    ]
  },
  {
    "type": "Put",
    "url": "/join",
    "title": "修改申请状态",
    "version": "0.1.0",
    "name": "审核申请",
    "group": "All",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>审核状态</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "payments",
            "description": "<p>支付状态</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example",
          "content": "{\n \"id\": \"1\",//页数\n\t\"status\":\"审核通过\",\n\t\"payments\":\"已经支付\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response-Example",
          "content": "{\n\t\"status\":\"success\",\n\t\"message\":\"修改成功\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Response-Example",
          "content": "{\n\t\"status\":\"error\",\n\t\"message\":\"没有数据可以修改\",\n}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./handler/join.go",
    "groupTitle": "All",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/join"
      }
    ]
  },
  {
    "type": "Post",
    "url": "/active",
    "title": "新建会员展示",
    "version": "0.1.0",
    "name": "新建会员展示",
    "group": "All",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>活动名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>活动内容</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>活动地址</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "contact",
            "description": "<p>联系方式</p>"
          },
          {
            "group": "Parameter",
            "type": "file",
            "optional": false,
            "field": "image",
            "description": "<p>图片</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Time",
            "description": "<p>活动时间</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example",
          "content": "{\n \"name\": \"今天是个好日子\",\n\t\"content\":\"bug消失术\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response-Example",
          "content": "{\n\t\"status\":\"success\",\n\t\"message\":\"新建活动成功\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Response-Example",
          "content": "{\n\t\"status\":\"error\",\n\t\"message\":\"新建活动失败\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./handler/member.go",
    "groupTitle": "All",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/active"
      }
    ]
  },
  {
    "type": "Post",
    "url": "/active",
    "title": "新建活动信息",
    "version": "0.1.0",
    "name": "新建活动",
    "group": "All",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>活动名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>活动内容</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>活动地址</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "contact",
            "description": "<p>联系方式</p>"
          },
          {
            "group": "Parameter",
            "type": "file",
            "optional": false,
            "field": "image",
            "description": "<p>图片</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Time",
            "description": "<p>活动时间</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example",
          "content": "{\n \"name\": \"今天是个好日子\",\n\t\"content\":\"bug消失术\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response-Example",
          "content": "{\n\t\"status\":\"success\",\n\t\"message\":\"新建活动成功\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Response-Example",
          "content": "{\n\t\"status\":\"error\",\n\t\"message\":\"新建活动失败\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./handler/active.go",
    "groupTitle": "All",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/active"
      }
    ]
  },
  {
    "type": "Post",
    "url": "/sign",
    "title": "活动报名",
    "version": "0.1.0",
    "name": "活动报名",
    "group": "All",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "activeId",
            "description": "<p>活动id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>用户id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example",
          "content": "{\n \"activeId\": \"1\",//页数\n\t\"id\":\"2\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response-Example",
          "content": "{\n\t\"status\":\"success\",\n\t\"message\":\"申请活动成功\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Response-Example",
          "content": "{\n\t\"status\":\"error\",\n\t\"message\":\"申请活动失败\",\n}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./handler/sigin.go",
    "groupTitle": "All",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/sign"
      }
    ]
  },
  {
    "type": "Get",
    "url": "/join",
    "title": "获取会员申请表",
    "version": "0.1.0",
    "name": "获取会员申请",
    "group": "All",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "PageNum",
            "description": "<p>页数 //默认为1</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Search",
            "description": "<p>搜索内容</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "OrderBy",
            "description": "<p>排序方式</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example",
          "content": "{\n \"PageNum\": 10,//页数\n\t\"orderBy\":\"asc\",//排序方式\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response-Example",
          "content": "{\n\t\"count\": 1,\n\t\"data\": [\n\t\t{\n\t\t\t申请表数据\n\t\t}\n\t],\n\t\"page\": 1,\n\t\"status\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./handler/join.go",
    "groupTitle": "All",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/join"
      }
    ]
  },
  {
    "type": "Get",
    "url": "/active",
    "title": "获取活动信息",
    "version": "0.1.0",
    "name": "获取活动",
    "group": "All",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "PageNum",
            "description": "<p>页数 //默认为1</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Search",
            "description": "<p>搜索内容</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "OrderBy",
            "description": "<p>排序方式</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example",
          "content": "{\n \"PageNum\": 10,//页数\n\t\"orderBy\":\"asc\",//排序方式\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response-Example",
          "content": "{\n\t\"count\": 1,\n\t\"data\": [\n\t\t{\n\t\t\t活动数据\n\t\t}\n\t],\n\t\"page\": 1,\n\t\"status\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./handler/active.go",
    "groupTitle": "All",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/active"
      }
    ]
  },
  {
    "type": "Get",
    "url": "/sign",
    "title": "获取活动报名信息",
    "version": "0.1.0",
    "name": "获取活动报名",
    "group": "All",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "PageNum",
            "description": "<p>页数 //默认为1</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Search",
            "description": "<p>搜索内容</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "OrderBy",
            "description": "<p>排序方式</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example",
          "content": "{\n \"PageNum\": 10,//页数\n\t\"orderBy\":\"asc\",//排序方式\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response-Example",
          "content": "{\n\t\"count\": 1,\n\t\"data\": [\n\t\t{\n\t\t\t活动数据\n\t\t}\n\t],\n\t\"page\": 1,\n\t\"status\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./handler/sigin.go",
    "groupTitle": "All",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/sign"
      }
    ]
  },
  {
    "type": "Put",
    "url": "/web/changeUser",
    "title": "修改用户信息",
    "version": "0.1.0",
    "name": "修改用户",
    "group": "web",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>主键</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "or",
            "description": "<p>其它字段</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example",
          "content": "{\n \"id\": \"1\",//主键id\n\t\"nickname\":\"新名字\",//新名字\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response-Example",
          "content": "{\n\t\"status\":  \"success\",\n\t\"message\": \"修改成功\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Response-Example",
          "content": "{\n\t\"status\": \"error\",\n\t\"message\":\"没有此用户\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./handler/user.go",
    "groupTitle": "web",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/web/changeUser"
      }
    ]
  },
  {
    "type": "Post",
    "url": "/web/addSuper",
    "title": "创建管理员用户",
    "version": "0.1.0",
    "name": "创建用户",
    "group": "web",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "account",
            "description": "<p>账号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example",
          "content": "{\n \"account\": \"1111111\",//账号\n\t\"password\":\"**********\",//密码\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response-Example",
          "content": "{\n\t\"status\":  \"success\",\n\t\"message\": \"添加管理员成功\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Response-Example",
          "content": "{\n\t\"status\": \"error\",\n\t\"message\":\"该账号已经存在\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./handler/user.go",
    "groupTitle": "web",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/web/addSuper"
      }
    ]
  },
  {
    "type": "Post",
    "url": "/web/user/login",
    "title": "用户登录",
    "version": "0.1.0",
    "name": "登录",
    "group": "web",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>微信昵称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "openId",
            "description": "<p>微信标识</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example",
          "content": "{\n \"account\": \"111\",//账号\n\t\"password:\"xxx\",//密码\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response-Example",
          "content": "{\n\t\"status\":\"success\",\n\t\"message\":\"登录成功\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Response-Example",
          "content": "{\n\t\"status\":\"error\",\n\t\"message\":\"登录失败\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./handler/user.go",
    "groupTitle": "web",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/web/user/login"
      }
    ]
  },
  {
    "type": "Get",
    "url": "/web/getUsers",
    "title": "获取会员",
    "version": "0.1.0",
    "name": "获取会员",
    "group": "web",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "PageNum",
            "description": "<p>页数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Search",
            "description": "<p>搜索内容</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "OrderBy",
            "description": "<p>排序方式</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example",
          "content": "{\n \"PageNum\": 10,//页数\n\t\"orderBy\":\"asc\",//排序方式\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response-Example",
          "content": "{\n\t\"count\": 1,\n\t\"data\": [\n\t\t{\n\t\t\t会员信息\n\t\t}\n\t],\n\t\"page\": 1,\n\t\"status\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./handler/member.go",
    "groupTitle": "web",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/web/getUsers"
      }
    ]
  },
  {
    "type": "Get",
    "url": "/web/getUsers",
    "title": "获取会员成果",
    "version": "0.1.0",
    "name": "获取成果",
    "group": "web",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "PageNum",
            "description": "<p>页数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Search",
            "description": "<p>搜索内容</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "OrderBy",
            "description": "<p>排序方式</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example",
          "content": "{\n \"PageNum\": 10,//页数\n\t\"orderBy\":\"asc\",//排序方式\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response-Example",
          "content": "{\n\t\"count\": 1,\n\t\"data\": [\n\t\t{\n\t\t\t会员成果\n\t\t}\n\t],\n\t\"page\": 1,\n\t\"status\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./handler/member.go",
    "groupTitle": "web",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/web/getUsers"
      }
    ]
  },
  {
    "type": "Get",
    "url": "/web/getUsers",
    "title": "获取用户",
    "version": "0.1.0",
    "name": "获取用户",
    "group": "web",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "PageNum",
            "description": "<p>页数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Search",
            "description": "<p>搜索内容</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "OrderBy",
            "description": "<p>排序方式</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example",
          "content": "{\n \"PageNum\": 10,//页数\n\t\"orderBy\":\"asc\",//排序方式\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response-Example",
          "content": "{\n\t\"count\": 1,\n\t\"data\": [\n\t\t{\n\t\t\t\"ID\": 1,\n\t\t\t\"CreatedAt\": \"2021-04-20T17:45:07.550026+08:00\",\n\t\t\t\"UpdatedAt\": \"2021-04-20T17:45:07.550026+08:00\",\n\t\t\t\"DeletedAt\": null,\n\t\t\t\"NickName\": \"superuser\",\n\t\t\t\"Gender\": \"\",\n\t\t\t\"Avatar\": \"\",\n\t\t\t\"City\": \"\",\n\t\t\t\"Phone\": \"\",\n\t\t\t\"Mail\": \"\",\n\t\t\t\"Ident\": \"admin\",\n\t\t\t\"OpenId\": \"123456789\"\n\t\t}\n\t],\n\t\"page\": 1,\n\t\"status\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./handler/user.go",
    "groupTitle": "web",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/web/getUsers"
      }
    ]
  },
  {
    "type": "Post",
    "url": "/wx/user/login",
    "title": "用户登录",
    "version": "0.1.0",
    "name": "登录",
    "group": "微信",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>微信昵称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "openId",
            "description": "<p>微信标识</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>性别</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>头像地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>城市</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example",
          "content": "{\n \"nickname\": \"Eve\",\n\t\"openId\":\"b9999\",\n\t\"gender\":\"男\",\n\t\"avatar\":\"https://.....png\",\n\t\"city\":\"成都\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response-Example",
          "content": "第一次登录\n{\n\t\"status\":\"success\",\n\t\"message\":\"注册登录成功\"\n}\n普通登录\n{\n\t\"status\":\"success\",\n\t\"message\":\"登录成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./handler/user.go",
    "groupTitle": "微信",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/wx/user/login"
      }
    ]
  }
] });
