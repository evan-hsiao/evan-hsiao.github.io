export default {
    name: "popInfo",
    template: `<div class="resume_pop">
    
    <h1>pop list</h1>
    <button class="isPop_btn" @click="clasePop(0)">X</button>
    </div>`,
    created() {

    },
    data() {
        return {

        }
    },
    methods: {
        clasePop(i) {
            this.$store.commit('changePop', i)

        }
    },
}