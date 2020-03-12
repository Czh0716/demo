<template>
    <span class="count">{{countNumber}}</span>
</template>

<script>
export default {
    props: {
        number: {
            type: [String, Number]
        },
        duration: {
            type: [String, Number],
            default: 1000
        }
    },
    data() {
        return {
            countNumber: 0,
            timeId: null
        }
    },
    mounted() {
        let step = 1
        // const count = this.number / this.step
        // const interval =

        this.timeId = setInterval(() => {
            if (this.countNumber + step >= this.number) {
                this.countNumber = this.number
                clearInterval(this.timeId)
            } else {
                this.countNumber += step
            }
        }, 10)
    }
}
</script>

<style lang="less" scoped>
.count {
}
</style>