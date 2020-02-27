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
        <div class="who">
            <div class="header">
                <div class="container">
                    <div class="tip">
                        <div class="tit">WHEN?</div>
                        <div class="text">7-9 December</div>
                    </div>
                    <div class="tip">
                        <div class="tit">WHERE?</div>
                        <div class="text">Sky Tower, Wrocław</div>
                    </div>
                </div>
            </div>
            <div class="content container">
                <img class="cover" src="./whoCover.svg" alt />
                <div class="text">
                    <div class="tit">Who is the workshop addressed to?</div>
                    <ul class="list">
                        <li>You have an idea for a business</li>
                        <li>You already have a product but you would like to look at it again and find other ways of development</li>
                        <li>You have a business but you are looking for new investment opportunities</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="what">
            <div class="circle"></div>
            <div class="content">
                <div class="container">
                    <div class="header">What will you learn?</div>
                    <div class="item analyze">
                        <div class="cover">
                            <img src="./analyze.png" />
                        </div>
                        <div class="text">
                            <div class="tit">Analyze</div>
                            <div class="subTitle">FRIDAY - 5:30AM - 9:30AM</div>
                            <div
                                class="main"
                            >We are building a map of the initial state. We analyze ideas from different perspectives. We identify areas of uncertainty. We create a formal business model.</div>
                            <div class="end">BUSINESS MODEL CANVAS</div>
                        </div>
                    </div>
                    <img src="./arrow1.png" alt class="arrow1" />

                    <div class="item project">
                        <div class="cover">
                            <img src="./project.png" />
                        </div>
                        <div class="text">
                            <div class="tit">Project</div>
                            <div class="subTitle">SATURDAY - 10:00PM - 9:00AM</div>
                            <div
                                class="main"
                            >We identify and personalize your target group. We examine the expectations of your clients and the context in which they use them from your product. We design the best way to meet your needs.</div>
                            <div class="end">PERSONS UX, CUSTOMER USER JOURNEY MAP</div>
                        </div>
                    </div>
                    <img src="./arrow2.png" alt class="arrow1" />

                    <div class="item product">
                        <div class="cover">
                            <img src="./product.png" />
                        </div>
                        <div class="text">
                            <div class="tit">Product</div>
                            <div class="subTitle">SUNDAY - 10:00PM - 9:00AM</div>
                            <div
                                class="main"
                            >We design the product in a multidimensional way. We extract its unique value. We test and pitch to create a coherent narrative.</div>
                            <div class="end">PAPER PROTOTYPING, STORYTELLING</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="speakers">
            <div class="container">
                <div class="circle-bottom"></div>
                <div class="header">Speakers</div>
                <div class="cards">
                    <div class="card">
                        <div class="cover man1">
                            <img class="dashed" src="./circle-dashed1.svg" alt />
                        </div>
                        <div class="name">Arthur Morgan</div>
                        <div>We are building a map of the initial state. We analyze ideas from different perspectives. We identify areas of uncertainty. We create a formal business model.</div>
                    </div>
                    <div class="card">
                        <div class="cover man2">
                            >
                            <img class="dashed" src="./circle-dashed2.svg" alt />
                        </div>
                        <div class="name">John Marston</div>
                        <div>We design the product in a multidimensional way. We extract its unique value. We test and pitch to create a coherent narrative.</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="price">
            <div class="circle-bottom"></div>
            <div class="container">
                <div class="header">Price</div>
                <img src="./price.png" alt />
            </div>
        </div>

        <div class="contact">
            <div class="header">Book place</div>
            <div class="form">
                <div class="row">
                    <div class="col">
                        <div class="label">*Name and UserName</div>
                        <div class="row" style="marginBottom: 0;">
                            <div class="col">
                                <input type="text" class="name" />
                            </div>
                            <div class="col">
                                <input type="text" class="userName" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="label">Phone number</div>
                        <div>
                            <input type="text" />
                        </div>
                        <div class="label" style="marginTop:20px;">Phone of participants</div>
                        <div>
                            <input type="text" />
                        </div>
                    </div>
                    <div class="col topic">
                        <div class="label">*Write about topic</div>
                        <textarea></textarea>
                    </div>
                </div>
                <div class="row">
                    <div class="btn">BOOK A PLACE</div>
                </div>
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
        padding-top: 20px;
        position: relative;
        overflow: hidden;
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
                width: 100% / 3;
                height: 660px;
                left: 50%;
                transform: translateX(-50%);
                background: linear-gradient(45deg, #009ba4, #30f5c7);
            }

            .bg-circle {
                position: absolute;
                width: 660px * 2;
                height: 660px * 2;
                border-radius: 50%;
                left: 47%;
                bottom: -6%;
                background: linear-gradient(110deg, #009ba4, #30f5c7);
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

    .who {
        .header {
            margin: 100px 0;
            .tip {
                margin-right: 200px;
                display: inline-block;
                .tit {
                    color: #ccc;
                }
            }
        }
        .content {
            display: flex;
            align-items: center;
            .cover {
                width: 500px;
                margin-right: 200px;
            }
            .text {
                .tit {
                    font-size: 30px;
                    margin-bottom: 30px;
                }
                .list {
                    color: #808988;
                    > li {
                        position: relative;
                        padding-left: 20px;
                        line-height: 24px;

                        &::before {
                            content: '';
                            position: absolute;
                            width: 6px;
                            height: 6px;
                            border-radius: 50%;
                            left: 0;
                            top: 0.5em;
                        }

                        &:nth-child(1) {
                            &::before {
                                background-color: yellow;
                            }
                        }
                        &:nth-child(2) {
                            &::before {
                                background-color: teal;
                            }
                        }
                        &:nth-child(3) {
                            &::before {
                                background-color: red;
                            }
                        }

                        + li {
                            margin-top: 20px;
                        }
                    }
                }
            }
        }
    }

    .what {
        margin-top: 100px;
        padding-top: 100px;
        position: relative;
        overflow: hidden;
        padding-top: 9%;
        .circle {
            width: 300%;
            padding-top: 300%;
            background-color: #fafbfe;
            border-radius: 50%;
            position: absolute;
            left: -100%;
            top: 0;
            z-index: -1;
        }
        .content {
            background-color: #fafbfe;
            .header {
                font-size: 30px;
                text-align: center;
                margin-bottom: 60px;
            }

            .item {
                display: flex;
                align-items: center;
                line-height: 24px;
                > div {
                    flex: 1;
                }
                .cover {
                    img {
                        width: 400px;
                        display: block;
                    }
                }
                .tit {
                    font-size: 22px;
                    margin-bottom: 14px;
                }
                .subTitle {
                    font-size: 14px;
                    letter-spacing: 1px;
                    color: #808988;
                }
                .main {
                    color: black;
                    margin: 20px 0;
                }
            }
            .analyze {
                color: #fbb13c;
            }
            .project {
                color: #4fcad3;
                flex-direction: row-reverse;
                img {
                    margin-left: auto;
                }
            }
            .product {
                color: #ff715b;
            }

            .arrow1,
            .arrow2 {
                position: absolute;
                left: 50%;
                transform: translate(-50%, -50%);
            }
        }
    }
    .speakers {
        padding-top: 60px;
        background-color: #fafbfe;
        position: relative;
        overflow: hidden;
        padding-bottom: 140px;
        .circle-bottom {
            position: absolute;
            width: 300%;
            height: 300%;
            left: -100%;
            border-radius: 50%;
            background-color: #31394f;
            top: 88%;
        }
        .header {
            font-size: 30px;
            text-align: center;
            margin-bottom: 60px;
        }
        .cards {
            display: flex;
            justify-content: center;
            padding-top: 120px;
            .card {
                padding: 150px 30px 30px;
                margin: 0 40px;
                background-color: white;
                border-radius: 4px;
                position: relative;
                width: 400px;
                line-height: 24px;
                box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.05);
                .cover {
                    position: absolute;
                    width: 180px;
                    height: 180px;
                    border-radius: 50%;
                    top: -90px;
                    left: 50%;
                    transform: translate(-50%);
                    background-position: center center;
                    background-repeat: no-repeat;
                    background-size: cover;
                    &.man1 {
                        background-image: url('./man1.jpg');
                    }
                    &.man2 {
                        background-image: url('./man2.jpg');
                    }
                    .dashed {
                        position: absolute;
                        width: 130%;
                        left: 50%;
                        top: 50%;
                        transform: translate(-50%, -50%);
                    }
                }
                .name {
                    font-size: 18px;
                    margin-bottom: 20px;
                    color: #16bac5;
                }
                &:last-child {
                    .name {
                        color: #fbb13c;
                    }
                }
            }
        }
    }
    .price {
        background-color: #31394f;
        color: white;
        padding-bottom: 200px;
        position: relative;
        overflow: hidden;
        .circle-bottom {
            position: absolute;
            width: 300%;
            height: 300%;
            border-radius: 50%;
            left: -100%;
            background-color: #1f2536;
            top: 85%;
        }
        .header {
            font-size: 30px;
            text-align: center;
            margin-bottom: 60px;
        }
        img {
            display: block;
            margin: 0 auto;
        }
    }

    .contact {
        background-color: #1f2536;
        color: white;
        padding-bottom: 100px;

        .header {
            font-size: 30px;
            text-align: center;
            margin-bottom: 60px;
        }
        .form {
            width: 800px;
            margin: 0 auto;
            .row {
                display: flex;
                margin-bottom: 20px;
                .col {
                    flex: 1;
                    + .col {
                        margin-left: 30px;
                    }
                }
            }
            .label {
                margin-bottom: 10px;
                color: #555e78;
            }
            input,
            textarea {
                width: 100%;
                background-color: #1b202e;
                border: none;
                color: white;
                line-height: 40px;
                padding: 0 10px;
                border-radius: 4px;
                transition: 1s;
                &:focus {
                    outline-color: #16bac5;
                }
            }
            .topic {
                display: flex;
                flex-direction: column;
            }
            .topic textarea {
                line-height: 24px;
                padding: 10px;
                height: 100%;
                resize: none;
            }

            .btn {
                padding: 8px 20px;
                border-radius: 16px;
                background-color: #16bac5;
                margin-left: auto;
                margin-top: 20px;
                cursor: pointer;
            }
        }
    }
}
</style>