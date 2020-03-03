<template>
    <div class="app"></div>
</template>

<script>
import mojs from '@mojs/core'
function getWindowMaxSize() {
    const w = window
    return Math.max(w.innerHeight, w.innerWidth)
}
function calculateScale(radius) {
    const maxSize = getWindowMaxSize()
    return maxSize / (2 * Math.cos((45 * Math.PI) / 180) * radius)
}
export default {
    methods: {},
    mounted() {
        const tl = new mojs.Timeline({
            onComplete() {
                this.replay()
            }
        })
        const lineOpts = {
            shape: 'line',
            stroke: '#3A0839',
            radius: 50,
            strokeWidth: { 14: 0 },
            strokeDasharray: '100%',
            isShowStart: true,
            duration: 700,
            easing: 'cubic.out'
        }
        const leftLine = new mojs.Shape({
            ...lineOpts,
            x: -200,
            strokeDashoffset: { '-100%': '100%' }
        })
        const rightLine = new mojs.Shape({
            ...lineOpts,
            x: 200,
            strokeDashoffset: { '100%': '-100%' }
        })

        const circle = new mojs.Shape({
            shape: 'circle',
            radius: 100,
            fill: '#3A0839',
            scale: { 0: 1 },
            duration: 700,
            isShowStart: true,
            easing: 'cubic.out'
        })
            .then({
                duration: 500,
                radius: 70
            })
            .then({
                duration: 200,
                scale: calculateScale(70)
            })

        const innerCircle1 = new mojs.Shape({
            shape: 'circle',
            radius: 60,
            fill: '#f1e2d7',
            scale: { 0: 1 },
            duration: 500,
            delay: 900,
            easing: 'expo.out'
        }).then({
            delay: 100,
            duration: 200,
            scale: calculateScale(60)
        })

        const innerCircle2 = new mojs.Shape({
            shape: 'circle',
            radius: { 5: 24 },
            fill: 'none',
            stroke: '#3A0839',
            strokeWidth: { 20: 0 },
            duration: 500,
            delay: 900
        }).then({
            delay: 400,
            duration: 200,
            fill: '#3A0839',
            scale: calculateScale(24)
        })

        const triangleOpts = {
            shape: 'polygon',
            radius: 20,
            fill: '#f1e2d7',
            scale: { 1: 0 },
            y: { 70: 0 },
            duration: 500,
            easing: 'expo.out',
            delay: 700
        }
        const bottomTriangle = new mojs.Shape({
            ...triangleOpts
        })
        const topTriangle = new mojs.Shape({
            ...triangleOpts,
            y: { '-70': 0 },
            angle: 180
        })
        tl.add(leftLine, rightLine, circle, bottomTriangle, topTriangle, innerCircle1, innerCircle2)
        tl.play()
    }
}
</script>

<style lang="less">
body {
    margin: 0;
    padding: 0;
    background-color: #f1e2d7;
    overflow: hidden;
}
.app {
}
</style>