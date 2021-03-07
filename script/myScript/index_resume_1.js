import pop from "../components/popinfo.js";

const data = {
    isPop: false
}
var router = new VueRouter({
    routes: [
        { path: "/", component: pop }
    ]
})
// 右側資料
Vue.component('right_bar', {
    template: `<div class="right_list">
    
    <h1>{{resumeTxt}} </h1>
    
    </div>`,
    created() {

    },
    mounted() {
        // 接收vuex的selectList資料

    },
    data() {
        return {
            resumeTxt: this.$store.state.selectList
        }
    },
    updated() {
        this.resumeTxt = this.$store.state.selectList
    }
})

Vue.component("left_bar", {
    template: `<div class="left_photo">
        <img :src="myPhoto[startPhoto]" />
        <div class="nav_tool">
                <a @click="selectID(0)" :class="[selectShow==0?'active':'']">Resume</a>
                <a @click="selectID(1)" :class="[selectShow==1?'active':'']">Portfolio</a>
                <a @click="selectID(2)" :class="[selectShow==2?'active':'']">Illustration</a>
                <a @click="selectID(3)" :class="[selectShow==3?'active':'']">Offical</a>
                <a @click="selectID(4)" :class="[selectShow==4?'active':'']">Contact</a>
        </div>
        <div class="icon_link">
                <!--確保載入是否異常-->
                <a :href="contact_info.length>0?contact_info[0].github:''" :class="[selectShow==0?'active':'']">
                    <i class="fab fa-github"></i>
                    <p>My Github</p>
                </a>
                <a href="javascript:;">
                    <i class="fas fa-envelope"></i>
                    <p>yogohot@gmail.com</p>
                </a>
                <a :href="contact_info.length>0?contact_info[0].cakeresume:''">
                    <i class="fas fa-address-book"></i>
                    <p>My CakeResume</p>
                </a>
        </div>
        <h1>Hi! I'am<br> Evan Hsiao</h1>
    </div>`,
    data() {
        return {
            startPhoto: 0,
            myPhoto: [],
            contact_info: [],
            selectShow: "0"
        }
    },
    created() {
        axios.get('/script/components/index_resume_1.json')
            .then(arr => {
                this.myPhoto = arr.data.myPhoto
                this.contact_info = arr.data.contact_info
                // console.log(this.contact_info[0].github);
                // console.log(arr.data.contact_info);
                // console.log(arr.data.myPhoto);
                // console.log(arr);
            })
            .catch(err => {
                console.log(err);
            })
    },
    methods: {
        selectID(i) {
            // console.log(i);
            this.selectShow = i
            // 送給vuex的changeList方法
            this.$store.commit('changeList', i)
        },

    },
    router,
})

const store = new Vuex.Store({
    // 類似data
    state: {
        // 選擇的頁面
        selectList: 0
    },
    // 類似methods
    mutations: {
        changeList(state, payload) {
            // 對應頁面
            state.selectList = payload
        }
    }
})

new Vue({
    el: "#evan",
    data,
    store,
    created() {
        axios.get('/script/components/index_resume_1.json')
            .then(arr => {
                console.log(arr.data.myPhoto);
            })
            .catch(err => {
                console.log(err);
            })
    },
    methods: {

    }
    // router,
})