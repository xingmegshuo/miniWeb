<template>
	<view style="padding-top: 20rpx;">
		
		<view v-for="(item, i) in active" :key="i" class="active-item" :data-id="item.ID" @tap="navTo">
			<view class="content-all">
				<view class="item-img"><image  :src="url+'/'+item.Image"></image></view>
				<view class="item-title">
					<view class="item-t">{{item.Name}}</view>
					<view class="item-smll">
						<view class="item-s">正常报名</view>
						<view class="item-p">{{item.NowPeople}}人已报名</view>
					</view>
				</view>
			</view>
		</view> 
		<view v-if="userActive">
			<view v-for="(item, i) in userActive" :key="i" class="active-item" :data-id="item.ID" @tap="navTo">
				<view class="content-all">
					<view class="item-img"><image  :src="url+'/'+item.Active.Image"></image></view>
					<view class="item-title">
						<view class="item-t">{{item.Active.Name}}</view>
						<view class="item-smll">
							<view class="item-s">我已报名</view>
							<view class="item-p">{{item.Active.NowPeople}}人已报名</view>
						</view>
					</view>
				</view>
			</view> 
		</view>
	</view>
</template>

<script>
	// pages/active/active.js
	const API = require("../../utils/api");
	const app = getApp();

	export default {
		data() {
			return {
				url: "",
				active:"",
				userActive:"",
			};
		},

		components: {},
		props: {},

		/**
		 * 生命周期函数--监听页面加载
		 */
		onLoad: function(options) {
			if (options.type=="my"){
				API.getMyActive(app.globalData.user.ID).then(res => {
					console.log(res)
					this.setData({
						userActive: res.data,
						url: app.globalData.url
					});
				})
			}
			else{
				API.getActive().then(res => {
					this.setData({
						active: res,
						url: app.globalData.url
					});
				});
			}	
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
		onPullDownRefresh: function() {},

		/**
		 * 页面上拉触底事件的处理函数
		 */
		onReachBottom: function() {},

		/**
		 * 用户点击右上角分享
		 */
		onShareAppMessage: function() {},
		methods: {

			navTo: function(e){
				uni.navigateTo({
					url:"../activeinfo/activeinfo?id="+e.currentTarget.dataset.id
				})
			},
		},
		}

</script>
<style>
	@import "./active.css";
</style>
