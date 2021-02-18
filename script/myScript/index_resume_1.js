const data = {
    isPop: false

}
// var router = new VueRouter({
//     routes: [
//         { path: "/", component:''}
//     ]
// })
Vue.component("left_bar", {
    template: `<div class="left_photo">
        <img :src="myPhoto[startPhoto]" />
        <div class="nav_tool">
            <a @click="selectID(0)" :class="[selectShow==0?'active':'']">Home</a>
            <a @click="selectID(1)" :class="[selectShow==1?'active':'']">2</a>
            <a @click="selectID(2)" :class="[selectShow==2?'active':'']">3</a>
        </div>
    </div>`,
    data() {
        return {
            startPhoto: 0,
            myPhoto: [],
            selectShow: "0"
        }
    },
    created() {
        axios.get('/script/myScript/index_resume_1.json')
            .then(arr => {
                this.myPhoto = arr.data.myPhoto
                // console.log(arr.data.myPhoto);
            })
            .catch(err => {
                console.log(err);
            })
    },
    methods: {
        selectID(i) {
            console.log(i);
            this.selectShow = i
        }
    }
})

new Vue({
    el: "#evan",
    data,
    created() {
        axios.get('/script/myScript/index_resume_1.json')
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