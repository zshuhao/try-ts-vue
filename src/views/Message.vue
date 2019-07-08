<template>
    <div class="about">
        <h1>This is an Message page</h1>
        <el-button @click="handleClick">按钮</el-button>
        <el-button @click="getCounter">按钮</el-button>
        <el-button @click="getClass">类</el-button>
        <el-button @click="getAnimal">继承</el-button>
        <el-button @click="getPerson">Person类</el-button>
        <div>{{name}}</div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
interface Counter {
    (start: number): string
    interval: number
    reset(): void
}
export default Vue.extend({
    data () {
        return {
            name: 'hahhaa'
        }
    },
    mounted () {
        console.log(22222)
    },
    methods: {
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
        },
        getCounter (): Counter {
            let counter = function (start: number): string {
                return '123456'
            } as Counter
            counter.interval = 100
            counter.reset = function () {}
            return counter
        },

        getClass () {
            class Greeter {
                // private greeting: string // 当成员被标记成private时，它就不能在声明它的类的外部访问
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
            console.log(greeter.greeting) // 被标记成private时，这时会报错
        },

        getAnimal () {
            // Animal 是 基类 通常叫 超类
            // class Animal {
            //     move (distanceInMeters: number = 0) {
            //         console.log(`Animal moved ${distanceInMeters}m.`)
            //     }
            // }
            // // Dog 是 派生类 通常叫 子类
            // class Dog extends Animal {
            //     bark () {
            //         console.log('woof! woof!')
            //     }
            // }

            // const dog = new Dog()
            // dog.bark()

            // dog.move(100)

            class Animal {
                name: string
                constructor (theName: string) {
                    this.name = theName
                }
                move (distanceInMeters: number = 0) {
                    console.log(`${this.name} moved ${distanceInMeters}m.`)
                }
            }

            class Snake extends Animal {
                // constructor (name: string) {
                //     super(name)
                // }
                move (distanceInMeters = 5) {
                    console.log('Slithering......')
                    super.move(distanceInMeters)
                }
            }
            class Horse extends Animal {
                move (distanceInMeters = 45) {
                    console.log('Galloping...')
                    super.move(distanceInMeters)
                }
            }
            let sam = new Snake('Sammy the python')
            let tom: Animal = new Horse('Tommy the Palomino')

            sam.move()
            tom.move(34)
        },
        getPerson () {
            class Person {
                protected name: string
                constructor (name: string) {
                    this.name = name
                }
            }
            class Employee extends Person {
                private department: string
                constructor (name: string, department: string) {
                    super(name)
                    this.department = department
                }
                public getElevatorPitch () {
                    return `hello, my name is ${this.name} and I work in ${this.department}`
                }
            }
            let howord = new Employee('howord', 'information center')
            console.log(howord.getElevatorPitch())
            // console.log(howord.name) // 错误，protected 的属性，可以在子类中使用
        }
    }
})
</script>
