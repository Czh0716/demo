<template>
    <div class="timer">
        <svg class="more" viewBox="0 0 30 30" @click="showMenu = !showMenu">
            <circle cx="15" cy="3" r="3" />
            <circle cx="15" cy="15" r="3" />
            <circle cx="15" cy="27" r="3" />
        </svg>

        <div class="theme-list">
            <transition-group name="theme" tag="div">
                <div v-show="showMenu" class="theme-item" key="0">WATER BREAK</div>
                <div v-show="showMenu" class="theme-item" key="1">COFFEE BREAK</div>
                <div v-show="showMenu" class="theme-item" key="2">OFFICE BREAK</div>
                <div v-show="showMenu" class="theme-item" key="3">BEER BREAK</div>
            </transition-group>
        </div>
        <transition-group tag="div" name="wrap">
            <transition-group name="time" tag="div" key="time" class="time">
                <span
                    v-for="(c, i) in formatTime"
                    :key="c + i"
                    :style="{left: `${i*0.8}em`}"
                    class="time-c"
                >{{c}}</span>
            </transition-group>
            <div v-show="!showMenu" class="progress" key="progress">
                <span class="num">{{progress}}</span>
                <span>%</span>
            </div>
            <div
                v-show="!showMenu"
                class="waves"
                :style="{transform: `scaleY(${progress/100})`}"
                key="waves"
            >
                <div class="wave-front">
                    <div class="wave" v-for="n in 2" :key="n">
                        <svg class="header">
                            <path
                                fill="#2C7FBE"
                                d="M0 440 V0 60 Q87.5 30 175 60 T350 60 V 350 440"
                            />
                        </svg>
                    </div>
                </div>
                <div class="wave-back">
                    <div class="wave" v-for="n in 2" :key="n">
                        <svg class="header">
                            <path
                                fill="#32BAFA"
                                d="M0 440 V0 60 Q87.5 30 175 60 T350 60 V 350 440"
                            />
                        </svg>
                    </div>
                </div>
            </div>
            <div
                v-show="!showMenu"
                key="btn"
                @click="start"
                class="reset-btn"
            >{{curr === time? 'START' :'RESET' }}</div>
        </transition-group>
    </div>
</template>

<script>
export default {
    computed: {
        progress() {
            return parseInt((this.curr / this.time) * 100)
        },
        formatTime() {
            const minute = String(parseInt(this.curr / 60)).padStart(2, '0')
            const second = String(this.curr % 60).padStart(2, '0')

            return `${minute}:${second}`
        }
    },
    methods: {
        start() {
            // this.nearbyTime.push(this.time - 1, this.time)
            this.timeId && clearInterval(this.timeId)
            this.curr = this.time
            this.nearbyTime.length = 0
            this.timeId = setInterval(() => {
                if ((this.curr -= 1) <= 0) clearInterval(this.timeId)
                this.nearbyTime.unshift(this.curr)

                if (this.nearbyTime.length > 3) {
                    this.nearbyTime.pop()
                }
            }, 1000)
        }
    },
    data() {
        return {
            time: 60,
            curr: 60,
            timeId: null,
            nearbyTime: [60],
            showMenu: false
        }
    },
    mounted() {}
}
</script>

