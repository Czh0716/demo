<template>
    <div id="test" @click="bubbleUp"></div>
</template>

<script>
import mojs from '@mojs/core'
export default {
    mounted() {},
    methods: {
        bubbleUp() {
            for (let i = 0; i < 6; i++) {
                new mojs.ShapeSwirl({
                    parent: '#test',
                    fill: 'hotpink',
                    y: { 0: -200 },
                    radius: 'rand(8, 16)',
                    swirlSize: 30,
                    direction: 'rand(-1, 1)',
                    pathScale: 'rand(0.2, 1)',
                    duration: 1000
                }).play()
            }
        }
    }
}
</script>

<style lang="less" scoped>
#test {
    height: 300px;
}
</style>