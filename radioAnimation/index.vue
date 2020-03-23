<template>
    <div class="radio-list">
        <div
            v-for="item in list"
            :key="item"
            @click="handleSelect(item)"
            :class="{active: active === item}"
            class="radio-item"
        >
            <span class="label">{{item}}</span>
            <span class="selector">
                <span class="point"></span>
            </span>
        </div>
    </div>
</template>

<script>
import '../styles/index.less'
export default {
    data() {
        return {
            list: ['One', 'Two', 'Three'],
            active: 'One'
        }
    },
    methods: {
        handleSelect(active) {
            this.active = active
        }
    }
}
</script>

<style lang="less" >
body {
    background-color: #e8ebf3;
}
.radio-list {
    margin: 200px auto;
    border-radius: 4px;
    background-color: #fff;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.12);
    width: 180px;
    padding: 10px 0;
    .radio-item {
        padding: 10px 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .selector {
            width: 20px;
            height: 20px;
            border: 2px solid #7c96b2;
            border-radius: 50%;
            cursor: pointer;
            position: relative;
            overflow: hidden;
            .point {
                display: inline-block;
                position: absolute;
                width: 8px;
                height: 8px;
                border-radius: 50%;
                transition: 0.2s cubic-bezier(0.53, 0.54, 0.2, 1.56);
                left: 4px;
                top: 100%;
            }
        }
        &.active {
            .point {
                top: 4px;
                transition-delay: 0.2s;
                background-color: #4f29f0;
                animation: bounce 0.4s 0.2s;
            }

            ~ .radio-item {
                .point {
                    top: -8px;
                }
            }
        }
    }

    @keyframes bounce {
        0%,
        100% {
            transform: scale(1, 1);
        }

        33% {
            transform: scale(0.9, 1.1);
        }

        66% {
            transform: scale(1.1, 0.9);
        }
    }
}
</style>