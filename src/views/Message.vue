<template>
    <div class="about">
        <h1>This is an Message page</h1>
        <button @click="handleClick">点我啊</button>
        <div>{{name}}</div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
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
            this.name = 'oooooo'
        }
    }
})
</script>
