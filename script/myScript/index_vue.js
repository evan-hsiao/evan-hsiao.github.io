let data = {
    navBar: [
        { "name": "Protfolio", "href": "#protfolio" },
        { "name": "About Me", "href": "#aboutMe" },
        { "name": "Contact", "href": "#contactMe" },
        { "name": "Login", "href": "javascript:;" }
    ],
    banImgSrc: [
        "/img/P_20200517_165717_vHDR_Auto_HP.jpg",
        "/img/P_20200517_170708_vHDR_Auto_HP.jpg"
    ],
    index: 0
};

let methods = {
    prev: function () {
        this.index--;
    },
    next: function () {
        this.index++;
    }
};

new Vue({
    el: '#container',
    data,
    methods,
});