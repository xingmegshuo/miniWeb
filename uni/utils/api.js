/**
 * Author : 丸子团队（波波、Chi、ONLINE.信）
 * Github 地址: https://github.com/dchijack/Travel-Mini-Program
 * GiTee 地址： https://gitee.com/izol/Travel-Mini-Program
 */
const API = require("./base.js");
/**
 * 获取站点信息
 * @param  {object} args 参数,默认为空
 * @return {promise}
 */


const getSiteInfo = function (data) {
  return API.get('/wp-json/mp/v1/setting', data);
};
/**
 * 获取置顶文章
 * @param  {object} args 参数,默认为空
 * @return {promise}
 */


const getStickyPosts = function (data) {
  return API.get('/wp-json/mp/v1/posts/sticky', data);
};
/**
 * 获取文章列表
 * @param  {object} args 参数,默认为空
 * 参数可以访问: http://v2.wp-api.org/ 了解相关参数
 * @return {promise}
 */


const getPostsList = function (data) {
  return API.get('/wp-json/wp/v2/posts', data, {
    token: true
  });
};
/**
 * 获取文章详情
 * @param  {int} id 文章id
 * @return {promise}
 */


const getPostsbyID = function (id) {
  return API.get('/wp-json/wp/v2/posts/' + id, {}, {
    token: true
  });
};
/**
 * 获取页面列表
 * @param  {object} args 参数,默认为空
 * 参数可以访问: http://v2.wp-api.org/ 了解相关参数
 * @return {promise}
 */


const getPagesList = function (data) {
  return API.get('/wp-json/wp/v2/pages', data);
};
/**
 * 获取页面详情
 * @param  {int} id 页面id
 * @return {promise}
 */


const getPageByID = function (id) {
  return API.get('/wp-json/wp/v2/pages/' + id);
};
/**
 * 获取所有分类列表
 * @param  {object} args 参数
 * 参数可以访问: http://v2.wp-api.org/ 了解相关参数
 * @return {promise}
 */


const getCategories = function (data) {
  return API.get('/wp-json/wp/v2/categories?orderby=id&order=asc', data);
};
/**
 * 获取指定分类
 * @param {int} id 分类ID
 * @return {promise}
 */


const getCategoryByID = function (id) {
  return API.get('/wp-json/wp/v2/categories/' + id);
};
/**
 * 获取所有标签列表
 * @param  {object} args 参数
 * 参数可以访问: http://v2.wp-api.org/ 了解相关参数
 * @return {promise}
 */


const getTags = function (data) {
  return API.get('/wp-json/wp/v2/tags?orderby=id&order=asc', data);
};
/**
 * 获取指定标签
 * @param  {int} id 标签ID
 * @return {promise}
 */


const getTagByID = function (id) {
  return API.get('/wp-json/wp/v2/tags/' + id);
};
/**
 * 获取随机文章列表
 * @param  {object} args 参数,默认为空
 * @return {promise}
 */


const getRandPosts = function (data) {
  return API.get('/wp-json/mp/v1/posts/rand', data);
};
/**
 * 获取相关文章列表
 * @param  {object} data 参数
 * @return {promise}
 */


const getRelatePosts = function (data) {
  return API.get('/wp-json/mp/v1/posts/relate', data);
};
/**
 * 获取热门文章列表
 * @param  {object} args 参数,默认为空
 * @return {promise}
 */


const getMostViewsPosts = function (data) {
  return API.get('/wp-json/mp/v1/posts/most?meta=views', data);
};
/**
 * 获取热门收藏文章列表
 * @param  {object} args 参数
 * @return {promise}
 */


const getMostFavPosts = function (data) {
  return API.get('/wp-json/mp/v2/posts/most?meta=favs', data);
};
/**
 * 获取热门点赞文章列表
 * @param  {object} args 参数
 * @return {promise}
 */


const getMostLikePosts = function (data) {
  return API.get('/wp-json/mp/v2/posts/most?meta=likes', data);
};
/**
 * 获取热评文章列表
 * @param  {object} args 参数,默认为空
 * @return {promise}
 */


const getMostCommentPosts = function (data) {
  return API.get('/wp-json/mp/v2/posts/most?meta=comments', data);
};
/**
 * 获取近期评论文章
 * @param  {object} args 参数,默认为空
 * @return {promise}
 */


const getRecentCommentPosts = function (data) {
  return API.get('/wp-json/mp/v1/posts/comment', data);
};
/**
 * 文章评论列表
 * @param  {object} args 参数,默认为空
 * @return {promise}
 */


const getComments = function (data) {
  return API.get('/wp-json/mp/v1/comments', data);
};
/**
 * 获取用户信息
 * @param  {object} args 参数
 * @return {promise}
 */


const getProfile = function () {
  return API.getUserInfo();
};
/**
 * 注销用户登录
 * @param  {object} args 参数
 * @return {promise}
 */


