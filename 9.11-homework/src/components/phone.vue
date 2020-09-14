<template>
    <div>
        <!-- <div class="container"> -->
            <div class="warpper">
                <Header @list="getlist"></Header>
                <div>
                    <div class="all-count">{{ count }} 位练习人</div>
                </div>
                <div v-for="(item, index) in list" :key="'list' + index" class="item-person">
                    <User :item="item" :index="index" @remove="remove"></User>
                </div>
            </div>
        <!-- </div> -->
    </div>
</template>

<script>
import Header from "./header"
import User from "./user"


export default {
    name: 'phone',
    data() {
        return {
            list:[]
        }
    },
    created() {
    },
    components:{
        Header,User,
    },
    computed: {
        count: function() {
            return this.list.length;
        }
    },
    methods: {
        remove(data) {
            this.list.splice(data, 1);
        },
        getlist(data) {
            this.list = data;
        },
    },
}
</script>

<style>
/* .container {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
} */
.warpper {
    min-width: 320px;
    max-width: 500px;
    margin: 0 auto;
    height: 100%;
    background-color: #fff;
}
.item-person{
    position: relative;
    padding-right: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px 60px 10px 10px;
    border-bottom: solid 1px #e2e2e2;
}
</style>