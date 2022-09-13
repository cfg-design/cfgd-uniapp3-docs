import{_ as s,c as t,o as l,a}from"./app.c960f333.js";const g=JSON.parse('{"title":"BottomBar \u5E95\u90E8\u680F","description":"","frontmatter":{"title":"BottomBar \u5E95\u90E8\u680F"},"headers":[{"level":3,"title":"\u57FA\u672C\u4F7F\u7528","slug":"\u57FA\u672C\u4F7F\u7528","link":"#\u57FA\u672C\u4F7F\u7528","children":[]},{"level":3,"title":"API","slug":"api","link":"#api","children":[]},{"level":3,"title":"BottomBar Props","slug":"props","link":"#props","children":[]}],"relativePath":"components/bottom-bar.md"}'),n={name:"components/bottom-bar.md"},o=a(`<h1 id="bottombar-\u5E95\u90E8\u680F" tabindex="-1">BottomBar \u5E95\u90E8\u680F <a class="header-anchor" href="#bottombar-\u5E95\u90E8\u680F" aria-hidden="true">#</a></h1><iframe src="https://cfg-design.github.io/cfgd-uniapp3/#/pages/bottomBar/index" style="width:375px;height:667px;"></iframe><h3 id="\u57FA\u672C\u4F7F\u7528" tabindex="-1">\u57FA\u672C\u4F7F\u7528 <a class="header-anchor" href="#\u57FA\u672C\u4F7F\u7528" aria-hidden="true">#</a></h3><div class="language-vue-html"><button class="copy"></button><span class="lang">template</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">c-bottom-bar</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">safe-area-inset-bottom</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">view</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">style</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">padding: 10rpx 30rpx</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">c-row</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">align</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">center</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">justify</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">space-between</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">c-col</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">span</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">auto</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">c-row</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">align</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">center</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">gutter</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">20</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">c-col</span><span style="color:#89DDFF;">&gt;&lt;</span><span style="color:#F07178;">c-avatar-text</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">color</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">primary</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">text</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u{1F6D2}</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">round</span><span style="color:#89DDFF;"> /&gt;&lt;/</span><span style="color:#F07178;">c-col</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">c-col</span><span style="color:#89DDFF;">&gt;&lt;</span><span style="color:#F07178;">c-text</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">color</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">error</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\uFFE588.88</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">c-text</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">c-col</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">c-row</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">c-col</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">c-col</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">span</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">4</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">c-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">color</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">error</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">color2</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">warning</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">text</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u4E0B\u5355</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">round</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">c-col</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">c-row</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">view</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">c-line</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">c-tab-bar</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">value</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">items</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">items</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">c-bottom-bar</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h3 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h3><h3 id="props" tabindex="-1">BottomBar Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u540D\u79F0</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u9ED8\u8BA4\u503C</th><th style="text-align:left;">\u7248\u672C</th><th style="text-align:left;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:left;">c</td><td style="text-align:left;">string</td><td style="text-align:left;">default</td><td style="text-align:left;"></td><td style="text-align:left;">\u914D\u7F6E\u540D\u3002<a href="/cfgd-uniapp3-docs/guide/props.html#config">\u4F7F\u7528\u8BF4\u660E</a></td></tr><tr><td style="text-align:left;">props</td><td style="text-align:left;">BottomBarProps</td><td style="text-align:left;">undefined</td><td style="text-align:left;"></td><td style="text-align:left;">\u5168\u90E8 props \u3002 <a href="/cfgd-uniapp3-docs/guide/props.html">\u4F7F\u7528\u8BF4\u660E</a></td></tr><tr><td style="text-align:left;">c-class</td><td style="text-align:left;">HTMLAttributes[&#39;class&#39;]</td><td style="text-align:left;">undefined</td><td style="text-align:left;"></td><td style="text-align:left;">\u81EA\u5B9A\u4E49\u7C7B\u540D</td></tr><tr><td style="text-align:left;">c-style</td><td style="text-align:left;">HTMLAttributes[&#39;style&#39;]</td><td style="text-align:left;">undefined</td><td style="text-align:left;"></td><td style="text-align:left;">\u81EA\u5B9A\u4E49\u6837\u5F0F</td></tr><tr><td style="text-align:left;">z-index</td><td style="text-align:left;">string | number</td><td style="text-align:left;">undefined</td><td style="text-align:left;"></td><td style="text-align:left;">\u5143\u7D20\u5C42\u7EA7 z-index</td></tr><tr><td style="text-align:left;">bottom</td><td style="text-align:left;">string | number</td><td style="text-align:left;">undefined</td><td style="text-align:left;"></td><td style="text-align:left;">fixed \u5E95\u90E8\u7684\u8DDD\u79BB</td></tr><tr><td style="text-align:left;">no-space</td><td style="text-align:left;">boolean</td><td style="text-align:left;">undefined</td><td style="text-align:left;"></td><td style="text-align:left;">\u4E0D\u5360\u7528\u7A7A\u95F4</td></tr><tr><td style="text-align:left;">no-fixed</td><td style="text-align:left;">boolean</td><td style="text-align:left;">undefined</td><td style="text-align:left;"></td><td style="text-align:left;">\u4E0D\u56FA\u5B9A</td></tr><tr><td style="text-align:left;">safe-area-inset-bottom</td><td style="text-align:left;">boolean</td><td style="text-align:left;">undefined</td><td style="text-align:left;"></td><td style="text-align:left;">\u662F\u5426\u7559\u51FA\u5E95\u90E8\u5B89\u5168\u8DDD\u79BB</td></tr></tbody></table>`,7),e=[o];function p(r,c,D,y,F,d){return l(),t("div",null,e)}const f=s(n,[["render",p]]);export{g as __pageData,f as default};
