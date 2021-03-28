

// const { mapState, mapActions } = 'vuex';
export default {
    name: "rightArea",
    template: `<div class="right_list">
    
     <div class="experience" v-if="this.$store.state.selectList==0">
        <h1>工作經歷 Work Experience</h1>
        <div  v-for="arr in experience">
            <h3><i class="fas fa-laptop-house"></i>{{arr.Company}}</h3>
            <p><i class="fas fa-user"></i>{{arr.Title}}</p>
            <p><i class="far fa-calendar-alt"></i>{{arr.Time}}</p>
        </div>
        <h1>工作技能 My Skill</h1>
        <div  v-for="arr in (Skills.length>0?Skills[0].Skill:'')">
            <h3><i class="fas fa-tools"></i>{{arr}}</h3>
        </div>
     </div>

     <div class="myWorks" v-if="this.$store.state.selectList==1">
         <h1>合作作品</h1>
         <div  v-for="(arr,index) in myWorks" @click="popShow('myWorks',index)">
           <p>{{arr.info}}</p>
           <img :src="arr.Photo[0]" />
         </div>
     </div>

     <div class="myillustration" v-if="this.$store.state.selectList==2">
         <h1>設計作品</h1>
         
         <div v-for="(arr,index) in myillustration" @click="popShow('myillustration',index)">
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
        <a :title="arr.phone" :href="'tel:'+ arr.phone"><i class="fas fa-phone-alt"></i></a>
        <a :title="arr.email" :href="'mailto:'+arr.email" ><i class="fas fa-envelope"></i></a>
        <a :title="arr.github" :href="arr.github"><i class="fab fa-github"></i></a>
        <a title="CakeResume" :href="arr.cakeresume"><i class="fas fa-images"></i></a>
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
                this.Skills = arr.data.Skills
                this.myillustration = arr.data.myillustration
            })
    },
    data() {
        return {
            resumeTxt: "",
            resume: "",
            experience: [],
            contact_info: [],
            myWorks: [],
            myillustration: [],
            Skills: []
        }
    },
    methods: {
        // 顯示彈跳視窗並傳送選取資料
        popShow(t, i) {
            // 彈跳視窗顯示
            this.$store.commit('changePop', 1)
            // 選擇的頁面
            this.$store.commit('changeInfo', t)
            // 選擇頁面的index
            this.$store.commit('changeIndex', i)
        }
    },
    watch: {
        watchData() {
            this.resumeTxt = this.$store.state.selectList
        }
    }
}