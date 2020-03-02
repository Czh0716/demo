<template>
    <div class="logoUnfold"></div>
</template>

<script>
import mojs from '@mojs/core'
export default {
    mounted() {
        const tl = new mojs.Timeline({
            onComplete() {
                this.replay()
            }
        })
        const outerTriangle = new mojs.Shape({
            shape: 'polygon',
            radius: 60,
            fill: 'none',
            isShowStart: true,
            stroke: 'white',
            strokeWidth: { 30: 5 },
            angle: 60,
            duration: 1000
        })
        const innerTriangle = new mojs.Shape({
            shape: 'polygon',
            radius: { 45: 20 },
            fill: 'white',
            fillOpacity: { 0: 1 },
            angle: 60,
            duration: 1000
        })
        const triangleBorder = new mojs.Shape({
            shape: 'polygon',
            radius: { 85: 100 },
            fill: 'none',
            fillOpacity: { 0: 1 },
            isShowStart: true,
            stroke: 'white',
            strokeWidth: { 2: 0 },
            angle: 60,
            duration: 1000
        })

        const extrudeTriangleOpts = {
            shape: 'polygon',
            radius: 14,
            fill: 'none',
            stroke: 'white',
            strokeWidth: { 14: 4 },
            isShowStart: true,
            angle: 60,
            duration: 1000,
            easing: 'expo.out'
        }

        const offset = 20
        const smallY = 50
        const extrudeTriangle1 = new mojs.Shape({
            ...extrudeTriangleOpts,
            y: { [-30]: -30 - offset },
            x: { [smallY]: smallY + offset }
        })
        const extrudeTriangle2 = new mojs.Shape({
            ...extrudeTriangleOpts,
            y: { [-30]: -30 - offset },
            x: { [-smallY]: -smallY - offset }
        })
        const extrudeTriangle3 = new mojs.Shape({
            ...extrudeTriangleOpts,
            y: { [1.15 * smallY]: 68 },
            x: 0
        })

        tl.add(outerTriangle, innerTriangle, triangleBorder).add(
            extrudeTriangle1,
            extrudeTriangle2,
            extrudeTriangle3
        )

        tl.play()
    }
}
</script>

<style lang="less">
body {
    margin: 0;
    padding: 0;
}
.logoUnfold {
    height: 100vh;
    background-color: #000;
}
</style>