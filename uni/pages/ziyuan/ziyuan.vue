<template>
	<view style="padding-top: 20rpx;">
		<view class="section section-features" style="padding: 20rpx;">
			<view v-if="news.length ===0"  class="active-item" style="text-align: center;height: 150rpx;line-height: 150rpx;font-size: 36rpx;font-weight: bold;">暂无内容</view>
			<view v-for="(item, i) in news" :key="i" class="active-item" :id="item.ID">
				<view class="item-title">{{item.Title}}</view>
				<view class="item-img" :style="'background:url(' + (url+'/'+item.ImgUrl) + ') center no-repeat'">
				</view>
				<view class="active-info">{{item.Content}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	const API = require("../../utils/api");
	
	export default {
		data() {
			return {
				news: "",
				url:""
			}
		},
		onLoad: function (options) {
			  API.GetMember("资源共享").then(res => {
				 console.log(res)
			  	this.setData({
			  		news: res.data,
			  		url: getApp().globalData.url
			  	})
			  })
		},
		methods: {

		}
	}
</script>

<style>
@import "./ziyuan.css";
</style>
