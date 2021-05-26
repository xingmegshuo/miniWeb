<template>
	<view style="padding-top: 20rpx;">
		<view class="main">
			<view class="title">{{active.Name}}</view>
			<view class="img">
				<image :src="url+'/'+active.Image"></image>
			</view>
			<view class="content">{{active.Content}}</view>
			<view class="contact">{{active.Contact}}</view>
			<view class="d">
				<view class="p">总人数:<text class="people">{{active.NeedPeople}}</text></view>
				<view class="p">	已经报名人数:<text class="npeople">{{active.NowPeople}}</text></view>
			
				<view class="status">{{active.Status}}</view>
			</view>
			<view class=".butt"><button class="bu" type="warn" @tap="join" :data-id="active.ID" >立即报名</button></view>
		</view>
	</view>
</template>

<script>
	const API = require("../../utils/api");

	export default {
		data() {
			return {
				active: "",
				url: ''
			}
		},
		onLoad: function(options) {
			console.log(options.id)
			API.getOneActive(options.id).then(res => {
				console.log(res[0])
				this.setData({
					active: res[0],
					url: getApp().globalData.url
				})
			})
		},
		methods: {
			join: function(e) {
				let id = e.currentTarget.dataset.id;
				if (getApp().globalData.user) {
					API.CreateSign(id).then(res => {
						if (res.status == "success") {
							uni.showToast({
								title: res.message,
								icon: 'success', //将值设置为 success 或者 ''
								duration: 1500 //持续时间为 2秒
							})
						} else {
							uni.showToast({
								title: res.message,
								icon: 'none', //如果要纯文本，不要icon，将值设为'none'
								duration: 1500 //持续时间为 2秒
							})
						}
					})
				} else {
					uni.showToast({
						title: "没有登录",
						icon: 'none', //如果要纯文本，不要icon，将值设为'none'
						duration: 1500
					})
				}
			},
		}
	}
</script>

<style>
	@import "./activeinfo.css";
</style>
