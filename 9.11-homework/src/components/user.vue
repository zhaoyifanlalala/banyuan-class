<template>
    <div style="display: flex;">
        <!-- <div class="top-input">
            <div class="input-model">
                <input type="text" v-model="name" class="input1" placeholder="姓名">
                <input type="text" v-model="phone" class="input2" placeholder="手机号">
                <span class="sex-box">
                    <span class="span1"></span>
                    <span class="span2"></span>
                </span>
            </div>
            <button>添加</button>
        </div>
        <div>
            <div class="all-count">45 位练习人</div>
        </div> -->

        <div class="per-info">
            <img v-if="item.gender == '1'" src="../images/man-svg.svg" />
            <img v-if="item.gender == '0'" src="../images/woman-svg.svg" />
            <div class="per-phone">
                <h2>{{ item.phone }}</h2>
                <h1>{{ item.name }}</h1>
            </div>
        </div>
        <p>{{ time | glaobalFormatTime }}</p>
        <button class="remove"  @click="remove">X</button>
    </div>
</template>

<script>

export default {
    name: 'user',
    data() {
        return {
            time:new Date().getTime()
        }
    },
    created() {
    },
    props:{
        item:{
            type:Object
        },
        index:{
            type:Number
        }
    },
    methods: {
        remove() {
            this.$emit("remove", this.index);
        }
    },
}
</script>

<style>
.item-person p{
    font-size: 13px;
    color: #999;
    padding-left: 100px;
}
.per-info{
    display: flex;
    flex-direction: row;
    align-items: center;
}
.per-info img{
    width: 44px;
    height: 44px;
}
.per-info h1{
    font-size: 14px;
    color: #666;
    font-weight: 400;
    margin: 0;
}
.per-info h2{
    font-size: 16px;
    color: #1c1c1c;
    font-weight: bold;
    margin: 0;
}
.per-phone{
    padding-left: 10px;
}
.remove{
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translate(0, -50%);
    border: none;
    background: none;
    color: #9e9c9c;
    font-size: 16px;
    line-height: 16px;
    outline: none;
}
.sex-box{
    display: inline-block;
    height: 30px;
    width: 30px;
    background: #fff;
    margin-left: 6px;
    border-radius: 2px;
    font-size: 0;
}

</style>