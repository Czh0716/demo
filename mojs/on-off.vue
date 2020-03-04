<template>
    <div class="on-off">
        <div class="btn" ref="btn"></div>
    </div>
</template>

<script>
import mojs from '@mojs/core'

export default {
    mounted() {
        const tl = new mojs.Timeline()
        const outerCircles = []
        for (let i = 0; i < 3; i++) {
            const c = new mojs.Shape({
                parent: this.$refs.btn,
                shape: 'circle',
                radius: 56 + 16 * i,
                fill: 'none',
                stroke: '#3BD05F',
                strokeWidth: 10,
                strokeLinecap: 'round',
                strokeDasharray: '10% 6%',
                strokeOpacity: { 0: (3 - i) / 4 },
                isShowStart: true,
                scale: { '0.5': 1 },
                duration: 500,
                easing: 'expo.out'
            }).play()
            outerCircles.push(c)
            tl.add(c)
        }

        const center = new mojs.Shape({
            parent: this.$refs.btn,
            shape: 'circle',
            radius: 24,
            fill: 'none',
            stroke: '#3BD05F',
            strokeWidth: 5,
            strokeOpacity: { 0: 1 },
            isShowStart: true,
            scale: { '0.5': 1 },
            duration: 500,
            easing: 'expo.out'
        }).play()
        const centerLine = new mojs.Shape({
            parent: center.el,
            shape: 'line',
            radius: 24,
            fill: 'none',
            stroke: '#F70048',
            strokeWidth: 5,
            strokeDasharray: '100%',
            angle: { 140: -40 },
            duration: 500,
            easing: 'expo.out'
        })
        center.el.dataset.state = 'on'
        tl.add(center, centerLine)
        center.el.addEventListener('click', () => {
            const isOn = center.el.dataset.state === 'on'
            const color = isOn ? '#F70048' : '#3BD05F'
            const lineOnOpt = {
                angle: -40,
                strokeOpacity: 0
            }
            const lineOffOpt = {
                angle: { 140: -40 },
                strokeOpacity: 1
            }
            center.el.dataset.state = isOn ? 'off' : 'on'
            outerCircles.forEach(c => {
                c.tune({
                    stroke: color
                })
            })
            centerLine.tune(isOn ? lineOffOpt : lineOnOpt)
            center.tune({
                stroke: color
            })
            tl.replay()
        })
    }
}
</script>

<style lang="less" >
html,
body {
    margin: 0;
    padding: 0;
    height: 100%;
    background-color: #000;
}
.on-off {
    .btn {
        position: relative;
        margin: 300px auto;
        width: 200px;
        height: 200px;
        cursor: pointer;
    }
}
</style>