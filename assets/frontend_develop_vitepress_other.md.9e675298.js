import{_ as s,o as a,c as e,a as n}from"./app.ee1d1b16.js";const l="/assets/error_build_dev_makedown_view.96cb4b10.png",o="/assets/vitepress_add_seo_meta.fbdab963.png",p="/assets/vitepress_index_page_error_view.0e967bf8.png",t="/assets/error_build_package_view.556343ea.png",c="/assets/error_build_dev_view.99335557.png",_=JSON.parse('{"title":"進階使用","description":"","frontmatter":{},"headers":[{"level":2,"title":"擴充功能 (Google Analytics)","slug":"擴充功能-google-analytics","link":"#擴充功能-google-analytics","children":[]},{"level":2,"title":"自定義元件","slug":"自定義元件","link":"#自定義元件","children":[]},{"level":2,"title":"自定義主題模板(全域性)","slug":"自定義主題模板-全域性","link":"#自定義主題模板-全域性","children":[]},{"level":2,"title":"增加<meta>標籤提供 SEO 搜尋","slug":"增加-meta-標籤提供-seo-搜尋","link":"#增加-meta-標籤提供-seo-搜尋","children":[]},{"level":2,"title":"封裝後Previews跑版問題:","slug":"封裝後previews跑版問題","link":"#封裝後previews跑版問題","children":[]}],"relativePath":"frontend_develop/vitepress/other.md","lastUpdated":1691745523000}'),r={name:"frontend_develop/vitepress/other.md"},i=n('<h1 id="進階使用" tabindex="-1">進階使用 <a class="header-anchor" href="#進階使用" aria-hidden="true">#</a></h1><h2 id="擴充功能-google-analytics" tabindex="-1">擴充功能 (Google Analytics) <a class="header-anchor" href="#擴充功能-google-analytics" aria-hidden="true">#</a></h2><p>如何在VitePress內加入google analytics</p><p>步驟 1. 建立<code>gtag.js</code>的google analytics檔 <img src="'+l+`" alt="makedown_error"></p><p>步驟 2. 在<code>heade</code>內，加入<code>script src</code></p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">themeConfig</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">        [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">script</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">src</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">https://googletagmanager.com/...</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">script</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{},</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">gtag call here</span><span style="color:#89DDFF;">\`</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>我自己還沒嘗試過</p><p>參考出處:</p><ul><li><a href="https://github.com/vuejs/vitepress/issues/1131" target="_blank" rel="noreferrer">add a doc to teach how to let vitepress work with google analytics</a></li></ul><h2 id="自定義元件" tabindex="-1">自定義元件 <a class="header-anchor" href="#自定義元件" aria-hidden="true">#</a></h2><p>在.md內製造出類似vue的components效果。</p><p>首先插入<code>&lt;script setup/&gt;</code>標籤，然後<code>import</code>自製的<code>.vue</code>檔案，然後在指定處放入自定義標籤即可。</p><div class="language-md"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">// *.md</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script setup&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  import test from &#39;./test.vue&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">&lt;test /&gt;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h2 id="自定義主題模板-全域性" tabindex="-1">自定義主題模板(全域性) <a class="header-anchor" href="#自定義主題模板-全域性" aria-hidden="true">#</a></h2><p>自定義主題模板需在<code>/docs/.vitepress</code>內新增 <code>/theme</code> 資料夾，再將設定檔 <code>index.js</code>及樣板<code>xxx.vue</code>、<code>xxx.css</code>放入。</p><p>以下是<code>theme/index.js</code>官方指定設置內容 :</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">// index.js</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> Layout </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vitepress/theme</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  Layout</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">NotFound</span><span style="color:#89DDFF;">:()</span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">custom 404</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">enhanceApp</span><span style="color:#89DDFF;">({</span><span style="color:#A6ACCD;font-style:italic;">app</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">router</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">siteData</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">}</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">     </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">setup</span><span style="color:#89DDFF;">(){}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>主要區分為4大項 :</p><ul><li><code>Layout</code> 這裡是放置匯入的模板元件，也是自定義元件。</li><li><code>NotFound</code> 如果找不到相對<code>路徑</code>時會轉址的頁面。</li><li><code>enhanceApp</code> 在vue當中客製的app、路由、data資料等，可以在此設置。</li><li><code>setup</code> 可執行的函式、或掛入外部資料。</li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>基本上當建立theme資料夾時，vitepress就會取消原本的所有頁面，注意如果還沒建立好，所有頁面會變空白，建議先規劃好。</p></div><h2 id="增加-meta-標籤提供-seo-搜尋" tabindex="-1">增加<code>&lt;meta&gt;</code>標籤提供 SEO 搜尋 <a class="header-anchor" href="#增加-meta-標籤提供-seo-搜尋" aria-hidden="true">#</a></h2><p>官網中並沒有特別闡述關於 <code>SEO</code> 使用，而<meta>標籤有只有短短敘述在 <code>config.js</code>內的<code>description</code>中，當遇到需要多個<meta>標籤時，可使用以作法。 <img src="`+o+'" alt="add_seo_meta"></p><h2 id="封裝後previews跑版問題" tabindex="-1">封裝後Previews跑版問題: <a class="header-anchor" href="#封裝後previews跑版問題" aria-hidden="true">#</a></h2><p>有幾個畫面在 Develop 時會看不到，直到一切完美的Build封裝後，才看到畫面有異常。 <em>首頁跑版</em><img src="'+p+'" alt="index_error"></p><p><em>內文跑版:</em> 內文呈現跑版狀況，導致右側邊選單無法點選。 目前還在尋找解決方式 <img src="'+t+'" alt="package_error"></p><p>解決方法: Develop畫面中只在makedown中發現有出現左右卷軸，在Build時會判斷錯誤導致跑版，曾遇過容許1個卷軸的狀況。</p><p><img src="'+c+'" alt="package_error"> 所以建議在Delvelop畫面時，只要有看到左右卷軸，建議該區域改成圖片<code>![error_image](/assets/image)</code>，在Build一次就可以看到問題解決。</p>',27),d=[i];function D(y,F,C,A,h,g){return a(),e("div",null,d)}const u=s(r,[["render",D]]);export{_ as __pageData,u as default};
