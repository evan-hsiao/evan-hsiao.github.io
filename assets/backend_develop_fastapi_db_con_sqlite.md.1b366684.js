import{_ as s,o as a,c as l,a as n}from"./app.ca57c996.js";const p="/assets/database_sqlite.85d277fe.png",d=JSON.parse('{"title":"與資料庫對話(SQLite)篇","description":"","frontmatter":{},"headers":[{"level":2,"title":"環境安裝","slug":"環境安裝","link":"#環境安裝","children":[]},{"level":2,"title":"與資料庫連線 ( database.py )","slug":"與資料庫連線-database-py","link":"#與資料庫連線-database-py","children":[]},{"level":2,"title":"建立資料表 ( models.py )","slug":"建立資料表-models-py","link":"#建立資料表-models-py","children":[]},{"level":2,"title":"執行後的結果","slug":"執行後的結果","link":"#執行後的結果","children":[{"level":3,"title":"參考","slug":"參考","link":"#參考","children":[]}]}],"relativePath":"backend_develop/fastapi/db_con_sqlite.md","lastUpdated":1683292222000}'),o={name:"backend_develop/fastapi/db_con_sqlite.md"},e=n(`<h1 id="與資料庫對話-sqlite-篇" tabindex="-1">與資料庫對話(SQLite)篇 <a class="header-anchor" href="#與資料庫對話-sqlite-篇" aria-hidden="true">#</a></h1><p>想和資料表或與資料庫對話最基本要有2個步驟:</p><ul><li>第1個是建立sqlachemy模組讓它與<a href="#%E8%88%87%E8%B3%87%E6%96%99%E5%BA%AB%E9%80%A3%E7%B7%9A-database-py">資料庫連線</a>。</li><li>第2個則是<a href="#%E5%BB%BA%E7%AB%8B%E8%B3%87%E6%96%99%E8%A1%A8-models-py">建立資料表</a>，看是要寫入，還是讀取原本資料庫內的資料表。</li></ul><h2 id="環境安裝" tabindex="-1">環境安裝 <a class="header-anchor" href="#環境安裝" aria-hidden="true">#</a></h2><ul><li>Sqlalchemy</li></ul><div class="language-cmd"><button title="Copy Code" class="copy"></button><span class="lang">cmd</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">pip install sqlalchemy</span></span>
<span class="line"></span></code></pre></div><h2 id="與資料庫連線-database-py" tabindex="-1">與資料庫連線 ( <a href="http://database.py" target="_blank" rel="noreferrer">database.py</a> ) <a class="header-anchor" href="#與資料庫連線-database-py" aria-hidden="true">#</a></h2><p>引入sqlalchemy模組</p><div class="language-py"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> sqlalchemy </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> create_engine</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> sqlalchemy</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ext</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">declarative </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> declarative_base</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> sqlalchemy</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">orm </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> sessionmaker</span></span>
<span class="line"></span></code></pre></div><p>設定資料庫模組，官方使用Sqlite資料庫，連結無誤後會在本機端產生<code>sql_app.db</code>的sqlite資料庫檔案，可使用官方指定的 <a href="https://sqlitebrowser.org/" target="_blank" rel="noreferrer">DB Browser for SQLite</a> 瀏覽器來觀看內容。</p><div class="language-py"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">DATABASE_URL </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">sqlite:///./sql_app.db</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">engine </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">create_engine</span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#82AAFF;">    DATABASE_URL</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#A6ACCD;font-style:italic;">connect_args</span><span style="color:#89DDFF;">={</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">check_same_thread</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">False}</span></span>
<span class="line"><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><code>connect_args={&quot;check_same_thread&quot;: False}</code>這行僅適用在sqlite。</p><p>通常sqlite、postgresql不需要額外再安裝其他連接模組。</p><p>DATABASE_URL = &quot;postgresql://user:password@postgresserver/db&quot;</p></div><p>使用Sqlalchemy與資料庫對話(orm)</p><div class="language-py"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">SessionLocal </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">sessionmaker</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">autocommit</span><span style="color:#89DDFF;">=False,</span><span style="color:#82AAFF;"> </span><span style="color:#A6ACCD;font-style:italic;">autoflush</span><span style="color:#89DDFF;">=False,</span><span style="color:#82AAFF;"> </span><span style="color:#A6ACCD;font-style:italic;">bind</span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;">engine</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div><p>提供其他模組使用</p><div class="language-py"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">Base </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">declarative_base</span><span style="color:#89DDFF;">()</span></span>
<span class="line"></span></code></pre></div><p>完整碼:</p><div class="language-py"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> sqlalchemy </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> create_engine</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> sqlalchemy</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ext</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">declarative </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> declarative_base</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> sqlalchemy</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">orm </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> sessionmaker</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">DATABASE_URL </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">sqlite:///./sql_app.db</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">engine </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">create_engine</span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#82AAFF;">    DATABASE_URL</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#A6ACCD;font-style:italic;">connect_args</span><span style="color:#89DDFF;">={</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">check_same_thread</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">False}</span></span>
<span class="line"><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">SessionLocal </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">sessionmaker</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">autocommit</span><span style="color:#89DDFF;">=False,</span><span style="color:#82AAFF;"> </span><span style="color:#A6ACCD;font-style:italic;">autoflush</span><span style="color:#89DDFF;">=False,</span><span style="color:#82AAFF;"> </span><span style="color:#A6ACCD;font-style:italic;">bind</span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;">engine</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">Base </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">declarative_base</span><span style="color:#89DDFF;">()</span></span>
<span class="line"></span></code></pre></div><h2 id="建立資料表-models-py" tabindex="-1">建立資料表 ( <a href="http://models.py" target="_blank" rel="noreferrer">models.py</a> ) <a class="header-anchor" href="#建立資料表-models-py" aria-hidden="true">#</a></h2><p>引入sqlalchemy模組，針對資料表的欄位與類型</p><div class="language-py"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> sqlalchemy </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> Boolean</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> Column</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> ForeignKey</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> Integer</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> String</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> sqlalchemy</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">orm </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> relationship</span></span>
<span class="line"></span></code></pre></div><p>引入資料庫連線模組 <code>database.py</code>內的 <code>Base</code></p><div class="language-py"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> database </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> Base</span></span>
<span class="line"></span></code></pre></div><p>接下來則是建立表單類別</p><div class="language-py"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki material-theme-palenight has-highlighted-lines" tabindex="0"><code><span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">User</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">Base</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    __tablename__ </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">users</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">id</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Column</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">Integer</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#A6ACCD;font-style:italic;">primary_key</span><span style="color:#89DDFF;">=True,</span><span style="color:#82AAFF;"> </span><span style="color:#A6ACCD;font-style:italic;">index</span><span style="color:#89DDFF;">=True)</span></span>
<span class="line"><span style="color:#A6ACCD;">    email </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Column</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">String</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#A6ACCD;font-style:italic;">unique</span><span style="color:#89DDFF;">=True,</span><span style="color:#82AAFF;"> </span><span style="color:#A6ACCD;font-style:italic;">index</span><span style="color:#89DDFF;">=True)</span></span>
<span class="line"><span style="color:#A6ACCD;">    hashed_password </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Column</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">String</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    is_active </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Column</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">Boolean</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#A6ACCD;font-style:italic;">default</span><span style="color:#89DDFF;">=True)</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#A6ACCD;">    items </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">relationship</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Item</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#A6ACCD;font-style:italic;">back_populates</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">owner</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Item</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">Base</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    __tablename__ </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">items</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">id</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Column</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">Integer</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#A6ACCD;font-style:italic;">primary_key</span><span style="color:#89DDFF;">=True,</span><span style="color:#82AAFF;"> </span><span style="color:#A6ACCD;font-style:italic;">index</span><span style="color:#89DDFF;">=True)</span></span>
<span class="line"><span style="color:#A6ACCD;">    title </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Column</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">String</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#A6ACCD;font-style:italic;">index</span><span style="color:#89DDFF;">=True)</span></span>
<span class="line"><span style="color:#A6ACCD;">    description </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Column</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">String</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#A6ACCD;font-style:italic;">index</span><span style="color:#89DDFF;">=True)</span></span>
<span class="line"><span style="color:#A6ACCD;">    owner_id </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Column</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">Integer</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> ForeignKey</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">users.id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">))</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#A6ACCD;">    owner </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">relationship</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">User</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#A6ACCD;font-style:italic;">back_populates</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">items</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>User 與 Item 兩張表單各有一個互像依賴的欄位 ( items、owner )，留意是使用 relationship 來宣告。</p></div><h2 id="執行後的結果" tabindex="-1">執行後的結果 <a class="header-anchor" href="#執行後的結果" aria-hidden="true">#</a></h2><p>如果依據上述2個步驟建立，就可以呈現出以下的畫面。</p><p><img src="`+p+'" alt="create sqlite db"></p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>畫面是由 DB Browser for SQLite 所呈現。</p></div><hr><h3 id="參考" tabindex="-1">參考 <a class="header-anchor" href="#參考" aria-hidden="true">#</a></h3><ul><li><a href="https://fastapi.tiangolo.com/tutorial/sql-databases/" target="_blank" rel="noreferrer">FastAPI SQL (Relational) Databases 官方</a></li><li><a href="https://www.sqlalchemy.org/" target="_blank" rel="noreferrer">SQLAlchemy 官方</a></li></ul>',33),t=[e];function c(r,y,F,D,i,A){return a(),l("div",null,t)}const h=s(o,[["render",c]]);export{d as __pageData,h as default};
