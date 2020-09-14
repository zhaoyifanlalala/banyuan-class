<template>
  <div>
    <div class="header">
      <img src="https://by-image.oss-cn-shanghai.aliyuncs.com/yfront/static/user/ic_fanhui_jiashi.svg" class="return"/>
      <a href="#" class="header-link">返回首页</a>
      <p class="header-title">我的课程</p>
    </div>
    
  </div>
</template>

<script>


export default {
  name: "Header",
  components: {
    
  },
  data() {
    return {
      
    }
  },
  

};
</script>

<style>
.header {
  display: flex;
  align-items: center;
  height: 56px;
  padding: 0 40px;
  background: #fff;
  box-shadow: 5px 6px 4px rgba(213, 209, 209, 0.5);
  position: fixed;
  top: 0;
  left: 15.6vw;
  right: 0;
}


.box {
  width: 70vw;
  margin: 0 auto;
  padding: 80px 0 120px;
}
.header-link {
  text-decoration: none;
  font-size: 16px;
  color: #707070;
  line-height: 56px;
  margin-right: 30px;
  cursor: pointer;
}
.return {
  cursor: pointer;
  margin-right: 20px;
}
.header-link:hover {
  color: #000;
}
.header-title {
  font-size: 16px;
  font-weight: 300;
  color: #202020;
  line-height: 56px;
}
</style>
