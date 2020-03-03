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
        const duration = 1000
        const outerTriangle = new mojs.Shape({
            shape: 'polygon',
            radius: 60,
            fill: 'none',
            isShowStart: true,
            stroke: 'white',
            strokeWidth: { 30: 5 },
            angle: 60,
            duration,
            width: 200,
            height: 200
        })
        const innerTriangle = new mojs.Shape({
            shape: 'polygon',
            radius: { 40: 20 },
            fill: 'white',
            fillOpacity: { 0: 1 },
            stroke: 'white',
            strokeWidth: { 5: 0 },
            angle: 60,
            isShowStart: true,
            duration
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
            duration
        })
        const extrudeTriangleOpts = {
            shape: 'polygon',
            radius: 14,
            fill: 'none',
            stroke: 'white',
            strokeWidth: { 14: 4 },
            isShowStart: true,
            angle: 60,
            duration,
            easing: 'expo.out',
            width: 60,
            height: 60
        }
        const smallX = 53
        const smallOffsetX = 30
        function getY(x) {
            return Math.tan((30 * Math.PI) / 180) * x
        }
        const extrudeTriangle1 = new mojs.Shape({
            ...extrudeTriangleOpts,
            y: { [-getY(smallX)]: -getY(smallX + smallOffsetX) },
            x: { [smallX]: smallX + smallOffsetX }
        })
        const extrudeTriangle2 = new mojs.Shape({
            ...extrudeTriangleOpts,
            y: { [-getY(smallX)]: -getY(smallX + smallOffsetX) },
            x: { [-smallX]: -smallX - smallOffsetX }
        })
        const extrudeTriangle3 = new mojs.Shape({
            ...extrudeTriangleOpts,
            y: { 61: 61 + 2 * (getY(smallX + smallOffsetX) - getY(smallX)) },
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