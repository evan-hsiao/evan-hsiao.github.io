import{_ as s,o as a,c as n,a as l}from"./app.ee1d1b16.js";const C=JSON.parse('{"title":"控制函式 view","description":"","frontmatter":{},"headers":[{"level":2,"title":"接收引數","slug":"接收引數","link":"#接收引數","children":[]},{"level":2,"title":"接收前端丟過來的資料 (Views.py)","slug":"接收前端丟過來的資料-views-py","link":"#接收前端丟過來的資料-views-py","children":[{"level":3,"title":"定義處理資料的方法 ( views.py )","slug":"定義處理資料的方法-views-py","link":"#定義處理資料的方法-views-py","children":[]}]}],"relativePath":"backend_develop/django/new_view.md","lastUpdated":1687825922000}'),p={name:"backend_develop/django/new_view.md"},o=l(`<h1 id="控制函式-view" tabindex="-1">控制函式 view <a class="header-anchor" href="#控制函式-view" aria-hidden="true">#</a></h1><p><code>Django</code> 把 <code>contorller</code> 命名為 <code>views</code>，一開始有點難理解，實作之後還是覺得它就是 <code>controller</code>。</p><div class="language-py"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> django</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">shortcuts </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> render</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> django</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">http </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> HttpResponse</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">hello</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">request</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">HttpResponse</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hello World</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div><h2 id="接收引數" tabindex="-1">接收引數 <a class="header-anchor" href="#接收引數" aria-hidden="true">#</a></h2><p>接收<code>urls</code>丟過來的引數</p><div class="language-py"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">...</span></span>
<span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">hello</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">request</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;font-style:italic;">msg</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;font-style:italic;">x</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">HttpResponse</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">f</span><span style="color:#C3E88D;">&quot;Hello World + </span><span style="color:#F78C6C;">{</span><span style="color:#82AAFF;">msg</span><span style="color:#F78C6C;">}</span><span style="color:#C3E88D;"> + </span><span style="color:#F78C6C;">{</span><span style="color:#82AAFF;">x</span><span style="color:#F78C6C;">}</span><span style="color:#C3E88D;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div><h2 id="接收前端丟過來的資料-views-py" tabindex="-1">接收前端丟過來的資料 (<a href="http://Views.py" target="_blank" rel="noreferrer">Views.py</a>) <a class="header-anchor" href="#接收前端丟過來的資料-views-py" aria-hidden="true">#</a></h2><p><code>input.html</code> 所輸入的資料餵給後端<code>urls</code>內指定<code>views</code>的函式。</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">form</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">method</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">POST</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">action</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">{% url &#39;add_item&#39; %}</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">form</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h3 id="定義處理資料的方法-views-py" tabindex="-1">定義處理資料的方法 ( <a href="http://views.py" target="_blank" rel="noreferrer">views.py</a> ) <a class="header-anchor" href="#定義處理資料的方法-views-py" aria-hidden="true">#</a></h3><div class="language-py"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> django</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">http </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> HttpResponse</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> HttpResponseRedirect</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> django</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">template </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> loader</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">models </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> Mytable</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">index</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">request</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">render</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">request</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">index.html</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 放到資料表內</span></span>
<span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ontable</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">request</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># 這裡是搭配 html 的 input 標籤 name 設定</span></span>
<span class="line"><span style="color:#A6ACCD;">    x</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">request</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">POST</span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">first</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">    y</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">request</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">POST</span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">last</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># 對應資料表的欄位</span></span>
<span class="line"><span style="color:#A6ACCD;">    member</span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;">Mytable</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">name</span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;">x</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#A6ACCD;font-style:italic;">other</span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;">y</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># 儲存資料</span></span>
<span class="line"><span style="color:#A6ACCD;">    member</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">save</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># 導回index.html</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">HttpResponseRedirect</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">reverse</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">index</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">))</span></span>
<span class="line"></span></code></pre></div><div class="danger custom-block"><p class="custom-block-title">DANGER</p><ol><li>如果回饋或寫入是資料庫，記得要引入import。</li><li><code>views.py</code> 宣告處理方式後，還必須掛在 <code>urls.py</code> 才能正確執行。</li><li>輸入資料後建議轉址，不建議留在原地，因為當按下重整時，會自動輸入上筆資料，帶來困擾。</li></ol></div>`,12),e=[o];function t(c,r,y,D,i,F){return a(),n("div",null,e)}const d=s(p,[["render",t]]);export{C as __pageData,d as default};
