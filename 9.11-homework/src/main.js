import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;


Vue.filter('glaobalFormatTime',(value)=>{
  if (!value) {
    return ''
  }
  let time = new Date(value)
  let y = time.getFullYear()
  let m = time.getMonth()
  let d = time.getDate()
  let h = time.getHours()
  let min = time.getMinutes()
  let s = time.getSeconds()
  return y + '年' + m + '月' + d + '日' + h + '时' + min + '分' + s + '秒'
})


new Vue({
  render: h => h(App)
}).$mount("#app");
