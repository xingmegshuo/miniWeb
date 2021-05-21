/**
 * Author : 丸子团队（波波、Chi、ONLINE.信）
 * Github 地址: https://github.com/dchijack/Travel-Mini-Program
 * GiTee 地址： https://gitee.com/izol/Travel-Mini-Program
 */
const API_HOST = 'http://app.menguoli.com'; // 更换为你的网站域名, 需要有 https 协议
// const API_HOST = 'http://127.0.0.1:8080';
const Auth = require("./auth.js");

const templates = {
	comments: ['FcIvUacpimyPziDB2AhQrOxTk0MC_OfGe29koj-MItg', 'yGbGAnMJVP5sUEF--zeCRUyeVInaU5BK3PKdHFyX1_g'],
	// 评论回复与审核模板ID
	subscribe: ['PSoFk_4hhjWxN7K33qU1cgeTP-OOZnfe7uSOdhK9pOc'] // 资讯更新提醒模板ID

};
const API = {};

API.getHost = function() {
	return API_HOST;
};

API.template = function() {
	return templates;
};

API.request = function(url, method = "GET", data = {}, args = {
	token: true
}) {
	return new Promise(function(resolve, reject) {
		url = API_HOST + url;

		if (args.token) {
			const token = API.token();

			if (token) {
				if (url.indexOf("?") > 0) {
					url = url + '&access_token=' + token;
				} else {
					url = url + '?access_token=' + token;
				}
			} else {
				console.warn('[提示]', '部分数据需要授权，检测出当前访问用户未授权登录小程序');
			}
		}

		uni.request({
			url: url,
			data: data,
			method: method,
			header: {
				'content-type': 'application/x-www-form-urlencoded'
			},
			success: function(res) {
				// console.log(res);
				if (res.statusCode == 200) {
					resolve(res.data);
				} else if (res.data.code === "rest_post_invalid_page_number") {
					uni.showToast({
						title: '没有更多内容',
						mask: false,
						duration: 1000
					});
				} else {
					uni.showToast({
						title: "请求数据失败",
						duration: 1500
					});
					console.log(res.data.message);
					reject(res.data);
				}
			},
			fail: function(err) {
				console.log(err);
				reject(err);
			}
		});
	});
};


API.wx = function(url) {
	return new Promise(function(resolve, reject) {
		uni.request({
			url: url,
			method: "GET",
			success: function(res) {
				// console.log(res);
				if (res.statusCode == 200) {
					resolve(res.data);
				}
			},
			fail: function(err) {
				console.log(err);
				reject(err);
			}
		});
	});
};

API.get = function(url, data = {}, args = {
	token: false
}) {
	return API.request(url, "GET", data, args);
};

API.post = function(url, data, args = {
	token: false
}) {
	return API.request(url, "POST", data, args);
};

API.getUser = function() {
	console.log(uni.getStorageSync("user"))
	return uni.getStorageSync("user") ;
};

API.login = function(data) {
	return new Promise(function(resolv, reject) {
		API.post('/api/wx/user/login',{"code":data}).then(res => {
			resolv(res.data);
		}, err => {
			reject(err);
		});
	});
};

API.logout = function() {
	let logout = Auth.logout();

	if (logout) {
		getApp().globalData.user = '';
		uni.reLaunch({
			url: '/pages/index/index'
		});
	} else {
		uni.showToast({
			title: '注销失败!',
			icon: 'warn',
			duration: 1000
		});
	}
};

API.getUserInfo = function(data) {
	return new Promise(function(resolve, reject) {
		data = JSON.parse(data.rawData);

		if (data.gender == 1) {
			data.gender = "男";
		}

		var user = {
			"nickname": data.nickName,
			"gender": data.gender,
			"avatar": data.avatarUrl,
			"city": data.city
		};
		API.post('/api/wx/user/login', user, {
			token: false
		}).then(res => {
			API.storageUser(res); // console.log(res);

			resolve(res.data);
		}, err => {
			reject(err);
		});
	});
};

API.getImgList = function() {
	return new Promise(function(resolv, reject) {
		API.get('/api/imgList?search.1.key=is_show&search.1.value=true').then(res => {
			resolv(res.data);
		}, err => {
			reject(err);
		});
	});
};
API.getImgListId = function(id) {
	return new Promise(function(resolv, reject) {
		API.get('/api/imgList?search.1.key=is_show&search.1.value=false&search.2.key=id&search.2.value='+id).then(res => {
			resolv(res.data);
		}, err => {
			reject(err);
		});
	});
};

API.getUrlParam = function(variable) {
	var query = window.location.search.substring(1);
	var vars = query.split("&");
	for (var i = 0; i < vars.length; i++) {
		var pair = vars[i].split("=");
		if (pair[0] == variable) {
			return pair[1];
		}
	}
	return (false);
};



API.token = function() {
	let token = Auth.token();
	let datetime = Date.now();

	if (token && datetime < uni.getStorageSync('expired_in')) {
		return token;
	} else {
		return false;
	}
};

API.storageUser = function(res) {
	getApp().globalData.user = res.data;
	console.log(getApp().globalData);
	uni.setStorageSync('user', res.data); // wx.setStorageSync('openid', res.openid);

	if (res.access_token) {
		uni.setStorageSync('token', res.access_token);
		uni.setStorageSync('expired_in', Date.now() + parseInt(res.expired_in, 10) * 100000 - 60000);
	}
};
/**
 * 需要授权的接口调用
 * @param	{Function} fn
 * @return {Promise}
 */


