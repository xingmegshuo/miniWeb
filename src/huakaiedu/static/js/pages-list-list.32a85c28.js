(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-list-list"],{"0d74":function(t,e,i){var n=i("a78d");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("19609e1a",n,!0,{sourceMap:!1,shadowMode:!1})},"0f6a":function(t,e,i){"use strict";i("99af"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i("a1ad"),o={data:function(){return{id:0,page:1,posts:[],isLoadAll:!1,options:"",category:"",title:"",isLastPage:!1,loadtext:"",showloadmore:!1,advert:""}},components:{},props:{},onLoad:function(t){this.setData({options:t}),this.getAdvert(),t.id&&(this.getPostList({categories:t.id,page:this.page}),this.getCategoryByID(t.id)),t.s&&(this.getPostList({search:t.s,page:this.page}),this.setData({category:"关键词“"+t.s+"”的结果"}),uni.setNavigationBarTitle({title:"关键词:"+t.s}))},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){this.setData({page:1,posts:[]}),this.options.id&&this.getPostList({categories:this.options.id}),this.options.s&&this.getPostList({search:this.options.s})},onReachBottom:function(){this.isLastPage||(this.options.id&&this.getPostList({categories:this.options.id,page:this.page}),this.options.s&&this.getPostList({search:this.options.s,page:this.page}))},onShareAppMessage:function(){},methods:{getCategoryByID:function(t){var e=this;n.getCategoryByID(t).then((function(t){e.setData({title:t.name}),uni.setNavigationBarTitle({title:t.name})})).catch((function(t){console.log(t)}))},getPostList:function(t){var e=this;n.getPostsList(t).then((function(t){var i={};t.length<10&&e.setData({isLastPage:!0,loadtext:"到底啦",showloadmore:!1}),e.isBottom,i.posts=[].concat(e.posts,t),i.page=e.page+1,e.setData(i),uni.stopPullDownRefresh()})).catch((function(t){console.log(t),uni.stopPullDownRefresh()}))},getAdvert:function(){var t=this;n.listAdsense().then((function(e){console.log(e),200===e.status&&t.setData({advert:e.data})})).catch((function(t){console.log(t)}))},bindDetail:function(t){var e=t.currentTarget.id;uni.navigateTo({url:"/pages/detail/detail?id="+e})}}};e.default=o},"14c9":function(t,e,i){"use strict";i.r(e);var n=i("16b3"),o=i("f70b");for(var s in o)"default"!==s&&function(t){i.d(e,t,(function(){return o[t]}))}(s);i("6d23");var a,r=i("f0c5"),c=Object(r["a"])(o["default"],n["b"],n["c"],!1,null,"8b3beae2",null,!1,n["a"],a);e["default"]=c.exports},"16b3":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return n}));var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"tab-content"},[i("v-uni-view",{staticClass:"index"},[t.posts.length>0?i("v-uni-view",{staticClass:"index_article"},[t._l(t.posts,(function(e,n){return[n%5==0?[i("v-uni-view",{attrs:{id:e.id},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.bindDetail.apply(void 0,arguments)}}},[i("v-uni-view",{staticStyle:{position:"relative",height:"380rpx"}},[i("v-uni-image",{staticClass:"index_article_cover",attrs:{mode:"aspectFill",src:e.meta.thumbnail}}),i("v-uni-view",{staticClass:"index_article_during"},[i("v-uni-text",[t._v(t._s(e.category[0].name))])],1)],1),i("v-uni-view",{staticClass:"index_article_title"},[t._v(t._s(e.title.rendered))]),i("v-uni-view",{staticClass:"index_article_desc"},[t._v(t._s(e.excerpt.rendered))])],1),"unit"==t.advert.type?i("v-uni-view",{staticClass:"advert"},[i("v-uni-ad",{attrs:{"unit-id":t.advert.code}})],1):t._e()]:[i("v-uni-view",{attrs:{id:e.id},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.bindDetail.apply(void 0,arguments)}}},[i("v-uni-view",{staticStyle:{position:"relative",height:"380rpx"}},[i("v-uni-image",{staticClass:"index_article_cover",attrs:{mode:"aspectFill",src:e.meta.thumbnail}}),i("v-uni-view",{staticClass:"index_article_during"},[i("v-uni-text",[t._v(t._s(e.category[0].name))])],1)],1),i("v-uni-view",{staticClass:"index_article_title"},[t._v(t._s(e.title.rendered))]),i("v-uni-view",{staticClass:"index_article_desc"},[t._v(t._s(e.excerpt.rendered))])],1)]]}))],2):t._e(),t.isLastPage&&0==t.posts.length?i("v-uni-view",{staticClass:"index_article"},[i("v-uni-view",{staticStyle:{position:"relative",height:"380rpx"}},[i("v-uni-image",{staticClass:"index_article_cover",attrs:{mode:"aspectFill",src:"/static/images/message.png"}})],1),i("v-uni-view",{staticClass:"last_text"},[t._v("对不起! 你查看的内容没有找到")])],1):t._e(),t.isLastPage&&t.posts.length>0?i("v-uni-view",{staticClass:"last_text"},[t._v("已经到底啦~")]):t._e(),!t.isLastPage&&t.posts.length>0?i("v-uni-view",{staticClass:"last_text"},[t._v("努力加载中...")]):t._e()],1)],1)},s=[]},"6d23":function(t,e,i){"use strict";var n=i("0d74"),o=i.n(n);o.a},a1ad:function(t,e,i){var n=i("1bac"),o=function(t){return n.get("/wp-json/mp/v1/setting",t)},s=function(t){return n.get("/wp-json/mp/v1/posts/sticky",t)},a=function(t){return n.get("/wp-json/wp/v2/posts",t,{token:!0})},r=function(t){return n.get("/wp-json/wp/v2/posts/"+t,{},{token:!0})},c=function(t){return n.get("/wp-json/wp/v2/pages",t)},d=function(t){return n.get("/wp-json/wp/v2/pages/"+t)},l=function(t){return n.get("/wp-json/wp/v2/categories?orderby=id&order=asc",t)},p=function(t){return n.get("/wp-json/wp/v2/categories/"+t)},u=function(t){return n.get("/wp-json/wp/v2/tags?orderby=id&order=asc",t)},g=function(t){return n.get("/wp-json/wp/v2/tags/"+t)},v=function(t){return n.get("/wp-json/mp/v1/posts/rand",t)},f=function(t){return n.get("/wp-json/mp/v1/posts/relate",t)},w=function(t){return n.get("/wp-json/mp/v1/posts/most?meta=views",t)},b=function(t){return n.get("/wp-json/mp/v2/posts/most?meta=favs",t)},m=function(t){return n.get("/wp-json/mp/v2/posts/most?meta=likes",t)},h=function(t){return n.get("/wp-json/mp/v2/posts/most?meta=comments",t)},x=function(t){return n.get("/wp-json/mp/v1/posts/comment",t)},_=function(t){return n.get("/wp-json/mp/v1/comments",t)},k=function(){return n.getUserInfo()},y=function(){return n.logout()},P=function(t){return n.post("/wp-json/mp/v1/comments?type=fav",t,{token:!0})},j=function(t){return n.post("/wp-json/mp/v1/comments?type=like",t,{token:!0})},C=function(t){return n.get("/wp-json/mp/v1/posts/comment?type=fav",t,{token:!0})},L=function(t){return n.get("/wp-json/mp/v1/posts/comment?type=like",t,{token:!0})},D=function(t){return n.get("/wp-json/mp/v1/posts/comment?type=comment",t,{token:!0})},z=function(t){return n.post("/wp-json/mp/v1/comments?type=comment",t,{token:!0})},B=function(t){return n.post("/wp-json/mp/v1/vote",t,{token:!0})},I=function(t){return n.post("/wp-json/mp/v1/subscribe",t,{token:!0})},M=function(t){return n.post("/wp-json/mp/v1/qrcode",t,{token:!1})},A=function(t){return n.get("/wp-json/mp/v1/menu",t)},R=function(t){return n.get("/wp-json/mp/v1/advert/wechat?type=index",t)},S=function(t){return n.get("/wp-json/mp/v1/advert/wechat?type=list",t)},T=function(t){return n.get("/wp-json/mp/v1/advert/wechat?type=detail",t)},F=function(t){return n.get("/wp-json/mp/v1/advert/wechat?type=page",t)};n.getSiteInfo=o,n.getStickyPosts=s,n.getPostsList=a,n.getPostsbyID=r,n.getPagesList=c,n.getPageByID=d,n.getCategories=l,n.getCategoryByID=p,n.getTags=u,n.getTagByID=g,n.getRandPosts=v,n.getRelatePosts=f,n.getMostViewsPosts=w,n.getMostFavPosts=b,n.getMostLikePosts=m,n.getMostCommentPosts=h,n.getRecentCommentPosts=x,n.getComments=_,n.getProfile=n.guard(k),n.fav=n.guard(P),n.getFavPosts=n.guard(C),n.like=n.guard(j),n.getLikePosts=n.guard(L),n.getCommentsPosts=n.guard(D),n.addComment=n.guard(z),n.votePosts=n.guard(B),n.subscribeMessage=n.guard(I),n.getCodeImg=M,n.Loginout=y,n.getMenuSetting=A,n.indexAdsense=R,n.listAdsense=S,n.detailAdsense=T,n.pageAdsense=F,t.exports=n},a78d:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,"/* pages/list/list.wxss */.index[data-v-8b3beae2]{padding:%?20?% %?36?%}.top_text[data-v-8b3beae2]{width:100%;text-align:center;color:#aaa;font-size:%?24?%}uni-page-body[data-v-8b3beae2]::-webkit-scrollbar{display:none}.index_label[data-v-8b3beae2]{position:relative}.index_label_title[data-v-8b3beae2]{font-size:%?48?%;color:#262626;position:absolute;top:0;left:0;z-index:1}.index_label_bg[data-v-8b3beae2]{width:%?160?%;height:%?12?%;background:-webkit-linear-gradient(right,rgba(249,228,135,0),#f1c54f);background:linear-gradient(270deg,rgba(249,228,135,0),#f1c54f);border-radius:%?11?%;position:absolute;top:%?48?%;left:0}.index_label_more[data-v-8b3beae2]{position:absolute;right:0;top:%?-14?%;color:#888;font-size:%?28?%;line-height:%?48?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.index_comment_box[data-v-8b3beae2]{margin:%?120?% %?30?% 0 0;width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;overflow-x:scroll;-webkit-overflow-scrolling:touch}.index_comment[data-v-8b3beae2]{background:#f6f7f9;border-radius:%?4?%;padding:%?70?% %?40?% %?100?% %?40?%}.index_comment_hb[data-v-8b3beae2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.index_comment_avatar[data-v-8b3beae2]{width:%?70?%;height:%?70?%;border-radius:50%;background:#888}.index_comment_hb_name[data-v-8b3beae2]{color:#888;font-size:%?24?%;line-height:%?37?%}.index_comment_hb_title[data-v-8b3beae2]{color:#262626;font-size:%?24?%;line-height:%?24?%;margin-left:%?6?%;width:%?220?%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.index_comment_content[data-v-8b3beae2]{color:#262626;font-size:%?32?%;height:%?240?%;width:%?340?%;display:inline-block;margin-top:%?50?%;white-space:normal;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:5;overflow:hidden}.index_article_cover[data-v-8b3beae2]{width:%?678?%;height:%?380?%;border-radius:%?4?%}.index_article[data-v-8b3beae2]{margin-top:%?20?%}.index_article_title[data-v-8b3beae2]{font-size:%?36?%;font-weight:400;color:#262626;line-height:%?50?%;margin-top:%?30?%;width:%?678?%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.index_article_desc[data-v-8b3beae2]{color:#888;font-size:%?28?%;margin-bottom:%?70?%;overflow:hidden;margin-top:%?16?%;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;word-wrap:break-word}.index_article_during[data-v-8b3beae2]{position:absolute;top:%?326?%;left:%?16?%;z-index:1;\n    /* width: 120rpx; */height:%?40?%;background:#262626;border-radius:%?4?%;opacity:.9;padding:%?2?% %?10?%;text-align:center;line-height:%?32?%}.index_article_during uni-text[data-v-8b3beae2]{font-size:%?22?%;color:#fff;margin-left:%?8?%}.last_text[data-v-8b3beae2]{width:100%;text-align:center;color:#aaa;font-size:%?24?%;margin:%?90?% 0 %?30?%}",""]),t.exports=e},f70b:function(t,e,i){"use strict";i.r(e);var n=i("0f6a"),o=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=o.a}}]);