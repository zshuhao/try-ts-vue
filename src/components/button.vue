<template>
    <div>
        <button @click="clickMe">{{msg}}</button>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({})
export default class About extends Vue {
    msg: string = 'zja'
    mounted () {
        console.log('111111')
    }
    handleClick () {
        this.msg = 'olololol'
    }
}
</script>
