(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabBar/daiban"],{"01c6":function(t,e,n){"use strict";n.r(e);var i=n("9d41"),o=n("2d01");for(var s in o)"default"!==s&&function(t){n.d(e,t,(function(){return o[t]}))}(s);n("6173"),n("4c5c");var c,a=n("f0c5"),u=Object(a["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],c);e["default"]=u.exports},"2d01":function(t,e,n){"use strict";n.r(e);var i=n("6f23"),o=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,(function(){return i[t]}))}(s);e["default"]=o.a},"4c5c":function(t,e,n){"use strict";var i=n("ebf7"),o=n.n(i);o.a},"5c1d":function(t,e,n){"use strict";(function(t){n("b6f5");i(n("66fd"));var e=i(n("01c6"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},6173:function(t,e,n){"use strict";var i=n("ea15"),o=n.n(i);o.a},"6f23":function(t,n,i){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=i("2152"),s=new o.AppModel;function c(t){var e=new Date,n=e.getFullYear(),i=e.getMonth()+1,o=e.getDate();return"start"===t?n-=60:"end"===t&&(n+=2),i=i>9?i:"0"+i,o=o>9?o:"0"+o,"".concat(n,"-").concat(i,"-").concat(o)}var a=function(){Promise.all([i.e("common/vendor"),i.e("components/uni-icons/uni-icons")]).then(function(){return resolve(i("b81c"))}.bind(null,i)).catch(i.oe)},u={components:{uniIcons:a},data:function(){return{date:c(),text:" 待办列表",startDate:c("start"),endDate:c("end"),uuid:"",wxOpenId:"",needLogin:!0,inputClearValue:"",showClearIcon:!1,transShow:!1,modeClass:["fade"],show:!1,maskClass:{position:"fixed",bottom:0,top:0,left:0,right:0,"background-color":"rgba(0, 0, 0, 0.4)"},transfromClass:{position:"fixed",bottom:0,top:0,left:0,right:0,display:"flex","justify-content":"center","align-items":"center"},horizontal:"right",pattern:{color:"#7A7E83",backgroundColor:"#fff",selectedColor:"#007AFF",buttonColor:"#007AFF"},content:[{iconPath:"/static/yes.png",selectedIconPath:"/static/xin.png",text:"",active:!1},{iconPath:"/static/good.png",selectedIconPath:"/static/xin.png",text:"",active:!1}],swipeList:[]}},onLoad:function(){},onShow:function(){var e=this;t.getStorage({key:"userInfo",success:function(){e.wxOpenId=t.getStorageSync("userInfo").wxOpenId,e.needLogin=!1,e.show=!1,console.log("登录按钮",e.needLogin),e.getNote(e.date)},fail:function(){console.log("需要登录"),e.needLogin=!0,e.show=!0}}),console.log("我这个页面显示就会执行")},onHide:function(){console.log("我这个页面退出的会执行")},methods:{clearInput:function(t){this.inputClearValue=t.detail.value,t.detail.value.length>0?this.showClearIcon=!0:this.showClearIcon=!1},clearIcon:function(){this.inputClearValue="",this.showClearIcon=!1},bindDateChange:function(t){this.date=t.detail.value,console.log("date",t.detail.value),this.getNote(t.detail.value)},getNote:function(n){var i=this,o=t.getStorageSync("userInfo");""===o||this.needLogin||s.getNote(o.wxOpenId,n,(function(t){""!==t.data?(i.uuid=t.data.uuid,i.swipeList=JSON.parse(t.data.content)):(i.uuid="",i.swipeList=[])}),(function(n){t.showToast({title:"同步失败请重试",duration:1e3,image:"/static/no.png"}),i.content[e.index].active=!1}))},saveNote:function(){var n=this,i={};i.content=n.swipeList,i.uuid=n.uuid,i.wxOpenId=n.wxOpenId,s.saveNote(i,(function(t){n.uuid=t.data}),(function(i){t.showToast({title:"同步失败请重试",duration:1e3,image:"/static/no.png"}),n.content[e.index].active=!1}))},shortshock:function(){t.vibrateShort({success:function(){console.log("success")}})},mask:function(){this.show=!this.show},open:function(t){this.modeClass=t,this.transShow=!this.transShow},trigger:function(e){if(0==e.index)if(""!==this.inputClearValue){this.content[e.index].active=!0;var n=this.inputClearValue,i=n.split(/[；;]/);for(var o in i)this.swipeList.push({status:"1",id:(new Date).getTime()+"_"+o,options:[{text:"置顶"},{text:"完成",style:{backgroundColor:"rgb(254,156,1)"}},{text:"删除",style:{backgroundColor:"rgb(255,58,49)"}}],content:i[o]});this.inputClearValue="",this.saveNote(),this.content[e.index].active=!1}else t.showToast({title:"请填写内容呀",image:"/static/no.png"});else this.content[e.index].active=!e.item.active},fabClick:function(){this.shortshock(),this.needLogin||(this.mask(),this.open(["slide-top"]))},setOpened:function(){this.isOpened=!this.isOpened},change:function(t){this.isOpened=t},swipeChange:function(t){console.log("滑动状态",t)},swipeClickItem:function(e,n){var i=this,o=e.content,s=n.id,c=i.getIndexById(s);if(console.log("当前元素id",s),console.log("当前元素内容",n.content),"删除"===o.text)t.showModal({confirmText:"✔",cancelText:"❌",title:"提示",content:"是否确认删除",success:function(t){t.confirm?(i.swipeList.splice(c,1),console.log("当前列表",JSON.stringify(i.swipeList)),i.saveNote()):t.cancel&&console.log("用户点击取消")}});else if("置顶"===o.text){var a=i.swipeList[c];a.id=(new Date).getTime()+"",a.top="0",a.options[0].text="取消",i.swipeList.splice(c,1),i.swipeList.unshift(a),this.saveNote()}else if("取消"===o.text){var u=i.swipeList[c];u.id=(new Date).getTime()+"",delete u.top,u.options[0].text="置顶",i.swipeList.splice(c,1),i.swipeList.push(u),this.saveNote()}else if("完成"===o.text){var r=i.swipeList[c];r.id=(new Date).getTime()+"",r.options[1].text="未完成",r.status="0",i.swipeList.splice(c,1),i.swipeList.push(r),this.saveNote(),this.plus()}else if("未完成"===o.text){var l=i.swipeList[c];l.id=(new Date).getTime()+"",l.options[1].text="完成",l.status="1",this.saveNote(),this.reduce()}else t.showToast({title:"点击了".concat(e.content.text,"按钮"),icon:"none"})},plus:function(){var e=t.getStorageSync("userInfo").groupUuid;""!==e&&s.plus(this.wxOpenId,(function(t){}),(function(t){}))},reduce:function(){var e=t.getStorageSync("userInfo").groupUuid;""!==e&&s.reduce(this.wxOpenId,(function(t){}),(function(t){}))},getIndexById:function(t){for(var e=0;e<this.swipeList.length;e++)if(this.swipeList[e].id==t)return e;return-1}}};n.default=u}).call(this,i("543d")["default"])},"9d41":function(t,e,n){"use strict";var i={uniSection:function(){return n.e("components/uni-section/uni-section").then(n.bind(null,"ea72"))},uniSwipeAction:function(){return n.e("components/uni-swipe-action/uni-swipe-action").then(n.bind(null,"672e"))},uniSwipeActionItem:function(){return Promise.all([n.e("common/vendor"),n.e("components/uni-swipe-action-item/uni-swipe-action-item")]).then(n.bind(null,"581a"))},uniTag:function(){return n.e("components/uni-tag/uni-tag").then(n.bind(null,"1824"))},uniFab:function(){return n.e("components/uni-fab/uni-fab").then(n.bind(null,"0dcb"))},uniTransition:function(){return n.e("components/uni-transition/uni-transition").then(n.bind(null,"77cd"))}},o=function(){var t=this,e=t.$createElement;t._self._c},s=[];n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return i}))},ea15:function(t,e,n){},ebf7:function(t,e,n){}},[["5c1d","common/runtime","common/vendor"]]]);