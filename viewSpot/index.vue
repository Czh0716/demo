<template>
    <div class="app">
        <div class="banner">
            <div class="carousel">
                <div class="carousel-item">
                    <div class="sub-tit">Siempre tienes claro tu</div>
                    <div class="tit">
                        <img class="feather" src="./feather-left.svg" alt />
                        <span class="text">Nuevo destino</span>
                        <img class="feather" src="./feather-right.svg" alt />
                    </div>
                </div>
                <ul class="selector">
                    <li class="selector-point"></li>
                    <li class="selector-point active"></li>
                    <li class="selector-point"></li>
                    <li class="selector-point"></li>
                </ul>
            </div>
            <div class="texture"></div>
        </div>
        <section class="category">
            <div class="tit">
                <img src="./tit-icon.svg" alt class="icon" />
                <div class="text">Nuestros destinos</div>
            </div>
            <div class="tabs">
                <div class="tabs-item">Destinos regionales</div>
                <div class="tabs-item active">Destinos regionales</div>
                <div class="tabs-item">Destinos regionales</div>
            </div>
            <div class="tabs-content">
                <div class="carousel">
                    <div
                        class="carousel-item cover"
                        style="backgroundImage: url('https://images.pexels.com/photos/1619319/pexels-photo-1619319.jpeg?auto=compress&cs=tinysrgb&h=650&w=940')"
                    >
                        <div class="content">
                            <div>Destinos</div>
                            <div>
                                Regionales
                                <svg viewBox="0 0 60 60" class="icon">
                                    <circle cx="30" cy="30" r="25" />
                                    <path d="M30 20 40 30 30 40" />
                                    <path d="M40 30 20 30" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div
                        class="carousel-item cover"
                        style="backgroundImage: url('https://images.pexels.com/photos/92933/pexels-photo-92933.jpeg?auto=compress&cs=tinysrgb&h=660&w=940')"
                    >
                        <div class="content">
                            <div>Destinos</div>
                            <div>
                                Regionales
                                <svg viewBox="0 0 60 60" class="icon">
                                    <circle cx="30" cy="30" r="25" />
                                    <path d="M30 20 40 30 30 40" />
                                    <path d="M40 30 20 30" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div
                        class="carousel-item cover"
                        style="backgroundImage: url('https://images.pexels.com/photos/38537/woodland-road-falling-leaf-natural-38537.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=600')"
                    >
                        <div class="content">
                            <div>Destinos</div>
                            <div>
                                Regionales
                                <svg viewBox="0 0 60 60" class="icon">
                                    <circle cx="30" cy="30" r="25" />
                                    <path d="M30 20 40 30 30 40" />
                                    <path d="M40 30 20 30" />>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div class="arrow-left">
                        <svg viewBox="0 0 60 60" class="icon">
                            <path d="M25 0 0 25 25 60" />
                            <path d="M0 25 60 25" />
                        </svg>
                    </div>
                    <div class="arrow-right">
                        <svg viewBox="0 0 60 60" class="icon">
                            <path d="M25 0 50 25 25 50" />
                            <path d="M0 25 50 25" />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
        <section class="contact">
            <div class="texture"></div>
            <div class="tit">
                <img src="./contact-icon.svg" class="icon" />
                <div class="text">Registrate</div>
                <div class="sub-text">Para brindarte una mejor experiencia</div>
            </div>
            <div class="form">
                <div
                    class="tips"
                >Te invitamos a registrar tus datos, pronto nos comunicaremos contigo para brindarte más información sobre los planes de tu interés. Recuerda que aquí no podrás comprar tu plan pero si informarte sobre el mismo.</div>
                <div class="form-input">
                    <div class="form-row">
                        <input type="text" placeholder="Nombre*" />
                        <input type="text" placeholder="Teléfono*" />
                    </div>
                    <div class="form-row">
                        <input type="text" placeholder="Mail" />
                        <input type="text" placeholder="¿Qué destinos te interesa?" />
                    </div>
                </div>
                <div class="tags">
                    <span class="tags-item">AGENDA CULTURAL</span>
                    <span class="tags-item active">Créditos</span>
                    <span class="tags-item">Educación</span>
                    <span class="tags-item">Recreación</span>
                    <span class="tags-item active">Turismo</span>
                </div>
                <div class="accept">
                    <span class="check"></span>
                    Aceptas la
                    <span
                        class="light"
                    >política de tratamiento de datos.</span>
                </div>
                <button class="submit-btn">ENVIAR</button>
            </div>
        </section>
    </div>
</template>

<script>
import '../styles/index.less'
export default {}
</script>

