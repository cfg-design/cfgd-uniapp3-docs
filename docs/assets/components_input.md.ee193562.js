import{_ as t,c as l,o as e,a as s}from"./app.9fb67079.js";const g=JSON.parse('{"title":"Input \u8F93\u5165\u6846","description":"","frontmatter":{"title":"Input \u8F93\u5165\u6846"},"headers":[{"level":3,"title":"\u57FA\u672C\u4F7F\u7528","slug":"\u57FA\u672C\u4F7F\u7528","link":"#\u57FA\u672C\u4F7F\u7528","children":[]},{"level":3,"title":"\u641C\u7D22\u8F93\u5165\u6846","slug":"\u641C\u7D22\u8F93\u5165\u6846","link":"#\u641C\u7D22\u8F93\u5165\u6846","children":[]},{"level":3,"title":"\u7F51\u5740\u8F93\u5165\u6846","slug":"\u7F51\u5740\u8F93\u5165\u6846","link":"#\u7F51\u5740\u8F93\u5165\u6846","children":[]},{"level":3,"title":"API","slug":"api","link":"#api","children":[]},{"level":3,"title":"Input Props","slug":"props","link":"#props","children":[]},{"level":3,"title":"Input Slots","slug":"slots","link":"#slots","children":[]},{"level":3,"title":"Input Methods","slug":"methods","link":"#methods","children":[]},{"level":3,"title":"Input Events","slug":"events","link":"#events","children":[]}],"relativePath":"components/input.md"}'),n={name:"components/input.md"},a=s(`<h1 id="input-\u8F93\u5165\u6846" tabindex="-1">Input \u8F93\u5165\u6846 <a class="header-anchor" href="#input-\u8F93\u5165\u6846" aria-hidden="true">#</a></h1><iframe src="https://cfg-design.github.io/cfgd-uniapp3/#/pages/input/index" style="width:375px;height:667px;"></iframe><h3 id="\u57FA\u672C\u4F7F\u7528" tabindex="-1">\u57FA\u672C\u4F7F\u7528 <a class="header-anchor" href="#\u57FA\u672C\u4F7F\u7528" aria-hidden="true">#</a></h3><div class="language-vue-html"><button class="copy"></button><span class="lang">template</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">c-input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">value</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">clearable</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">c-input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">input-align</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">center</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">c-input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">input-align</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">right</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"></span></code></pre></div><h3 id="\u641C\u7D22\u8F93\u5165\u6846" tabindex="-1">\u641C\u7D22\u8F93\u5165\u6846 <a class="header-anchor" href="#\u641C\u7D22\u8F93\u5165\u6846" aria-hidden="true">#</a></h3><div class="language-vue-html"><button class="copy"></button><span class="lang">template</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">c-input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">right-icon</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">search-line</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">border</span><span style="color:#89DDFF;"> @</span><span style="color:#C792EA;">click</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">right-icon</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">onSearch</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> @</span><span style="color:#C792EA;">confirm</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">onSearch</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">c-input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">icon</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">search-line</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">border</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;"> #</span><span style="color:#C792EA;">suffix</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">c-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">color</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">primary</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">text</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u641C\u7D22</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">size</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">xs</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">c-input</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">c-input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">icon</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">user-5-line</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">right-icon</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">search-line</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">border</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;"> #</span><span style="color:#C792EA;">prefix</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">c-text</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">color</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">secondary</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">c-style</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">[{ </span><span style="color:#F07178;">marginLeft</span><span style="color:#89DDFF;">: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">10rpx</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;"> }]</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u7528\u6237</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">c-text</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">c-input</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">c-row</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">align</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">stretch</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">c-input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">icon</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">search-line</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">border</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">c-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">color</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">primary</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">text</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u641C\u7D22</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">c-style</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">{ </span><span style="color:#F07178;">marginLeft</span><span style="color:#89DDFF;">: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">10rpx</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;"> }</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">c-row</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h3 id="\u7F51\u5740\u8F93\u5165\u6846" tabindex="-1">\u7F51\u5740\u8F93\u5165\u6846 <a class="header-anchor" href="#\u7F51\u5740\u8F93\u5165\u6846" aria-hidden="true">#</a></h3><div class="language-vue-html"><button class="copy"></button><span class="lang">template</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">c-input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">placeholder</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">www.baidu</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">border</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;"> #</span><span style="color:#C792EA;">prefix</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">c-text</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">color</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">secondary</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">https://</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">c-text</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;"> #</span><span style="color:#C792EA;">suffix</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">c-text</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">color</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">secondary</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">.com</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">c-text</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">c-input</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h3 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h3><h3 id="props" tabindex="-1">Input Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u540D\u79F0</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u9ED8\u8BA4\u503C</th><th style="text-align:left;">\u7248\u672C</th><th style="text-align:left;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:left;">c</td><td style="text-align:left;">string</td><td style="text-align:left;">default</td><td style="text-align:left;"></td><td style="text-align:left;">\u914D\u7F6E\u540D\u3002<a href="/cfgd-uniapp3-docs/guide/props.html#config">\u4F7F\u7528\u8BF4\u660E</a></td></tr><tr><td style="text-align:left;">props</td><td style="text-align:left;">InputProps</td><td style="text-align:left;">undefined</td><td style="text-align:left;"></td><td style="text-align:left;">\u5168\u90E8 props \u3002 <a href="/cfgd-uniapp3-docs/guide/props.html">\u4F7F\u7528\u8BF4\u660E</a></td></tr><tr><td style="text-align:left;">c-class</td><td style="text-align:left;">HTMLAttributes[&#39;class&#39;]</td><td style="text-align:left;">undefined</td><td style="text-align:left;"></td><td style="text-align:left;">\u81EA\u5B9A\u4E49\u7C7B\u540D</td></tr><tr><td style="text-align:left;">c-style</td><td style="text-align:left;">HTMLAttributes[&#39;style&#39;]</td><td style="text-align:left;">undefined</td><td style="text-align:left;"></td><td style="text-align:left;">\u81EA\u5B9A\u4E49\u6837\u5F0F</td></tr><tr><td style="text-align:left;">input-class</td><td style="text-align:left;">HTMLAttributes[&#39;class&#39;]</td><td style="text-align:left;">undefined</td><td style="text-align:left;"></td><td style="text-align:left;">input \u7684\u81EA\u5B9A\u4E49\u7C7B\u540D</td></tr><tr><td style="text-align:left;">input-style</td><td style="text-align:left;">HTMLAttributes[&#39;style&#39;]</td><td style="text-align:left;">undefined</td><td style="text-align:left;"></td><td style="text-align:left;">input \u7684\u81EA\u5B9A\u4E49\u6837\u5F0F</td></tr><tr><td style="text-align:left;">value</td><td style="text-align:left;">string</td><td style="text-align:left;">undefined</td><td style="text-align:left;"></td><td style="text-align:left;">\u8F93\u5165\u6846\u7684\u5185\u5BB9</td></tr><tr><td style="text-align:left;">type</td><td style="text-align:left;">&#39;text&#39; | &#39;number&#39; | &#39;idcard&#39; | &#39;digit&#39; | &#39;tel&#39; | &#39;safe-password&#39; | &#39;nickname&#39;</td><td style="text-align:left;">text</td><td style="text-align:left;"></td><td style="text-align:left;">input \u7684\u7C7B\u578B\u3002H5 \u6682\u672A\u652F\u6301\u52A8\u6001\u5207\u6362\uFF0C\u8BE6\u89C1\u4E0B\u65B9 Tips\uFF0C\u8BF7\u4F7F\u7528 v-if \u8FDB\u884C\u6574\u4F53\u5207\u6362</td></tr><tr><td style="text-align:left;">size</td><td style="text-align:left;">string | number</td><td style="text-align:left;">m</td><td style="text-align:left;"></td><td style="text-align:left;">\u5B57\u4F53\u5927\u5C0F\u3002 <a href="/cfgd-uniapp3-docs/guide/font-sizes.html">\u4F7F\u7528\u8BF4\u660E</a></td></tr><tr><td style="text-align:left;">placeholder</td><td style="text-align:left;">string</td><td style="text-align:left;">undefined</td><td style="text-align:left;"></td><td style="text-align:left;">\u8F93\u5165\u6846\u4E3A\u7A7A\u65F6\u5360\u4F4D\u7B26</td></tr><tr><td style="text-align:left;">input-align</td><td style="text-align:left;">CSSProperties[&#39;textAlign&#39;]</td><td style="text-align:left;">undefined</td><td style="text-align:left;"></td><td style="text-align:left;">\u8F93\u5165\u6846\u5185\u5BB9\u5BF9\u9F50\u65B9\u5F0F\u3002<a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-align" target="_blank" rel="noreferrer">MDN Web Docs</a></td></tr><tr><td style="text-align:left;">bg-color</td><td style="text-align:left;">string</td><td style="text-align:left;">undefined</td><td style="text-align:left;"></td><td style="text-align:left;">\u80CC\u666F\u989C\u8272\u3002<a href="/cfgd-uniapp3-docs/guide/colors.html">\u4F7F\u7528\u8BF4\u660E</a></td></tr><tr><td style="text-align:left;">icon</td><td style="text-align:left;">string</td><td style="text-align:left;">undefined</td><td style="text-align:left;"></td><td style="text-align:left;">\u5DE6\u8FB9\u7684\u56FE\u6807</td></tr><tr><td style="text-align:left;">icon-props</td><td style="text-align:left;">IconProps</td><td style="text-align:left;">undefined</td><td style="text-align:left;"></td><td style="text-align:left;"><a href="/cfgd-uniapp3-docs/components/icon.html#props">IconProps</a></td></tr><tr><td style="text-align:left;">right-icon</td><td style="text-align:left;">string</td><td style="text-align:left;">undefined</td><td style="text-align:left;"></td><td style="text-align:left;">\u53F3\u8FB9\u7684\u56FE\u6807</td></tr><tr><td style="text-align:left;">right-icon-props</td><td style="text-align:left;">IconProps</td><td style="text-align:left;">undefined</td><td style="text-align:left;"></td><td style="text-align:left;"><a href="/cfgd-uniapp3-docs/components/icon.html#props">IconProps</a></td></tr><tr><td style="text-align:left;">password</td><td style="text-align:left;">boolean</td><td style="text-align:left;">undefined</td><td style="text-align:left;"></td><td style="text-align:left;">\u662F\u5426\u662F\u5BC6\u7801\u7C7B\u578B</td></tr><tr><td style="text-align:left;">disabled</td><td style="text-align:left;">boolean</td><td style="text-align:left;">undefined</td><td style="text-align:left;"></td><td style="text-align:left;">\u662F\u5426\u7981\u7528</td></tr><tr><td style="text-align:left;">readonly</td><td style="text-align:left;">boolean</td><td style="text-align:left;">undefined</td><td style="text-align:left;"></td><td style="text-align:left;">\u662F\u5426\u53EA\u8BFB</td></tr><tr><td style="text-align:left;">clearable</td><td style="text-align:left;">boolean</td><td style="text-align:left;">undefined</td><td style="text-align:left;"></td><td style="text-align:left;">\u662F\u5426\u663E\u793A\u6E05\u9664\u63A7\u4EF6</td></tr><tr><td style="text-align:left;">clear-icon-props</td><td style="text-align:left;">IconProps</td><td style="text-align:left;">undefined</td><td style="text-align:left;"></td><td style="text-align:left;"><a href="/cfgd-uniapp3-docs/components/icon.html#props">IconProps</a></td></tr><tr><td style="text-align:left;">maxlength</td><td style="text-align:left;">number</td><td style="text-align:left;">140</td><td style="text-align:left;"></td><td style="text-align:left;">\u6700\u5927\u8F93\u5165\u957F\u5EA6\uFF0C\u8BBE\u7F6E\u4E3A -1 \u7684\u65F6\u5019\u4E0D\u9650\u5236\u6700\u5927\u957F\u5EA6</td></tr><tr><td style="text-align:left;">show-count</td><td style="text-align:left;">boolean</td><td style="text-align:left;">undefined</td><td style="text-align:left;"></td><td style="text-align:left;">\u662F\u5426\u663E\u793A\u8F93\u5165\u5B57\u6570\u7EDF\u8BA1</td></tr><tr><td style="text-align:left;">count-props</td><td style="text-align:left;">TextProps</td><td style="text-align:left;">undefined</td><td style="text-align:left;"></td><td style="text-align:left;"><a href="/cfgd-uniapp3-docs/components/text.html#props">TextProps</a></td></tr><tr><td style="text-align:left;">border</td><td style="text-align:left;">boolean</td><td style="text-align:left;">undefined</td><td style="text-align:left;"></td><td style="text-align:left;">\u662F\u5426\u663E\u793A\u8FB9\u6846</td></tr><tr><td style="text-align:left;">border-bottom</td><td style="text-align:left;">boolean</td><td style="text-align:left;">undefined</td><td style="text-align:left;"></td><td style="text-align:left;">\u662F\u5426\u663E\u793A\u4E0B\u8FB9\u6846</td></tr><tr><td style="text-align:left;">radius</td><td style="text-align:left;">string | number</td><td style="text-align:left;">undefined</td><td style="text-align:left;"></td><td style="text-align:left;">\u5706\u89D2\u503C\u3002 <a href="/cfgd-uniapp3-docs/guide/radiuses.html">\u4F7F\u7528\u8BF4\u660E</a></td></tr><tr><td style="text-align:left;">round</td><td style="text-align:left;">boolean</td><td style="text-align:left;">undefined</td><td style="text-align:left;"></td><td style="text-align:left;">\u662F\u5426\u663E\u793A\u4E3A\u5706\u89D2</td></tr><tr><td style="text-align:left;">path</td><td style="text-align:left;">string</td><td style="text-align:left;">undefined</td><td style="text-align:left;"></td><td style="text-align:left;">CForm value \u5BF9\u8C61\u7684\u5C5E\u6027\u540D\uFF0C\u7528\u4E8E\u6821\u9A8C</td></tr><tr><td style="text-align:left;">no-feedback</td><td style="text-align:left;">boolean</td><td style="text-align:left;">undefined</td><td style="text-align:left;"></td><td style="text-align:left;">\u662F\u5426\u4E0D\u5C55\u793A\u6821\u9A8C\u53CD\u9988</td></tr><tr><td style="text-align:left;">focus</td><td style="text-align:left;">boolean</td><td style="text-align:left;">undefined</td><td style="text-align:left;"></td><td style="text-align:left;">\u83B7\u53D6\u7126\u70B9\u3002\u5728 H5 \u5E73\u53F0\u80FD\u5426\u805A\u7126\u4EE5\u53CA\u8F6F\u952E\u76D8\u662F\u5426\u8DDF\u968F\u5F39\u51FA\uFF0C\u53D6\u51B3\u4E8E\u5F53\u524D\u6D4F\u89C8\u5668\u672C\u8EAB\u7684\u5B9E\u73B0\u3002nvue \u9875\u9762\u4E0D\u652F\u6301\uFF0C\u9700\u4F7F\u7528\u7EC4\u4EF6\u7684 focus()\u3001blur() \u65B9\u6CD5\u63A7\u5236\u7126\u70B9</td></tr></tbody></table><ul><li>\u66F4\u591A Props \u8BF7\u67E5\u770B <a href="https://uniapp.dcloud.net.cn/component/input.html#input" target="_blank" rel="noreferrer">uniapp input</a></li></ul><h3 id="slots" tabindex="-1">Input Slots <a class="header-anchor" href="#slots" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u540D\u79F0</th><th style="text-align:left;">\u53C2\u6570</th><th style="text-align:left;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:left;">prefix</td><td style="text-align:left;">()</td><td style="text-align:left;">\u5DE6\u8FB9\u7684\u5185\u5BB9</td></tr><tr><td style="text-align:left;">count</td><td style="text-align:left;">()</td><td style="text-align:left;">\u81EA\u5B9A\u4E49\u7EDF\u8BA1\u5185\u5BB9</td></tr><tr><td style="text-align:left;">suffix</td><td style="text-align:left;">({ errMsg: string | undefined })</td><td style="text-align:left;">\u53F3\u8FB9\u7684\u5185\u5BB9</td></tr></tbody></table><h3 id="methods" tabindex="-1">Input Methods <a class="header-anchor" href="#methods" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u540D\u79F0</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:left;">focus</td><td style="text-align:left;">() =&gt; void</td><td style="text-align:left;">\u83B7\u53D6\u7126\u70B9</td></tr></tbody></table><h3 id="events" tabindex="-1">Input Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u540D\u79F0</th><th style="text-align:left;">\u53C2\u6570</th><th style="text-align:left;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:left;">update:value</td><td style="text-align:left;">(value: string) =&gt; void</td><td style="text-align:left;">value change \u65F6\u89E6\u53D1</td></tr><tr><td style="text-align:left;">input</td><td style="text-align:left;">(event: any) =&gt; void</td><td style="text-align:left;"><a href="https://uniapp.dcloud.net.cn/component/input.html#input" target="_blank" rel="noreferrer">\u8BF4\u660E</a></td></tr><tr><td style="text-align:left;">focus</td><td style="text-align:left;">(event: any) =&gt; void</td><td style="text-align:left;"><a href="https://uniapp.dcloud.net.cn/component/input.html#input" target="_blank" rel="noreferrer">\u8BF4\u660E</a></td></tr><tr><td style="text-align:left;">blur</td><td style="text-align:left;">(event: any) =&gt; void</td><td style="text-align:left;"><a href="https://uniapp.dcloud.net.cn/component/input.html#input" target="_blank" rel="noreferrer">\u8BF4\u660E</a></td></tr><tr><td style="text-align:left;">confirm</td><td style="text-align:left;">(event: any) =&gt; void</td><td style="text-align:left;"><a href="https://uniapp.dcloud.net.cn/component/input.html#input" target="_blank" rel="noreferrer">\u8BF4\u660E</a></td></tr><tr><td style="text-align:left;">keyboardheightchange</td><td style="text-align:left;">(event: any) =&gt; void</td><td style="text-align:left;"><a href="https://uniapp.dcloud.net.cn/component/input.html#input" target="_blank" rel="noreferrer">\u8BF4\u660E</a></td></tr><tr><td style="text-align:left;">clear</td><td style="text-align:left;">() =&gt; void</td><td style="text-align:left;">\u6E05\u7A7A\u65F6\u89E6\u53D1</td></tr><tr><td style="text-align:left;">click:input</td><td style="text-align:left;">(event: any) =&gt; void</td><td style="text-align:left;">\u70B9\u51FB input \u65F6\u89E6\u53D1</td></tr><tr><td style="text-align:left;">click:icon</td><td style="text-align:left;">(event: any) =&gt; void</td><td style="text-align:left;">\u70B9\u51FB\u5DE6\u8FB9 icon \u65F6\u89E6\u53D1</td></tr><tr><td style="text-align:left;">click:rightIcon</td><td style="text-align:left;">(event: any) =&gt; void</td><td style="text-align:left;">\u70B9\u51FB\u53F3\u8FB9 icon \u65F6\u89E6\u53D1</td></tr></tbody></table>`,18),o=[a];function p(r,d,i,y,c,D){return e(),l("div",null,o)}const f=t(n,[["render",p]]);export{g as __pageData,f as default};