API.guard = function(fn) {
	const self = this;
	return function() {
		if (API.getUser()) {
			return fn.apply(self, arguments);
		} else {
			return API.getUserInfo().then(res => {
				console.log('登录成功', res);
				return fn.apply(self, arguments);
			}, err => {
				console.log('登录失败', err);
				return err;
			});
		}
	};
};

API.CreateJoin = function(data){
	return new Promise(function(resolv, reject) {
		API.post('/api/join',{"data":data,"userId":getApp().globalData.user.ID}).then(res => {
			console.log(res)
			resolv(res);
		}, err => {
			reject(err);
		});
	});
}

API.CreateSign = function(id){
	return new Promise(function(resolv, reject) {
		API.post('/api/sign?id='+getApp().globalData.user.ID+'&activeId='+id).then(res => {
			resolv(res);
		}, err => {
			reject(err);
		});
	});
}

// 根据类别获取
API.GetPower = function(info){
	return new Promise(function(resolv,reject){
		API.get("/api/power?search.1.key=type&search.1.value="+info).then(res => {
		resolv(res);
		}, err => {
			reject(err);
		});
	});
}
//  根据id获取
API.GetPowerID = function(info){
	return new Promise(function(resolv,reject){
		API.get("/api/power?search.1.key=id&search.1.value="+info).then(res => {
		resolv(res);
		}, err => {
			reject(err);
		});
	});
}

API.GetMember = function(info){
	if (info=="时政之窗"){
		return new Promise(function(resolv,reject){
			API.get("/api/member?search.1.key=type&search.1.value="+info).then(res => {
			resolv(res);
			}, err => {
				reject(err);
			});
		});
	}else{
		return new Promise(function(resolv,reject){
			API.get("/api/member?search.2.key=status&search.2.value=审核通过&search.1.key=type&search.1.value="+info).then(res => {
			resolv(res);
			}, err => {
				reject(err);
			});
		});
	}

}

API.GetMemberId=function(id){
	return new Promise(function(resolv,reject){
		API.get("/api/member?search.1.key=member_id&search.1.value="+id).then(res => {
		resolv(res);
		}, err => {
			reject(err);
		});
	});
}

API.GetServer = function(id){
	return new Promise(function(resolv,reject){
		API.get("/api/web/getUsers?search.1.key=id&search.1.value="+id).then(res => {
		resolv(res);
		}, err => {
			reject(err);
		});
	});
}

API.getActive = function() {
	return new Promise(function(resolv, reject) {
		API.get('/api/active').then(res => {
			resolv(res.data);
		}, err => {
			reject(err);
		});
	});
};
	
API.getOneActive=function(id){
	return new Promise(function(resolv, reject) {
		API.get('/api/active?search.1.key=id&search.1.value='+id).then(res => {
			resolv(res.data);
		}, err => {
			reject(err);
		});
	});
}

API.getMyActive = function(id){
	return new Promise(function(resolv,reject){
		API.get('/api/sign?search.1.key=user_id&search.1.value='+id).then(res => {
			resolv(res);
		}, err => {
			reject(err);
		});
	})
}
// 获取楼
API.getComment= function(key,value){
	return new Promise(function(resolv,reject){
		API.get('/api/powerMes?search.1.key='+key+'&search.1.value='+value+'&OrderBy=desc&order=CreatedAt&search.2.key=lou_status&search.2.value=true').then(res => {
			resolv(res);
		}, err => {
			reject(err);
		});
	})
}

// 获取楼下评论

API.getCommentLou = function(power,lou){
	return new Promise(function(resolv,reject){
		API.get('/api/powerMes?search.1.key=power_id&search.1.value='+power+'&OrderBy=desc&order=CreatedAt&search.2.key=lou&search.2.value='+lou).then(res => {
			resolv(res);
		}, err => {
			reject(err);
		});
	})
}

// 新建评论
API.CreateComment=function(mes,user,power,recvUser,lou,status){
	return new Promise(function(resolv,reject){
		API.post('/api/powerMes?user='+user+'&power='+power+"&message="+mes+"&u_id="+recvUser+"&lou="+lou+"&status="+status).then(res => {
			resolv(res);
		}, err => {
			reject(err);
		});
	})
},

API.Sleep= function (delay) {
    for(var t = Date.now(); Date.now() - t <= delay;);
}

// 获取消息
API.GetMessage = function(id){
	return new Promise(function(resolv,reject){
		API.get('/api/mes?search.1.key=user_id&search.1.value='+id+'&search.2.key=status&search.2.value=未读').then(res => {
			resolv(res);
		}, err => {
			reject(err);
		});
	})
}

API.GetMessages = function(id){
	return new Promise(function(resolv,reject){
		API.get('/api/mes?search.1.key=user_id&search.1.value='+id+'&OrderBy=desc&order=CreatedAt').then(res => {
			resolv(res);
		}, err => {
			reject(err);
		});
	})
}

API.ChangeMessage = function(id){
	return new Promise(function(resolv,reject){
		API.post('/api/mes',{'id':id,'status':'已读'}).then(res => {
			resolv(res);
		}, err => {
			reject(err);
		});
	})
}


	
API.Delete = function(id){
	return API.request("/api/delete?id="+id+"&table=mes", "DELETE")
}

module.exports = API;


