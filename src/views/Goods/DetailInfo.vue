<template>
    <div class="page-main">
        <div class="page-info" v-for="item in info" :key="item.id">
            <label class="label">{{item.name}}</label>&nbsp;:&nbsp;&nbsp;<span>{{item.value}}</span>
            <!-- {{item.name}}:  {{item.value}} -->
        </div>
    </div>
</template>

<script>

import { Vue, Component } from 'vue-property-decorator'

@Component({})
export default class DetailInfo extends Vue {
    info = [
        { id: 1, name: '商品名称', value: '木易' },
        { id: 2, name: '商品编码', value: 'xxx121212' },
        { id: 3, name: '商品副名称', value: '测试店' },
        { id: 4, name: '物料大类', value: 'xxx' },
        { id: 5, name: '打雷说明', value: '硬件/主设备' },
        { id: 6, name: '物料中类', value: 'xxx' },
        { id: 7, name: '中类说明', value: '硬件/主设备' },
        { id: 8, name: '物料小类', value: 'xxx' },
        { id: 9, name: '小类说明', value: '硬件/主设备' }
    ]
}
</script>

<style lang="less" scope>
.label{
    display: inline-block;
    width: 120px;
    text-align: right;
    margin-top: 20px;
}
</style>
