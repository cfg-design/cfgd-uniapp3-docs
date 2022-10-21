import{_ as s,c as t,o as l,a}from"./app.9fb67079.js";const C=JSON.parse('{"title":"Tabs \u6807\u7B7E\u9875","description":"","frontmatter":{"title":"Tabs \u6807\u7B7E\u9875"},"headers":[{"level":3,"title":"\u57FA\u672C\u4F7F\u7528","slug":"\u57FA\u672C\u4F7F\u7528","link":"#\u57FA\u672C\u4F7F\u7528","children":[]},{"level":3,"title":"\u81EA\u5B9A\u4E49\u9879","slug":"\u81EA\u5B9A\u4E49\u9879","link":"#\u81EA\u5B9A\u4E49\u9879","children":[]},{"level":3,"title":"API","slug":"api","link":"#api","children":[]},{"level":3,"title":"Tabs Props","slug":"props","link":"#props","children":[]},{"level":3,"title":"TabItem Props","slug":"tab-item-props","link":"#tab-item-props","children":[]},{"level":3,"title":"Tabs Slots","slug":"slots","link":"#slots","children":[]},{"level":3,"title":"Tabs Events","slug":"events","link":"#events","children":[]},{"level":3,"title":"TabItem Events","slug":"tab-item-events","link":"#tab-item-events","children":[]}],"relativePath":"components/tabs.md"}'),n={name:"components/tabs.md"},e=a(`<h1 id="tabs-\u6807\u7B7E\u9875" tabindex="-1">Tabs \u6807\u7B7E\u9875 <a class="header-anchor" href="#tabs-\u6807\u7B7E\u9875" aria-hidden="true">#</a></h1><iframe src="https://cfg-design.github.io/cfgd-uniapp3/#/pages/tabs/index" style="width:375px;height:667px;"></iframe><h3 id="\u57FA\u672C\u4F7F\u7528" tabindex="-1">\u57FA\u672C\u4F7F\u7528 <a class="header-anchor" href="#\u57FA\u672C\u4F7F\u7528" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">TabItemProps</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@/uni_modules/cfg-design</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ref</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> modelValue </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> items</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">TabItemProps</span><span style="color:#A6ACCD;">[] </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">text</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u7535\u8111</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">text</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u624B\u673A</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">text</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u5E73\u677F</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span></span>
<span class="line"></span></code></pre></div><div class="language-vue-html"><button class="copy"></button><span class="lang">template</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">c-tabs</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">value</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">modelValue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">items</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">items</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"></span></code></pre></div><h3 id="\u81EA\u5B9A\u4E49\u9879" tabindex="-1">\u81EA\u5B9A\u4E49\u9879 <a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u9879" aria-hidden="true">#</a></h3><div class="language-vue-html"><button class="copy"></button><span class="lang">template</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">c-tabs</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">value</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">modelValue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">items</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">items4</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;"> #</span><span style="color:#C792EA;">item</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">{ </span><span style="color:#A6ACCD;">item</span><span style="color:#89DDFF;">, </span><span style="color:#A6ACCD;">index</span><span style="color:#89DDFF;">, </span><span style="color:#A6ACCD;">active</span><span style="color:#89DDFF;"> }</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">c-tab-item</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-if</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">index</span><span style="color:#89DDFF;"> == </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">props</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">item</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">value</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">index</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">c-row</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">align</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">center</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">c-style</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">{ </span><span style="color:#F07178;">flexWrap</span><span style="color:#89DDFF;">: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">nowrap</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;"> }</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">c-icon</span><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">search-line</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">color</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">active</span><span style="color:#89DDFF;"> ? </span><span style="color:#A6ACCD;">item</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">textProps</span><span style="color:#89DDFF;">?.</span><span style="color:#A6ACCD;">color</span><span style="color:#89DDFF;"> : </span><span style="color:#A6ACCD;">item</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">color</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">c-text</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">color</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">active</span><span style="color:#89DDFF;"> ? </span><span style="color:#A6ACCD;">item</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">textProps</span><span style="color:#89DDFF;">?.</span><span style="color:#A6ACCD;">color</span><span style="color:#89DDFF;"> : </span><span style="color:#A6ACCD;">item</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">color</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;{{</span><span style="color:#A6ACCD;"> item</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">text </span><span style="color:#89DDFF;">}}&lt;/</span><span style="color:#F07178;">c-text</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">c-icon</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">search-line</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">color</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">active</span><span style="color:#89DDFF;"> ? </span><span style="color:#A6ACCD;">item</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">textProps</span><span style="color:#89DDFF;">?.</span><span style="color:#A6ACCD;">color</span><span style="color:#89DDFF;"> : </span><span style="color:#A6ACCD;">item</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">color</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">c-row</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">c-tab-item</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">c-tab-item</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-else-if</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">index</span><span style="color:#89DDFF;"> == </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">props</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">item</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">value</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">index</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">c-row</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">align</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">center</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">c-style</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">{ </span><span style="color:#F07178;">flexWrap</span><span style="color:#89DDFF;">: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">nowrap</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;"> }</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">c-icon</span><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">check-line</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">color</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">active</span><span style="color:#89DDFF;"> ? </span><span style="color:#A6ACCD;">item</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">textProps</span><span style="color:#89DDFF;">?.</span><span style="color:#A6ACCD;">color</span><span style="color:#89DDFF;"> : </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#fff</span><span style="color:#89DDFF;">&#39;&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">c-text</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">color</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">active</span><span style="color:#89DDFF;"> ? </span><span style="color:#A6ACCD;">item</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">textProps</span><span style="color:#89DDFF;">?.</span><span style="color:#A6ACCD;">color</span><span style="color:#89DDFF;"> : </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#fff</span><span style="color:#89DDFF;">&#39;&quot;</span><span style="color:#89DDFF;">&gt;{{</span><span style="color:#A6ACCD;"> item</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">text </span><span style="color:#89DDFF;">}}&lt;/</span><span style="color:#F07178;">c-text</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">c-icon</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">check-line</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">color</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">active</span><span style="color:#89DDFF;"> ? </span><span style="color:#A6ACCD;">item</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">textProps</span><span style="color:#89DDFF;">?.</span><span style="color:#A6ACCD;">color</span><span style="color:#89DDFF;"> : </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#fff</span><span style="color:#89DDFF;">&#39;&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">c-row</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">c-tab-item</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">c-tab-item</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-else</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">props</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">item</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">value</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">index</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">c-tabs</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h3 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h3><h3 id="props" tabindex="-1">Tabs Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u540D\u79F0</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u9ED8\u8BA4\u503C</th><th style="text-align:left;">\u7248\u672C</th><th style="text-align:left;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:left;">c</td><td style="text-align:left;">string</td><td style="text-align:left;">default</td><td style="text-align:left;"></td><td style="text-align:left;">\u914D\u7F6E\u540D\u3002<a href="/cfgd-uniapp3-docs/guide/props.html#config">\u4F7F\u7528\u8BF4\u660E</a></td></tr><tr><td style="text-align:left;">props</td><td style="text-align:left;">TabsProps</td><td style="text-align:left;">undefined</td><td style="text-align:left;"></td><td style="text-align:left;">\u5168\u90E8 props \u3002 <a href="/cfgd-uniapp3-docs/guide/props.html">\u4F7F\u7528\u8BF4\u660E</a></td></tr><tr><td style="text-align:left;">c-class</td><td style="text-align:left;">HTMLAttributes[&#39;class&#39;]</td><td style="text-align:left;">undefined</td><td style="text-align:left;"></td><td style="text-align:left;">\u81EA\u5B9A\u4E49\u7C7B\u540D</td></tr><tr><td style="text-align:left;">c-style</td><td style="text-align:left;">HTMLAttributes[&#39;style&#39;]</td><td style="text-align:left;">undefined</td><td style="text-align:left;"></td><td style="text-align:left;">\u81EA\u5B9A\u4E49\u6837\u5F0F</td></tr><tr><td style="text-align:left;">value</td><td style="text-align:left;">string | number</td><td style="text-align:left;">undefined</td><td style="text-align:left;"></td><td style="text-align:left;">\u9009\u4E2D\u7684\u503C</td></tr><tr><td style="text-align:left;">item</td><td style="text-align:left;">TabItemProps</td><td style="text-align:left;">undefined</td><td style="text-align:left;"></td><td style="text-align:left;"><a href="#tab-item-props">TabItemProps</a></td></tr><tr><td style="text-align:left;">items</td><td style="text-align:left;">TabItemProps[]</td><td style="text-align:left;">undefined</td><td style="text-align:left;"></td><td style="text-align:left;">\u9879\u76EE\u914D\u7F6E</td></tr></tbody></table><h3 id="tab-item-props" tabindex="-1">TabItem Props <a class="header-anchor" href="#tab-item-props" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u540D\u79F0</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u9ED8\u8BA4\u503C</th><th style="text-align:left;">\u7248\u672C</th><th style="text-align:left;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:left;">c</td><td style="text-align:left;">string</td><td style="text-align:left;">default</td><td style="text-align:left;"></td><td style="text-align:left;">\u914D\u7F6E\u540D\u3002<a href="/cfgd-uniapp3-docs/guide/props.html#config">\u4F7F\u7528\u8BF4\u660E</a></td></tr><tr><td style="text-align:left;">props</td><td style="text-align:left;">TabsProps</td><td style="text-align:left;">undefined</td><td style="text-align:left;"></td><td style="text-align:left;">\u5168\u90E8 props \u3002 <a href="/cfgd-uniapp3-docs/guide/props.html">\u4F7F\u7528\u8BF4\u660E</a></td></tr><tr><td style="text-align:left;">c-class</td><td style="text-align:left;">HTMLAttributes[&#39;class&#39;]</td><td style="text-align:left;">undefined</td><td style="text-align:left;"></td><td style="text-align:left;">\u81EA\u5B9A\u4E49\u7C7B\u540D</td></tr><tr><td style="text-align:left;">c-style</td><td style="text-align:left;">HTMLAttributes[&#39;style&#39;]</td><td style="text-align:left;">undefined</td><td style="text-align:left;"></td><td style="text-align:left;">\u81EA\u5B9A\u4E49\u6837\u5F0F</td></tr><tr><td style="text-align:left;">value</td><td style="text-align:left;">string | number</td><td style="text-align:left;">undefined</td><td style="text-align:left;"></td><td style="text-align:left;">\u9009\u4E2D\u65F6\u7684\u503C</td></tr><tr><td style="text-align:left;">color</td><td style="text-align:left;">string</td><td style="text-align:left;">undefined</td><td style="text-align:left;"></td><td style="text-align:left;">\u989C\u8272\u3002<a href="/cfgd-uniapp3-docs/guide/colors.html">\u4F7F\u7528\u8BF4\u660E</a></td></tr><tr><td style="text-align:left;">active-type</td><td style="text-align:left;">&#39;line&#39; | &#39;bg&#39;</td><td style="text-align:left;">undefined</td><td style="text-align:left;"></td><td style="text-align:left;">\u6FC0\u6D3B\u7C7B\u578B\uFF1Aundefined | line: \u4E0B\u5212\u7EBF\uFF0C bg: \u80CC\u666F</td></tr><tr><td style="text-align:left;">text</td><td style="text-align:left;">string</td><td style="text-align:left;">undefined</td><td style="text-align:left;"></td><td style="text-align:left;">\u6587\u5B57</td></tr><tr><td style="text-align:left;">text-props</td><td style="text-align:left;">TextProps</td><td style="text-align:left;">undefined</td><td style="text-align:left;"></td><td style="text-align:left;"><a href="/cfgd-uniapp3-docs/components/text.html#props">TextProps</a></td></tr><tr><td style="text-align:left;">badge</td><td style="text-align:left;">BadgeProps[&#39;text&#39;]</td><td style="text-align:left;">undefined</td><td style="text-align:left;"></td><td style="text-align:left;">\u53F3\u4E0A\u89D2\u7684\u89D2\u6807\u63D0\u793A\u4FE1\u606F</td></tr><tr><td style="text-align:left;">badge-props</td><td style="text-align:left;">BadgeProps</td><td style="text-align:left;">undefined</td><td style="text-align:left;"></td><td style="text-align:left;"><a href="/cfgd-uniapp3-docs/components/badge.html#props">BadgeProps</a></td></tr><tr><td style="text-align:left;">dot</td><td style="text-align:left;">boolean</td><td style="text-align:left;">undefined</td><td style="text-align:left;"></td><td style="text-align:left;">\u63D0\u793A\u662F\u5426\u663E\u793A\u5706\u70B9</td></tr><tr><td style="text-align:left;">line-props</td><td style="text-align:left;">LineProps</td><td style="text-align:left;">undefined</td><td style="text-align:left;"></td><td style="text-align:left;"><a href="/cfgd-uniapp3-docs/components/line.html#props">LineProps</a></td></tr></tbody></table><h3 id="slots" tabindex="-1">Tabs Slots <a class="header-anchor" href="#slots" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u540D\u79F0</th><th style="text-align:left;">\u53C2\u6570</th><th style="text-align:left;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:left;">item</td><td style="text-align:left;">({ index: number, item: TabItemProps, active: boolean })</td><td style="text-align:left;">\u6BCF\u4E00\u9879\u7684\u5185\u5BB9</td></tr></tbody></table><h3 id="events" tabindex="-1">Tabs Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u540D\u79F0</th><th style="text-align:left;">\u53C2\u6570</th><th style="text-align:left;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:left;">update:value</td><td style="text-align:left;">(value: string) =&gt; void</td><td style="text-align:left;">value change \u65F6\u89E6\u53D1</td></tr></tbody></table><h3 id="tab-item-events" tabindex="-1">TabItem Events <a class="header-anchor" href="#tab-item-events" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u540D\u79F0</th><th style="text-align:left;">\u53C2\u6570</th><th style="text-align:left;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:left;">click</td><td style="text-align:left;">(value: string) =&gt; void</td><td style="text-align:left;">\u70B9\u51FB\u4E8B\u4EF6</td></tr></tbody></table>`,18),o=[e];function p(r,c,D,y,F,d){return l(),t("div",null,o)}const A=s(n,[["render",p]]);export{C as __pageData,A as default};