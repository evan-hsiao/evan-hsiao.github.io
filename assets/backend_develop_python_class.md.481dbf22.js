import{_ as s,o as a,c as n,a as l}from"./app.ca57c996.js";const C=JSON.parse('{"title":"Python學習","description":"","frontmatter":{},"headers":[{"level":2,"title":"變數與基本運算","slug":"變數與基本運算","link":"#變數與基本運算","children":[]},{"level":2,"title":"資料類型與轉換","slug":"資料類型與轉換","link":"#資料類型與轉換","children":[]},{"level":2,"title":"條件判斷","slug":"條件判斷","link":"#條件判斷","children":[]},{"level":2,"title":"迴圈 loop","slug":"迴圈-loop","link":"#迴圈-loop","children":[{"level":3,"title":"搭配range()","slug":"搭配range","link":"#搭配range","children":[]},{"level":3,"title":"範例(9*9乘法表)","slug":"範例-9-9乘法表","link":"#範例-9-9乘法表","children":[]}]},{"level":2,"title":"串列 list","slug":"串列-list","link":"#串列-list","children":[{"level":3,"title":"建立串列","slug":"建立串列","link":"#建立串列","children":[]}]},{"level":2,"title":"函式的使用","slug":"函式的使用","link":"#函式的使用","children":[]},{"level":2,"title":"遞迴","slug":"遞迴","link":"#遞迴","children":[]},{"level":2,"title":"Dictionary字典","slug":"dictionary字典","link":"#dictionary字典","children":[]},{"level":2,"title":"排序","slug":"排序","link":"#排序","children":[]},{"level":2,"title":"除錯Debug","slug":"除錯debug","link":"#除錯debug","children":[]}],"relativePath":"backend_develop/python_class.md","lastUpdated":1687856986000}'),p={name:"backend_develop/python_class.md"},o=l(`<h1 id="python學習" tabindex="-1">Python學習 <a class="header-anchor" href="#python學習" aria-hidden="true">#</a></h1><h2 id="變數與基本運算" tabindex="-1">變數與基本運算 <a class="header-anchor" href="#變數與基本運算" aria-hidden="true">#</a></h2><h2 id="資料類型與轉換" tabindex="-1">資料類型與轉換 <a class="header-anchor" href="#資料類型與轉換" aria-hidden="true">#</a></h2><p>在<code>Python</code>中一切都是物件。 <code>class</code>是定義類別的開始</p><div class="language-py"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"></span></code></pre></div><blockquote><p>參考 : <a href="https://www.maxlist.xyz/2019/12/12/python-oop/" target="_blank" rel="noreferrer">物件導向-Class類的封裝/繼承/多型</a></p></blockquote><p><code>@property</code>這是為了讓class內的物件變成唯讀，禁止被修改內容。</p><div class="language-py"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Item</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># __init__記錄當下物件</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">__init__</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;font-style:italic;">self</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">        self</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">psd</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">123</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#FFCB6B;">property</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">psd_num</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;font-style:italic;">self</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">int</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">456</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">self</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">psd</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">pad_num</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setter</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">new_num</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;font-style:italic;">self</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">new_psd</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">        self</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">psd</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">999</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">new_psd</span></span>
<span class="line"></span></code></pre></div><blockquote><p>參考</p></blockquote><ul><li><a href="https://haosquare.com/python-property/" target="_blank" rel="noreferrer">Python Property 教學：保護變數資料的 Getter 與 Setter</a></li><li><a href="https://www.maxlist.xyz/2019/12/25/python-property/" target="_blank" rel="noreferrer">@property是什麼? 使用場景和用法介紹</a></li><li><a href="https://dev.to/codemee/zhe-shi-shi-mo-yao-shu-python-de-shu-xing-property-yun-zuo-yuan-li-3fna" target="_blank" rel="noreferrer">這是什麼妖術？Python 的屬性 (property) 運作原理</a></li></ul><p><code>下底線_</code>這比較困惑，通常遇到的有:<code>__init__</code>、<code>__str__</code>..等等，一般用在數字、常數上，只是想隔開成串的數據，好容易解讀。</p><div class="language-py"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;"> c</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">123_456_789</span></span>
<span class="line"></span></code></pre></div><p>用在迴圈或其他元素上，代替該元素較不用在意的值。</p><div class="language-py"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 迴圈</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> _ </span><span style="color:#89DDFF;font-style:italic;">in</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">range</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;"> _ </span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 解包</span></span>
<span class="line"><span style="color:#A6ACCD;">abc</span><span style="color:#89DDFF;">,*</span><span style="color:#A6ACCD;">_</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">xyz</span><span style="color:#89DDFF;">=(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">aaa</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">bbb</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">123</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">456</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">eee</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">abc</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># aaa</span></span>
<span class="line"><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">xyz</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#eee</span></span>
<span class="line"></span></code></pre></div><p>用在變數或函式前上，除了可以加強辨識，也告訴其他編輯者盡量不要使用到該函式。</p><div class="language-py"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">__init__</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;font-style:italic;">self</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">self</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">_title</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">get_me</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;font-style:italic;">self</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">pass</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">_dont</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;font-style:italic;">self</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    self</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">_name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">abcdefg</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">self</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">_name</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div><blockquote><p>參考</p></blockquote><ul><li><a href="https://haosquare.com/python-underscore/" target="_blank" rel="noreferrer">Python 寫程式的「底線」：7 種使用技巧</a></li></ul><h2 id="條件判斷" tabindex="-1">條件判斷 <a class="header-anchor" href="#條件判斷" aria-hidden="true">#</a></h2><div class="language-py"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">if</span></span>
<span class="line"></span></code></pre></div><h2 id="迴圈-loop" tabindex="-1">迴圈 loop <a class="header-anchor" href="#迴圈-loop" aria-hidden="true">#</a></h2><p>迴圈就是要解決<code>重複執行</code>的方法之一，語法使用 <code>for</code>+ <code>變數</code> +<code>in</code>+ <code>序列sequence(清單list)</code>。</p><div class="language-py"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 用法</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;font-style:italic;">in</span><span style="color:#A6ACCD;"> item</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 舉例</span></span>
<span class="line"><span style="color:#A6ACCD;">mylist</span><span style="color:#89DDFF;">=[</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;font-style:italic;">in</span><span style="color:#A6ACCD;"> mylist</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">i</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># 0</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># 1</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># 2</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 舉例:使用索引</span></span>
<span class="line"><span style="color:#A6ACCD;">namelist</span><span style="color:#89DDFF;">=[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Evan H.</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Ian H.</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Jean H.</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> x </span><span style="color:#89DDFF;font-style:italic;">in</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">range</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">len</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">namelist</span><span style="color:#89DDFF;">)):</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">namelist</span><span style="color:#89DDFF;">[</span><span style="color:#82AAFF;">x</span><span style="color:#89DDFF;">])</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># Evan H.</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># Ian H.</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># Jean H.</span></span>
<span class="line"></span></code></pre></div><h3 id="搭配range" tabindex="-1">搭配range() <a class="header-anchor" href="#搭配range" aria-hidden="true">#</a></h3><p>這裡指的是範圍，語法使用 <code>range( 起始值, 終止值, 遞增值 )</code>，許多與語法也都是這樣寫。</p><div class="language-py"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 舉例</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;font-style:italic;">in</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">range</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">i</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#A6ACCD;font-style:italic;">end</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># 0 1 2 3 4 5 6 7 8 9</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;font-style:italic;">in</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">range</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">20</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,-</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">i</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#A6ACCD;font-style:italic;">end</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># 20 18 16 14 12 10 8 6 4</span></span>
<span class="line"></span></code></pre></div><h3 id="範例-9-9乘法表" tabindex="-1">範例(9*9乘法表) <a class="header-anchor" href="#範例-9-9乘法表" aria-hidden="true">#</a></h3><p>兩個9的思考點，代表需要2個9的迴圈。</p><div class="language-py"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;"># &#39;\\t&#39;代表換行，end=&#39; &#39;表示結尾增加空白</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;font-style:italic;">in</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">range</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> j </span><span style="color:#89DDFF;font-style:italic;">in</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">range</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> j</span><span style="color:#89DDFF;">==</span><span style="color:#F78C6C;">9</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#82AAFF;">print </span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">\\t</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> i</span><span style="color:#89DDFF;">*</span><span style="color:#82AAFF;">j</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#82AAFF;">print </span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">\\t</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> i</span><span style="color:#89DDFF;">*</span><span style="color:#82AAFF;">j</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#A6ACCD;font-style:italic;">end</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div><h2 id="串列-list" tabindex="-1">串列 list <a class="header-anchor" href="#串列-list" aria-hidden="true">#</a></h2><p><code>串列(list)</code>不是<code>字串(string)</code>，與<code>js</code>中的<code>陣列(array)</code>相似。</p><div class="language-py"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">mylist</span><span style="color:#89DDFF;">=[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">abc</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">def</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hij</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">klm</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span></code></pre></div><h3 id="建立串列" tabindex="-1">建立串列 <a class="header-anchor" href="#建立串列" aria-hidden="true">#</a></h3><p>使用<code>list()</code>、<code>split()</code>建立串列。</p><div class="language-py"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">inlist</span><span style="color:#89DDFF;">=(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">abc</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">def</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hij</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">klm</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">list</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">inlist</span><span style="color:#89DDFF;">))</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># [&quot;abc&quot;,&quot;def&quot;,&quot;hij&quot;,&quot;klm&quot;]</span></span>
<span class="line"><span style="color:#A6ACCD;">date</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2023/06/27</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">date</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">split</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">))</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># [&#39;2023&#39;,&#39;06/27&#39;]</span></span>
<span class="line"></span></code></pre></div><blockquote><p>參考</p></blockquote><ul><li><a href="https://selflearningsuccess.com/python-list/" target="_blank" rel="noreferrer">Python串列(list) 基礎與23個常用操作</a></li><li><a href="https://steam.oxxostudio.tw/category/python/basic/list.html" target="_blank" rel="noreferrer">串列 list ( 基本 )</a></li><li><a href="https://medium.com/ccclub/ccclub-python-for-beginners-tutorial-c15425c12009" target="_blank" rel="noreferrer">Python 初學第五講 — 串列的基本用法</a></li></ul><h2 id="函式的使用" tabindex="-1">函式的使用 <a class="header-anchor" href="#函式的使用" aria-hidden="true">#</a></h2><h2 id="遞迴" tabindex="-1">遞迴 <a class="header-anchor" href="#遞迴" aria-hidden="true">#</a></h2><h2 id="dictionary字典" tabindex="-1">Dictionary字典 <a class="header-anchor" href="#dictionary字典" aria-hidden="true">#</a></h2><h2 id="排序" tabindex="-1">排序 <a class="header-anchor" href="#排序" aria-hidden="true">#</a></h2><h2 id="除錯debug" tabindex="-1">除錯Debug <a class="header-anchor" href="#除錯debug" aria-hidden="true">#</a></h2>`,42),e=[o];function t(c,r,y,F,i,D){return a(),n("div",null,e)}const d=s(p,[["render",t]]);export{C as __pageData,d as default};
