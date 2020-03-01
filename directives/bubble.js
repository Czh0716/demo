import mojs from '@mojs/core'
class bubbleGroup {
    constructor(options) {
        this.group = []
        this.options = options
        this.initGroup()
    }
    initGroup() {
        for (let i = 0; i < this.options.count; i++) {
            this.group.push(
                new mojs.Shape({
                    parent: this.options.el,
                    fill: 'none',
                    shape: 'circle',
                    radius: 'rand(5, 30)',
                    stroke: 'pink',
                    strokeWidth: { 50: 0 },
                    scale: { 0: 1 },
                    opacity: 0.5,
                    duration: 500,
                    x: 'rand(-40, 40)',
                    y: 'rand(-40, 40)',
                    delay: 'rand(0, 300)',
                    easing: 'cubic.out',
                    onComplete() {
                        this.reset()
                    }
                })
            )
        }
    }
    show(e) {
        const target = e.currentTarget
        const offset = target.getBoundingClientRect()
        const x = e.clientX - offset.left
        const y = e.clientY - offset.top
        if (x < 0 || y < 0) return
        this.group.forEach(bubble => {
            bubble
                .generate()
                .tune({
                    left: x,
                    top: y,
                    stroke:
                        '#' +
                        Math.random()
                            .toString(16)
                            .slice(-6)
                })
                .replay()
        })
    }
}
export default {
    bind(el) {
        const bubbles = new bubbleGroup({
            el,
            count: 5
        })
        el.onclick = bubbles.show.bind(bubbles)
    }
}
