import{_ as s,o as a,c as n,a as l}from"./app.ca57c996.js";const C=JSON.parse('{"title":"範例 CRUD - I","description":"","frontmatter":{},"headers":[{"level":2,"title":"axios","slug":"axios","link":"#axios","children":[]},{"level":2,"title":"axios 與 reactive","slug":"axios-與-reactive","link":"#axios-與-reactive","children":[{"level":3,"title":"參考:","slug":"參考","link":"#參考","children":[]}]}],"relativePath":"frontend_develop/vue/example_crud.md","lastUpdated":1684369963000}'),o={name:"frontend_develop/vue/example_crud.md"},e=l(`<h1 id="範例-crud-i" tabindex="-1">範例 CRUD - I <a class="header-anchor" href="#範例-crud-i" aria-hidden="true">#</a></h1><h2 id="axios" tabindex="-1">axios <a class="header-anchor" href="#axios" aria-hidden="true">#</a></h2><div class="language-cmd"><button title="Copy Code" class="copy"></button><span class="lang">cmd</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">npm </span><span style="color:#82AAFF;">add</span><span style="color:#A6ACCD;"> axios</span></span>
<span class="line"></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> axios </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">axios</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> url</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">localhost:5050</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">axios</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">http://</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">url</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">/item</span><span style="color:#89DDFF;">\`</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#A6ACCD;">(</span><span style="color:#A6ACCD;font-style:italic;">res</span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">res</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">catch</span><span style="color:#A6ACCD;">(</span><span style="color:#A6ACCD;font-style:italic;">err</span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">err</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><h2 id="axios-與-reactive" tabindex="-1">axios 與 reactive <a class="header-anchor" href="#axios-與-reactive" aria-hidden="true">#</a></h2><p>碰壁的區域，遇到將axios.get後的 res 資料送到 reactive 內時，出現問題，原來是<code>reactive</code>特性。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight has-diff" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">reactive</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line diff remove"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> get_data</span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;">reactive</span><span style="color:#A6ACCD;">([]) </span></span>
<span class="line diff add"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> get_data</span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;">reactive</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">item</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">[]</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">) </span></span>
<span class="line"><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">axios</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#A6ACCD;">(</span><span style="color:#A6ACCD;font-style:italic;">res</span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">{</span></span>
<span class="line diff remove"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">get_data</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">data</span><span style="color:#F07178;"> </span></span>
<span class="line diff add"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">get_data</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">item</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">data</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">catch</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">..</span><span style="color:#A6ACCD;">) </span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><hr><h3 id="參考" tabindex="-1">參考: <a class="header-anchor" href="#參考" aria-hidden="true">#</a></h3><ul><li><a href="https://eudora.cc/posts/201013/" target="_blank" rel="noreferrer">實例-ToDoList (基本CRUD.Axios載入預設資料)</a></li><li><a href="https://www.bezkoder.com/vue-3-crud/" target="_blank" rel="noreferrer">Vue 3 CRUD example with Axios &amp; Vue Router</a></li><li><a href="https://codersdiaries.com/blog/vue-axios" target="_blank" rel="noreferrer">Build a CRUD with Vue Axios HTTP requests</a></li><li><a href="https://ithelp.ithome.com.tw/articles/10242648" target="_blank" rel="noreferrer">vue3 Composition API 學習手冊-14 透過axios載入外部json</a></li><li><a href="https://totoroliu.medium.com/javascript-var-let-const-%E5%B7%AE%E7%95%B0-e3d930521230" target="_blank" rel="noreferrer">&quot;JavaScript: var, let, const 差異&quot;</a></li></ul>`,10),p=[e];function t(r,c,i,D,y,A){return a(),n("div",null,p)}const d=s(o,[["render",t]]);export{C as __pageData,d as default};
