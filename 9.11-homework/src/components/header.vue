<template>
    <div>
        <div class="top-input">
            <div class="input-model">
                <input type="text" v-model="name" class="input1" placeholder="姓名">
                <input type="text" v-model="phone" class="input2" placeholder="手机号">
                <span class="sex-box">
                    <span class="span1" :style="{ border: isMan ? '1px solid #ffffff' : 'none' }" @click="Man"></span>
                    <span class="span2" :style="{ border: isWoman ? '1px solid #ffffff' : 'none' }" @click="Woman"></span>
                </span>
            </div>
            <button @click="addPerson">添加</button>
        </div>
        
    </div>
</template>

<script>

export default {
    name: 'header',
    data() {
        return {
            name:'',
            phone:'',
            list: [],
            isMan: true,
            isWoman: false
        }
    },
    created() {
    },
    methods: {
        addPerson() {
            let gender = "";
            let person = {};
            if (this.name) {
                person.name = this.name;
                if (this.phone) {
                    person.phone = this.phone;
                    if (this.isMan) {
                        gender = "1";
                    } else {
                        gender = "0";
                    }
                    person.gender = gender;
                    person.created = new Date().getTime();
                    this.list.push(person);
                    this.$emit("list", this.list);
                } else {
                    alert("号码不能为空");
                }
            } else {
                alert("姓名不能为空");
            }
        },
        Woman() {
            if (!this.isWoman) {
                this.isMan = false;
                this.isWoman = true;
            } 
        },
        Man() {
            if (!this.isMan) {
                this.isMan = true;
                this.isWoman = false;
            } 
        }
    },
    
}
</script>

<style>
.top-input{
    width: 100%;
    height: 44px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f97197;
    padding: 0 10px;
}
.input-model{
    font-size: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
}
.top-input .input1{
    width: 64px;
    height: 30px;
    padding: 0 4px;
    border: none;
    outline: none;
    border-radius: 2px;
    font-size: 14px;
}
.top-input .input2{
    width: 120px;
    height: 30px;
    border: none;
    outline: none;
    padding: 0 3px;
    border-radius: 2px;
    margin-left: 6px;
    font-size: 14px;
}
.top-input button{
    width: 60px;
    height: 30px;
    line-height: 14px;
    font-size: 14px;
    border: none;
    background: #fff;
    color: #ee7096;
    font-weight: 400;
    border-radius: 4px;
}
.all-count{
    width: 100%;
    height: 30px;
    background-color: #f3f3f3;
    line-height: 30px;
    font-size: 14px;
    color: #666;
    padding: 0 10px;
}
.span1{
    display: block;
    width: 100%;
    height: 50%;
    font-size: 12px;
    background-color: blue;
    border: solid 1px #fff;
    text-align: center;
    line-height: 15px;
}
.span2{
    display: block;
    width: 100%;
    height: 50%;
    font-size: 12px;
    background-color:#f8b8cd;
}
</style>