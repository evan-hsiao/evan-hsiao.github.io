let data = {
    navBar: [
        { "name": "Portfolio", "href": "#protfolio", "icon": "fas fa-images" },
        { "name": "About Me", "href": "#aboutMe", "icon": "fas fa-street-view" },
        { "name": "Contact", "href": "#contactMe", "icon": "fas fa-file-signature" },
        { "name": "Login", "href": "javascript:;", "icon": "fas fa-user" }
    ],
    banImgSrc: [
        "/img/P_20200517_165717_vHDR_Auto_HP.jpg",
        "/img/P_20200517_170708_vHDR_Auto_HP.jpg"
    ],
    portfolioFile: [
        { "src": "", "cardTitle": "9號碼頭", "cardText": "參與中興大學大數據班首次製作RWD作品", "href": "https://evan-hsiao.github.io/no9_harbor/" },
        { "src": "", "cardTitle": "Mobirise仿切", "cardText": "仿切Mobirise網站練習", "href": "https://evan-hsiao.github.io/class-mobirise/" },
    ],
    index: 0,
    hanShow: false
};

let methods = {
    prev: function () {
        this.index--;
    },
    next: function () {
        this.index++;
    },
    hanShowAct: function () {
        const navBtn = document.querySelector('nav .hanBar');
        const theNav = document.querySelector('nav ul');
        navBtn.addEventListener('click', () => {

            navBtn.classList.toggle('active');
            theNav.classList.toggle('active');
        })
    },
    closeMenu: function () {
       
      
    }
};

new Vue({
    el: '#container',
    data,
    methods,
});