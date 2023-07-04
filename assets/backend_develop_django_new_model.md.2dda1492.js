import{_ as s,o as a,c as n,a as l}from"./app.ca57c996.js";const C=JSON.parse('{"title":"建立資料庫模型","description":"","frontmatter":{},"headers":[{"level":2,"title":"上傳資料表後透過 python shell 新增資料","slug":"上傳資料表後透過-python-shell-新增資料","link":"#上傳資料表後透過-python-shell-新增資料","children":[{"level":3,"title":"下方是設定MySQL","slug":"下方是設定mysql","link":"#下方是設定mysql","children":[]},{"level":3,"title":"重整資料表","slug":"重整資料表","link":"#重整資料表","children":[]}]}],"relativePath":"backend_develop/django/new_model.md","lastUpdated":1688431060000}'),o={name:"backend_develop/django/new_model.md"},p=l(`<h1 id="建立資料庫模型" tabindex="-1">建立資料庫模型 <a class="header-anchor" href="#建立資料庫模型" aria-hidden="true">#</a></h1><p>開頭有提到，除非你想使用內建的 <code>SQLite</code>，否則要用 <code>PostgreSQL</code>、<code>MySQL</code> 等等資料庫，可到官方<a href="https://docs.djangoproject.com/en/4.2/ref/databases/" target="_blank" rel="noreferrer">Database</a>看一下。</p><p>基本上 <code>Django</code> 也是採用 <code>ORM</code> 方式，這與 <code>FastAPI</code> 共同點。</p><p>下方是採用 <code>SQLite</code> 建立資料庫欄位</p><div class="language-py"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> django</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">db </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> models</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Mytable</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">models</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">Model</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    first </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> models</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">CharField</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">max_length</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">200</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    last </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> models</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">CharField</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">max_length</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">200</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">__str__</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;font-style:italic;">self</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> self</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">first</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Item</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">models</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">Model</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    item</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">models</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">CharField</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">max_length</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">25</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    description </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> models</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">TextField</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">    pub_date </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> models</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">DateField</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># 這欄位關聯上一個資料表內容</span></span>
<span class="line"><span style="color:#A6ACCD;">    reporter </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> models</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">ForeignKey</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">Mytable</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#A6ACCD;font-style:italic;">on_delete</span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;">models</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">CASCADE</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">__str__</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;font-style:italic;">self</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> self</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">item</span></span>
<span class="line"></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><ol><li><p>引數 <code>on_delete</code> 是設定 <code>欄位關聯性</code> 的操作，相關參數可以網路搜尋 <a href="https://www.delftstack.com/zh-tw/howto/django/django-on_delete-parameter/" target="_blank" rel="noreferrer">參考資訊</a>。</p></li><li><p>資料表的類別設定，可參考 <a href="https://developer.mozilla.org/zh-TW/docs/Learn/Server-side/Django/Models" target="_blank" rel="noreferrer">MDN -Using models</a>、還有 <a href="https://docs.djangoproject.com/en/1.10/ref/models/fields/#field-types" target="_blank" rel="noreferrer">Django官方 -Field types</a>。</p></li></ol></div><h2 id="上傳資料表後透過-python-shell-新增資料" tabindex="-1">上傳資料表後透過 python shell 新增資料 <a class="header-anchor" href="#上傳資料表後透過-python-shell-新增資料" aria-hidden="true">#</a></h2><p>透過 <code>shell</code> 上傳雖然是官方文件所寫，但如果資料庫是<code>SQLite</code>可使用 <a href="https://sqlitebrowser.org/" target="_blank" rel="noreferrer">DB Browser for SQLite</a> 或 <a href="https://www.postman.com/downloads/?utm_source=postman-home" target="_blank" rel="noreferrer">Postman</a> 工具來操作，也可以透過 <a href="https://www.django-rest-framework.org/" target="_blank" rel="noreferrer">Django rest framwork</a> 框架。</p><div class="language-cmd"><button title="Copy Code" class="copy"></button><span class="lang">cmd</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">py manage.py shell</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">from members.models import Mytable</span></span>
<span class="line"><span style="color:#A6ACCD;">Mytable.object.</span><span style="color:#82AAFF;">all</span><span style="color:#89DDFF;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">keyin</span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;">Mytable</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">=</span><span style="color:#676E95;font-style:italic;">&#39;Evan&#39;)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">keyin.</span><span style="color:#82AAFF;">save</span><span style="color:#89DDFF;">()</span></span>
<span class="line"></span></code></pre></div><blockquote><p>Django 官方也是這麼教 <a href="https://docs.djangoproject.com/en/4.2/intro/tutorial02/#playing-with-the-api" target="_blank" rel="noreferrer">Python shell</a>，覺得很不習慣，建議還是使用介面工具會比較不容易出錯。</p></blockquote><h3 id="下方是設定mysql" tabindex="-1">下方是設定MySQL <a class="header-anchor" href="#下方是設定mysql" aria-hidden="true">#</a></h3><div class="language-cmd"><button title="Copy Code" class="copy"></button><span class="lang">cmd</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">pip install pymysql</span></span>
<span class="line"></span></code></pre></div><div class="language-py"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">DATABASE</span><span style="color:#89DDFF;">=[</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">default</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ENGINE</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">django.db.backend.mysql</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">NAME</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">db_name</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">USER</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">root</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">PASSWORD</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">db_password</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">HOST</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">127.0.0.1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">PORT</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">3306</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span></span>
<span class="line"></span></code></pre></div><h3 id="重整資料表" tabindex="-1">重整資料表 <a class="header-anchor" href="#重整資料表" aria-hidden="true">#</a></h3><p>當資料表更新或資料變動時，必須使用重整遷移方式來告訴 <code>Django</code> 有異動。</p><div class="language-cmd"><button title="Copy Code" class="copy"></button><span class="lang">cmd</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">python manage.py makemigrations myapp</span></span>
<span class="line"></span></code></pre></div><p>再來需要紀錄重整更新。</p><div class="language-cmd"><button title="Copy Code" class="copy"></button><span class="lang">cmd</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">py manage.py migrate</span></span>
<span class="line"></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">提醒</p><p>重整、紀錄資料這兩個指令，只要變更任何資料都會用到。</p></div>`,19),e=[p];function t(c,r,D,y,F,i){return a(),n("div",null,e)}const A=s(o,[["render",t]]);export{C as __pageData,A as default};
