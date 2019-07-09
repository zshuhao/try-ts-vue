<template>
    <div class="my-request page-main">
        <h1 class="title">我的请求</h1>
        <div class="search-group">
            <el-select v-model="params.formStatus" clearable class="select" size="mini" placeholder="流程状态">
                <el-option v-for="(item, key) in statusOptions"
                    :key="key"
                    :label="item"
                    :value="key">
                </el-option>
            </el-select>
        </div>
        <div class="container">
            <Table :tableHeader="tableHeader" :tableData="tableData" :loading="loading">
                <el-table-column slot="handle-left" label="操作" align="center" key="101010101" width="140px" style="height: 20px" >
                    <template slot-scope="scope">
                        <el-button class="red" v-if="scope.row.formStatus === 1" size="mini" type="text" @click="cancelApply(scope.row)">取消申请</el-button>
                        <el-button size="mini" v-if="againStatus(scope.row)" type="text" @click="againApply(scope.row)">重新申请</el-button>
                    </template>
                </el-table-column>
            </Table>
            <Pagination :page.sync="params.pageIndex"
                :limit.sync="params.pageSize"
                :total="total"
                @pagination="getOrderList">
            </Pagination>
            <el-button @click="test">btn</el-button>
            <el-button>@Getter {{userInfo}}</el-button>
            <el-button>@State {{userName}}</el-button>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { State, Getter, Action } from 'vuex-class'
import Table from '@/components/Table.vue'
import Pagination from '@/components/Pagination.vue'
const mapStatus = {
    1: '审批中',
    2: '已取消',
    3: '已通过',
    4: '已驳回'
}
// 包含的类型，不显示重新申请按钮
const processType = ['EXCHANGE_ORDER']

// 如果 module使用了 namespace，这里也需要
const namespace: string = 'userInfo'
@Component({
    components: { Table, Pagination }
})
export default class MyRequest extends Vue {
    @State('userInfo') userName: any
    @State('author') authorName: any
    @Getter('getUserInfo', { namespace }) userInfo: any
    @Action('setUserInfo', { namespace }) setUserInfo: any

    tableHeader = [
        { prop: 'title', label: '标题' },
        { prop: 'procId', label: '申请编号', link: '/apply-detail', params: 'procId' },
        { prop: 'createOperName', label: '申请人' },
        { prop: 'currentAssignee', label: '当前处理人' },
        { prop: 'dealStatus', label: '流程状态' },
        { prop: 'createTime', label: '申请时间' }
    ]
    tableData = [
        { title: 111, procId: 123, createOperName: 222, currentAssignee: 3443, dealStatus: 666, createTime: 888 },
        { title: 111, procId: 123, createOperName: 222, currentAssignee: 3443, dealStatus: 666, createTime: 888 },
        { title: 111, procId: 123, createOperName: 222, currentAssignee: 3443, dealStatus: 666, createTime: 888 },
        { title: 111, procId: 123, createOperName: 222, currentAssignee: 3443, dealStatus: 666, createTime: 888 }
    ]
    params = {
        formStatus: '',
        pageIndex: 1,
        pageSize: 10
    }
    total = 20
    loading = false
    listCont = 0 // 数据总条数
    pageIndex = 1 // 当前选中第几页

    get statusOptions () {
        return mapStatus
    }

    againApply (val: any) {
        if (val.formStatus === 2 || val.formStatus === 4) {
            // 流程类型，不同的类型有不同的申请页面
            interface ProTypeDict {
                [index: string]: string
            }
            let processTypeDict: ProTypeDict = {
                'AGENT_APPLICATION': '/agent-apply', // 代理商申请
                'SEAL_APPLICATION': '/seal-apply' // 印章申请
            }
            let procId = val.procId
            this.$router.push({ path: processTypeDict[val.processType], query: { procId } })
        }
    }

    againStatus (val: any) {
        if ((val.formStatus === 2 || val.formStatus === 4) && !processType.includes(val.processType)) {
            return true
        } else {
            return false
        }
    }
    getOrderList () {
        console.log(11111)
        console.log(this.params)
    }
    test () {
        console.log(this.userName)
        console.log(this.authorName)
        console.log(this.userInfo)
        this.setUserInfo('啊哈哈')
    }
}
</script>
<style lang="less" scoped>
@import '../assets/main.less';
.select {
    margin: 0 5px;
    width: 160px;
}
.red {
    color:#f56c6c;
}
</style>
