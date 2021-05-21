<template>
<!--pages/posts/posts.wxml-->
<!-- <view class="tab-content"> -->
<!-- <cu-custom bgColor="bg-gradual-blue"><view slot="content">个人中心</view></cu-custom> -->

    <view class="index">
		<view class="title">{{title}}</view>
        
    </view>
<!-- </view> -->
</template>

<script>
// pages/posts/posts.js


const API = require("../../utils/api");

export default {
  data() {
    return {
      options:'' ,
	  title:'',
    };
  },

  components: {},
  props: {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      options: options
    });

    if (options.id == 1) {
      this.setData({
        title: '会费介绍'
      });
    } else if (options.id == 2) {
      this.setData({
        title: '入会标准'
      });
    } else if (options.id == 3) {
      this.setData({
        title: '会员权益'
      });
    }else if (options.id == 4) {
      this.setData({
        title: '入会申请'
      });
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},


  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
  methods: {

  }
};
</script>
<style>
@import "./posts.css";
</style>