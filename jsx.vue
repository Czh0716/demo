
<script>
export default {
    data() {
        return {
            b: 'value'
        }
    },
    methods: {
        input(e) {
            console.log(e)
            // this.b = e
        }
    },
    render() {
        // const title = (
        //     <h1 class="jsx" ref="hah">
        //         {this.b}
        //     </h1>
        // )
        const input = <input value={this.b} onInput={this.input}></input>
        return input
    }
}
</script>

<style lang="less" scoped>
.jsx {
    background-color: pink;
    height: 200px;
    width: 200px;
}
</style>