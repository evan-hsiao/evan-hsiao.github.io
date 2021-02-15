const data = {


}
// var router = new VueRouter({
//     routes: [
//         { path: "/", component:''}
//     ]
// })
Vue.component("left_bar", {
    template: `<div class="left_photo">
        <img :src="myPhoto[startPhoto]" />
    </div>`,
    data() {
        return {
            startPhoto: 0,
            myPhoto: []
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