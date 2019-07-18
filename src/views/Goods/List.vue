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
            <Table :tableHeader="TableHeader" :tableData="tableDate">
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

@Component({
    components: { Pagination, Table }
})
export default class List extends Vue {
    msg = ''
    value = ''
    TableHeader = [
        { prop: 'name', label: '商品名称' },
        { prop: 'id', label: '商品编码' },
        { prop: 'status', label: '上下架状态' }
    ]
    tableDate = [
        { name: 'sdfas', id: '123', status: 1 },
        { name: 'as', id: '123', status: 1 },
        { name: '2', id: '123', status: 1 }
    ]

    goDetail (val: any) {
        console.log(val)
    }
}
</script>

<style lang="less" scoped>
.btn-link {
    color: #409EFF;
}
</style>
