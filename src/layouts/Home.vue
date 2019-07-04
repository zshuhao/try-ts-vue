<template>
    <el-container>
        <el-header class="header">
            <Header />
        </el-header>
        <el-container class="mian-container">
            <Sider class="sider"/>
            <el-main>
                <el-button @click="handleClick">按钮</el-button>
                <el-button @click="getCounter">按钮</el-button>
                <el-button @click="getClass">类</el-button>
                <el-button @click="getAnimal">继承</el-button>
                main
            </el-main>
        </el-container>
    </el-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Header from './Header.vue'
import Sider from './Sider.vue'

interface Counter {
    (start: number): string
    interval: number
    reset(): void
}
@Component({
    components: {
        Header,
        Sider
    }
})
export default class Home extends Vue {
    name: string = 'hahahah'
    handleClick () {
        console.log(2111)
        interface Foo {
            color: string
        }
        interface Foo2 extends Foo {
            width: number
        }
        let obj = {} as Foo2
        obj.color = 'blue'
        console.log(obj)

        let a = this.getCounter()
        console.log(a.interval)
    }
    getCounter (): Counter {
        let counter = function (start: number): string {
            return '123456'
        } as Counter
        counter.interval = 100
        counter.reset = function () {}
        return counter
    }

    getClass () {
        class Greeter {
            greeting: string // 属性
            constructor (message: string) { // 构造函数
                this.greeting = message
            }
            greet () { // 方法
                return `Hello, ${this.greeting}`
            }
        }
        let greeter = new Greeter('world')
        console.log(greeter.greet())
    }

    getAnimal () {
        // Animal 是 基类 通常叫 超类
        class Animal {
            move (distanceInMeters: number = 0) {
                console.log(`Animal moved ${distanceInMeters}m.`)
            }
        }
        // Dog 是 派生类 通常叫 子类
        class Dog extends Animal {
            bark () {
                console.log('woof! woof!')
            }
        }

        const dog = new Dog()
        dog.bark()
        dog.move(100)
    }
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
