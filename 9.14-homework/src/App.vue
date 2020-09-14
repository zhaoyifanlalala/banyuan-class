<template>
  <div id="app">
    <div class="left">
      <div class="userCenter-logo">
        <img class="logo" src="https://by-image.oss-cn-shanghai.aliyuncs.com/yfront/static/user/logo_black_bottom@2x.png">
      </div>
      <div class="user">
        <img src="https://by-image.oss-cn-shanghai.aliyuncs.com/images/160007081979927441.jpg" alt="" class="user-avatar-icon">
        <div class="username">zhao</div>
        <div style="color: #e8e8e8;font-weight:300">非会员</div>
      </div>
      <div class="main">
        <div class="major" @click="change('Major')"  :style="{ backgroundColor : activeComp === 'Major' ? 'rgba(105, 100, 209, 0.6)' : ''}">
          <img class="major-img" src="https://by-image.oss-cn-shanghai.aliyuncs.com/yfront/static/user/uc-index-my-course.png">
          <p>我的课程</p>
        </div>
        <div class="email" @click="change('Email')"  :style="{ backgroundColor : activeComp === 'Email' ? 'rgba(105, 100, 209, 0.6)' : ''}">
          <img class="email-img" src="https://by-image.oss-cn-shanghai.aliyuncs.com/yfront/static/user/uc-index-email.png">
          <p>邮箱</p>
        </div>
        <div class="setting" @click="change('Setting')" :style="{ backgroundColor : activeComp === 'Setting' ? 'rgba(105, 100, 209, 0.6)' : ''}">
          <img class="setting-img" src="https://by-image.oss-cn-shanghai.aliyuncs.com/yfront/static/user/uc-index-my-course.png">
          <p>设置</p>
        </div>
        <div class="exit">
          <img class="exit-img" src="https://by-image.oss-cn-shanghai.aliyuncs.com/yfront/static/user/uc-index-email.png">
          <p>退出</p>
        </div>
      </div>
    </div>

    <Header></Header>

    <!-- <div class="content">
      <div class="box"></div>
    </div> -->
    <keep-alive>
      <component :is="activeComp"></component>
    </keep-alive>
  </div>
</template>

<script>
import Major from "./components/Major";
import Email from "./components/Email";
import Setting from "./components/Setting";
import Header from "./components/Header";


export default {
  name: "App",
  components: {
    Major,Email,Setting,Header
  },
  data() {
    return {
      activeComp: 'Major',
    }
  },
  methods: {
    change(name){
      this.activeComp = name
      
    },
    

  },

};
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
.left{
  display: inline-block;
  vertical-align: top;
  width: 15.6vw;
  height: 100vh;
  min-height: 768px;
  background-color: #141c3b;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 2;
  text-align: center;
}
.userCenter-logo{
  text-align: center;
  padding: 2vh 0 8.16vh;
}
.logo{
  width: 146px;
  height: 43px;
  cursor: pointer;
  /* vertical-align: top; */
}
.user-avatar-icon{
  width: 78px;
  height: 78px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
}
.user{
  height: 150px;
  padding: 4px 0 63px;
}
.username{
  font-size: 16px;
  color: #e8e8e8;
  font-weight: 300;
}
.main{
  height: 110px;
}
.major, .email, .setting, .exit{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 55px;
  color: #e8e8e8;
  margin-bottom: 30px;
}
.major-img, .email-img, .setting-img, .exit-img{
  width: 22px;
  height: 22px;
  margin-right: 9px;
}
.main p{
  font-size: 16px;
  color: #e8e8e8;
  font-weight: 300;
  line-height: 54px;
  width: 70px;
  text-align: left;
}
.major:hover{
   background-color: rgba(105, 100, 209, 0.8);
}
.email:hover{
   background-color: rgba(105, 100, 209, 0.8);
}
.setting:hover{
   background-color: rgba(105, 100, 209, 0.8);
}
.exit:hover{
   background-color: rgba(105, 100, 209, 0.8);
}
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
