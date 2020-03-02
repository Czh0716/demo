<template>
    <div id="test"></div>
</template>

<script>
import bubble from '../directives/bubble'
import mojs from '@mojs/core'
import heart from '../shapes/heart'
mojs.addShape('heart', heart)
export default {
    data() {
        return {
            wraps: []
        }
    },
    directives: {
        bubble
    },
    mounted() {
        new mojs.Shape({
            parent: '#test',
            shape: 'heart',
            radius: 30,
            stroke: 'pink',
            isShowStart: true,
            fill: 'none',
            duration: 2000,
            strokeDasharray: '100%',
            strokeDashoffset: { '-100%': '100%' },
            repeat: 999
        }).play()
    }
}
</script>

<style lang="less" scoped>
.test {
    height: 300px;
}
</style>