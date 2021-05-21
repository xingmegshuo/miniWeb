<template>
	<view style="padding-top: 30rpx;">
		<view v-if="data.length===0" style="text-align: center;font-size: 40rpx;font-weight: bold;padding: 100rpx;">
			没有更多信息,等待管理员添加</view>
		<view v-else v-for="(item, i) in data" :key="i" class="active-item" :data-id="item.ID" @tap="comment">
			<view class="item-img"><image  :src="url + '/'+getImg(item.Img)"></image></view>
			<view class="item-title">
				<view class="item-t">{{item.Name}} </view>
				<view class="item-smll">
					<view class="item-s">{{item.Type}}</view>
					<view class="item-p">{{item.CommentCount}}人已评论</view>
				</view>
			</view>
<!-- 			<view class="content-all">
				{{item.Description}}
			</view> -->
<!-- 			<view class="active-button">
				<button type="primary"  :data-id="item.ID">去留言</button>
			</view> -->
		</view>
	</view>
</template>

<script>
	// pages/detail/detail.js

	/**
	 * Author : 丸子团队（波波、Chi、ONLINE.信）
	 * Github 地址: https://github.com/dchijack/Travel-Mini-Program
	 * GiTee 地址： https://gitee.com/izol/Travel-Mini-Program
	 */
	const API = require("../../utils/api");
	const app = getApp();
	let isFocusing = false;

	export default {
		data() {
			return {
				data: "",
				url: "",
				imgs:[]
			};
		},

		components: {},
		props: {},

		/**
		 * 生命周期函数--监听页面加载
		 */
		onLoad: function(options) {
			// options.info
			API.GetPower(options.info).then(res => {
				this.setData({
					data: res.data,
					url: app.globalData.url
				})
				for (var i=0;i<res.data.length;i++){
					API.getImgListId(res.data[i].Img).then(img=>{
						this.setData({
							imgs:this.$data.imgs.concat(img)
						})
					})
				}
	
			})
		},

		/**
		 * 生命周期函数--监听页面初次渲染完成
		 */
		onReady: function() {},

		/**
		 * 生命周期函数--监听页面显示
		 */
		onShow: function() {

		},

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
		methods: {
			comment:function(e){
				uni.navigateTo({
					url: '../mostpost/index?id='+e.currentTarget.dataset.id
				})
			},
			getImg:function(e){
				for(var i=0;i<this.$data.imgs.length;i++){
					if(this.$data.imgs[i].ID==e[0]){
						return this.$data.imgs[i].ImgUrl
					}
				}
			}
		}
	};
</script>
<style>
	@import "./detail.css";
</style>
