import{_ as s,o as n,c as a,a as e}from"./app.5bb4edff.js";const l="/assets/default_homepage.222e7472.png",D=JSON.parse('{"title":"首頁 Home","description":"","frontmatter":{},"headers":[],"relativePath":"frontend_develop/vitepress/home.md","lastUpdated":null}'),p={name:"frontend_develop/vitepress/home.md"},o=e('<h1 id="首頁-home" tabindex="-1">首頁 Home <a class="header-anchor" href="#首頁-home" aria-hidden="true">#</a></h1><p>官方提供預設模板介面，然後使用<code>frontmatter</code>規則來描述設定，坦白說有點不習慣，光是空白、橫線..等，都會影響畫面呈現。</p><p>下方就是官網首頁畫面，制式化的風格。 <img src="'+l+`" alt="homepage"></p><p>預設名稱叫<code>hero</code>英雄模式，下方是官方設定的內容 :</p><div class="language-md"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- index.md --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">---</span></span>
<span class="line"><span style="color:#A6ACCD;">layout: home</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">hero:</span></span>
<span class="line"><span style="color:#A6ACCD;">  name: VitePress</span></span>
<span class="line"><span style="color:#A6ACCD;">  text: Vite &amp; Vue powered static site generator.</span></span>
<span class="line"><span style="color:#A6ACCD;">  tagline: Lorem ipsum...</span></span>
<span class="line"><span style="color:#A6ACCD;">  image:</span></span>
<span class="line"><span style="color:#A6ACCD;">    src: /logo.png</span></span>
<span class="line"><span style="color:#A6ACCD;">    alt: VitePress</span></span>
<span class="line"><span style="color:#A6ACCD;">  actions:</span></span>
<span class="line"><span style="color:#A6ACCD;">    - theme: brand</span></span>
<span class="line"><span style="color:#A6ACCD;">      text: Get Started</span></span>
<span class="line"><span style="color:#A6ACCD;">      link: /guide/what-is-vitepress</span></span>
<span class="line"><span style="color:#A6ACCD;">    - theme: alt</span></span>
<span class="line"><span style="color:#A6ACCD;">      text: View on GitHub</span></span>
<span class="line"><span style="color:#A6ACCD;">      link: https://github.com/vuejs/vitepress</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">features:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> icon: 🛠️</span></span>
<span class="line"><span style="color:#A6ACCD;">    title: Simple and minimal, always</span></span>
<span class="line"><span style="color:#A6ACCD;">    details: Lorem ipsum...</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> icon:</span></span>
<span class="line"><span style="color:#A6ACCD;">      src: /cool-feature-icon.svg</span></span>
<span class="line"><span style="color:#A6ACCD;">    title: Another cool feature</span></span>
<span class="line"><span style="color:#A6ACCD;">    details: Lorem ipsum...</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> icon:</span></span>
<span class="line"><span style="color:#A6ACCD;">      dark: /dark-feature-icon.svg</span></span>
<span class="line"><span style="color:#A6ACCD;">      light: /light-feature-icon.svg</span></span>
<span class="line"><span style="color:#A6ACCD;">    title: Another cool feature</span></span>
<span class="line"><span style="color:#A6ACCD;">    details: Lorem ipsum...</span></span>
<span class="line"><span style="color:#A6ACCD;">---</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><p>開頭的<code>layout: home</code>當然是一開始要設定首頁的條件，我取比較重點的項目稍微解說一下寫了什麼 :</p><ul><li><code>hero:</code> 英雄模式，也就是告訴系統改為制式的畫面。</li><li><code>name</code> 標題的綠色文字。</li><li><code>text</code> 第二段黑色文字。</li><li><code>tagline</code> 第三段灰黑色略小一點的文字。</li><li><code>image</code> 右方圖片，會被侷限制式的大小尺寸。</li><li><code>actions</code> 按鈕連結</li><li><code>features</code> 下方單行4格提示欄，可設定圖標、連結、簡單的敘述及標題。</li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>features 提示欄如果低於或多於4格，畫面會依據視窗現況調整。</p></div>`,8),t=[o];function c(i,r,A,C,d,m){return n(),a("div",null,t)}const h=s(p,[["render",c]]);export{D as __pageData,h as default};
