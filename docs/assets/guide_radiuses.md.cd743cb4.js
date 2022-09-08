import{_ as s,c as a,o as n,a as l}from"./app.c960f333.js";const A=JSON.parse('{"title":"Radius \u5706\u89D2\u503C","description":"","frontmatter":{"title":"Radius \u5706\u89D2\u503C"},"headers":[{"level":3,"title":"\u57FA\u672C\u4F7F\u7528","slug":"\u57FA\u672C\u4F7F\u7528","link":"#\u57FA\u672C\u4F7F\u7528","children":[]},{"level":3,"title":"\u81EA\u5B9A\u4E49\u5706\u89D2\u503C","slug":"\u81EA\u5B9A\u4E49\u5706\u89D2\u503C","link":"#\u81EA\u5B9A\u4E49\u5706\u89D2\u503C","children":[]}],"relativePath":"guide/radiuses.md"}'),p={name:"guide/radiuses.md"},o=l(`<h1 id="radius-\u5706\u89D2\u503C" tabindex="-1">Radius \u5706\u89D2\u503C <a class="header-anchor" href="#radius-\u5706\u89D2\u503C" aria-hidden="true">#</a></h1><p>\u5706\u89D2\u503C\u53EF\u4EE5\u5E94\u7528\u5230\u7EC4\u4EF6\u76F8\u5173\u5706\u89D2\u503C\u5C5E\u6027\u4E2D</p><iframe src="https://cfg-design.github.io/cfgd-uniapp3/#/pages/radiuses/index" style="width:375px;height:667px;"></iframe><h3 id="\u57FA\u672C\u4F7F\u7528" tabindex="-1">\u57FA\u672C\u4F7F\u7528 <a class="header-anchor" href="#\u57FA\u672C\u4F7F\u7528" aria-hidden="true">#</a></h3><div class="language-vue-html"><button class="copy"></button><span class="lang">template</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">c-avatar</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">radius</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">xs</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">c-avatar</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">radius</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">s</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">c-avatar</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">radius</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">m</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">c-avatar</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">radius</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">l</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"></span></code></pre></div><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">useRadius</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@/uni_modules/cfg-design</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> radius </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useRadius</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(radius</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value) </span><span style="color:#676E95;">// \u67E5\u770B\u5168\u90E8\u5706\u89D2\u503C</span></span>
<span class="line"></span></code></pre></div><h3 id="\u81EA\u5B9A\u4E49\u5706\u89D2\u503C" tabindex="-1">\u81EA\u5B9A\u4E49\u5706\u89D2\u503C <a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u5706\u89D2\u503C" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">setRadius</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">useRadius</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@/uni_modules/cfg-design</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> radius </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useRadius</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u8BBE\u7F6E\u5706\u89D2\u503C</span></span>
<span class="line"><span style="color:#82AAFF;">setRadius</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">myRadius1</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">30</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;">// \u9ED8\u8BA4\u5355\u4F4D rpx</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">myRadius2</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">50</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">radius</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">myRadius1</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(radius</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">myRadius1)</span></span>
<span class="line"><span style="color:#676E95;">// 30</span></span>
<span class="line"></span></code></pre></div><div class="language-vue-html"><button class="copy"></button><span class="lang">template</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">c-avatar</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">radius</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">myRadius1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#676E95;">&lt;!-- \u5C4F\u5E55\u5BBD\u5EA6\u4E3A 375px \u65F6\uFF1A style=&quot;border-radius: 15px;&quot; --&gt;</span></span>
<span class="line"></span></code></pre></div>`,9),e=[o];function t(c,r,D,y,F,i){return n(),a("div",null,e)}const C=s(p,[["render",t]]);export{A as __pageData,C as default};