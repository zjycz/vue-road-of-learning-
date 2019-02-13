// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import VueResource from 'vue-resource'
Vue.use(VueResource)

Vue.http.options.root = 'http://www.lovegf.cn:8899/api/';

// css reset  css初始化
import './styles/common.css'
// 引入mui的css文件
import './libs/mui/css/mui.css'
// 引入mui扩展字体的css文件
import './libs/mui/css/icons-extra.css'

//导入mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(MintUI)

Vue.config.productionTip = false

import moment from 'moment'

Vue.filter('dateFormat', function(dateStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
  return moment(dateStr).format(pattern)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // render函数的作用是将APP组件替换掉#app盒子
  render: h => h(App)
})
