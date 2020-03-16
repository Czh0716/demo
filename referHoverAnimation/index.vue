<template>
    <div class="refer">
        <span class="icon">
            <svg class="smile-face" viewBox="0 0 30 30" width="30" height="30">
                <circle cx="15" cy="15" r="15" fill="#FFE073" />
                <g class="organ">
                    <path d="M7 18 A8 8 0 0 0 23 18z" />
                    <ellipse cx="9" cy="12" rx="2" ry="3" />
                    <ellipse cx="21" cy="12" rx="2" ry="3" />
                </g>
            </svg>
            <svg class="comment" viewBox="0 0 30 30" width="30" height="30">
                <path
                    d="M29,11.1v12.8c0,2.3-1.8,4.1-4.1,4.1H5.1C2.8,28,1,26.2,1,23.9V11.1C1,8.8,2.8,7,5.1,7h1.1L6.1,1.5
		c0-0.3,0.3-0.5,0.6-0.3L16.3,7h8.6C27.2,7,29,8.8,29,11.1z"
                    fill="white"
                />
                <path
                    class="star"
                    d="M18.5,21.6l-3.4-1.8c0,0-0.1,0-0.2,0l-3.4,1.8c-0.1,0.1-0.3,0-0.2-0.2l0.6-3.8c0-0.1,0-0.1,0-0.1l-2.8-2.7
	c-0.1-0.1,0-0.3,0.1-0.3L13,14c0.1,0,0.1,0,0.1-0.1l1.7-3.5c0.1-0.1,0.2-0.1,0.3,0l1.7,3.5c0,0,0.1,0.1,0.1,0.1l3.8,0.5
	c0.1,0,0.2,0.2,0.1,0.3l-2.8,2.7c0,0-0.1,0.1,0,0.1l0.7,3.8C18.7,21.6,18.6,21.7,18.5,21.6z"
                    fill="#F25C5C"
                />
            </svg>
            <svg class="amazed-face" viewBox="0 0 30 30" width="30" height="30">
                <circle cx="15" cy="15" r="15" fill="#FFE073" />
                <circle class="mouth" cx="15" cy="20" r="2" />
                <g class="eye">
                    <ellipse cx="9" cy="12" rx="2" ry="3" />
                    <ellipse cx="21" cy="12" rx="2" ry="3" />
                </g>
            </svg>
        </span>
        <span class="text">refer friends</span>
        <svg class="arrow" viewBox="0 0 30 30" width="30" height="30">
            <path d="M6 5 16 15 6 25" fill="none" stroke="#ccc" stroke-width="2" />
        </svg>
    </div>
</template>

<script>
import '../styles/index.less'
export default {}
</script>

<style lang="less">
body {
    background-color: #d74e68;
}
.refer {
    width: 240px;
    height: 60px;
    background-color: #fff;
    margin: 200px auto;
    border-radius: 4px;
    overflow: hidden;
    cursor: pointer;
    line-height: 60px;
    transition: 0.4s ease-out;
    display: flex;
    align-items: center;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    .icon {
        display: inline-block;
        width: 60px;
        height: 100%;
        background-color: #ff9568;
        position: relative;
        cursor: pointer;
        overflow: hidden;
        margin-right: 10px;
        .smile-face,
        .amazed-face,
        .comment {
            position: absolute;
            transition: 0.4s ease-out;
            transform: translate(-50%, -50%);
            left: 50%;
            top: 50%;
            filter: drop-shadow(0px 0px 3px rgba(0, 0, 0, 0.2));
            .organ,
            .mouth {
                transition: inherit;
            }
        }

        .comment {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.5);
            .star {
                transform-origin: center center;
                animation: 0.4s 0.4s both;
            }
        }

        .amazed-face {
            left: 100%;
            top: 100%;
            transform: translate(0, 0);
            .eye {
                transform: translate(-1px);
            }
            .mouth {
                transition-delay: 0.4s;
            }
        }
    }
    .text {
        margin-right: auto;
    }
    &:hover {
        transform: scale(1.05);
        .smile-face {
            left: 12px;
            top: 12px;
            .organ {
                transform: translate(2px);
            }
        }
        .comment {
            transition-delay: 0.4s;
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
            .star {
                animation-name: star-out;
            }
        }
        .amazed-face {
            transform: translate(-88%, -88%);
            .mouth {
                r: 4;
            }
        }
    }

    @keyframes star-out {
        0% {
            transform: scale(0) rotate(-240deg);
        }
        60% {
            transform: scale(1.6);
        }
        100% {
            transform: scale(1) rotate(0);
        }
    }
}
</style>