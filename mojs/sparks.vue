<template>
    <div class="sparks"></div>
</template>

<script>
import mojs from '@mojs/core'
export default {
    mounted() {
        class wave extends mojs.CustomShape {
            getShape() {
                return `<path d="M28.7,81.4C17.2,58.4,22,32.8,39.5,24"/>
<path d="M41.3,81.1C37.1,50,55.6,21.8,82.7,18.2"/>
<path d="M55,83.2c0-20.7,14.2-37.4,31.7-37.4"/>`
            }
        }

        const tl = new mojs.Timeline({
            onComplete() {
                this.replay()
            }
        })
        const box = new mojs.Shape({
            shape: 'rect',
            radius: 100,
            fill: 'hotpink',
            fillOpacity: { 0: 1 },
            isShowStart: true,
            scale: { 0: 1 },
            angle: { '-240': 0 },
            duration: 1000,
            rx: 4,
            ry: 4,
            easing: 'expo.out'
        })
        tl.add(box)
        mojs.addShape('wave', wave)
        const wavesXY = [
            { x: -50, y: -140 },
            { x: 140, y: -50 },
            { x: 50, y: 140 },
            { x: -140, y: 50 }
        ]

        wavesXY.forEach((xy, index) => {
            tl.add(
                new mojs.Shape({
                    parent: box.el,
                    shape: 'wave',
                    radius: 40,
                    fill: 'none',
                    stroke: 'white',
                    angle: 90 * index,
                    strokeWidth: { 10: 0 },
                    strokeDasharray: '80',
                    strokeDashoffset: { '0': -80 },
                    strokeLinecap: 'round',
                    easing: 'cubic.out',
                    isShowStart: true,
                    duration: 1000,
                    x: xy.x,
                    y: xy.y,
                    isForce3d: true,
                    delay: 500
                })
            )
        })

        tl.play()
    }
}
</script>

<style lang="less">
body {
    margin: 0;
    padding: 0;
    background-color: #49f2cc;
}
.sparks {
}
</style>