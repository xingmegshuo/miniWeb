<template>
	<view class="main">
		<view class="user-items">
			<view class="user-item relative" data-info="企业策划" @tap="bindHandler">
				<text class="user-item_text">企业策划</text>
				<view class="user-item_icon">
					<image class="user-item_icon_img"
						src="../../static/images/企业策划.png"></image>
				</view>
			</view>
			<view class="user-item relative" data-info="企业申报" @tap="bindHandler">
				<text class="user-item_text">企业申报</text>
				<view class="user-item_icon">
					<image class="user-item_icon_img"
						src="../../static/images/企业申报.png">
					</image>
				</view>
			</view>
			<view class="user-item relative" data-info="企业财务" @tap="bindHandler">
				<text class="user-item_text">企业财务</text>
				<view class="user-item_icon">
					<image class="user-item_icon_img"
						src="../../static/images/企业财务.png"></image>
				</view>
				
			</view>
			<view class="user-item relative" data-info="企业软件" @tap="bindHandler">
				<text class="user-item_text">企业软件</text>
				<view class="user-item_icon">
					<image class="user-item_icon_img" src="../../static/images/企业软件.png"></image>
				</view>
				
			</view>
			<view class="user-item relative" data-info="企业外宣" @tap="bindHandler">
				<text class="user-item_text">企业外宣</text>
				<view class="user-item_icon">
					<image class="user-item_icon_img" src="../../static/images/企业外宣.png"></image>
				</view>
			</view>
			<view class="user-item relative" data-info="企业营销" @tap="bindHandler">
				<text class="user-item_text">企业营销</text>
				<view class="user-item_icon">
					<image class="user-item_icon_img" src="/static/images/企业营销.png"></image>
				</view>
				
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {};
		},

		components: {},
		props: {},

		/**
		 * 生命周期函数--监听页面加载
		 */
		onLoad: function(options) {
			
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
			bindHandler:function(e){
				let info = e.currentTarget.dataset.info
				uni.navigateTo({
					url: '../detail/detail?info='+info
				})
			}
		}
	};
</script>
<style>
	@import "./cs.css";
</style>
