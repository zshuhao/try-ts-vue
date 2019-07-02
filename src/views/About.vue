<template>
    <div class="about">
        <h1>This is an about page</h1>
        <button @click="handleClick">快点我</button>
        <div>{{name}}</div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({})
export default class About extends Vue {
    name: string = 'zjang'
    mounted () {
        console.log('111111')
    }
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
}
</script>
