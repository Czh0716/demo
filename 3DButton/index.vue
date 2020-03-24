<template>
    <div class="wrap">
        <button class="btn-3d">
            <span class="btn-content">Learn More</span>
            <span class="shadow"></span>
        </button>
    </div>
</template>

<script>
import '../styles/index.less'
export default {}
</script>

<style lang="less" scoped>
.wrap {
    position: absolute;
    left: 50%;
    top: 40%;
    transform: translate(-50%);
}
@borderColor: rgb(194, 147, 156);
@bgColor: pink;
.btn-3d {
    position: relative;
    padding-bottom: 1em;
    font-size: 16px;
    .btn-content {
        position: relative;
        padding: 0 1.2em;
        height: 3em;
        display: flex;
        align-items: center;
        border-radius: 0.6em;
        border: 2px solid @borderColor;
        background-color: lighten(@bgColor, 10%);
        z-index: 1;
        transition: 0.3s;
    }
    .shadow {
        position: absolute;
        height: 3em;
        width: 100%;
        left: 0;
        top: 0.6em;
        border-radius: 0.6em;
        background-color: @bgColor;
        border: 2px solid @borderColor;
        box-shadow: 0 0.4em lighten(@bgColor, 6%);
        transition: 0.3s;
    }
    &:hover {
        .btn-content {
            transform: translateY(0.2em);
        }
        .shadow {
            box-shadow: 0 0.3em lighten(@bgColor, 6%);
        }
    }

    &:active {
        .btn-content {
            transform: translateY(0.6em);
        }
        .shadow {
            box-shadow: 0 0 rgb(255, 220, 226);
        }
    }
}
</style>