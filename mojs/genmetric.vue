<template>
    <div class="test"></div>
</template>

<script>
import mojs from '@mojs/core'
export default {
    mounted() {
        const COLORS = ['deeppink', '#FFE202', 'cyan']
        const tl = new mojs.Timeline({
            onComplete() {
                this.replay()
            }
        })
        const triangleOpts = {
            shape: 'polygon'
        }
        COLORS.forEach((color, index) => {
            const triangle = new mojs.Shape({
                ...triangleOpts,
                fill: color,
                radius: 65,
                scaleX: { 0: 1.3 },
                x: { [-200 - (COLORS.length - index) * 20]: 0 },
                y: { [index === 1 ? -20 : 20]: index === 1 ? -10 : 0 },
                angle: { '-180': '-20' },
                delay: 45 * (COLORS.length - index),
                duration: 800,
                isShowEnd: false
            }).then({
                duration: 200,
                angle: -60,
                scaleX: 1,
                y: 0
            })
            triangle.el.style['mix-blend-mode'] = 'screen'
            tl.add(
                new mojs.Shape({
                    shape: 'polygon',
                    radius: { 150: 100 },
                    fill: 'none',
                    isShowStart: true,
                    stroke: color,
                    opacity: 0.8,
                    strokeWidth: 3,
                    angle: { [-60 - (COLORS.length - index) * 8]: -60 },
                    strokeDasharray: { '30% 100%': '0% 100%' },
                    strokeDashoffset: { '42%': `${-86 + index * 10}%` },
                    duration: 1000,
                    delay: 45 * (COLORS.length - index)
                })
            ).add(triangle)
        })
        tl.play()
    }
}
</script>

<style lang="less" >
body {
    margin: 0;
    padding: 0;
}
.test {
    height: 100vh;
    background-color: #29363b;
}
</style>