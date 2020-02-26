<template>
    <div class="workshop">
        <div class="top">
            <div class="main">
                <div class="bg"></div>
                <div class="bg-circle"></div>
                <div class="container">
                    <div class="product-feature">
                        <div class="tit">Intensive weekend workshop of your product</div>
                        <ul class="list">
                            <li class="item">3 days of workshops</li>
                            <li class="item">Searching for a product place</li>
                            <li class="item">How to use design tools</li>
                        </ul>
                        <span class="btn">BOOK A PLACE</span>
                    </div>
                    <img class="cover" src="./work.svg" alt />
                </div>
            </div>
            <div class="container">
                <header class="header">
                    <div class="logo">LIT OFF</div>
                    <div class="links">
                        <div class="item">About workshop</div>
                        <div class="item">What will you learn</div>
                    </div>
                    <div class="btn">Book a place</div>
                </header>
            </div>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style>
body,
ul {
    margin: 0;
    padding: 0;
}

ul {
    list-style-type: none;
}
</style>

<style lang="less" scoped>
* {
    box-sizing: border-box;
}
.workshop {
    .container {
        width: 1190px;
        margin: 0 auto;
        position: relative;
    }
    .top {
        height: 660px;
        overflow: hidden;
        position: relative;
        color: white;
        .main {
            z-index: -1;
            @width: 300%;
            position: absolute;
            border-radius: 50%;
            padding-top: @width;
            width: @width;
            left: (100% - @width) / 2;
            bottom: 0;
            overflow: hidden;

            .bg {
                position: absolute;
                bottom: 0;
                width: 100vw;
                height: 660px;
                left: 50%;
                transform: translateX(-50%);
                background: linear-gradient(45deg, #009ba4, #30f5c7);
            }

            .bg-circle {
                position: absolute;
                width: 100vw;
                height: 100vw;
                border-radius: 50%;
                left: 47%;
                bottom: -20vw;
                background: linear-gradient(45deg, #009ba4, #30f5c7);
            }

            .product-feature {
                width: 360px;
                position: absolute;
                bottom: 180px;
                .tit {
                    font-size: 32px;
                    margin-bottom: 20px;
                }
                .list {
                    margin-bottom: 40px;
                    .item {
                        display: flex;
                        align-items: center;
                        &::before {
                            content: '';
                            display: inline-block;
                            width: 4px;
                            height: 4px;
                            background-color: #fff;
                            border-radius: 50%;
                            margin-right: 6px;
                        }
                        + .item {
                            margin-top: 10px;
                        }
                    }
                }
                .btn {
                    background-color: #003539;
                    border-radius: 16px;
                    padding: 8px 20px;
                    box-shadow: 0px 14px 10px -8px rgba(0, 0, 0, 0.3);
                }
            }
            .cover {
                position: absolute;
                width: 700px;
                bottom: 0px;
                right: 0;
            }
        }

        .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 20px;
            margin-bottom: 40px;
            .logo {
                font-size: 40px;
            }
            .links {
                display: flex;
                .item:first-child {
                    margin-right: 40px;
                }
            }
            .btn {
                border: 1px solid white;
                border-radius: 10px;
                padding: 6px 14px;
                cursor: pointer;
            }
        }
    }
}
</style>