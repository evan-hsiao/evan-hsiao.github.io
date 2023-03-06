import{_ as e,c as a,o as s,d as l}from"./app.2f931ac3.js";const v=JSON.parse('{"title":"基本安裝","description":"","frontmatter":{},"headers":[{"level":2,"title":"初始化安裝","slug":"初始化安裝","link":"#初始化安裝","children":[]},{"level":2,"title":"執行","slug":"執行","link":"#執行","children":[]},{"level":2,"title":"其他安裝","slug":"其他安裝","link":"#其他安裝","children":[{"level":3,"title":"參考","slug":"參考","link":"#參考","children":[]}]}],"relativePath":"frontend_develop/vite/install.md","lastUpdated":null}'),n={name:"frontend_develop/vite/install.md"},t=l(`<h1 id="基本安裝" tabindex="-1">基本安裝 <a class="header-anchor" href="#基本安裝" aria-hidden="true">#</a></h1><p>裝置需求 : <a href="https://nodejs.org/zh-tw/download/" target="_blank" rel="noreferrer">Node.js</a></p><p>這裡採用Vite安裝 ( 本身支援<code>.vue</code>、<code>.ts</code>語法 )，我使用最傳統的<code>npm</code>，其他安裝方式就參考<a href="https://vitejs.dev/guide/" target="_blank" rel="noreferrer">官方文檔</a></p><div class="language-cmd"><button title="Copy Code" class="copy"></button><span class="lang">cmd</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">npm create vite@latest</span></span>
<span class="line"></span></code></pre></div><p>安裝過程中會詢問幾個設定 :</p><ul><li><code>Project Name:</code> 專案名。</li><li><code>Add TypeScript?</code> 增加TypeScript語法。</li><li><code>Add JSX Support</code> 支援JSX (React的好友)。</li><li><code>Add Vue Router for Single Page Application development?</code> 支援Vue-Router官方路由。</li><li><code>Add Pinia for state management?</code> 支援<a href="https://pinia.vuejs.org/" target="_blank" rel="noreferrer">Pinia</a> (Vuex的升級版)。</li><li><code>Add Vitest for Unit Testing?</code> 增加元件測試框架。</li><li><code>Add Cypress for both Unit and End-to-End testing?</code> 增加元件及點對點測試框架。</li><li><code>Add ESLint for code quality?</code> 使用ESLint檢查程式碼。</li><li><code>Add Prettier for code formatting</code>格式化程式編碼。</li></ul><p>如果專案名keyin後，其他後面詢問的選項有遲疑，建議就一直<code>Yes</code>到底。</p><h2 id="初始化安裝" tabindex="-1">初始化安裝 <a class="header-anchor" href="#初始化安裝" aria-hidden="true">#</a></h2><p>之後會建立專案名資料夾，然後要求進入資料夾內執行初始化安裝</p><div class="language-cmd"><button title="Copy Code" class="copy"></button><span class="lang">cmd</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">npm install</span></span>
<span class="line"></span></code></pre></div><h2 id="執行" tabindex="-1">執行 <a class="header-anchor" href="#執行" aria-hidden="true">#</a></h2><p>啟動Vite編譯</p><div class="language-cmd"><button title="Copy Code" class="copy"></button><span class="lang">cmd</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">npm run dev</span></span>
<span class="line"></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>通常安裝後會在package.json內，編譯三個vite執行令，分別為:</p><ul><li>&quot;dev&quot; : &quot;vite&quot;</li><li>&quot;build&quot; : &quot;vite build&quot;</li><li>&quot;preview&quot; : &quot;vite preview --port 4173&quot;</li></ul><p>簡單解釋為 : 編譯 ( dev )、打包 ( build )、打包後預覽 ( preview )，就是要轉換成 瀏覽器 可以看得懂的程式語言。</p></div><h2 id="其他安裝" tabindex="-1">其他安裝 <a class="header-anchor" href="#其他安裝" aria-hidden="true">#</a></h2><p><em>Axios</em> 基本上要做到向後端存取資料會使用到的工具</p><div class="language-cmd"><button title="Copy Code" class="copy"></button><span class="lang">cmd</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">npm install axios </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">save</span></span>
<span class="line"></span></code></pre></div><p><em>Json-server</em> 可使用json檔案模擬後端API，自行參考是否需要安裝。</p><div class="language-cmd"><button title="Copy Code" class="copy"></button><span class="lang">cmd</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">npm install </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">g json</span><span style="color:#89DDFF;">-</span><span style="color:#FFCB6B;">server</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;"># 啟動</span></span>
<span class="line"><span style="color:#A6ACCD;">json</span><span style="color:#89DDFF;">-</span><span style="color:#FFCB6B;">server</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">watch db.json</span></span>
<span class="line"></span></code></pre></div><hr><h3 id="參考" tabindex="-1">參考 <a class="header-anchor" href="#參考" aria-hidden="true">#</a></h3><ul><li><a href="https://ithelp.ithome.com.tw/users/20152606/ironman/5782" target="_blank" rel="noreferrer">真的好想離開 Vue 3 新手村 feat. CompositionAPI 系列</a></li><li><a href="https://medium.com/@debbyji/%E7%94%A8-json-server-%E6%A8%A1%E6%93%AC-restful-api-f07abda3927c" target="_blank" rel="noreferrer">用 JSON Server 模擬 RESTful API</a></li><li><a href="https://ithelp.ithome.com.tw/articles/10295019" target="_blank" rel="noreferrer">第六天 10分鐘略懂 pinia (vue的共用儲存區)</a></li></ul>`,22),o=[t];function i(p,r,c,d,h,u){return s(),a("div",null,o)}const g=e(n,[["render",i]]);export{v as __pageData,g as default};