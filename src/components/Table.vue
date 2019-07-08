<template>
    <div>
        <el-table :data="tableData"
            size="mini"
            v-loading="loading"
            :header-cell-style="tableHeaderColor"
            @selection-change="selectionChange">
            <el-table-column v-if="selection" type="selection" width="30"></el-table-column>
            <slot name="handle-left"></slot>
            <template v-for="item in tableHeader">
                <el-table-column :key="item.id"
                    :label="item.label"
                    :prop="item.prop"
                    v-if="!item.link"
                    align="center">
                </el-table-column>
                <el-table-column :key="item.id"
                    :label="item.label"
                    :prop="item.prop"
                    v-if="item.link"
                    align="center">
                    <template slot-scope="scope">
                        <div>
                            <router-link class="link"
                                :to="{ path: item.link, query: { data: scope.row } }">
                                {{scope.row[item.prop]}}
                            </router-link>
                        </div>
                    </template>
                </el-table-column>
            </template>
            <slot name="handle-right"></slot>
        </el-table>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
// interface Table {

// }
interface ITableHeaderColor {
    row: object[],
    rowIndex: number
}
@Component({})
export default class Table extends Vue {
    @Prop({ type: Array, default: () => [] })
    readonly tableHeader!: any
    @Prop({ type: Array, default: () => [] })
    tableData: any
    @Prop(Boolean)
    readonly selection?: boolean
    @Prop(Boolean)
    readonly loading?: boolean

    mounted () {
        console.log('111111')
    }

    handleClick (index: number, data: object) {
        this.$emit('rowClick', { type: index, data })
    }
    selectionChange (val: object[]) {
        this.$emit('selectChange', val)
    }
    tableHeaderColor (config: ITableHeaderColor): { backgroundColor: string } {
        // console.log(config.row)
        // console.log(config.rowIndex)
        return { backgroundColor: '#eee' }
    }
}
</script>

<style scoped>
.link {
    color: #409EFF;
}
</style>
