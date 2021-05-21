<template>
	<!--pages/list/list.wxml-->

	<view style="padding-top: 20rpx;">
		<view class="addcomment">
			<form @submit="formSubmit">
				<view class="nav">
					<input class="input" name="mes" placeholder="写个评论吧" />
					<button class="bt" form-type="submit" type="default" size="mini">提交</button>
					<button style="display: none;" form-type="reset" ref="resrtBtn">Reset</button>

				</view>
			</form>
		</view>
		<view  v-for="(item, i) in comment" :key="i" :data-lou="item.Lou" :data-power="item.PowerID"
			@tap="infomessage">
			<view class="item" v-if="item.LouStatus==='true'">
				<view class="f">
					<view class="h">
						<image :src="item.User.Avatar"></image>
					</view>
					<view class="n">{{item.User.NickName}}</view>
					<view class="iden">{{item.User.Iden}} &</view>
					<view class="ti">{{renderTime(item.CreatedAt)}} </view>
				</view>
				<view class="txt">
					<view class="recb">{{item.Message}}</view>
				</view>
			</view>
		</view>
		<view v-for="(item, i) in comment" :key="i" :data-lou="item.Lou" :data-power="item.PowerID" @tap="infomessage">
			<view class="item" v-if="item.LouStatus==='false'">
				<view class="f" style="margin-left: 10%;">
					<view class="n">{{item.User.NickName}}</view>
					<view class="ti">{{renderTime(item.CreatedAt)}}</view>
				</view>
				<view class="txt">
					<view class="recb">{{item.Message}}</view>
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

	export default {
		data() {
			return {
				comment: []
			};
		},

		components: {},
		props: {},

		/**
		 * 生命周期函数--监听页面加载
		 */
		onLoad: function(options) {
			// options.power, options.lou
			API.getCommentLou(options.power, options.lou).then(res => {
				console.log(res.data)
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

		/**
		 * 页面上拉触底事件的处理函数
		 */

		/**
		 * 用户点击右上角分享
		 */
		onShareAppMessage: function() {},
		methods: {
			formSubmit: function(e) {
				if (e.detail.value.mes.length > 0) {
					if (getApp().globalData.user.ID) {
						API.CreateComment(e.detail.value.mes, getApp().globalData.user.ID, this.$data.comment[0]
							.PowerID, this.$data.comment[0]
							.UserID, this.$data.comment[0].Lou, "false").then(res => {
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
				return new Date(+new Date(dateee) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(
					/\.[\d]{3}Z/, '')
			},
		}
	};
</script>
<style>
	@import "./list.css";
</style>
