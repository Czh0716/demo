<template>
    <div id="test"></div>
</template>

<script>
import mojs from '@mojs/core'
import comma from '../shapes/comma'
import check from '../shapes/check'
mojs.addShape('comma', comma)
mojs.addShape('check', check)
export default {
    mounted() {
        const COLORS = {
            purple: '#8A5CE6',
            yellow: '#FADD4A',
            red: '#FF6680'
        }
        const tl = new mojs.Timeline({
            delay: 1000,
            onComplete() {
                this.replay()
            }
        })
        const duration = 400
        const topOffsetY = 150
        const colorKeys = Object.keys(COLORS)
        const delay = 50 * (colorKeys.length - 1)

        colorKeys.forEach((color, index) => {
            const offsetY = -(topOffsetY * index) / colorKeys.length
            const offsetX = 10
            const origin = `100% 100%`
            tl.add(
                new mojs.Shape({
                    shape: 'comma',
                    fill: COLORS[color],
                    origin,
                    x: index % 2 ? -(offsetX + 60) : offsetX,
                    y: { [offsetY]: offsetY - 30 },
                    radius: 40,
                    scale: { 0: 1 },
                    duration,
                    delay: delay * (index - 1),
                    angle: { 0: 30 }
                }).then({
                    y: 50,
                    angle: -30,
                    scale: 0
                })
            )
        })

        const blueBox = new mojs.Shape({
            shape: 'rect',
            fill: 'skyblue',
            radius: 80,
            rx: 4,
            duration: 1000,
            scale: { 0: 1 },
            opacity: { 0: 1 },
            easing: 'elastic.out',
            delay: duration + delay
        }).then({
            angle: 180,
            duration: 500,
            scale: { 1: 0 }
        })

        const whiteComma = new mojs.Shape({
            shape: 'comma',
            radius: 50,
            fill: 'white',
            angle: 5,
            duration: 1000,
            scale: { 0: 1 },
            easing: 'elastic.out',
            delay: duration + delay
        }).then({
            angle: 180,
            duration: 500,
            scale: { 1: 0 }
        })

        const check = new mojs.Shape({
            shape: 'check',
            fill: 'none',
            radius: 28,
            scale: 1,
            stroke: 'skyblue',
            strokeWidth: 12,
            strokeLinecap: 'round',
            strokeDasharray: '100%',
            strokeDashoffset: { '100%': 0 },
            duration: 1000,
            easing: 'quad.out',
            delay: duration + delay
        }).then({
            angle: 360,
            duration: 500,
            scale: { 1: 0 }
        })

        tl.add(whiteComma, check, blueBox)
        tl.play()
    }
}
</script>

<style lang="less" scoped>
#test {
    height: 400px;
}
</style>