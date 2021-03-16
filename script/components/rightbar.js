

// const { mapState, mapActions } = 'vuex';
export default {
    name: "rightArea",
    template: `<div class="right_list">
    
     <h1>{{resume}}</h1>
     <div class="experience" v-for="exp in experience">
        <h3>{{exp.Company}}</h3>
        <p>{{exp.Title}}</p>
        <p>{{exp.Time}}</p>
     </div>
     

    
    </div>`,
    created() {
        axios.get('/script/components/index_resume_1.json')
            .then(arr => {
                // console.log(arr.data.resume);
                this.resume = arr.data.resume
                this.experience = arr.data.Experience
            })
    },
    mounted() {
        // 接收vuex的selectList資料
        this.resumeTxt = this.$store.state.selectList

    },
    data() {
        return {
            resumeTxt: "",
            resume: "",
            experience: []
        }
    },
    computed: {
        // ...mapState({
        //     a: state => state.selectList
        // })
    },
    updated() {
        this.resumeTxt = this.$store.state.selectList
    },
    watch: {
        watchData() {
            console.log(this.resumeTxt);
        }
    }
}