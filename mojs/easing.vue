<template>
    <div class="easing">
        <h1 class="title">MODES</h1>
        <div class="tabs">
            <div
                class="tab-item"
                :class="{active: item === activeMode}"
                v-for="item in modes"
                :key="item"
                @click="switchMode(item)"
            >
                <div class="label">{{item}}</div>
            </div>
        </div>

        <h1 class="title">OPTIONS</h1>
        <div class="tabs">
            <div
                ref="options"
                class="tab-item"
                v-for="item in options"
                :key="item"
                @click="switchOpt"
            >
                <div class="label">{{item}}</div>
            </div>
        </div>
    </div>
</template>

<script>
import mojs from '@mojs/core'
export default {
    data() {
        return {
            options: [
                'linear',
                'ease',
                'sin',
                'quad',
                'cubic',
                'quart',
                'expo',
                'circ',
                'back',
                'elastic',
                'bounce'
            ],
            modes: ['in', 'out', 'inout'],
            activeMode: 'in',
            els: []
        }
    },
    methods: {
        switchMode(val) {
            this.activeMode = val
            this.els.forEach((el, index) => {
                el.tune({
                    easing: `${this.options[index]}.${
                        this.options[index] === 'linear' ? 'none' : this.activeMode
                    }`
                }).replay()
            })
        },
        switchOpt(index) {
            this.els[index].pause()
        }
    },
    mounted() {
        this.$refs.options.forEach((option, index) => {
            this.els.push(
                new mojs.Shape({
                    parent: option,
                    shape: 'circle',
                    radius: 16,
                    fill: '#60355a',
                    duration: 1500,
                    y: { 100: 400 },
                    isShowEnd: true,
                    easing: `${this.options[index]}.${
                        this.options[index] === 'linear' ? 'none' : 'in'
                    }`,
                    repeat: 100,
                    delay: 500
                }).play()
            )
        })
    }
}
</script>

<style lang="less" >
body {
    margin: 0;
    padding: 0;
    background-color: #f1e2d7;
}
.title {
    text-align: center;
}
.easing {
    .tabs {
        display: flex;
        justify-content: center;
        .tab-item {
            margin: 0 10px;

            position: relative;
            .label {
                width: 80px;
                border: 1px solid black;
                line-height: 36px;
                text-align: center;
                border-radius: 4px;
                cursor: pointer;
                transition: 0.3s;
            }
            &.run,
            &.active,
            &:hover {
                .label {
                    background-color: #60355a;
                    color: white;
                }
            }
        }
    }
}
</style>