<template>
	<view>
		<view class="section section-features"  >
			<view class="bars">
				<text :class="titleId==1 ? 'active' : 'no_active'" @tap="changeF">会员展示</text>
				<text :class="titleId==2 ? 'active' : 'no_active'" @tap="changeS">成果展示</text>
			</view>
			<view v-for="(item, i) in news" :key="i" class="active-item" :id="item.ID" >
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
		news:"",
		url:"",
		titleId: '1',
	};
  },

  components: {},
  props: {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
	  API.GetMember("会员展示").then(res => {
	  	this.setData({
	  		news: res.data,
	  		url: getApp().globalData.url
	  	})
	  })
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
	  changeF: function() {
	  	this.setData({
	  		titleId: 1
	  	});
		API.GetMember("会员展示").then(res => {
			this.setData({
				news: res.data,
				url: getApp().globalData.url
			})
		})
	  },
	  changeS: function() {
	  	this.setData({
	  		titleId: 2
	  	});
		API.GetMember("会员成果展示").then(res => {
			this.setData({
				news: res.data,
				url: getApp().globalData.url
			})
		})
	  }
  }
};
</script>
<style>
@import "./showhy.css";
</style>