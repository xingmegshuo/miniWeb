<template>
	<view>
		<view class="section section-features">
			<view class="bars">
				<text :class="titleId==1 ? 'active' : 'no_active'" @tap="changeF">专委会介绍</text>
				<text :class="titleId==2 ? 'active' : 'no_active'" @tap="changeS">入会申请</text>
			</view>
			<view class="content_view" v-if="titleId==1">
				<view class="des-title des-bold">四川可持续发展专业委员会</view>
				<view class="des-p ">四川可持续发展专业委员会(Sichuan Committee for Sustainable Development)缩写SCSD，成立于2020年10月，
					是由四川省互联网协会、成都市成华区人才发展促进会、重庆市沙坪坝区技术市场协会共同发起成立的首个为打造川、渝协会共建，
					覆盖全行业可持续发展的内容服务型非营利性社会团体.</view>
				<view class="des-p">中文名：四川可持续发展专业委员会</view>
				<view class="des-p">外文名 Sichuan Committee for Sustainable Development</view>
				<view class="des-p">简称SCSD</view>
				<view class="des-p"><b>主管单位:</b></view>
				<view class="des-p">
					四川省互联网协会、成都市成华区人才发展促进会、重庆沙坪坝区技术市场协会</view>
				<view class="des-p"><b>登记单位:</b></view>
				<view class="des-p">
					四川省互联网协会、成都市成华区人才发展促进会、重庆沙坪坝区技术市场</view>
				<view class="des-p"><b>专委会属性:</b></view>

				<view class="des-p">
					非营利性社会团体</view>
				<view class="des-p"><b>社团地址:</b></view>
				<view class="des-p">
					成都市成华区群团服务中心三楼</view>
				<view class="des-p"><b>现任领导：</b>
				</view>
				<view class="des-p">副理事长:张旻光 秘书长:高杰</view>
				<view class="des-p">创办时间2020年10月
				</view>
				<view class="des-p"><b>专委会简介:</b></view>
				<view class="des-p">
					四川省可持续发展专业委员会(以下简称专委会)成立于2020年10月，是四川省首个以川、
					渝协会为主体发起成立的以教育为主导、以联合国可持续发展为目标、以服务企业为宗旨、以区域集中、产业集群、
					开发集约为发展方向，在党的十四五规划纲要和2035远景目标的大前提下，引导川、渝两地不同区域的全行业、专业化产业集聚，
					带动研究创新力量，面向全社会、全行业通过与各级政府、部门、企事业单位、通讯机构、金融机构、投资机构、供应链、孵化器、
					专家智库团队、各行业中台的协调下,再配合互联网+及5G 催生产业的企业提供相关非营利性服务，以交流、共享、匹配、融合形成若干微观生态链,集成构建产业生态圈，
					协助上级协会及相关政府部门推动川、渝企业可持续发展的全新内容型资源整合平台。</view>
				<view class="des-p">组织体系
				</view>
				<view class="des-p">最高权力机构
				</view>
				<view class="des-p">专委会的最高权力机构是会员代表大会，会员代表大会的职权是：
				</view>
				<view class="des-p">(一)制定和修改章程；
				</view>
				<view class="des-p">(二)选举和罢免理事；
				</view>
				<view class="des-p">(三)审议理事会的工作报告和财务报告；
				</view>
				<view class="des-p">(四)制定并修改会费标准；
				</view>
				<view class="des-p">(五)决定专委会的工作方针、任务；
				</view>
				<view class="des-p">(六)决定终止事宜；
				</view>
				<view class="des-p">(七)决定其他重大事宜。
				</view>
				<view class="des-p">会员代表大会须有 2/3 以上的会员代表出席并上报上级协会方能召开，其决议须经到会会员代表半数以上表决通过方能生效。</view>
				<view class="des-p">会员代表大会每届1年。因特殊情况需提前或延期换届的，须由理事会表决通过，报业务主管单位审查并批准。延期换届最长不超过1年。
				</view>
			</view>
			<view class="content_view" v-else>
				<view style="text-align: center;margin: 10rpx;font-size: 34rpx;font-weight: bold;">入会申请表在线填写</view>
				<view style="padding: 20rpx;">
					<view style="font-size: 30rpx;font-weight: bold;">注意事项:</view>
					<view style="font-size: 26rpx;margin-top: 10rpx;">1.下载附件填写纸质版发送至秘书处微信: sxcydsz</view>
					<view style="font-size: 26rpx;margin-top: 10rpx;">2.按照提示填写在线申请表,*为必填</view>
				</view>
				<a style="text-decoration:none;margin: 10rpx;" href='/static/可持续发展委员会入会申请表.docx' target="_blank">
					<button size="mini" type="primary">点击下载入会申请表</button>
				</a>
				<view style="width: 95%;margin: auto;padding: 10rpx;">
					<form @submit="formSubmit">
						<view style="width: 100%;">
							<view class="form-item">
								<view class="label">*单位名称:</view>
								<input class="uni-input" name="cname" placeholder="请输入单位名称" />
							</view>
							<view class="form-item">
								<view class="label">*申请人姓名:</view>
								<input class="uni-input" name="name" placeholder="请输入申请人姓名" />
							</view>
							<view class="form-item">
								<view class="label">*公司地址:</view>
								<input class="uni-input" name="address" placeholder="请输入公司地址" />
							</view>
							<view class="form-item">
								<view class="label">总部地址:</view>
								<input class="uni-input" name="alladdress" placeholder="请输入公司总部地址" />
							</view>
							<view class="form-item">
								<view class="label">设立日期:</view>
								<input class="uni-input" name="date" placeholder="请输入设立日期" />
							</view>
							<view class="form-item">
								<view class="label">邮政编码:</view>
								<input class="uni-input" name="number" placeholder="请输入邮政编码" />
							</view>
							<view class="form-item">
								<view class="label">*注册资本:</view>
								<input class="uni-input" name="money" placeholder="请输入注册资本" />
							</view>
							<view class="form-user">
								<view class="form-userlabel">
									<view>*法人</view>
									<view>联络人</view>
									<view>推荐人</view>
								</view>
								<view class="form-userlabel">
									<view><input name="faname" placeholder="姓名" /></view>
									<view><input name="luname" placeholder="姓名" /></view>
									<view><input name="tuiname" placeholder="姓名" /></view>
								</view>
								<view class="form-userlabel">
									<view><input name="fazhiwu" placeholder="职务" /></view>
									<view><input name="luzhiwu" placeholder="职务" /></view>
									<view><input name="tuizhiwu" placeholder="职务" /></view>
								</view>
								<view class="form-userlabel">
									<view><input name="faphone" placeholder="手机" /></view>
									<view><input name="luphone" placeholder="手机" /></view>
									<view><input name="tuiphone" placeholder="手机" /></view>
								</view>
								<view class="form-userlabel">
									<view><input name="faemail" placeholder="邮箱" /></view>
									<view><input name="luemail" placeholder="邮箱" /></view>
									<view><input name="tuiemail" placeholder="邮箱" /></view>
								</view>
							</view>
							<view class="xunze">
								<view class="xuanzet">*是否为省内代表处</view>
								<view>
									<radio-group @change="radioChange">
										<label v-for="(item,index) in daibiaochu" :key="item.value">
											<view style="margin-top: 10rpx 0;">
												<radio :value="item.value" :checked="index === current1" />
												<text style="margin-left: 10rpx;">{{item.text}}</text>
											</view>
										</label>
									</radio-group>
								</view>

								<view class="xuanzet">*机构性质</view>
								<view>
									<radio-group @change="xingzhiChange">
										<label v-for="(item,index) in jigou" :key="item.value">
											<view style="margin: 10rpx 0;">
												<radio :value="item.value" :checked="index === current" />
												<text style="margin-left: 10rpx;">{{item.text}}</text>
											</view>
										</label>
									</radio-group>
									<view><input name="jigouxingzhiorther" placeholder="其它内容请输入" /></view>
								</view>
								<view class="xuanzet">*股权性质</view>
								<radio-group @change="guquanChange">
									<label v-for="(item,index) in guquan" :key="item.value">
										<view style="margin: 10rpx 0;">
											<radio :value="item.value" :checked="index === current2" />
											<text style="margin-left: 10rpx;">{{item.text}}</text>
										</view>
									</label>
								</radio-group>

								<view class="xuanzet">*主要涉及领域</view>
								<checkbox-group @change="checkboxChange">
									<label v-for="item in lingyu" :key="item.value">
										<view style="margin-top: 5rpx;">
											<checkbox :value="item.value" :checked="item.checked" />{{item.text}}
										</view>
									</label>
									<view style="margin-top: 5rpx;"><input name="lingyuorther" placeholder="其它内容请输入" /></view>			
								</checkbox-group>
								<view class="xuanzet">*入会会员级别意向</view>
								<radio-group @change="yixiangChange">
									<label v-for="(item,index) in yixiang" :key="item.value">
										<view style="margin: 10rpx 0;">
											<radio :value="item.value" :checked="index === current3" />
											<text style="margin-left: 10rpx;">{{item.text}}</text>
										</view>
									</label>
								</radio-group>
							</view>
							<view class="xuanzet">*会员简介</view>
							<view style="height: 500rpx;border: solid 1rpx #e8e8e8;">
								<textarea style=" padding: 10rpx;" @blur="bindTextAreaBlur" auto-height
									placeholder="请输入300-500简介"></textarea>
							</view>
							<button form-type="submit" v-if="user.Iden ==='游客' " type="primary" style="margin-top: 20rpx;">提交</button>
						</view>
					</form>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	// pages/category/category.js

	/**
	 * Author : 丸子团队（波波、Chi、ONLINE.信）
	 * Github 地址: https://github.com/dchijack/Travel-Mini-Program
	 * GiTee 地址： https://gitee.com/izol/Travel-Mini-Program
	 */
	const API = require("../../utils/api");

	export default {
		data() {
			return {
				page: 1,
				category: '',
				isBottom: false,
				isLastPage: false,
				titleId: '1',
				url: '',
				desc:'',
				user:'',
				current: 0,
				current1: 0,
				current2: 0,
				current3: 0,
				daibiao:'是',
				jigouxingzhi:'有限责任公司',
				guquanxingzhi:'国有',
				huiyuanyixiang:'副理事长单位',
				shejilingyu:'',
				daibiaochu: [{
						text: '是',
						value: "是"
					},
					{
						text: '否',
						value: "否"
					}
				],
				jigou: [{
						text: '有限责任公司',
						value: "有限责任公司"
					},
					{
						text: '股份有限公司',
						value: "股份有限公司"
					},
					{
						text: '社会团体',
						value: "社会团体"
					},
					{
						text: '其它',
						value: "其它"
					}
				],
				guquan: [{
						text: '国有',
						value: "国有"
					},
					{
						text: '民营',
						value: "民营"
					},
					{
						text: '中外合资',
						value: "中外合资"
					},
					{
						text: '外商独资',
						value: "外商独资"
					},
					{
						text: '混合所有制',
						value: '混合所有制'
					}
				],
				yixiang: [{
						text: '副理事长单位',
						value: "副理事长单位"
					},
					{
						text: '常务理事',
						value: "常务理事"
					},
					{
						text: '理事',
						value: "理事"
					},
					{
						text: '会员单位',
						value: "会员单位"
					}
				],
				lingyu: [{
						text: '能源',
						value: "能源"
					},
					{
						text: '医疗健康',
						value: "医疗健康"
					},
					{
						text: '文化娱乐',
						value: "文化娱乐"
					},
					{
						text: '生活服务',
						value: "生活服务"
					},
					{
						text: '新材料',
						value: "新材料"
					},
					{
						text: '电子商务',
						value: "电子商务"
					},
					{
						text: '金融投资',
						value: "金融投资"
					},
					{
						text: '供应链服务',
						value: "供应链服务"
					},
					{
						text: '教育培训',
						value: "教育培训"
					},
					{
						text: '餐饮',
						value: "餐饮"
					},
					{
						text: '软件',
						value: "软件"
					},
					{
						text: '旅游',
						value: "旅游"
					}, {
						text: '中介服务',
						value: "中介服务"
					},
					{
						text: '建筑',
						value: "建筑"
					},
					{
						text: '其它',
						value: "其它"
					}
				]
			};
		},

		components: {},
		props: {},

		/**
		 * 生命周期函数--监听页面加载
		 */
		onLoad: function(options) {
			this.setData({
				user:getApp().globalData.user
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
			bindTextAreaBlur: function(e) {
				this.setData({
					desc:evt.detail.value
				})
				console.log(e.detail.value)
			},
			changeF: function() {
				this.setData({
					titleId: 1
				});
			},
			checkboxChange: function(e) {
				this.setData({
					shejilingyu:e.target.value
				})
			},
			radioChange: function(evt) {
				this.setData({
					daibiao:evt.target.value
				})
				for (let i = 0; i < this.$data.daibiaochu.length; i++) {
					if (this.$data.daibiaochu[i].value === evt.target.value) {
						this.current1 = i;
						break;
					}
				}
			},
			xingzhiChange: function(evt) {
				this.setData({
					jigouxingzhi:evt.target.value
				})
				for (let i = 0; i < this.$data.jigou.length; i++) {
					if (this.$data.jigou[i].value === evt.target.value) {
						this.current = i;
						break;
					}
				}
			},
			guquanChange: function(evt) {
				this.setData({
					guquanxingzhi:evt.target.value
				})
				for (let i = 0; i < this.$data.guquan.length; i++) {
					if (this.$data.guquan[i].value === evt.target.value) {
						this.current2 = i;
						break;
					}
				}
			},
			yixiangChange: function(evt) {
				this.setData({
					huiyuanyixiang:evt.target.value
				})
				for (let i = 0; i < this.$data.yixiang.length; i++) {
					if (this.$data.yixiang[i].value === evt.target.value) {
						this.current3 = i;
						break;
					}
				}
			},
			changeS: function() {
				this.setData({
					titleId: 2
				});
			},
			formSubmit: function(e) {
				let data = e.detail.value
				data["daibiao"]=this.$data.daibiao
				data['jigouxingzhi']=this.$data.jigouxingzhi
				data['guquanxingzhi'] = this.$data.guquanxingzhi
				data['lingyu']=this.$data.shejilingyu
				data['huiyuanyixiang']=this.$data.huiyuanyixiang
				data['desc'] = this.$data.desc
	
				if (getApp().globalData.user) {
					API.CreateJoin(JSON.stringify(data)).then(res => {
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
						title: "检查数据和登录状态",
						icon: 'none', //如果要纯文本，不要icon，将值设为'none'
						duration: 1500
					})
				}
			}
		}
	};
</script>
<style>
	@import "./category.css";
</style>
