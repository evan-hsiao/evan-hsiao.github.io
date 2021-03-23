import pop from "../components/popinfo.js";
import left_bar from "../components/leftbar.js";
import right_bar from "../components/rightbar.js";

const data = {

}
var router = new VueRouter({
    routes: [
        { path: "/", component: pop }
    ]
})

const store = new Vuex.Store({
    // 類似data
    state: {
        // 選擇的清單
        selectList: 0,
        // 彈跳視窗顯示
        isPop: 0,
        // 選擇的頁面
        selectInfo: 0
    },
    // 類似methods
    mutations: {
        // 選擇的清單
        changeList(state, payload) {
            state.selectList = payload
        },
        // 彈跳視窗顯示
        changePop(state, payload) {
            state.isPop = payload
        },
        // 選擇的頁面
        changeInf(sate, payload) {
            state.selectInfo = payload
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
                // console.log(arr.data.myPhoto);
            })
            .catch(err => {
                console.log(err);
            })
    },
    methods: {

    },
    router,
    components: {
        left_bar, right_bar
    }
})