import{_ as s}from"./chunks/class_form_list.2534d0ab.js";import{_ as a,o as l,c as n,a as p}from"./app.ee1d1b16.js";const o="/assets/class_form_update.908c86c8.png",e="/assets/class_0804_update_html.e0eb5795.png",t="/assets/class_0804_views_studupdate.36d10694.png",c="/assets/class_0804_views_studupdate_1.476e140b.png",r="/assets/class_0804_views_studupdate_2.90d72faa.png",D="/assets/class_0804_views_studupdate_3.b9e1aea5.png",F="/assets/class_0804_views_studupdate_4.9dc77a55.png",d="/assets/class_form_delete.7af0fcc0.png",y="/assets/class_0804_views_studDelete.8d17a9c4.png",i="/assets/class_0804_views_studList.6afb622d.png",k=JSON.parse('{"title":"中興大學 Python Django網頁App開發基礎班第01期 IIi","description":"","frontmatter":{},"headers":[{"level":2,"title":"08/04 實作與前置規畫 II","slug":"_08-04-實作與前置規畫-ii","link":"#_08-04-實作與前置規畫-ii","children":[]},{"level":2,"title":"Update 實作","slug":"update-實作","link":"#update-實作","children":[]},{"level":2,"title":"Delete 實作:","slug":"delete-實作","link":"#delete-實作","children":[]}],"relativePath":"backend_develop/django/note_django_class_2.md","lastUpdated":1691745523000}'),u={name:"backend_develop/django/note_django_class_2.md"},C=p('<h1 id="中興大學-python-django網頁app開發基礎班第01期-iii" tabindex="-1">中興大學 Python Django網頁App開發基礎班第01期 IIi <a class="header-anchor" href="#中興大學-python-django網頁app開發基礎班第01期-iii" aria-hidden="true">#</a></h1><p>2023/08/04-2023/08/30</p><h2 id="_08-04-實作與前置規畫-ii" tabindex="-1">08/04 實作與前置規畫 II <a class="header-anchor" href="#_08-04-實作與前置規畫-ii" aria-hidden="true">#</a></h2><p>目前已<code>update</code>、<code>delete</code>製作畫面，先前規劃流程:</p><ol><li>選擇資料(Query)</li><li>畫面渲染(View)</li><li>資料確認</li><li>儲存</li><li>回到原畫面</li></ol><h2 id="update-實作" tabindex="-1">Update 實作 <a class="header-anchor" href="#update-實作" aria-hidden="true">#</a></h2><p><img src="'+o+`" alt="update_view"></p><p>這裡一開始須將後端內容放到前端，所以標籤上的顯示需設置有效畫面。</p><ol><li>善用Jinja語法:</li></ol><p>將變數有效範圍<code>{% with resultSet.0 as record %} {% endwith %}</code>放在表格外圈，來讓表格內的標籤都可以善用有效變數，可想像與 vue.js 的loop觀念一樣。</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">   {% with resultSet.0 as record %}</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">form</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">input-group mb-3 mt-3</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">label</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">學號</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">label</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">text</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">studid</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">value</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">{{record.studid}}</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">form</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">   {% endwith %}</span></span>
<span class="line"></span></code></pre></div><p>標籤為<code>&lt;input type=&#39;radio&#39;&gt;</code>、<code>&lt;input type=&#39;checkbox&#39;&gt;</code>通常會再加上 <code>{% if record.gedner == &quot;F&quot; %} checked {%endif%}</code>的判斷屬性。</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">radio</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">{%</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">if</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">record.gedner</span><span style="color:#89DDFF;"> == </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">F</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">%}</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">checked</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">{%endif%}</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">checkbox</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">{%</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">if</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">record.langchi.1</span><span style="color:#89DDFF;"> == </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Y</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">%}checked{%</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">endif</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">%}</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>標籤為<code>&lt;input type=&#39;date&#39;&gt;</code>因為卡在html的日期呈現會有狀況，通常會需要在屬性<code>value</code>上設定格式(date: &#39;Y-m-d&#39;)。</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">date</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">value</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">{{record.bday|date:&#39;Y-m-d&#39;}}</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p><code>&lt;select&gt;</code>需再<code>&lt;option&gt;</code>標籤加入判斷屬性。</p><p><img src="`+e+`" alt="0804_html"></p><div class="tip custom-block"><p class="custom-block-title">提醒</p><p>在<code>html</code>的標籤中函數中加入判斷，記得 <code>==</code>等於的前後都要加上空格，否則系統會判斷錯誤。</p><ul><li>正確 <code>{% if record.studkd == &#39;00001&#39; %}selected {% endif %}</code></li><li>錯誤 <code>{% if record.studkd==&#39;00001&#39; %}selected {% endif %}</code></li></ul></div><p>在<code>urls.py</code>建立</p><div class="language-py"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">   urlpatterns</span><span style="color:#89DDFF;">=[</span></span>
<span class="line"><span style="color:#A6ACCD;">      ...</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#82AAFF;">path</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">stud/upd/</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> views</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">studUpdate</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#A6ACCD;font-style:italic;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">s_update</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span></code></pre></div><p>在<code>views.py</code>建立函式，一樣採用<code>util.py</code>的<code>DataSet()</code>，與<code>Insert</code>內容差異不大。</p><p><img src="`+t+'" alt="studupdate"></p><p>這裡一樣採用<code>sql</code>語法取用<code>studinfos資料表</code>內的<code>rowid</code>欄位，然後在路由上以<code>q</code>作為開頭。例如 : <code>locahost:8000/stud/upd/?q=4</code>，代表取用rowid的第4筆。</p><p><img src="'+c+'" alt="studupdate"></p><p>接續判斷前端送來的是否為<code>GET</code>方法。</p><p><img src="'+r+'" alt="studupdate"></p><p>將sql資料與前端欄位互相對應使用 <code>UPDATE 資料表 SET 欄位=%S</code> 依據 <code>WHERE rowid=%S</code><img src="'+D+'" alt="studupdate"></p><p>這裡不管是否回饋正常，全都返回清單畫面。</p><p><img src="'+F+'" alt="studupdate"></p><h2 id="delete-實作" tabindex="-1">Delete 實作: <a class="header-anchor" href="#delete-實作" aria-hidden="true">#</a></h2><p><img src="'+d+`" alt="del_view"></p><p>同樣仿照update方式，差別在於刪除畫面不能修改，所以必須將標籤加入禁止刪改的屬性。</p><ol><li>在可輸入的標籤(如: <code>text</code>、<code>textarea</code>)上增加 <code>readonly</code>屬性。</li><li>點選的標籤<code>&lt;input type=&quot;radio&quot;&gt;</code>禁止點選的方法有2種: <ol><li>直接加入<code>disabled</code>屬性。</li><li>將<code>onclick</code>點選的函式，改為<code>return false</code></li></ol></li></ol><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">radio</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">disabled</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">form-check  float-start</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">radio</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">onclick</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#C3E88D;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><ol start="3"><li><code>&lt;input type=&#39;checkbox&#39;&gt;</code>禁止的方法與<code>radio</code>的第2種相同(return false)。</li><li><code>&lt;select&gt;</code>禁止的方法比較特殊，因為接收後端資料後，仍然可以選擇，做法會改成<code>&lt;input type=&#39;text&#39; readonly&gt;</code>標籤。 在<code>urls.py</code>建立</li></ol><div class="language-py"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">   urlpatterns</span><span style="color:#89DDFF;">=[</span></span>
<span class="line"><span style="color:#A6ACCD;">      ...</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#82AAFF;">path</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">stud/del/</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> views</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">studDelete</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#A6ACCD;font-style:italic;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">s_delete</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span></code></pre></div><p>在<code>views.py</code>建立。</p><p><img src="`+y+'" alt="0804_studdelete"></p><p>因應選單會在<code>views.py</code>中，建立字典檔。</p><p><code>SQL</code>的選擇器query與<code>Update</code>一樣。</p><p>然後將剛剛<code>&lt;select&gt;</code>改成<code>&lt;input type=&#39;text&#39;&gt;</code>建立的‵kd_dict`字典檔放上。</p><p>如上前幾次一樣判斷優先順序。</p><p><code>DELETE</code>寫入的依據也是<code>rowid</code>。</p><ol start="3"><li>List 清單畫面實作:</li></ol><p>當<code>Insert、Update、Delete</code>的各個獨立畫面建構完成後，隨即建立清單畫面，這裡的<code>template</code>是重製。</p><p><img src="'+s+`" alt="List_view"></p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- sutdList.html --&gt;</span></span>
<span class="line"></span></code></pre></div><div class="language-py"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;"># urls.py</span></span>
<span class="line"><span style="color:#A6ACCD;">   urlpatterns</span><span style="color:#89DDFF;">=[</span></span>
<span class="line"><span style="color:#A6ACCD;">         ...</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#82AAFF;">path</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">stud/lst/</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> views</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">studList</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#A6ACCD;font-style:italic;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">s_list</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span></code></pre></div><p><img src="`+i+'" alt="0804_stduList"></p>',49),A=[C];function _(g,h,m,E,v,q){return l(),n("div",null,A)}const w=a(u,[["render",_]]);export{k as __pageData,w as default};
