import{_ as s,o as a,c as n,a as l}from"./app.ee1d1b16.js";const C=JSON.parse('{"title":"CSS 安裝","description":"","frontmatter":{},"headers":[{"level":2,"title":"SASS.SCSS 安裝","slug":"sass-scss-安裝","link":"#sass-scss-安裝","children":[]},{"level":2,"title":"Bootstrap 安裝","slug":"bootstrap-安裝","link":"#bootstrap-安裝","children":[]},{"level":2,"title":"Tailwind 安裝","slug":"tailwind-安裝","link":"#tailwind-安裝","children":[{"level":3,"title":"參考","slug":"參考","link":"#參考","children":[]}]}],"relativePath":"frontend_develop/vite/install_css.md","lastUpdated":1683292222000}'),e={name:"frontend_develop/vite/install_css.md"},t=l(`<h1 id="css-安裝" tabindex="-1">CSS 安裝 <a class="header-anchor" href="#css-安裝" aria-hidden="true">#</a></h1><h2 id="sass-scss-安裝" tabindex="-1">SASS.SCSS 安裝 <a class="header-anchor" href="#sass-scss-安裝" aria-hidden="true">#</a></h2><div class="language-cmd"><button title="Copy Code" class="copy"></button><span class="lang">cmd</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">npm </span><span style="color:#82AAFF;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">D sass</span></span>
<span class="line"></span></code></pre></div><ul><li>引入CSS檔</li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> class </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/路徑/.css</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>在 Javascript 中幾乎所有要引入的方式都用 import fuction from &#39;/path /dir&#39;。</p><p>而vite提供了全區域引入的方式 const modules = i<wbr>mport.meta.glob(&#39;./dir/*.js&#39;)</p></div><h2 id="bootstrap-安裝" tabindex="-1">Bootstrap 安裝 <a class="header-anchor" href="#bootstrap-安裝" aria-hidden="true">#</a></h2><p><a href="https://getbootstrap.com/" target="_blank" rel="noreferrer">Bootstrap 官網</a> | <a href="https://bootstrap5.hexschool.com/" target="_blank" rel="noreferrer">六角學院翻譯的Bootstrap</a></p><div class="language-cmd"><button title="Copy Code" class="copy"></button><span class="lang">cmd</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">npm install bootstrap@</span><span style="color:#F78C6C;">5.3.0</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">alpha1</span></span>
<span class="line"></span></code></pre></div><h2 id="tailwind-安裝" tabindex="-1">Tailwind 安裝 <a class="header-anchor" href="#tailwind-安裝" aria-hidden="true">#</a></h2><p><a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">Tailwind 官網</a></p><div class="language-cmd"><button title="Copy Code" class="copy"></button><span class="lang">cmd</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">npm install </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">D tailwindcss postcss autoprefixer</span></span>
<span class="line"><span style="color:#A6ACCD;">npx tailwindcss init </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">p</span></span>
<span class="line"></span></code></pre></div><p>此時會幫你建立2個檔案<code>tailwind.config.cjs</code>、<code>postcss.config.cjs</code>，在其中一個檔案中加入這段 :</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight has-highlighted-lines" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">// tailwind.config.cjs</span></span>
<span class="line"><span style="color:#89DDFF;">module.exports={</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">content</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./index.html</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./src/**/*.{vue,js,ts,jsx,tsx}</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>記住上述的一定要有 <code>vue</code>，才會啟動tailwind</p></div><p>在<code>./src/</code>內建立一個<code>index.css</code>，並填入以下內容:</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">@tailwind</span><span style="color:#A6ACCD;"> base</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">@tailwind</span><span style="color:#A6ACCD;"> components</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">@tailwind</span><span style="color:#A6ACCD;"> utilities</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>引入到 <code>main.js</code> 內</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./index.css</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre></div><hr><h3 id="參考" tabindex="-1">參考 <a class="header-anchor" href="#參考" aria-hidden="true">#</a></h3><ul><li><a href="https://ithelp.ithome.com.tw/users/20152047/ironman/5536" target="_blank" rel="noreferrer">從零開始的 Tailwind CSS 學習之旅</a></li><li><a href="https://ithelp.ithome.com.tw/users/20152251/ironman/5809" target="_blank" rel="noreferrer">你聽過尾巴風嗎 ? CSS 框架 tailwind 的新手入門指南 </a></li></ul>`,22),o=[t];function p(c,i,r,d,h,D){return a(),n("div",null,o)}const F=s(e,[["render",p]]);export{C as __pageData,F as default};