<style lang="less" scoped>
.texture {
    position: absolute;
    width: 100%;
    height: 100px;
    z-index: 100;
    bottom: 0;
    background: url('./texture.png') no-repeat center top/cover;
}
.banner {
    position: relative;
    .carousel-item {
        height: 660px;
        background: url('./banner.png') no-repeat center center/cover;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        color: white;
        &::before {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            background: linear-gradient(transparent, #8b0f42);
            opacity: 0.5;
        }
        .sub-tit,
        .tit {
            position: relative;
            font-size: 24px;
        }
        .tit {
            font-size: 70px;
            .text {
                margin: 0 10px;
            }
            .feather {
                display: inline-block;
                width: 40px;
                vertical-align: top;
                margin-top: 6px;
            }
        }
    }
    .selector {
        position: absolute;
        bottom: 100px;
        left: 50%;
        transform: translate(-50%);
        .selector-point {
            width: 24px;
            height: 24px;
            border: 2px solid white;
            display: inline-block;
            position: relative;
            margin: 0 10px;
            transform: rotate(45deg);
            text-align: center;
            &.active {
                border-width: 4px;
                &::before {
                    content: '';
                    position: absolute;
                    width: 8px;
                    height: 8px;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                    background: #fff;
                }
            }
        }
    }
}
.category {
    padding: 100px 0 200px;
    background: url('./introduce1.png') no-repeat center 0;
    .tit {
        text-align: center;
        .text {
            font-size: 34px;
            margin-bottom: 40px;
        }
    }
    .tabs {
        display: flex;
        justify-content: center;
        margin-bottom: 40px;
        .tabs-item {
            color: #a49661;
            border-radius: 4px;
            padding: 10px 30px;
            margin: 0px 20px;
            &.active {
                color: white;
                background-color: #a49661;
            }
        }
    }
    .tabs-content {
        .carousel {
            display: flex;
            justify-content: space-between;
            position: relative;
            width: 1000px;
            margin: 0 auto;
            .carousel-item {
                position: relative;
                width: 250px;
                height: 300px;
                border-radius: 4px;
                box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.3);
                &::before {
                    content: '';
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(transparent, #8b0f42);
                    opacity: 0.5;
                }
                .content {
                    position: absolute;
                    bottom: 20px;
                    width: 100%;
                    padding-left: 20px;
                    color: white;

                    .icon {
                        fill: none;
                        stroke: #fff;
                        stroke-width: 4;
                        width: 24px;
                        cursor: pointer;
                        position: absolute;
                        right: 20px;
                    }
                }
            }
            .arrow-left,
            .arrow-right {
                position: absolute;
                top: 50%;
                height: 50px;
                width: 50px;
                border-radius: 4px;
                text-align: center;
                line-height: 50px;
                margin-top: -25px;
                box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
                background-color: #fff;
                color: #8b0f42;
                display: flex;
                align-items: center;
                justify-content: center;
                transform: rotate(45deg);
                cursor: pointer;
                .icon {
                    stroke: #8b0f42;
                    stroke-width: 4;
                    stroke-linecap: round;
                    width: 20px;
                    fill: none;
                    transform: rotate(-45deg);
                }
            }
            .arrow-left {
                left: -25px;
            }
            .arrow-right {
                right: -25px;
            }
        }
    }
}
.contact {
    position: relative;
    padding: 200px 0 100px;
    background: url('./contact.png') no-repeat center top/100%;
    .texture {
        top: 0;
        transform: rotate(180deg);
    }
    .tit {
        color: #f4e094;
        text-align: center;
        margin-bottom: 140px;
        .text {
            color: white;
            font-size: 34px;
            margin-bottom: 10px;
        }
    }
    .form {
        width: 900px;
        margin: 0 auto;
        background-color: #fff;
        padding: 60px 80px;
        border-radius: 16px;
        box-shadow: 0px 10px 20px 1px rgba(0, 0, 0, 0.3);
        .tips {
            margin-bottom: 40px;
            line-height: 30px;
        }
        .form-input {
            margin-bottom: 40px;
            .form-row {
                display: flex;
                justify-content: space-between;
                + .form-row {
                    margin-top: 40px;
                }
                input {
                    width: 48%;
                    line-height: 50px;
                    border-radius: 4px;
                    background-color: #ececec;
                    padding: 0 16px;
                }
            }
        }
        .tags {
            margin-bottom: 40px;
            .tags-item {
                display: inline-block;
                padding: 10px 20px;
                border: 1px solid;
                border-radius: 24px;
                cursor: pointer;
                + .tags-item {
                    margin-left: 10px;
                }

                &.active {
                    background-color: #f4e094;
                    color: white;
                }
            }
        }
        .accept {
            display: flex;
            align-items: center;
            margin-bottom: 80px;
            .check {
                display: inline-block;
                height: 20px;
                width: 20px;
                border: 1px solid;
                border-radius: 4px;
                margin-right: 10px;
            }
            .light {
                color: #ee2b7b;
            }
        }
        .submit-btn {
            padding: 16px 140px;
            background-color: #ee2b7b;
            color: white;
            border-radius: 4px;
            display: block;
            margin: 0 auto;
        }
    }
}
</style>