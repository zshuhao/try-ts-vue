<template>
    <div class="page-main">
        <div class="page-title">商品列表</div>
        <div class="page-container">
            <el-form size="small" :inline="true">
                <el-form-item>
                    <el-input class="search-input" v-model="msg" type="text" placeholder="商品名称/商品编码"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-select v-model="value" placeholder="上下架状态">
                        <el-option label="上架" value="上架"></el-option>
                        <el-option label="下架" value="下架"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button-group>
                        <el-button type="primary" icon="el-icon-search">搜索</el-button>
                        <el-button type="primary" icon="el-icon-refresh">同步ERP商品</el-button>
                    </el-button-group>
                </el-form-item>
            </el-form>
            <Table :tableHeader="TableHeader" :tableData="goodsList">
                <el-table-column slot="handle-left" label="操作" align="center">
                    <template slot-scope="scope">
                        <el-button type="text" @click="goDetail(scope.row)">查看</el-button>
                    </template>
                </el-table-column>
            </Table>
            <Pagination :total="50"></Pagination>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

import Table from '@/components/Table.vue'
import Pagination from '@/components/Pagination.vue'

interface Params {
    keyWord: string
    onSale: string
    pageIndex: number
    pageSize: number
}

@Component({
    components: { Pagination, Table }
})
export default class List extends Vue {
    msg = ''
    value = ''
    TableHeader = [
        { prop: 'cuxItemDescription', label: '商品名称' },
        { prop: 'cuxItemId', label: '商品编码' },
        { prop: 'formatCuxItemPutawayYN', label: '上下架状态' }
    ]
    goodsList = []
    queryParams: Params = {
        keyWord: '',
        onSale: '', // 业务线编码
        pageIndex: 1,
        pageSize: 10
    }
    listTotal = 0
    loading = false
    syncBtn = false

    fetchGoodsList () {
        this.loading = true
        this.$ajax({
            method: 'POST',
            type: 'fetchGoodsList',
            data: this.queryParams
        }).then((res: any) => {
            if (res.data.success && res.data.data) {
                const { pageIndex, recordCount, skuList } = res.data.data
                this.queryParams.pageIndex = pageIndex
                this.listTotal = recordCount
                this.goodsList = skuList.map((item: any) => {
                    item.formatCuxItemPutawayYN = item.cuxItemPutawayYN === 'Y'
                        ? '上架'
                        : '下架'
                    return item
                })
            }
            this.loading = false
        })
    }
    synceGoodsList () {
        this.syncBtn = true
        this.$ajax({
            method: 'POST',
            type: 'synceGoodsList'
        }).then((res: any) => {
            const type = res.data.success ? 'success' : 'error'
            const msg = res.data.success ? '同步成功' : '同步失败'
            this.$message[type](msg)
            this.fetchGoodsList()
            this.syncBtn = false
        }).catch(() => {
            this.syncBtn = false
        })
    }

    goDetail (val: any) {
        this.$router.push({
            path: '/goodsDetail',
            query: {
                id: val.id
            }
        })
    }
}
</script>

<style lang="less" scoped>
.btn-link {
    color: #409EFF;
}
</style>
