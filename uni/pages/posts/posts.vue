<template>
	<!--pages/posts/posts.wxml-->
	<view class="tab-content">
		<!-- <cu-custom bgColor="bg-gradual-blue"><view slot="content">个人中心</view></cu-custom> -->
		<view class="index">
			<view class="title">{{title}}</view>
			<view class="bl" v-if="title==='修改头像'">
				<button  @tap="choose" style="margin-bottom: 50rpx;">选择图片</button>
				<image v-for="(item,index) in imgArr" :src="item"></image>
				<button type="primary" style="margin-top: 50rpx;" v-if="imgArr!=='' " @tap="upload">上传图片</button>
			</view>
			<view class="bl" v-if="title==='服务期限'">
				<view>{{user.T}}</view>
			</view>
			<view class="bl" v-if="title==='风采展示'">
			<!-- 	<view>企业展示、产品展示、资源共享信息通过以下网址登录配置:</view>
				<view>http://app.menguoli.com</view>
				<view style="margin-top: 10rpx;">账号: {{user.NickName}}</view>
				<view style="margin-top: 10rpx;">密码: {{user.OpenId}}</view> -->
				<view  style="height: 500rpx;border: solid 1rpx #e8e8e8;" >
					<textarea style=" padding: 10rpx;" @blur="bindTextAreaBlur" auto-height
						:placeholder="desc"></textarea>
				</view>
				<view style="height: 100rpx;border: solid 1rpx #e8e8e8;margin-top: 50rpx;">
					<textarea style=" padding: 10rpx;" @blur="bindTextAreaBlur1" auto-height
						:placeholder="t"></textarea>
				</view>
				<view style="margin-top: 30rpx;">
					类别:
								<select style="margin-left: 20rpx;padding: 5rpx;border: solid 1rpx;text-align: center;" @change="getSelect"  ref="addRequestState">
									<option  value = "会员展示">会员展示</option>
									<option  value = "会员成果展示">风采展示</option>
									<option  value = "资源共享">资源共享</option>
								</select>

				</view>
				<view class="bl"> 
 					<button  @tap="choose" style="margin-bottom: 50rpx;background-color: #ff9029;color: white;">选择封面</button>
					<view v-if="img==='null' ">
						<image v-for="(item,index) in imgArr" :src="item"></image>
					</view>
					<view v-else>
						<image :src="'http://app.menguoli.com/'+img"></image>
					</view>
					<button type="primary" style="margin-top: 50rpx;background-color: #ff9029;" v-if="imgArr!=='' && has==='false' " @tap="upload">提交</button>
				</view>
			</view>
			<view class="bl" v-if="title==='消息'" >
				<view @tap="show" :data-id="item.ID" v-for="item in message" style="border: solid 1rpx #f93;padding: 10rpx;border-radius: 10rpx;margin-top: 20rpx;">
					<view style="color: #f93;">{{renderTime(item.CreatedAt)}}</view>
					<view style="margin-top: 5rpx;font-weight: bold;">{{item.Message}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	// pages/posts/posts.js


	const API = require("../../utils/api");
	const app = getApp()
	export default {
		data() {
			return {
				options: '',
				title: '风采展示',
				marked: '',
				imgArr:'',
				user:'',
				desc:"请输入300字以上简介",
				t:'请输入标题',
				img:'null',
				has:'false',
				message:'',
				type:'会员展示'
			};
		},

		components: {},
		props: {},

		/**
		 * 生命周期函数--监听页面加载
		 */
		onLoad: function(options) {
			this.setData({
				options: options,
				user:app.globalData.user
			});

			if (options.id == 1) {
				this.setData({
					title: '修改头像'
				});
			} else if (options.id == 2) {
				this.setData({
					title: '服务期限'
				});
			} else if (options.id == 3) {	
				this.setData({
					title: '风采展示'
				});
			} else if (options.id == 4){
				API.GetMessages(this.$data.user.ID).then(res=>{
					console.log(res)
					this.setData({
						title:'消息',
						message:res.data
					})
				})
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
		onPullDownRefresh: function() {

		},

		/**
		 * 页面上拉触底事件的处理函数
		 */
		onReachBottom: function() {

		},

		/**
		 * 用户点击右上角分享
		 */
		onShareAppMessage: function() {},
		methods: {
	        formSubmit:function(e){
	           let data = JSON.stringify(e.detail.value)
			   console.log(e.detail.value.phone,e.detail.value.name,getApp().globalData.user)
			   if ( e.detail.value.phone&&e.detail.value.name&&getApp().globalData.user){
				   API.CreateJoin(data).then(res=>{
					   if (res.status=="success"){
							uni.showToast({
								title: res.message,
								icon: 'success',    //将值设置为 success 或者 ''
								duration: 1500    //持续时间为 2秒
							})  
						}else{
							uni.showToast({
								title: res.message,
								icon: 'none',    //如果要纯文本，不要icon，将值设为'none'
								duration: 1500    //持续时间为 2秒
							})  
						}
					})	
			   }else{
				  
					uni.showToast({
						title:"检查数据和登录状态",
						icon: 'none',    //如果要纯文本，不要icon，将值设为'none'
						duration:1500
					})
				}
			}
			,
			choose:function(){
				let that=this
				uni.chooseImage({
				    success: (chooseImageRes) => {
				        const tempFilePaths = chooseImageRes.tempFilePaths;
						that.imgArr = tempFilePaths
						console.log(tempFilePaths)
				    }
				});
			},
			upload:function(){
						let uploadTask
						if (this.$data.title=="修改头像"){
							uploadTask = uni.uploadFile({
							    url: 'http://app.menguoli.com/api/change_head', //仅为示例，非真实的接口地址
							    filePath: this.$data.imgArr[0],
							    name: 'image',
							    formData: {
							        'id': app.globalData.user.ID
							    },
							    success: (uploadFileRes) => {
									var st = eval("(" + uploadFileRes.data + ")").status
							      
									if (st=="success"){
										uni.hideLoading()
										
										uni.showToast({
											title:"上传成功",
											icon:"success",
											duration:1500
										})
									}else{
										uni.hideLoading()
										uni.showToast({
											title:"上传失败",
											icon:'none',
											duration:1500
										})
									}
							    }
							});
						}else{
							if (app.globalData.user.Iden != "游客"){
								uploadTask = uni.uploadFile({
								    url: 'http://app.menguoli.com/api/member', //仅为示例，非真实的接口地址
								    filePath: this.$data.imgArr[0],
								    name: 'image',
								    formData: {
								        'id': app.globalData.user.ID,
										'title':this.$data.t,
										'content':this.$data.desc,
										'type': this.$data.type
								    },
								    success: (uploadFileRes) => {
								        var st = eval("(" + uploadFileRes.data + ")").status
										if (st=="success"){
											uni.hideLoading()
											uni.showToast({
												title:"上传成功",
												icon:"success",
												duration:1500
											})
										}else{
											uni.hideLoading()
											uni.showToast({
												title:"上传失败",
												icon:'none',
												duration:1500
											})
										}
								    }
								});
							}else{
								uni.showModal({
									title:"提示",
									content:"您还不是会员"
								})
							}

						}
	
				        uploadTask.onProgressUpdate((res) => {
				            console.log('上传进度' + res.progress);
				            console.log('已经上传的数据长度' + res.totalBytesSent);
				            console.log('预期需要上传的数据总长度' + res.totalBytesExpectedToSend);
							uni.showLoading({
								title:"上传中"+res.progress
							})
				        });
			},
			bindTextAreaBlur: function(e) {
				this.setData({
					desc:e.detail.value
				})
				console.log(e.detail.value)
			},
			bindTextAreaBlur1: function(e) {
				this.setData({
					t:e.detail.value
				})
				console.log(e.detail.value)
			},
			renderTime: function(date) {
				var dateee = new Date(date).toJSON();
				return new Date(+new Date(dateee) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(
					/\.[\d]{3}Z/, '')
			},
			show:function(e){
				console.log(e.currentTarget.dataset.id)
				uni.showModal({
					title:'消息操作',
					cancelText:'确定',
					cancelColor:'blue',
					confirmText:'删除',
					confirmColor:"red",
					complete:function(res){
						if (res.confirm){
							API.Delete(e.currentTarget.dataset.id).then(res=>{
								console.log(res)
							})
							location.reload()
						}
						if (res.cancel){
							API.ChangeMessage(e.currentTarget.dataset.id).then(res=>{
								console.log(res)
							})
							
						}
					}
				})
			},
			getSelect:function(e){
				this.setData({
					type:this.$refs.addRequestState.value
				})
			}
		}
	};
</script>
<style>
	@import "./posts.css";
</style>
