<template>
  <div class="hello">
    <div class="content">
      <div class="box">
          <h1>Setting</h1>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "Setting",
  props: {
    msg: String
  }
};
</script>

<style>
.content {
  width: 100%;
  position: absolute;
  left: 15.6vw;
  top: 60px;
}
.box {
  width: 70vw;
  margin: 0 auto;
  padding: 80px 0 120px;
}
</style>
