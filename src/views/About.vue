<template>
    <div class="about">
        <h1>This is an about page</h1>
        <button @click="handleClick">快点我</button>
        <div>{{name}}</div>
        <el-button @click="fanxing">泛型</el-button>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

function identity<T> (arg: T): T {
    return arg
}

@Component({})
export default class About extends Vue {
    name: string = 'zjang'
    // mounted () {
    //     console.log('111111')
    // }
    handleClick () {
        this.name = 'olololol'
        let list: number[] = [1, 2, 3]
        let list1: Array<number> = [1, 2, 3]
        let list2: [string, number]
        list2 = ['asad', 2]
        // console.log(list2[0].substr(1))
        // console.log(list2)
        // console.log(list)

        // 枚举
        enum Color { Red, Green = 2, Blue }
        let c: Color = Color.Green
        let colorName = Color[2]
        // console.log(c)
        // console.log(Color)
        // console.log(colorName)

        // 任意值
        let notSure: any = 4
        notSure = 'asdfasdfasd'
        // console.log(notSure)
        let arr: any[] = [1, '222a', true, {}]
        // console.log(arr)

        // 类型断言
        let someValue: any = 'string'
        let strLength: number = (someValue as string).length
        console.log(strLength)

        let obj = { size: 10, label: 'sdfsdfsdfsd' }
        this.printLabel(obj)
    }

    printLabel (labelObj: { label: string }) {
        console.log(labelObj)
        console.log(labelObj.label)
    }

    fanxing () {
        console.log(11111)
        // 泛型接口
        interface Iidentity1 {
            <T>(arg: T): T
        }
        interface Iidentity2<T> {
            (arg: T): T
        }
        /**
         *  function identity<T> (arg: T): T {
         *      return arg
         *  }
         */
        let myIdentity1: <T>(arg: T) => T = identity
        // myIdentity1('1')
        // 使用带有调用签名的对象字面量来定义泛型函数
        let myIdentity2: { <T>(arg: T): T } = identity
        // 可以使用不同的泛型参数名，只要在数量上和使用方式上能对应上就可以
        let myIdentity3: <U>(arg: U) => U = identity
        // 使用泛型接口
        let myIdentity4: Iidentity1 = identity
        // 能清楚的知道使用的具体是哪个泛型类型 这样接口里的其它成员也能知道这个参数的类型了
        let myIdentity5: Iidentity2<number> = identity
        // myIdentity5('2') // 不能传string
        myIdentity5(1)
    }
}
</script>