<style lang="less" >
.tea {
    width: 40px;
    fill: white;
    transition: 0.3s;
    .content {
        transition: 0.3s;
        transform-origin: center bottom;
    }
    &:hover {
        transform: scale(1.2);
        .content {
            fill: #3b8d99;
            transform: scaleY(0.9);
        }
    }
}
@fc: #e5ebef;
@switchDuration: 0.3s;
html {
    height: 100%;
}
body {
    background: #c6ffdd;
    background: linear-gradient(135deg, #aa4b6b, #6b6b83, #3b8d99);
    height: 100%;
    overflow: hidden;
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.time-enter-active,
.time-leave-active {
    transition: 0.4s linear;
}
.time-leave-active {
    position: absolute;
}
.time-enter {
    transform: translateY(-100%);
    opacity: 0 !important;
}
.time-leave-to {
    transform: translateY(100%);
    opacity: 0 !important;
}
.wrap-enter-active,
.wrap-leave-active {
    transition: @switchDuration !important;
}
.leave-to() {
    transform: translateY(100px) !important;
    opacity: 0 !important;
}

.progress,
.reset-btn {
    &.wrap-leave-to,
    &.wrap-enter {
        .leave-to;
    }
}
.timer {
    background-color: #1e384c;
    width: 350px;
    height: 550px;
    border-radius: 4px;
    margin: 100px auto;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.15);
    position: relative;
    overflow: hidden;
    .more {
        position: absolute;
        top: 20px;
        right: 10px;
        width: 26px;
        cursor: pointer;
        fill: white;
        opacity: 0.5;
        transition: 0.3s;
        &:hover {
            opacity: 1;
        }
    }
    .theme-list {
        position: absolute;
        width: 100%;
        top: 50%;
        transform: translateY(-50%);
        z-index: 200;
        .theme-item {
            color: #ccc;
            text-align: center;
            font-size: 30px;
            font-weight: 100;
            padding: 4px 0px;
            cursor: pointer;
            &.theme-enter-active {
                transition-duration: 0.5s;
            }
            &:nth-child(1) {
                &.theme-enter-active {
                    transition-delay: @switchDuration;
                }
            }
            &:nth-child(2) {
                &.theme-enter-active {
                    transition-delay: @switchDuration + 0.1s;
                }
            }
            &:nth-child(3) {
                &.theme-enter-active {
                    transition-delay: @switchDuration + 0.2s;
                }
            }
            &:nth-child(4) {
                &.theme-enter-active {
                    transition-delay: @switchDuration + 0.3s;
                }
            }
        }
        .theme-enter,
        .theme-leave-to {
            opacity: 0;
            transform: translateY(50px);
        }
        .theme-leave-active {
            transition: 0.3s;
        }
    }
    .time {
        color: @fc;
        position: absolute;
        top: 20px;
        left: 50%;
        transform: translate(-50%);
        width: 5 * 0.8em;
        height: 1.2em;
        overflow: hidden;
        .time-c {
            position: absolute;
            width: 0.8em;
            text-align: center;
        }
    }
    .progress {
        position: absolute;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
            Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-weight: 100;
        width: 100%;
        text-align: center;
        top: 50%;
        margin-top: -50px;
        z-index: 100;
        font-size: 40px;
        color: @fc;
        .num {
            font-size: 100px;
            letter-spacing: 6px;
        }
    }
    .waves {
        position: absolute;
        width: 100%;
        height: 80%;
        bottom: 0;
        transform-origin: center bottom;
        transition: 1s linear;
        &.wrap-leave-active {
            transition: 0.4s 0.25s !important;
        }
        &.wrap-enter-active {
            transition: 0.4s !important;
        }
        &.wrap-leave-to,
        &.wrap-enter {
            transform: translateY(100%) !important;
        }
    }
    .wave-front,
    .wave-back {
        position: absolute;
        width: 100%;
        height: 100%;
        animation: move 1s infinite linear;
        .wave {
            position: absolute;
            height: 100%;
            width: 100%;
            &:last-child {
                left: 100%;
            }
        }
        .header {
            display: block;
            height: 100%;
            width: 100%;
        }
    }
    .wave-back {
        animation-delay: -1s;
        animation-direction: reverse;
    }
    .reset-btn {
        position: absolute;
        left: 50%;
        margin-left: -120px;
        bottom: 24px;
        width: 240px;
        font-size: 18px;
        line-height: 40px;
        letter-spacing: 2px;
        border: 1px solid white;
        color: white;
        border-radius: 20px;
        text-align: center;
        transition: 0.3s;
        cursor: pointer;
        &:hover {
            background-color: #fff;
            color: #1e384c;
        }
    }
    @keyframes move {
        0% {
            transform: translate(0);
        }
        100% {
            transform: translate(-100%);
        }
    }
}
</style>