const Loginout = function () {
  return API.logout();
};
/**
 * 收藏文章
 * @param  {object} args 参数,POST 文章id
 * TOKEN 参数为 true ,需要用户授权使用
 * @return {promise}
 */


const fav = function (data) {
  return API.post('/wp-json/mp/v1/comments?type=fav', data, {
    token: true
  });
};
/**
 * 点赞文章
 * @param  {object} args 参数,POST 文章id
 * TOKEN 参数为 true ,需要用户授权使用
 * @return {promise}
 */


const like = function (data) {
  return API.post('/wp-json/mp/v1/comments?type=like', data, {
    token: true
  });
};
/**
 * 我的收藏文章列表
 * @param  {object} args 参数
 * TOKEN 参数为 true ,需要用户授权使用
 * @return {promise}
 */


const getFavPosts = function (data) {
  return API.get('/wp-json/mp/v1/posts/comment?type=fav', data, {
    token: true
  });
};
/**
 * 我的点赞文章列表
 * @param  {object} args 参数
 * TOKEN 参数为 true ,需要用户授权使用
 * @return {promise}
 */


const getLikePosts = function (data) {
  return API.get('/wp-json/mp/v1/posts/comment?type=like', data, {
    token: true
  });
};
/**
 * 我的评论文章列表
 * @param  {object} args 参数
 * TOKEN 参数为 true ,需要用户授权使用
 * @return {promise}
 */


const getCommentsPosts = function (data) {
  return API.get('/wp-json/mp/v1/posts/comment?type=comment', data, {
    token: true
  });
};
/**
 * 发表评论
 * @param  {object} args 参数, POST 评论内容及文章id
 * TOKEN 参数为 true ,需要用户授权使用
 * @return {promise}
 */


const addComment = function (data) {
  return API.post('/wp-json/mp/v1/comments?type=comment', data, {
    token: true
  });
};
/**
 * 投票表态
 * @param  {object} args 参数, POST 文章 ID 及选项 ID
 * TOKEN 参数为 true ,需要用户授权使用
 * @return {promise}
 */


const votePosts = function (data) {
  return API.post('/wp-json/mp/v1/vote', data, {
    token: true
  });
};
/**
 * 微信小程序订阅消息
 * @param {*} data 
 */


const subscribeMessage = function (data) {
  return API.post('/wp-json/mp/v1/subscribe', data, {
    token: true
  });
};
/**
 * 获取二维码
 * @param  {object} args 参数
 * @return {promise}
 */


const getCodeImg = function (data) {
  return API.post('/wp-json/mp/v1/qrcode', data, {
    token: false
  });
};
/**
 * 导航数据
 */


const getMenuSetting = function (data) {
  return API.get('/wp-json/mp/v1/menu', data);
};
/**
 * 首页广告数据
 */


const indexAdsense = function (data) {
  return API.get('/wp-json/mp/v1/advert/wechat?type=index', data);
};
/**
 * 列表广告数据
 */


const listAdsense = function (data) {
  return API.get('/wp-json/mp/v1/advert/wechat?type=list', data);
};
/**
 * 详情广告数据
 */


const detailAdsense = function (data) {
  return API.get('/wp-json/mp/v1/advert/wechat?type=detail', data);
};
/**
 * 页面广告数据
 */


const pageAdsense = function (data) {
  return API.get('/wp-json/mp/v1/advert/wechat?type=page', data);
};

API.getSiteInfo = getSiteInfo;
API.getStickyPosts = getStickyPosts;
API.getPostsList = getPostsList;
API.getPostsbyID = getPostsbyID;
API.getPagesList = getPagesList;
API.getPageByID = getPageByID;
API.getCategories = getCategories;
API.getCategoryByID = getCategoryByID;
API.getTags = getTags;
API.getTagByID = getTagByID;
API.getRandPosts = getRandPosts;
API.getRelatePosts = getRelatePosts;
API.getMostViewsPosts = getMostViewsPosts;
API.getMostFavPosts = getMostFavPosts;
API.getMostLikePosts = getMostLikePosts;
API.getMostCommentPosts = getMostCommentPosts;
API.getRecentCommentPosts = getRecentCommentPosts;
API.getComments = getComments;
API.getProfile = API.guard(getProfile);
API.fav = API.guard(fav);
API.getFavPosts = API.guard(getFavPosts);
API.like = API.guard(like);
API.getLikePosts = API.guard(getLikePosts);
API.getCommentsPosts = API.guard(getCommentsPosts);
API.addComment = API.guard(addComment);
API.votePosts = API.guard(votePosts);
API.subscribeMessage = API.guard(subscribeMessage);
API.getCodeImg = getCodeImg;
API.Loginout = Loginout;
API.getMenuSetting = getMenuSetting;
API.indexAdsense = indexAdsense;
API.listAdsense = listAdsense;
API.detailAdsense = detailAdsense;
API.pageAdsense = pageAdsense;
module.exports = API;