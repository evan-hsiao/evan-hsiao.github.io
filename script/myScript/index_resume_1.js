import pop from "../components/popinfo.js";
import left_bar from "../components/leftbar.js";
import right_bar from "../components/rightbar.js";

const data = {
    isPop: false
}
var router = new VueRouter({
    routes: [
        { path: "/", component: pop }
    ]
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