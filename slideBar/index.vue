<template>
    <div class="sidebar">
        <div class="wrap">
            <svg
                class="svg"
                viewBox="0 0 300 500"
                @mousedown="handleMouseDown"
                @mousemove="handleMouseMove"
                @mouseup="handleMouseUp"
            >
                <path
                    d="M0 0 H50 
                Q 50 250 50 500
                H0"
                    id="path"
                    ref="path"
                    class="path"
                    fill="white"
                />
            </svg>
        </div>
        <div ref="box" class="box"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            start: null,
            end: ''
        }
    },
    mounted() {
        // this.setPathD(100)
    },
    methods: {
        handleMouseDown(e) {
            if (e.target.id !== 'path') {
                this.$refs.path.setAttribute(
                    'd',
                    `M0 0 H50 
                Q 50 250 50 500
                H0`
                )
                return
            }
            this.$refs.path.classList.toggle('move')
            this.start = { x: e.clientX, y: e.clientY }
        },
        handleMouseMove(e) {
            if (!this.start) return
            const distance = e.clientX - this.start.x
            const y = e.offsetY

            requestAnimationFrame(() => {
                this.start &&
                    this.$refs.path.setAttribute(
                        'd',
                        `M0 0 H50 
                Q ${50 + distance} ${y} 50 500
                H0`
                    )
            })
        },
        handleMouseUp() {
            if (this.start) {
                this.$refs.path.classList.toggle('move')

                this.$refs.path.setAttribute(
                    'd',
                    `M0 0 H200 
                Q 200 250 200 500
                H0`
                )
            }
            this.start = null
        },
        setPathD(target, curr = 0) {
            const step = 0.5
            curr += step
            if (curr >= target) {
                curr = 0
            }
            requestAnimationFrame(() => {
                this.$refs.path.setAttribute(
                    'd',
                    `M0 0 H50 
                A${curr} 150 0 1 1 50  500
                H0`
                )
                this.setPathD(target, curr)
            })
        }
    }
}
</script>

<style lang="less">
.box {
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    left: 10px;
    top: 20px;
    background-color: #fff;
}
body {
    margin: 0;
    padding: 0;
    background-color: #68639c;
    color: white;
}

svg {
    stroke: white;
    stroke-width: 5px;
    stroke-linecap: round;
    display: block;
}
.wrap {
    position: absolute;
    left: 50%;
    margin-left: -150px;
    top: 100px;
    width: 300px;
    height: 500px;
    background-color: #6d7ada;
    border-radius: 4px;
    overflow: hidden;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
    .path {
        transition: 0.5s;
        box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 1);
        &.move {
            transition: none;
        }
    }
}
</style>