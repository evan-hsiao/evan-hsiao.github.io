

// const { mapState, mapActions } = 'vuex';
export default {
    name: "rightArea",
    template: `<div class="right_list">
    
     <div class="experience" v-if="this.$store.state.selectList==0">
        <h1>My Work Experience</h1>
        <div  v-for="arr in experience">
            <h3><i class="fas fa-laptop-house"></i>{{arr.Company}}</h3>
            <p><i class="fas fa-user"></i>{{arr.Title}}</p>
            <p><i class="far fa-calendar-alt"></i>{{arr.Time}}</p>
        </div>
     </div>

     <div class="myWorks" v-if="this.$store.state.selectList==1">
         <h1>過去合作作品</h1>
         <div  v-for="arr in myWorks">
            <p>{{arr.info}}</p>
           <a :href="arr.Link" title="點我進入連結網站">
            <img :src="arr.Photo[0]" />
           </a>
         </div>
     </div>

     <div class="myillustration" v-if="this.$store.state.selectList==2">
         <h1>設計作品</h1>
         <div v-for="(arr,index) in myillustration" @click="popShow(index)">
           <p>{{arr.info}}</p>
           <img :src="arr.Photo[0]" />
         </div>
     </div>
    
     <div class="Summary" v-if="this.$store.state.selectList==3">
         <h1>網站概述</h1>
         <h2>{{resume}}</h2>
     </div>

     <div class="contact_info" v-if="this.$store.state.selectList==4">
     <h1>聯絡我吧 <br> Contact Information</h1>
      <div  v-for="arr in contact_info">
        <p><i class="fas fa-phone-alt"></i>Phone : {{arr.phone}}</p>
        <p><i class="fas fa-envelope"></i> Email : {{arr.email}}</p>
        <p><i class="fab fa-github"></i> Github : {{arr.github}}</p>
        <p><i class="fas fa-images"></i> CakeResume : {{arr.cakeresume}}</p>
      </div>
    </div>
     
    </div>`,
    created() {
        axios.get('/script/components/index_resume_1.json')
            .then(arr => {
                // console.log(arr.data);
                this.resume = arr.data.resume
                this.experience = arr.data.Experience
                this.contact_info = arr.data.contact_info
                this.myWorks = arr.data.myWorks
                this.myillustration = arr.data.myillustration
            })
    },
    mounted() {
        // 接收vuex的selectList資料
        // this.resumeTxt = this.$store.state.selectList
        // https://www.englishok.com.tw/toeic/toeic-issue/english-resume
    },
    data() {
        return {
            resumeTxt: "",
            resume: "",
            experience: [],
            contact_info: [],
            myWorks: [],
            myillustration: [],
        }
    },
    methods: {
        // 顯示彈跳視窗並傳送選取資料
        popShow(i) {
            console.log(i);
            this.$store.commit('changePop', 1)
        }
    },
    computed: {

    },
    updated() {
        this.resumeTxt = this.$store.state.selectList
        var bg_color = document.querySelector('.right_list')
        // if (this.resumeTxt = 0) {
        //     bg_color.style.background = "red"
        // } else if (this.resumeTxt = 1) {
        //     bg_color.style.background = "#000"
        // }

    },
    watch: {
        watchData() {
            this.resumeTxt = this.$store.state.selectList
            console.log(this.resumeTxt);
        }
    }
}