<template>
	<view style="padding-top: 20rpx;">
		<view class="info">
			<view class="info-name">{{power.Name}}</view>
			<swiper class="screen-swiper square-dot" indicator-dots="true" circular="true" autoplay="true" interval="5000"
				duration="500">
				<swiper-item v-for="(item, i) in Imgs" :key="i" :id="item.ID" >
					<image class="index_article_covers" :src="url+'/'+item.ImgUrl" mode="aspectFill"></image>
				</swiper-item>
			</swiper>

			<view class="info-desc">{{power.Description}}</view>
			<view class="info-desc">{{power.Contact}}</view>
		</view>
		<view class="addcomment">
			<form @submit="formSubmit">
				<view class="nav">
					<input class="input" name="mes" placeholder="写个评论吧" />
					<button class="bt" form-type="submit" type="default" size="mini">提交</button>
					<button style="display: none;" form-type="reset" ref="resrtBtn">Reset</button>

				</view>
			</form>
		</view>
		<view class="comment">
			<view class="tt">
				<image src="../../static/comment.png">评论内容</image>
			</view>
			<view class="comments" v-if="comment===null">
				<vim class="item">暂无评论 </vim>
			</view>
			<view class="comments" v-else>
				<view class="item" v-for="(item, i) in comment" :key="i" :data-lou="item.Lou" :data-power="item.PowerID" @tap="infomessage">
					<view class="f">
						<view class="h">
							<image :src="item.User.Avatar"></image>
						</view>
						<view class="n">{{item.User.NickName}}</view>
						<view class="iden">{{item.User.Iden}}</view>
						<view class="ti">{{renderTime(item.CreatedAt)}}</view>
					</view>
					<view class="txt">
						<view class="recb">{{item.Message}}</view>
						<view class="recv" >回复</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	/**
	 * Author : 丸子团队（波波、Chi、ONLINE.信）
	 * Github 地址: https://github.com/dchijack/Travel-Mini-Program
	 * GiTee 地址： https://gitee.com/izol/Travel-Mini-Program
	 */
	// pages/list/list.js
	const API = require("../../utils/api");
	const app = getApp()
	export default {
		data() {
			return {
				comment: "",
				power: "",
				url: "",
				Imgs:[]
			};
		},

		components: {},
		props: {},

		/**
		 * 生命周期函数--监听页面加载
		 */
		onLoad: function(options) {
			// options.id
			API.GetPowerID(options.id).then(res => {
				this.setData({
					power: res.data[0],
					url: app.globalData.url
				})
				API.getImgListId(res.data[0].Img).then(img=>{
					this.setData({
						Imgs:this.$data.Imgs.concat(img)
					})
				})
			})
			API.getComment("power_id", options.id).then(res => {
				this.setData({
					comment: res.data
				})
			})

		},

		/**
		 * 生命周期函数--监听页面初次渲染完成
		 */
		onReady: function() {},

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
		onPullDownRefresh: function() {

		},

		/**
		 * 页面上拉触底事件的处理函数
		 */
		onReachBottom: function() {},

		/**
		 * 用户点击右上角分享
		 */
		onShareAppMessage: function() {},
		methods: {
			// 请求所以数据
			formSubmit: function(e) {
				if (e.detail.value.mes.length > 0) {
					if (app.globalData.user.ID) {
						let lou = 0
						if (this.$data.comment!=null){
							lou = this.$data.comment.length + 1
						}
						API.CreateComment(e.detail.value.mes, app.globalData.user.ID, this.$data.power.ID, this.$data
							.power.UserID,lou,"true").then(res => {
							if (res.status == "success") {
								location.reload()
								uni.showToast({
									title: "发表评论成功",
									icon: 'success', //将值设置为 success 或者 ''
									duration: 1500 //持续时间为 2秒
								})
							} else {
								uni.showToast({
									title: "发表评论失败",
									icon: 'none', //将值设置为 success 或者 ''
									duration: 1500 //持续时间为 2秒
								})
							}
						})
					} else {
						uni.showToast({
							title: "没有登录",
							icon: 'none', //将值设置为 success 或者 ''
							duration: 1500 //持续时间为 2秒
						})
					}

				} else {
					uni.showToast({
						title: "没有输入内容",
						icon: 'none', //将值设置为 success 或者 ''
						duration: 1500 //持续时间为 2秒
					})
				}
				this.$refs.resrtBtn.$dispatch('Form', 'uni-form-reset', {
					type: 'reset'
				})
			},
			renderTime: function(date) {
				var dateee = new Date(date).toJSON();
				return new Date(+new Date(dateee) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '')
			},
			infomessage:function(e){
				uni.navigateTo({
					url:"../list/list?lou="+e.currentTarget.dataset.lou+'&power='+e.currentTarget.dataset.power
				})
			}
		}
	};
</script>
<style>
	@import "./index.css";
</style>
