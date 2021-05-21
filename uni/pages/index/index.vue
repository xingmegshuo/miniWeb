<template>
	<!-- <view v-if="wx ===true"> -->
	<view style="height: 100%;">
		<swiper class="screen-swiper square-dot" indicator-dots="true" circular="true" autoplay="true" interval="5000"
			duration="500">
			<swiper-item v-for="(item, i) in siteInfo" :key="i" :id="item.ID" >
				<image class="index_article_covers" :src="url+'/'+item.ImgUrl" mode="aspectFill"></image>
			</swiper-item>
		</swiper>
		<view class="banner">
			<view class="banner-info" :style="'top: ' + (navBarHeight+150) + 'rpx'">
				<view class="banner-title" style="display:none">
					<view class="banner-title_text">{{siteInfo.name}}</view>
				</view>
				<view style="display:none" class="banner-brief">{{siteInfo.description}}</view>
			</view>
			<!-- 跳转 -->
			<view class="cu-list grid grid col-4 no-border wz-ui">
				<view class="cu-item" :data-titleId="1" @tap="changeTitle">
					<view class="bg-img bg-imgz"></view>
					<text>新闻信息</text>
				</view>
				<view class="cu-item" :data-titleId="2" @tap="changeTitle">
					<view class="bg-img bg-imgd">
					</view>
					<text>活动</text>
				</view>
				<view class="cu-item" :data-titleId="3" @tap="changeTitle">
					<view class="bg-img bg-imgh">
					</view>
					<text>赋能矩阵</text>
				</view>

				<view class="cu-item" @tap="changeTitle" :data-titleId="4">
					<view class="bg-img bg-imge">
					</view>
					<text>合作</text>
					<!-- <button class="auth-btn" open-type="contact"></button> -->
				</view>
			</view>
		</view>
		<view class="tab-content">
			<view class="index">
				<view class="index_label" style="margin-top: 80rpx">
					<view class="index_label_title">{{title}}
					</view>
					<view class="index_label_bg"></view>
				</view>
				<view class="index_article">
					<view v-if="title=='新闻信息'">
						<view v-for="(item, i) in news" :key="i" class="active-item" :id="item.ID">
							<view class="item-title">{{item.Title}}</view>
							<view class="item-img" :style="'background:url(' + (url+'/'+item.ImgUrl) + ') center no-repeat'">
							</view>
							<view class="active-info">{{item.Content}}</view>
							<button v-if="item.Content.length > 50" type="primary" class="active-button">
								查看文章详情
							</button>
						</view>
					</view>
					<view v-else style="font-size: 36rpx;font-weight: bold;padding-bottom: 50rpx;">联系人微信:  sxcydsz</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	const API = require("../../utils/api");
	const app = getApp();
	const jweixin = require('../../utils/wx/index')
	export default {
		data() {
			return {
				posts: [{
					'id': 0
				}],
				page: 1,
				siteInfo: [],
				category: '',
				wx: '',
				indicatorDots: !1,
				autoplay: !0,
				interval: 3e3,
				currentSwiper: 0,
				navBarHeight: uni.getSystemInfoSync().statusBarHeight,
				autoFocus: false,
				inputEnable: true,
				isLastPage: false,
				title: "新闻信息",
				url: "",
				isIphoneX: "",
				searchKey: "",
				news:"",
				url:""
			};
		},

		components: {},
		props: {},

		onLoad: function() {
			API.GetMember("时政之窗").then(res => {
				this.setData({
					news: res.data,
					url: getApp().globalData.url
				})
			})
			jweixin.ready(function() {
				console.log('hh')
			});
			let that = this;
			var wxis = this.is_wx()
			that.setData({
				wx: wxis
			})
			API.getImgList().then(res => {
				that.setData({
					siteInfo: res
				});
			});
			that.setData({
				url: app.globalData.url
			});
			// console.log(wxis)
			if (wxis == true) {
				uni.getSystemInfo({
					success: function(a) {
						that.setData({
							isIphoneX: a.model.match(/iPhone X/gi)
						});
					}
				});
				let code = API.getUrlParam("code"); //是否存在code 截取code代码 授权会返回code需要截取链接中code
				let local = window.location.href;
				app.globalData.user = uni.getStorageSync("user")
				console.log(app.globalData.user)
				let id = app.globalData.user.ID
				API.GetServer(id).then(res => {
					console.log(res.data[0])
					if (res.data.length == 0 || app.globalData.user.NickName != res.data[0].NickName || app.globalData.user.Iden != res.data[0].Iden){
						if (code == false || code === "") {
							//不存在就打开上面的地址进行授权
							window.location.href =
								`https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx68223a3992542e20&
								redirect_uri=http://app.menguoli.com/static/index.html&response_type=code&scope=snsapi_userinfo&state=STATE&
								connect_redirect=1#wechat_redirect`;
						} else {
							API.login(code).then(res => {
								uni.setStorageSync("user", res)
								getApp().globalData.user = res
								console.log(res)
								uni.showToast({
									title: "登录成功",
									icon: 'success', //将值设置为 success 或者 ''
									duration: 1500 //持续时间为 2秒
								})
							})
						}
					}
				})
			} else {
				// uni.hideTabBar()
				uni.showModal({
					title: '请在微信打开',
					content: '请在微信打开本网页',
					success:function(){
						// window.location.href = "https://www.menguoli.com/static/404.html"
					}
				})
			}
		},

		/**
		 * 生命周期函数--监听页面初次渲染完成
		 */
		onReady: function() {},
		// 小程序跳转
		// 打开栏目

		/**
		 * 生命周期函数--监听页面显示
		 */
		onShow: function() {},

		/**
		 * 生命周期函数--监听页面隐藏
		 */
		onHide: function() {},

		/**
		 * 生命周期函数--监听页面卸载
		 */
		onUnload: function() {},

		/**
		 * 页面相关事件处理函数--监听用户下拉动作
		 */

		/**
		 * 页面上拉触底事件的处理函数
		 */
		onReachBottom: function() {},

		/**
		 * 用户点击右上角分享
		 */
		onShareAppMessage: function() {
			return {
				title: '可持续发展委员会',
				path: '/pages/index/index'
			};
		},
		methods: {
			is_wx() {
				let en = window.navigator.userAgent.toLowerCase()
				// 匹配en中是否含有MicroMessenger字符串
				if (en.match(/MicroMessenger/i) == 'micromessenger') {
					return true
				}
				if (en.match(/MicroMessenger/i) != 'micromessenger') {
					return false
				}
			},

			getSiteInfo: function() {},
	
			currentChange: function(e) {
				this.setData({
					currentSwiper: e.detail.current
				});
			},
			changeTitle: function(e) {
				let s = e.currentTarget.dataset.titleid;
				if (s == 1) {
					this.setData({
						title: "新闻信息"
					});
				}
				if (s == 2) {
					uni.navigateTo({
						url: '/pages/active/active'
					});
				}
				if (s == 3) {
					uni.navigateTo({
						url: '/pages/cs/cs'
					});
				}

				if (s == 4) {
					this.setData({
						title: "合作"
					});
				}
			}
		}
	};
</script>
<style>
	@import "./index.css";
</style>
