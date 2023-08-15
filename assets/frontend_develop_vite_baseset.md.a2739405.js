import{_ as s,o as a,c as n,a as l}from"./app.ee1d1b16.js";const e="/assets/web_frame.9f6f0ce3.png",h=JSON.parse('{"title":"基本架構","description":"","frontmatter":{},"headers":[{"level":3,"title":"參考","slug":"參考","link":"#參考","children":[]}],"relativePath":"frontend_develop/vite/baseset.md","lastUpdated":1683292222000}'),o={name:"frontend_develop/vite/baseset.md"},p=l(`<h1 id="基本架構" tabindex="-1">基本架構 <a class="header-anchor" href="#基本架構" aria-hidden="true">#</a></h1><p>安裝後基本資料夾架構。</p><div class="language-cmd"><button title="Copy Code" class="copy"></button><span class="lang">cmd</span><pre class="shiki material-theme-palenight has-highlighted-lines" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">first_vite/</span></span>
<span class="line"><span style="color:#A6ACCD;">├── index.html</span></span>
<span class="line"><span style="color:#A6ACCD;">├── node_modules </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">node.js專用區</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">├── package.json </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">專案設定檔</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">├── package</span><span style="color:#89DDFF;">-</span><span style="color:#82AAFF;">lock</span><span style="color:#A6ACCD;">.json</span></span>
<span class="line"><span style="color:#A6ACCD;">├── </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">不打包編譯的資料夾</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">│   └── favicon.ico</span></span>
<span class="line"><span style="color:#A6ACCD;">├── README.md</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">├── src </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">所有頁面程式設定放置區</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── /assets </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">靜態文件資料檔</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   └── index.css | .svg | .jpg</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── /components </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">頁面元件</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   └── navbar.vue | .ts</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── /router </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">路由設定</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   └── index.js</span></span>
<span class="line"><span style="color:#A6ACCD;">|   |   └── routes.js</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── /stores </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">與Vuex一樣的狀態管理</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   └── counter.js</span></span>
<span class="line"><span style="color:#A6ACCD;">│   └── /views </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">路由元件，跟頁面元件很像</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   └── Home .vue | .ts</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">|   ├── main.js</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">|   ├── App.vue</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">|   ├── style.css</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">└── vite.config.js </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">vite設定檔，全域設定</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div><p>這裡先設計一個基本的框架畫面:</p><ul><li>navbar 導覽列 (常見的有 <code>logo</code>、<code>搜尋功能 Search</code>、<code>連結項目</code>、<code>RWD選單(humburger)</code>、<code>麵包屑(Breadcrumb)</code>)</li><li>sidebar 側邊導覽列 (常見有 <code>手風琴伸縮導覽列 Accordion</code>)</li><li>footer 頁腳導覽列</li><li>main 主要區 (常見有<code>輪播(Carousel)</code>、<code>標單 (Table)</code>等等)</li></ul><p><img src="`+e+'" alt="frame"></p><hr><h3 id="參考" tabindex="-1">參考 <a class="header-anchor" href="#參考" aria-hidden="true">#</a></h3><ul><li><a href="https://www.w3schools.com/howto/howto_js_accordion.asp" target="_blank" rel="noreferrer">W3S - Collapsibles/Accordion</a></li><li><a href="https://ithelp.ithome.com.tw/articles/10221659" target="_blank" rel="noreferrer">實作無障礙網頁功能：鍵盤也能操作的手風琴 Accordion</a></li><li><a href="https://www.w3.org/WAI/ARIA/apg/" target="_blank" rel="noreferrer">W3C - APG</a></li></ul>',9),c=[p];function t(r,i,A,D,C,d){return a(),n("div",null,c)}const F=s(o,[["render",t]]);export{h as __pageData,F as default};
