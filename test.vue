<template>
    <div class="test">
        <count :number="1000"></count>
    </div>
</template>

<script>
export default {
    components: {
        Count: () => import('./components/count')
    }
}
</script>

<style lang="less" scoped>
.test {
}
</style>