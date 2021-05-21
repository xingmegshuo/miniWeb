<script>

const API = require("./utils/base");

export default {
  onLaunch: function () {
    // API.login();
    // 获取系统状态栏信息
    uni.getSystemInfo({
      success: e => {
        this.globalData.StatusBar = e.statusBarHeight;
        this.globalData.CustomBar = e.platform == 'android' ? e.statusBarHeight + 50 : e.statusBarHeight + 45;
      }
    });
  },
  onShow: function () {
    this.globalData.user = API.getUser();
    this.globalData.url = API.getHost();
  },
  globalData: {
    user: '',
    StatusBar: '',
    CustomBar: '',
    url: ''
  },
  methods: {}
};
</script>
<style>
@import "./app.css";
</style>