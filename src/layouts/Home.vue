<template>
    <el-container>
        <el-header class="header">
            <Header />
        </el-header>
        <el-container class="mian-container">
            <Sider class="sider"/>
            <el-main>
                main
            </el-main>
        </el-container>
    </el-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Header from './Header.vue'
import Sider from './Sider.vue'
@Component({
    components: {
        Header,
        Sider
    }
})
export default class Home extends Vue {
    name: string = 'hahahah'
}
</script>

<style lang="less" scoped>
.header {
    color: #666;
    background-color: #f8f8f8;
    border-bottom: 1px solid #ddd;
}

.el-main {
    padding-top: 10px;
    background-color: #eee;
}
.mian-container {
    height: calc(100% - 60px);
}
</style>
