import{_ as s,o as a,c as l,a as e}from"./app.ee1d1b16.js";const n="/assets/django_rest_framework_page.a2fe4c12.png",o="/assets/django_product_item_import.053a9b21.png",m=JSON.parse('{"title":"Example RestAPI","description":"","frontmatter":{},"headers":[{"level":2,"title":"安裝 REST Framework 輔助框架","slug":"安裝-rest-framework-輔助框架","link":"#安裝-rest-framework-輔助框架","children":[]},{"level":2,"title":"搭建資料表 (models.py)","slug":"搭建資料表-models-py","link":"#搭建資料表-models-py","children":[]},{"level":2,"title":"建構序列模組","slug":"建構序列模組","link":"#建構序列模組","children":[]},{"level":2,"title":"建構控制項目","slug":"建構控制項目","link":"#建構控制項目","children":[]},{"level":2,"title":"參考文獻","slug":"參考文獻","link":"#參考文獻","children":[]}],"relativePath":"backend_develop/django/example_restapi.md","lastUpdated":1690505550000}'),p={name:"backend_develop/django/example_restapi.md"},t=e(`<h1 id="example-restapi" tabindex="-1">Example RestAPI <a class="header-anchor" href="#example-restapi" aria-hidden="true">#</a></h1><p>建構 <code>RestAPI</code> 操作流程 :</p><ol><li>安裝 <code>django rest framewor</code> 框架。</li><li>搭建資料表 (<a href="http://models.py" target="_blank" rel="noreferrer">models.py</a>)。</li><li>建構序列模組 (<a href="http://serializers.py" target="_blank" rel="noreferrer">serializers.py</a>)。</li><li>搭建控制模組 (<a href="http://views.py" target="_blank" rel="noreferrer">views.py</a>)。</li><li>搭建子路由 (<a href="http://urls.py" target="_blank" rel="noreferrer">urls.py</a>)</li><li>註冊主路由 (<a href="http://urls.py" target="_blank" rel="noreferrer">urls.py</a>)</li></ol><h2 id="安裝-rest-framework-輔助框架" tabindex="-1">安裝 REST Framework 輔助框架 <a class="header-anchor" href="#安裝-rest-framework-輔助框架" aria-hidden="true">#</a></h2><p>這是 <code>Django</code> 的 <code>API</code> 增強模組，類似 <code>FastAPI</code> 的 <code>swagger</code> 畫面。</p><div class="language-cmd"><button title="Copy Code" class="copy"></button><span class="lang">cmd</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">pip install djangorestframework</span></span>
<span class="line"></span></code></pre></div><p>註冊 <code>rest-framework</code> 到 <code>settings.py</code>才能啟動它。</p><div class="language-py"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;"># setttings.py</span></span>
<span class="line"><span style="color:#A6ACCD;">INSTALLED_APPs</span><span style="color:#89DDFF;">=[</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">rest_frameworks</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">my_restapi</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">]</span></span>
<span class="line"></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">留意</p><p>Django Rest Framework 有制定義的 GenericAPIView 應用屬性，像是 : <code>filter_backends</code>、<code>serializer_class</code>，可參考 <a href="https://www.django-rest-framework.org/api-guide/generic-views/" target="_blank" rel="noreferrer">官方-Generic views</a>。</p></div><p><img src="`+n+`" alt="serializer_item"></p><h2 id="搭建資料表-models-py" tabindex="-1">搭建資料表 (<a href="http://models.py" target="_blank" rel="noreferrer">models.py</a>) <a class="header-anchor" href="#搭建資料表-models-py" aria-hidden="true">#</a></h2><div class="language-py"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;"># my_restapi/models.py</span></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MyItem</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">models</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">Model</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    name</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">models</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">CharField</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">max_lenght</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">100</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">__str__</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;font-style:italic;">self</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> self</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">name</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">OtherItem</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">models</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">Model</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    item_name</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">models</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">CharField</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">max_lenght</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">100</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    price</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">models</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">FloatField</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">default</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># 關係欄位設置 on_delete</span></span>
<span class="line"><span style="color:#A6ACCD;">    category</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">models</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">ForeignKey</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">MyItem</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#A6ACCD;font-style:italic;">on_delete</span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;">models</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">CASCADE</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    description</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">models</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">TextField</span><span style="color:#89DDFF;">()</span></span>
<span class="line"></span></code></pre></div><h2 id="建構序列模組" tabindex="-1">建構序列模組 <a class="header-anchor" href="#建構序列模組" aria-hidden="true">#</a></h2><p>新增 <code>serializers.py</code> 檔案，此步驟是要讓前端所輸入的欄位與資料表連接，因此會將資料表 <code>model</code> 載入。</p><div class="language-py"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;"># my_restapi/serializers.py</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> rest_framework </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> serializers</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> product_api</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">models </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> Category</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> Item</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">CategorySerializer</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">serializers</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">ModelSerializer</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Meta</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        model </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Category</span></span>
<span class="line"><span style="color:#A6ACCD;">        fields </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">id</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ItemSerializer</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">serializers</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">ModelSerializer</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Meta</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        model </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Item</span></span>
<span class="line"><span style="color:#A6ACCD;">        fields </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">id</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">item_name</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">price</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">category</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">description</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span></code></pre></div><p><img src="`+o+`" alt="serializer_item"></p><div class="tip custom-block"><p class="custom-block-title">提醒</p><p>在 model 裡面沒有設定 id 欄位，而序列模組中卻要增加?</p><p>原因是資料表會自動建立 id，而在序列模組屬於輸入介面，所以必須要放入，但實際畫面不會出現。</p></div><h2 id="建構控制項目" tabindex="-1">建構控制項目 <a class="header-anchor" href="#建構控制項目" aria-hidden="true">#</a></h2><p>建構 <code>資料表</code> 與 <code>查核</code> 後，隨即要開始處理前端請求及回饋內容。在這裡有2種寫法:</p><ol><li><code>FBV</code> : <code>fuction (def)</code> 定義處理方法。</li><li><code>CBV</code> : <code>class</code> 定義方法。</li></ol><div class="language-py"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;"># my_restapi/view.py</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h2 id="參考文獻" tabindex="-1">參考文獻 <a class="header-anchor" href="#參考文獻" aria-hidden="true">#</a></h2><ul><li><a href="https://blog.logrocket.com/django-rest-framework-create-api/" target="_blank" rel="noreferrer">How to create a REST API with Django REST framework</a></li><li><a href="https://medium.com/@apratama918/quick-build-rest-api-with-django-rest-framework-a71461c7216e" target="_blank" rel="noreferrer">Quick Build REST API with Django REST Framework</a></li><li><a href="https://www.youtube.com/watch?v=tujhGdn1EMI" target="_blank" rel="noreferrer">Django REST Framework Course – Build Web APIs with Python</a></li><li><a href="https://stackabuse.com/creating-a-rest-api-with-django-rest-framework/" target="_blank" rel="noreferrer">Creating a REST API with Django REST Framework</a></li></ul>`,23),r=[t];function c(i,y,D,F,d,C){return a(),l("div",null,r)}const h=s(p,[["render",c]]);export{m as __pageData,h as default};