(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{374:function(n,i,e){"use strict";e.r(i);var o=e(42),l=Object(o.a)({},(function(){var n=this,i=n.$createElement,e=n._self._c||i;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("ol",[e("li",[n._v("要求可以使用$loading这个方法获取到loading组件生成的DOM元素并插入到相应元素中（parent）")]),n._v(" "),e("li",[n._v("vm.$el （实例属性可以获取DOM元素）")]),n._v(" "),e("li",[n._v("Vue.extend 这个全局API，继承Vue类创建一个子类，基于Vue构造器生成一个子构造器(Loading)，子构造器拥有vue构造器的一切方法。")]),n._v(" "),e("li",[n._v("封装一个方法LoadingInit，用new Loading（） 生成loading组件实例，将loading.$el(loading组件生成的DOM)插入到body(或parent)中，使用Vue.nextTick在页面渲染完成后将loading.isShow置为true，加载动画组件就显示出来了。")]),n._v(" "),e("li",[n._v("把方法LoadingInit挂载到Vue原型上，Vue.prototype.$loading = LoadingInit，这样就可以通过this.$loading(options)调用")]),n._v(" "),e("li",[n._v("关闭loading组件方法： 将loading组件生成的DOM从父元素this.$el.parentNode 中移除，再调用this.$destroy() ，销毁loading组件就可以了")])]),n._v(" "),e("p",[n._v("v-loading\n将Loading.$el 插入到el中，同时将实例loading挂载到el.loading做缓存。使用Vue.nextTick在页面渲染完成后将指令绑定的值binding.value赋值给loading组件中的el.loading.isShow（update时同样操作）\nunbind 钩子函数中，指令解绑，将loading组件生成的DOM从el.loading.$el.parentNode移除，destroy销毁组件。")])])}),[],!1,null,null,null);i.default=l.exports}}]);