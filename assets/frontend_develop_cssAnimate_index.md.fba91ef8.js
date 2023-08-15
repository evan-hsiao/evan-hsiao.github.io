import{_ as s,o as a,c as n,a as e}from"./app.ee1d1b16.js";const A=JSON.parse('{"title":"Animate 網頁動畫","description":"","frontmatter":{},"headers":[{"level":2,"title":"Vue.js Transition","slug":"vue-js-transition","link":"#vue-js-transition","children":[{"level":3,"title":"參考","slug":"參考","link":"#參考","children":[]}]}],"relativePath":"frontend_develop/cssAnimate/index.md","lastUpdated":1686821453000}'),l={name:"frontend_develop/cssAnimate/index.md"},o=e(`<h1 id="animate-網頁動畫" tabindex="-1">Animate 網頁動畫 <a class="header-anchor" href="#animate-網頁動畫" aria-hidden="true">#</a></h1><p><a href="https://greensock.com/gsap/" target="_blank" rel="noreferrer">GSAP 官網</a> | <a href="https://threejs.org/" target="_blank" rel="noreferrer">Three.js 官網</a> | <a href="https://animate.style/" target="_blank" rel="noreferrer">Animate.css 官網</a> | <a href="https://pixijs.com/" target="_blank" rel="noreferrer">Pixi Js 官網</a></p><p>在網頁製作動畫最基本要了解 <strong>3</strong> 個步驟 :</p><ol><li>起始畫面(進場)。</li><li>運作設定(持續時間、順序、速度、重複或返回)。</li><li>結束畫面(離場)。</li></ol><p>當然有些設計會讓畫面持續運作，所以就沒有所謂的結束畫面，通常這樣設計是想讓畫面豐富或者是想與操作者互動，一般網頁則不需要這麼費工。</p><h2 id="vue-js-transition" tabindex="-1">Vue.js Transition <a class="header-anchor" href="#vue-js-transition" aria-hidden="true">#</a></h2><p>這裡先從 <code>Vue</code> 本身的過場動作設定 <code>transition</code> 開始介紹:</p><p>標籤 <code>&lt;transition&gt;</code> 運用在切換畫面或功能上，通常會標註在 CSS 或寫在標籤上共有幾種 :</p><ol><li><code>v-enter-from</code> | <code>enter-from-class</code></li><li><code>v-enter-active</code> | <code>enter-active-class</code></li><li><code>v-enter-to</code> | <code>enter-to-class</code></li><li><code>v-leave-from</code> | <code>leave-from-class</code></li><li><code>v-leave-active</code> | <code>leave-active-class</code></li><li><code>v-leave-to</code> | <code>leave-to-class</code></li></ol><p>其實原理只有3種 (GSAP也是一樣)，也就是 <code>起始 (from) -&gt; 執行狀態設定 (active) -&gt; 結束 (to)</code>。</p><ul><li>from 設定起始畫面</li><li>active 設定動畫時間、變化</li><li>to 設定結束畫面</li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">transition</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">bounce</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> ... </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">transition</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">transition</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">enter-from-class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#C792EA;">enter-active-class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#C792EA;">enter-to-class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#C792EA;">leave-from-class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#C792EA;">leave-active-class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#C792EA;">leave-to-class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> ... </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">transition</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    .bounce-enter-from,</span></span>
<span class="line"><span style="color:#A6ACCD;">    .bounce-leave-to</span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    .bounce-enter-active,</span></span>
<span class="line"><span style="color:#A6ACCD;">    .bounce-leave-active </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        transition: all 0</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">3s ease</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">out;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">   </span></span>
<span class="line"><span style="color:#A6ACCD;">    .bounce-enter-to,</span></span>
<span class="line"><span style="color:#A6ACCD;">    .brouce-leave-from </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><hr><h3 id="參考" tabindex="-1">參考 <a class="header-anchor" href="#參考" aria-hidden="true">#</a></h3><ul><li><a href="https://www.casper.tw/css/2017/07/21/css-flex/" target="_blank" rel="noreferrer">CSS Flex 屬性一點也不難</a></li><li><a href="https://vuejs.org/guide/built-ins/transition.html" target="_blank" rel="noreferrer">Vue.js - Transition</a></li><li><a href="https://medium.com/@mohsen-vaziri/animating-with-vue-vue-amsterdam-conference-2022-summary-series-seventh-talk-db761e792978" target="_blank" rel="noreferrer">Animating with Vue — Vue Amsterdam Conference 2022 Summary series — Seventh Talk</a></li><li><a href="https://jason06286.medium.com/%E5%A6%82%E4%BD%95%E5%88%A9%E7%94%A8-gsap-scrolltrigger-%E5%81%9A%E5%87%BA%E6%BB%BE%E5%8B%95%E5%8B%95%E7%95%AB-vue-%E5%B0%88%E6%A1%88-%E8%BC%89%E5%85%A5-scrolltrigger-637a4207b8a2" target="_blank" rel="noreferrer">如何利用 Gsap ScrollTrigger 做出滾動動畫? Vue 專案 載入 ScrollTrigger</a></li><li><a href="https://rollerblade.tw/greensock-2/" target="_blank" rel="noreferrer">下拉＆路徑動畫系列-使用GreenSock套件，用更簡單的JS指令操控網頁動畫</a></li><li><a href="https://codepen.io/GreenSock/pen/GRBeodX" target="_blank" rel="noreferrer">gsap example - Play with Header on Page Transitions</a></li></ul>`,15),t=[o];function p(r,c,i,D,F,y){return a(),n("div",null,t)}const u=s(l,[["render",p]]);export{A as __pageData,u as default};
