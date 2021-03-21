

// const { mapState, mapActions } = 'vuex';
export default {
    name: "rightArea",
    template: `<div class="right_list">
    
     <div v-if="this.$store.state.selectList==0">
        <h1>工作經驗 Work Experience</h1>
        <div class="experience" v-for="arr in experience">
            <h3><i class="fas fa-laptop-house"></i>{{arr.Company}}</h3>
            <p><i class="fas fa-user"></i>{{arr.Title}}</p>
            <p><i class="far fa-calendar-alt"></i>{{arr.Time}}</p>
        </div>
     </div>
     <div v-if="this.$store.state.selectList==1">
         <h1></h1>
         <div class="myWorks" v-for="arr in myWorks">
           <img :src="arr.Photo" />
         </div>
     </div>
     <div v-if="this.$store.state.selectList==2">
         <h1>我的作品</h1>
         <div class="myillustration" v-for="arr in myillustration">
           <img :src="arr" />
         </div>
     </div>
    
     <div v-if="this.$store.state.selectList==3">
         <h1></h1>
         <div class="Summary">
           <h1>網站概述</h1>
           <h2>{{resume}}</h2>
         </div>
     </div>

     <div v-if="this.$store.state.selectList==4">
     <h1>個人資料 Contact Information</h1>
      <div class="contact_info" v-for="arr in contact_info">
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
    computed: {

    },
    updated() {
        this.resumeTxt = this.$store.state.selectList
        var bg_color = document.querySelector('.right_list').style
        if (this.resumeTxt == 1) {
            // console.log(bg_color);
            bg_color = "background-color:#494949"
        } else if (this.resumeTxt == 2) {
            console.log('i am 2');
        } else if (this.resumeTxt == 3) {
            console.log('i am 3');
        } else if (this.resumeTxt == 4) {
            console.log('i am 4');
        }

    },
    watch: {
        watchData() {
            this.resumeTxt = this.$store.state.selectList
            console.log(this.resumeTxt);
        }
    }
}