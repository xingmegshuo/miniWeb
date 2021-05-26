<template>
<view>
<view class="user-container" >
  <view class="user-information relative">
    <image v-if="user.Avatar" class="user-information_img" :src="user.Avatar"></image>
    <image v-else class="user-information_img" src="/static/images/avatar.png"></image>
    <view class="nickname">
      <view class="user-information_nickname">{{user.NickName?user.NickName:'游客'}}</view>
      <view class="user-information_introduction">{{user?user.Iden:'点击这里授权登录'}}</view>
    </view>
  </view>
  <view class="user-items">
    <view class="user-item relative">
      <text class="user-item_text">头像修改</text>
      <view class="user-item_icon">
        <image class="user-item_icon_img" src="../../static/images/avatar_change.png"></image>
      </view>
      
      <button  class="userLogin"  @tap="bindHandler" data-url="/pages/posts/posts?id=1"></button>
    </view>
    <view class="user-item relative">
      <text class="user-item_text">服务期限</text>
      <view class="user-item_icon">
        <image class="user-item_icon_img" src="https://cloud-minapp-16269.cloud.ifanrusercontent.com/small-logo-gray-with-radius.svg"></image>
      </view>
      <button  class="userLogin"  @tap="bindHandler"data-url="/pages/posts/posts?id=2"></button>
    </view>
    <view class="user-item relative" v-if="user.Iden !=='游客'">
      <text class="user-item_text">风采展示</text>
      <view class="user-item_icon">
        <image class="user-item_icon_img" src="https://cloud-minapp-16269.cloud.ifanrusercontent.com/my-dynamic.svg"></image>
      </view>
      
      <button class="userLogin"  @tap="bindHandler" data-url="/pages/posts/posts?id=3"></button>
    </view>
<!-- 	<view class="user-item relative">
	  <text class="user-item_text">消息列表</text>
	  <view class="user-item_icon">
	    <image class="user-item_icon_img" src="/static/images/subscribe.png"></image>
	  </view>
	  <button class="userLogin" @tap="bindHandler" data-url="/pages/posts/posts?id=4"></button>
	</view> -->
	<view class="user-item relative">
	  <text class="user-item_text">申请活动</text>
	  <view class="user-item_icon">
	    <image class="user-item_icon_img" src="/static/images/subscribe.png"></image>
	  </view>
	  <button class="userLogin" @tap="bindHandler" data-url="/pages/active/active?type=my"></button>
	</view>
	<view class="user-item relative" style="display: -webkit-box;">
		<view  style="display: -webkit-box;width: 90%;" >
			<view class="user-item_text">我的消息</view>
			<view style="width: 100rpx;">
					<view style="height: 60rpx;width: 60rpx;border: solid 2rpx red;margin: 0 auto;margin-top: 10rpx;border-radius: 50%;padding: 5rpx;text-align: center;line-height: 50rpx;color: red;font-weight: bold;font-size: 24rpx;">{{num}}</view>
			</view>
		</view>

	  <view class="user-item_icon" >
	    <image class="user-item_icon_img" src="../../static/images/my_mes.png"></image>
	  </view>
	
	  <button class="userLogin"  @tap="bindHandler" data-url="/pages/posts/posts?id=4"></button>
	</view>
  </view>
</view>
</view>
</template>

<script>

// pages/mine/mine.js
const API = require("../../utils/api");
const app = getApp();

export default {
  data() {
    return {
      user: '',
	  num:'0'
    };
  },

  components: {},
  props: {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    let user = app.globalData.user;
    if (!user) {
      user = '';
    }
	API.GetServer(user.ID).then(res=>{
		this.setData({
		  user: res.data[0]
		});
		uni.setStorageSync("user", res.data[0])
		getApp().globalData.user = res.data[0]
	})
	API.GetMessage(user.ID).then(res=>{
		console.log(res)
		this.setData({
			num:res.count
		})
	})
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
  methods: {
    bindHandler: function (e) {
      let url = e.currentTarget.dataset.url;
      uni.navigateTo({
        url: url
      });
    }
  }
};
</script>
<style>
@import "./mine.css";
</style>