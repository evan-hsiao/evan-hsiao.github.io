export default {
    name: "popInfo",
    template: `<div class="resume_pop">
        <div class="left_photo">
            <img :src="this.all_arr[this.$store.state.selectInfo][this.$store.state.selectIndex].Photo[selectPhoto]" />
            <a class="btn_prev" @click="trun(0)">P</a>
            <a class="btn_next" @click="trun(1)">N</a>
        </div>
        <div class="right_text">
            <h1>test</h1>
            <p>test</p>
           <p> {{this.$store.state.selectInfo}} </p>                
            
        </div>
    <button class="isPop_btn" @click="clasePop(0)">X</button>
    </div>`,
    created() {
        axios.get('/script/components/index_resume_1.json').then(arr => {

            this.all_arr = arr.data

            // console.log(this.all_arr[this.$store.state.selectInfo][this.$store.state.selectIndex]);
        }).catch(err => {
            console.log(err);
        })
    },
    mounted() {

    },
    data() {
        return {
            all_arr: [],
            selectPhoto: 0
        }
    },
    methods: {
        clasePop(i) {
            this.$store.commit('changePop', i)
        },
        trun(i) {
            if (i == 0) {
                this.selectPhoto
            } else {
                console.log('right');
            }
        }
    },
    computed: {
        arr_filter() {
            var changeIndex = this.$store.state.changeIndex
            var changeInfo = this.$store.state.changeInfo
            
        }
    },
    updated() {
        console.log(this.arr_filter);
    },
}