<template>
    <div class="page-main">
        <div class="page-title">查看商品-基础信息</div>
        <el-tabs class="tabs" v-model="activeName" type="card" @tab-click="handleClick">
            <el-tab-pane class="Detailinfo" label="基础信息" name="first">
                <DetailInfo></DetailInfo>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator'
import DetailInfo from './DetailInfo'

@Component({
    components: { DetailInfo }
})
export default class Detail extends Vue {
    activeName = 'first'
    labelPosition = 'right'
    formLabelAlign = {
        name: ''
    }

    handleClick (tab, event) {
        console.log(tab, event)
    }
}

</script>

<style lang="less" scoped>
.tabs{
    margin-top: 10px;
    margin-left: 10px
}
</style>
