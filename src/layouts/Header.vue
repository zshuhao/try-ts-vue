<template>
    <el-header class="header">
        <el-row>
            <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
                <div class="logo">
                    <img class="image" src="../assets/logo-gray.png" alt="logo">
                </div>
            </el-col>
            <!-- <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
                <div class="">
                </div>
            </el-col>
            <el-col :xs="8" :sm="12" :md="16" :lg="18" :xl="22">
                <el-menu :default-active="activeIdx" class="el-menu-demo fl-right"
                            mode="horizontal"
                            background-color="rgb(248, 248, 248)"
                            text-color="rgb(140, 140, 143)"
                            active-text-color="rgb(242, 246, 249)">
                    <el-menu-item class="menu-item" v-for="item in menuList"
                                    :key="item.id"
                                    :index="item.id">
                        <a :href="item.menu_url">{{item.name}}</a>
                    </el-menu-item>
                </el-menu>
            </el-col>
            <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
                <el-dropdown class="loginOut" trigger="click">
                <span class="username">
                    <i class="iconfont icon-gerenzhongxin"></i><span
                    v-if="userInfo.userName">{{userInfo.userName}}</span>
                            <i class="el-icon-caret-bottom"></i>
                </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item><span class="out" @click="loginOut">
                <i class="iconfont icon-shezhi"></i>退出</span></el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </el-col> -->
        </el-row>
    </el-header>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component({})
export default class Header extends Vue {

}
</script>

<style lang="less" scoped>
.header {
    padding: 0;
}
.logo {
    float: left;
    height: 60px;
    width: 200px;
    display: flex;
    align-items: center;
    .image {
        width: 160px;
    }
}
</style>
