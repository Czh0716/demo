<template>
    <div class="app"></div>
</template>

<script>
import mojs from '@mojs/core'
class M extends mojs.CustomShape {
    getShape() {
        return `<path d="M91.5714286,44.4285714 L91.5714286,100 L96.7142857,100 L96.7142857,33.4285714 L49.8571429,72 L3,33.4285714 L3,100 L8.14285714,100 L8.14285714,44.4285714 L49.8571429,78.7142857 L91.5714286,44.4285714 Z M49.8571429,38.7142857 L92,3.85714286 L88.7142857,-6.50146603e-13 L49.8571429,31.8571429 L11,-6.50146603e-13 L7.71428571,3.85714286 L49.8571429,38.7142857 Z"></path>`
    }
}
class J extends mojs.CustomShape {
    getShape() {
        return `<path d="M22,87.535014 C27.7422969,95.0980392 36.8459384,100 47.070028,100 C64.2969188,100 78.442577,88.6554622 78.442577,68.627451 L78.442577,0 L73.4005602,0 L73.4005602,68.627451 C73.4005602,85.8543417 61.4957983,94.9579832 47.070028,94.9579832 C38.3865546,94.9579832 30.5434174,90.6162465 25.7815126,84.0336134 L22,87.535014 Z"></path>`
    }
}
class S extends mojs.CustomShape {
    getShape() {
        return `<path d="M15,71.0164835 C15,92.3076923 34.7802198,100 49.478022,100 C68.5714286,100 84.0934066,91.2087912 84.0934066,72.3901099 C84.0934066,61.5384615 79.2857143,51.7857143 61.978022,45.1923077 C45.2197802,38.8736264 27.2252747,35.5769231 27.2252747,21.8406593 C27.2252747,10.3021978 38.0769231,4.53296703 48.9285714,4.53296703 C59.9175824,4.53296703 70.7692308,10.3021978 70.7692308,21.8406593 L75.7142857,21.8406593 C75.7142857,7.14285714 62.6648352,0 49.478022,0 C36.0164835,0 22.2802198,7.41758242 22.2802198,21.8406593 C22.2802198,39.5604396 43.4340659,42.9945055 60.6043956,49.5879121 C74.8901099,55.0824176 79.1483516,63.7362637 79.1483516,72.5274725 C79.1483516,89.010989 64.1758242,95.0549451 49.478022,95.0549451 C35.3296703,95.0549451 19.9450549,87.6373626 19.9450549,71.0164835 L15,71.0164835 Z"></path>`
    }
}
mojs.addShape('M', M)
mojs.addShape('J', J)
mojs.addShape('S', S)
const { approximate } = mojs.easing

export default {
    mounted() {
        const shiftCurve = approximate(
            mojs.easing.path('M0,100 C50,100 50,100 50,50 C50,0 50,0 100,0')
        )
        new mojs.Shape({
            shape: 'rect',
            radius: 100,
            fill: 'white',
            top: 200,
            scaleX: { 0: 1 },
            height: 100,
            isShowStart: true,
            duration: 500,
            easing: 'bounce.out',
            origin: '0% 50%'
        }).play()
        const textOpt = {
            fill: 'white',
            radius: 16,
            isShowStart: true,
            stroke: 'white',
            strokeWidth: 3
        }
        new mojs.Shape({
            ...textOpt,
            shape: 'M',
            x: -60
        })
        new mojs.Shape({
            fill: 'none',
            shape: 'circle',
            radius: 16,
            isShowStart: true,
            stroke: 'white',
            strokeWidth: 4,
            x: -20
        })
        new mojs.Shape({
            ...textOpt,
            shape: 'J',
            x: -300,
            y: { 200: -200, easing: shiftCurve },
            scaleY: { 1: 1, easing: shiftCurve },
            duration: 500,
            origin: { '0% 50%': '100% 50%', easing: shiftCurve }
        }).play()
        new mojs.Shape({
            ...textOpt,
            shape: 'S',
            x: 60
        })
    }
}
</script>

<style lang="less" >
body {
    margin: 0;
    padding: 0;
    background-color: #29363b;
}
.app {
}
</style>