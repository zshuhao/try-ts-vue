<template>
    <div>
        <el-pagination @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage"
            :page-sizes="pageSizes"
            :page-size.sync="pageSize"
            :layout="layout"
            :total="total"
            v-bind="$attrs">
        </el-pagination>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({})
export default class Pagination extends Vue {
    @Prop(Number) total!: number
    @Prop({ type: Number, default: 1 }) page!: number
    @Prop({ type: Number, default: 10 }) limit!: number
    @Prop({ type: String, default: 'total, sizes, prev, pager, next, jumper' }) layout?: string
    @Prop({
        type: Array,
        default: () => [10, 20, 30, 40]
    }) pageSizes?: number

    get currentPage () {
        return this.page
    }
    set currentPage (val) {
        this.$emit('update:page', val)
    }
    get pageSize () {
        return this.limit
    }
    set pageSize (val) {
        this.$emit('update:limit', val)
    }

    handleSizeChange (val: any) {
        this.$emit('pagination', { page: this.currentPage, limit: val, total: this.total })
    }
    handleCurrentChange (val: any) {
        this.$emit('pagination', { page: val, limit: this.pageSize, total: this.total })
    }
}

</script>

<style scoped>
.pagination {
    padding-top: 20px;
    text-align: right
}
</style>
