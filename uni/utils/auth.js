/**
 * Author : 丸子团队（波波、Chi、ONLINE.信）
 * Github 地址: https://github.com/dchijack/Travel-Mini-Program
 * GiTee 地址： https://gitee.com/izol/Travel-Mini-Program
 */
const Auth = {};
/**
 * 获取当前登陆用户信息
 * @return {object}
 */

Auth.user = function () {
  return uni.getStorageSync('user');
};
/**
 * 获取token
 * @return {string}
 */


Auth.token = function () {
  return uni.getStorageSync('token');
};
/**
 * 判断是否有效期
 * @return {boolean}
 */


Auth.check = function () {
  let user = Auth.user();
  let token = Auth.token();

  if (user && Date.now() < uni.getStorageSync('expired_in') && token) {
    console.log('access_token过期时间：', (uni.getStorageSync('expired_in') - Date.now()) / 1000, '秒');
    return true;
  } else {
    return false;
  }
};
/**
 * 登录
 * @return {Promise} 登录信息
 */


Auth.login = function () {
  return new Promise(function (resolve, reject) {
    uni.getUserProfile({
      success: function (res) {
        resolve(res);
        console.log(res);
      },
      fail: function (err) {
        reject(err);
      }
    });
  });
};
/**
 * 注销
 * @return {boolean}
 */


Auth.logout = function () {
  uni.removeStorageSync('user');
  uni.removeStorageSync('token');
  uni.removeStorageSync('expired_in');
  return true;
};
/**
 * 获取授权登录加密数据
 */


Auth.getUserInfo = function () {
  return new Promise(function (resolve, reject) {
    Auth.login().then(data => {
      let args = {};
      args.code = data.code;
      uni.getUserInfo({
        success: function (res) {
          console.log(res);
          args.iv = encodeURIComponent(res.iv);
          args.encryptedData = encodeURIComponent(res.encryptedData);
          resolve(args);
        },
        fail: function (err) {
          reject(err);
        }
      });
    });
  });
};

module.exports = Auth;