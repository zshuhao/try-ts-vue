<template>
    <el-aside class="sider">
        <el-menu class="menu" :router="true" :default-active="$route.path">
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>事务流程</span>
                </template>
                <el-menu-item index="/new">
                    <i class="el-icon-menu"></i>
                    <span slot="title">新建流程</span>
                </el-menu-item>
                <el-menu-item index="/my-approval">
                    <i class="el-icon-menu"></i>
                    <span slot="title">我的审批</span>
                </el-menu-item>
                <el-menu-item index="/my-request">
                    <i class="el-icon-menu"></i>
                    <span slot="title">我的请求</span>
                </el-menu-item>
            </el-submenu>
            <el-submenu index="2">
                <template slot="title">
                    <i class="el-icon-setting"></i>
                    <span>流程管理</span>
                </template>
                <el-menu-item index="/bpm">
                    <i class="el-icon-menu"></i>
                    <span slot="title">流程管理-后台</span>
                </el-menu-item>
            </el-submenu>
            <el-menu-item index="/about">
                <i class="el-icon-menu"></i>
                <span slot="title">关于</span>
            </el-menu-item>
            <el-menu-item index="/message">
                <i class="el-icon-menu"></i>
                <span slot="title">信息</span>
            </el-menu-item>
        </el-menu>

        <!-- <el-menu
            :default-active="defaultActive"
            class="menu"
            v-for="(navItem,index) in leftMenuList" :key="index+111">
            <el-submenu :index="navItem.id">
                <template slot="title">
                    <span>{{navItem.name}}</span>
                </template>
                <el-menu-item-group v-for="(navInnerItem,idx) in navItem.sub" :key="idx+112">
                    <el-menu-item :index="navInnerItem.menu_url" @click="goNavItem(navInnerItem.menu_url)">{{navInnerItem.name}}</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-menu> -->
    </el-aside>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component({})
export default class Sider extends Vue {

}
</script>

<style lang="less" scoped>
.el-menu-item, .el-submenu {
    span {
        color: #666;
    }
}
.el-submenu .el-menu .el-menu-item {
    color: #666;
}
.sider {
    width: 200px !important;
    background-color: #ffffff;
    // border-right: solid 1px #e6e6e6;
    .menu {
        border: none;
        .icon {
            font-size: 16px;
        }
    }
}

// 修改侧边导航的默认样式
.menu:not(.el-menu--collapse) {
    width: 200px;
    // height: 100%;
}
.menu /deep/ .el-submenu__title {
    background-color: #ffffff;
    height: 42px;
    line-height: 42px;
}
.menu /deep/ .el-menu-item {
    height: 39px;
    line-height: 39px;
}
.menu  /deep/ .el-submenu .is-active {
    i {
        color: #409EFF;
    }
    background-color: #f2f6f9;
}
.menu  /deep/ .is-active {
    background-color: #f2f6f9;
}
</style>
