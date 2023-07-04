import{_ as s,o as a,c as n,a as l}from"./app.ca57c996.js";const e="/assets/blender_light_set.eee54bed.png",o="/assets/blender_light.3bf4aa2d.png",h=JSON.parse('{"title":"Three.js","description":"","frontmatter":{},"headers":[{"level":2,"title":"基本安裝 :","slug":"基本安裝","link":"#基本安裝","children":[]},{"level":2,"title":"引入 Three 套件 :","slug":"引入-three-套件","link":"#引入-three-套件","children":[]},{"level":2,"title":"場景 Scene 建立","slug":"場景-scene-建立","link":"#場景-scene-建立","children":[]},{"level":2,"title":"設定渲染 Renderer + 畫面範圍設定","slug":"設定渲染-renderer-畫面範圍設定","link":"#設定渲染-renderer-畫面範圍設定","children":[]},{"level":2,"title":"建立攝影機(相機) Camera","slug":"建立攝影機-相機-camera","link":"#建立攝影機-相機-camera","children":[]},{"level":2,"title":"建立物體","slug":"建立物體","link":"#建立物體","children":[]},{"level":2,"title":"建立燈光","slug":"建立燈光","link":"#建立燈光","children":[]},{"level":2,"title":"循環檢視(渲染)","slug":"循環檢視-渲染","link":"#循環檢視-渲染","children":[]},{"level":2,"title":"互動設計","slug":"互動設計","link":"#互動設計","children":[{"level":3,"title":"參考","slug":"參考","link":"#參考","children":[]}]}],"relativePath":"frontend_develop/cssAnimate/three.md","lastUpdated":1687135587000}'),p={name:"frontend_develop/cssAnimate/three.md"},t=l(`<h1 id="three-js" tabindex="-1">Three.js <a class="header-anchor" href="#three-js" aria-hidden="true">#</a></h1><p>使用 Three.js 在網頁上建立3D場景有幾個注意的步驟:</p><ol><li>引入<code>three</code>套件</li><li>建立場景 <code>Scene</code></li><li>建立渲染 <code>Renderer</code></li><li>設定畫布尺寸 <code>innerWidth、innerHeight</code></li><li>建立攝影機 <code>Camera</code></li><li>建立/載入物體 <code>Mesh</code> / <code>loop</code></li><li>建立燈光 <code>Light</code></li><li>循環渲染</li></ol><h2 id="基本安裝" tabindex="-1">基本安裝 : <a class="header-anchor" href="#基本安裝" aria-hidden="true">#</a></h2><p>這裡使用的是 Vite ( Vue ) 環境。</p><div class="language-cmd"><button title="Copy Code" class="copy"></button><span class="lang">cmd</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">npm install </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">save</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">dev vite</span></span>
<span class="line"></span></code></pre></div><h2 id="引入-three-套件" tabindex="-1">引入 Three 套件 : <a class="header-anchor" href="#引入-three-套件" aria-hidden="true">#</a></h2><p>基本上這裡視所要渲染或建立的內容來引入，固定匯入有 <code>Scene</code>、<code>Camera</code>、<code>WebGLRenderer</code>。</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">		&lt;</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#FFCB6B;">body</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">				</span><span style="color:#B2CCD6;">overflow</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> hidden</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">				</span><span style="color:#B2CCD6;">margin</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Scene</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">PerspectiveCamera</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">WebGLRenderer</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Mesh</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">BoxGeometry</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">MeshBasicMaterial</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">AmbientLight</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">three</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre></div><h2 id="場景-scene-建立" tabindex="-1">場景 Scene 建立 <a class="header-anchor" href="#場景-scene-建立" aria-hidden="true">#</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> scene</span><span style="color:#89DDFF;">=new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Scene</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span></code></pre></div><h2 id="設定渲染-renderer-畫面範圍設定" tabindex="-1">設定渲染 Renderer + 畫面範圍設定 <a class="header-anchor" href="#設定渲染-renderer-畫面範圍設定" aria-hidden="true">#</a></h2><p>這裡將畫面範圍設定與 window 相同</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> render</span><span style="color:#89DDFF;">=new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">WebGLRenderer</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">render</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setSize</span><span style="color:#A6ACCD;">( window</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">innerWidth</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> window</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">innerHeight )</span></span>
<span class="line"><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">body</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">appendChild</span><span style="color:#A6ACCD;">( render</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">domElement )</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="建立攝影機-相機-camera" tabindex="-1">建立攝影機(相機) Camera <a class="header-anchor" href="#建立攝影機-相機-camera" aria-hidden="true">#</a></h2><p>一般攝影鏡頭(相機)有分許多種，大多使用<code>PerspectiveCamera</code>透視法，與現實中的35mm鏡頭焦距一樣。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> camera </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">PerspectiveCamera</span><span style="color:#A6ACCD;">( </span><span style="color:#F78C6C;">75</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> window</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">innerWidth </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;"> window</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">innerHeight</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1000</span><span style="color:#A6ACCD;"> )</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// PerspectiveCamera ( fov視角範圍 / aspect畫面長寬比例 / near最短距離 / far最遠距離)</span></span>
<span class="line"></span></code></pre></div><h2 id="建立物體" tabindex="-1">建立物體 <a class="header-anchor" href="#建立物體" aria-hidden="true">#</a></h2><p>引入或建立model時需要注意幾個要點:</p><ol><li>顏色 <code>color</code></li><li>表面材質 <code>material</code></li><li>實體或線條表現 <code>mesh</code></li><li>放置的位置 <code>position</code>，這裡應該說是與鏡頭的距離</li><li>尺寸大小 ( 長, 寬, 高 )</li><li>放到場景內 <code>scene.add()</code></li></ol><p>物體本身在Three中有需多方式建立，包含點、線、面、基本幾何圖形(方體、柱體、球體...等等)，在實際網頁中當然是以自己建立的model為主，初步學習則可運用內建物體來練習。</p><p>再來是表面材質表現的 <code>MeshBasicMaterial</code>、<code>MeshStandardMaterial</code>，這兩個材質渲染會針對光線的反應有所不同。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 尺寸</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> geometry</span><span style="color:#89DDFF;">=new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">BoxGeometry</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 顏色與材質</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> material</span><span style="color:#89DDFF;">=new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">MeshStandardMaterial</span><span style="color:#A6ACCD;">( </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0x00ff00</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> )</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 實體或線條</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> cube</span><span style="color:#89DDFF;">=new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Mesh</span><span style="color:#A6ACCD;">(geometry</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> material)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 建立物體</span></span>
<span class="line"><span style="color:#A6ACCD;">scene</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">add</span><span style="color:#A6ACCD;">(cube)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 放置的位置</span></span>
<span class="line"><span style="color:#A6ACCD;">cube</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">position</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 物體的方向</span></span>
<span class="line"><span style="color:#A6ACCD;">cube</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">rotation</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">x </span><span style="color:#89DDFF;">+=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.01</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>這邊是載入3D Model (.gltf/.glb) 的外掛 Addons</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">GLTFLoader</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">three/addons/loaders/GLTFLoader.js</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> loader </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">GLTFLoader</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">loader</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">load</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">path/your_3d_model.gltf</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">gltf</span><span style="color:#89DDFF;">)</span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">				</span><span style="color:#A6ACCD;">mixer</span><span style="color:#89DDFF;">=new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">AnimationMixer</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">gltf</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">scene</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">				</span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">animationAction</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">mixer</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">clipAction</span><span style="color:#F07178;">((</span><span style="color:#A6ACCD;">gltf</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">any</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">animations</span><span style="color:#F07178;">[</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">])</span></span>
<span class="line"><span style="color:#F07178;">        		</span><span style="color:#A6ACCD;">animationActions</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">animationAction</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">        		</span><span style="color:#A6ACCD;">animationsFolder</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">add</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">animations</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">default</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">       			 </span><span style="color:#A6ACCD;">activeAction</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">animationActions</span><span style="color:#F07178;">[</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">]</span></span>
<span class="line"><span style="color:#F07178;">				</span><span style="color:#A6ACCD;">scene</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">add</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">gltf</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">scene</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">				</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><h2 id="建立燈光" tabindex="-1">建立燈光 <a class="header-anchor" href="#建立燈光" aria-hidden="true">#</a></h2><p><img src="`+e+'" alt="light_set"><img src="'+o+`" alt="blender_light"></p><blockquote><p>( 圖片是 Blender所設定的4種燈光 )</p></blockquote><p>Three 燈光種類很多，依據3D場景設計的角度來看，常用的有 : <code>AmbientLight環境光</code>、<code>DirectionalLight定向光(平行光)</code>、<code>PointLight單點光</code>、<code>spotLight聚光燈</code>。</p><p>基本設定有 : <code>color顏色</code>、<code>intensity強度</code>、<code>distance光照範圍</code>、<code>decay光線衰退變量</code>、<code>position位置</code>。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> light</span><span style="color:#89DDFF;">=new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">PointLight</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0x404040</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">light</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">position</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">scene</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">add</span><span style="color:#A6ACCD;">(light)</span></span>
<span class="line"></span></code></pre></div><p>當然有光就有影子，Three也有幾個影子的設定項目，不過除非是要在網頁上建立真實的互動場景，否則通常都使用預設，不會刻意設定影子。&lt;<a href="https://threejs.org/docs/?q=light#api/en/lights/shadows/LightShadow" target="_blank" rel="noreferrer">LightShadow影子設定</a>&gt;</p><h2 id="循環檢視-渲染" tabindex="-1">循環檢視(渲染) <a class="header-anchor" href="#循環檢視-渲染" aria-hidden="true">#</a></h2><p>一般3D模型中不可能只渲染一個面，在 <code>Three.js</code> 中使用所謂的 <code>animate 動畫</code> 方式，其實是告訴程式持續渲染，這樣才能看到物體的各面向外觀。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">animate</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#82AAFF;">requestAnimationFrame</span><span style="color:#F07178;">( </span><span style="color:#A6ACCD;">animate</span><span style="color:#F07178;"> )</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#A6ACCD;">cube</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">rotation</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">x</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0.01</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#A6ACCD;">cube</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">rotation</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">y</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0.01</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#A6ACCD;">renderer</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">render</span><span style="color:#F07178;">( </span><span style="color:#A6ACCD;">scene</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">camera</span><span style="color:#F07178;"> )</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#82AAFF;">animate</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="互動設計" tabindex="-1">互動設計 <a class="header-anchor" href="#互動設計" aria-hidden="true">#</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">OrbitControls</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">three/addons/controls/OrbitControls.js</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> controls </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">OrbitControls</span><span style="color:#A6ACCD;">( camera</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> renderer</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">domElement )</span></span>
<span class="line"></span></code></pre></div><hr><h3 id="參考" tabindex="-1">參考 <a class="header-anchor" href="#參考" aria-hidden="true">#</a></h3><ul><li><a href="https://threejs.org/docs/#manual/en/introduction/Installation" target="_blank" rel="noreferrer">three.js install</a></li><li><a href="https://medium.com/nicasource/building-an-interactive-web-portfolio-with-vue-three-js-part-three-implementing-three-js-452cb375ef80" target="_blank" rel="noreferrer">Building an interactive web portfolio with Vue + Three.js — Part Three: Implementing Three.js</a></li><li><a href="https://juejin.cn/post/7137192060045492231" target="_blank" rel="noreferrer">Vue+Three.js可视化实战</a></li><li><a href="https://zhuanlan.zhihu.com/p/560349448" target="_blank" rel="noreferrer">vue3 +ts +three.js+ vite 快速入门</a></li><li><a href="https://ithelp.ithome.com.tw/users/20136559/ironman/5676" target="_blank" rel="noreferrer">Three.js 學習日誌</a></li><li><a href="https://sbcode.net/threejs/" target="_blank" rel="noreferrer">Three.js Tutorials</a></li></ul>`,41),c=[t];function r(y,i,D,F,C,A){return a(),n("div",null,c)}const g=s(p,[["render",r]]);export{h as __pageData,g as default};
