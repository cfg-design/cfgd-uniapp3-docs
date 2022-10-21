import{_ as t,c as e,o as l,a}from"./app.9fb67079.js";const p=JSON.parse('{"title":"Textarea \u591A\u884C\u8F93\u5165\u6846","description":"","frontmatter":{"title":"Textarea \u591A\u884C\u8F93\u5165\u6846"},"headers":[{"level":3,"title":"\u57FA\u672C\u4F7F\u7528","slug":"\u57FA\u672C\u4F7F\u7528","link":"#\u57FA\u672C\u4F7F\u7528","children":[]},{"level":3,"title":"API","slug":"api","link":"#api","children":[]},{"level":3,"title":"Textarea Props","slug":"props","link":"#props","children":[]},{"level":3,"title":"Textarea Slots","slug":"slots","link":"#slots","children":[]},{"level":3,"title":"Textarea Methods","slug":"methods","link":"#methods","children":[]},{"level":3,"title":"Textarea Events","slug":"events","link":"#events","children":[]}],"relativePath":"components/textarea.md"}'),d={name:"components/textarea.md"},n=a(`<h1 id="textarea-\u591A\u884C\u8F93\u5165\u6846" tabindex="-1">Textarea \u591A\u884C\u8F93\u5165\u6846 <a class="header-anchor" href="#textarea-\u591A\u884C\u8F93\u5165\u6846" aria-hidden="true">#</a></h1><iframe src="https://cfg-design.github.io/cfgd-uniapp3/#/pages/textarea/index" style="width:375px;height:667px;"></iframe><h3 id="\u57FA\u672C\u4F7F\u7528" tabindex="-1">\u57FA\u672C\u4F7F\u7528 <a class="header-anchor" href="#\u57FA\u672C\u4F7F\u7528" aria-hidden="true">#</a></h3><div class="language-vue-html"><button class="copy"></button><span class="lang">template</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">c-textarea</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">value</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"></span></code></pre></div><h3 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h3><h3 id="props" tabindex="-1">Textarea Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u540D\u79F0</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u9ED8\u8BA4\u503C</th><th style="text-align:left;">\u7248\u672C</th><th style="text-align:left;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:left;">c</td><td style="text-align:left;">string</td><td style="text-align:left;">default</td><td style="text-align:left;"></td><td style="text-align:left;">\u914D\u7F6E\u540D\u3002<a href="/cfgd-uniapp3-docs/guide/props.html#config">\u4F7F\u7528\u8BF4\u660E</a></td></tr><tr><td style="text-align:left;">props</td><td style="text-align:left;">TextareaProps</td><td style="text-align:left;">undefined</td><td style="text-align:left;"></td><td style="text-align:left;">\u5168\u90E8 props \u3002 <a href="/cfgd-uniapp3-docs/guide/props.html">\u4F7F\u7528\u8BF4\u660E</a></td></tr><tr><td style="text-align:left;">c-class</td><td style="text-align:left;">HTMLAttributes[&#39;class&#39;]</td><td style="text-align:left;">undefined</td><td style="text-align:left;"></td><td style="text-align:left;">\u81EA\u5B9A\u4E49\u7C7B\u540D</td></tr><tr><td style="text-align:left;">c-style</td><td style="text-align:left;">HTMLAttributes[&#39;style&#39;]</td><td style="text-align:left;">undefined</td><td style="text-align:left;"></td><td style="text-align:left;">\u81EA\u5B9A\u4E49\u6837\u5F0F</td></tr><tr><td style="text-align:left;">textarea-class</td><td style="text-align:left;">HTMLAttributes[&#39;class&#39;]</td><td style="text-align:left;">undefined</td><td style="text-align:left;"></td><td style="text-align:left;">textarea \u7684\u81EA\u5B9A\u4E49\u7C7B\u540D</td></tr><tr><td style="text-align:left;">textarea-style</td><td style="text-align:left;">HTMLAttributes[&#39;style&#39;]</td><td style="text-align:left;">undefined</td><td style="text-align:left;"></td><td style="text-align:left;">textarea \u7684\u81EA\u5B9A\u4E49\u6837\u5F0F</td></tr><tr><td style="text-align:left;">value</td><td style="text-align:left;">string</td><td style="text-align:left;">undefined</td><td style="text-align:left;"></td><td style="text-align:left;">\u8F93\u5165\u6846\u7684\u5185\u5BB9</td></tr><tr><td style="text-align:left;">placeholder</td><td style="text-align:left;">string</td><td style="text-align:left;">undefined</td><td style="text-align:left;"></td><td style="text-align:left;">\u8F93\u5165\u6846\u4E3A\u7A7A\u65F6\u5360\u4F4D\u7B26</td></tr><tr><td style="text-align:left;">size</td><td style="text-align:left;">string | number</td><td style="text-align:left;">m</td><td style="text-align:left;"></td><td style="text-align:left;">\u5B57\u4F53\u5927\u5C0F\u3002 <a href="/cfgd-uniapp3-docs/guide/font-sizes.html">\u4F7F\u7528\u8BF4\u660E</a></td></tr><tr><td style="text-align:left;">height</td><td style="text-align:left;">string | number</td><td style="text-align:left;">undefined</td><td style="text-align:left;"></td><td style="text-align:left;">\u9AD8\u5EA6</td></tr><tr><td style="text-align:left;">readonly</td><td style="text-align:left;">boolean</td><td style="text-align:left;">undefined</td><td style="text-align:left;"></td><td style="text-align:left;">\u662F\u5426\u53EA\u8BFB</td></tr><tr><td style="text-align:left;">show-count</td><td style="text-align:left;">boolean</td><td style="text-align:left;">undefined</td><td style="text-align:left;"></td><td style="text-align:left;">\u662F\u5426\u663E\u793A\u8F93\u5165\u5B57\u6570\u7EDF\u8BA1</td></tr><tr><td style="text-align:left;">count-props</td><td style="text-align:left;">TextProps</td><td style="text-align:left;">undefined</td><td style="text-align:left;"></td><td style="text-align:left;"><a href="/cfgd-uniapp3-docs/components/text.html#props">TextProps</a></td></tr><tr><td style="text-align:left;">border</td><td style="text-align:left;">boolean</td><td style="text-align:left;">undefined</td><td style="text-align:left;"></td><td style="text-align:left;">\u662F\u5426\u663E\u793A\u8FB9\u6846</td></tr><tr><td style="text-align:left;">border-bottom</td><td style="text-align:left;">boolean</td><td style="text-align:left;">undefined</td><td style="text-align:left;"></td><td style="text-align:left;">\u662F\u5426\u663E\u793A\u4E0B\u8FB9\u6846</td></tr><tr><td style="text-align:left;">radius</td><td style="text-align:left;">string | number</td><td style="text-align:left;">undefined</td><td style="text-align:left;"></td><td style="text-align:left;">\u5706\u89D2\u503C\u3002 <a href="/cfgd-uniapp3-docs/guide/radiuses.html">\u4F7F\u7528\u8BF4\u660E</a></td></tr><tr><td style="text-align:left;">path</td><td style="text-align:left;">string</td><td style="text-align:left;">undefined</td><td style="text-align:left;"></td><td style="text-align:left;">CForm value \u5BF9\u8C61\u7684\u5C5E\u6027\u540D\uFF0C\u7528\u4E8E\u6821\u9A8C</td></tr><tr><td style="text-align:left;">no-feedback</td><td style="text-align:left;">boolean</td><td style="text-align:left;">undefined</td><td style="text-align:left;"></td><td style="text-align:left;">\u662F\u5426\u4E0D\u5C55\u793A\u6821\u9A8C\u53CD\u9988</td></tr><tr><td style="text-align:left;">disabled</td><td style="text-align:left;">boolean</td><td style="text-align:left;">undefined</td><td style="text-align:left;"></td><td style="text-align:left;">\u662F\u5426\u7981\u7528</td></tr><tr><td style="text-align:left;">maxlength</td><td style="text-align:left;">number</td><td style="text-align:left;">140</td><td style="text-align:left;"></td><td style="text-align:left;">\u6700\u5927\u8F93\u5165\u957F\u5EA6\uFF0C\u8BBE\u7F6E\u4E3A -1 \u7684\u65F6\u5019\u4E0D\u9650\u5236\u6700\u5927\u957F\u5EA6</td></tr><tr><td style="text-align:left;">focus</td><td style="text-align:left;">boolean</td><td style="text-align:left;">undefined</td><td style="text-align:left;"></td><td style="text-align:left;">\u83B7\u53D6\u7126\u70B9\u3002\u5728 H5 \u5E73\u53F0\u80FD\u5426\u805A\u7126\u4EE5\u53CA\u8F6F\u952E\u76D8\u662F\u5426\u8DDF\u968F\u5F39\u51FA\uFF0C\u53D6\u51B3\u4E8E\u5F53\u524D\u6D4F\u89C8\u5668\u672C\u8EAB\u7684\u5B9E\u73B0\u3002nvue \u9875\u9762\u4E0D\u652F\u6301\uFF0C\u9700\u4F7F\u7528\u7EC4\u4EF6\u7684 focus()\u3001blur() \u65B9\u6CD5\u63A7\u5236\u7126\u70B9</td></tr><tr><td style="text-align:left;">auto-height</td><td style="text-align:left;">boolean</td><td style="text-align:left;">false</td><td style="text-align:left;"></td><td style="text-align:left;">\u662F\u5426\u81EA\u52A8\u589E\u9AD8\uFF0C\u8BBE\u7F6Eauto-height\u65F6\uFF0Cstyle.height\u4E0D\u751F\u6548</td></tr></tbody></table><ul><li>\u66F4\u591A Props \u8BF7\u67E5\u770B <a href="https://uniapp.dcloud.net.cn/component/textarea.html#textarea" target="_blank" rel="noreferrer">uniapp textarea</a></li></ul><h3 id="slots" tabindex="-1">Textarea Slots <a class="header-anchor" href="#slots" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u540D\u79F0</th><th style="text-align:left;">\u53C2\u6570</th><th style="text-align:left;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:left;">count</td><td style="text-align:left;">()</td><td style="text-align:left;">\u81EA\u5B9A\u4E49\u7EDF\u8BA1\u5185\u5BB9</td></tr></tbody></table><h3 id="methods" tabindex="-1">Textarea Methods <a class="header-anchor" href="#methods" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u540D\u79F0</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:left;">focus</td><td style="text-align:left;">() =&gt; void</td><td style="text-align:left;">\u83B7\u53D6\u7126\u70B9</td></tr></tbody></table><h3 id="events" tabindex="-1">Textarea Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u540D\u79F0</th><th style="text-align:left;">\u53C2\u6570</th><th style="text-align:left;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:left;">update:value</td><td style="text-align:left;">(value: string) =&gt; void</td><td style="text-align:left;">value change \u65F6\u89E6\u53D1</td></tr><tr><td style="text-align:left;">input</td><td style="text-align:left;">(event: any) =&gt; void</td><td style="text-align:left;"><a href="https://uniapp.dcloud.net.cn/component/textarea.html#textarea" target="_blank" rel="noreferrer">\u8BF4\u660E</a></td></tr><tr><td style="text-align:left;">focus</td><td style="text-align:left;">(event: any) =&gt; void</td><td style="text-align:left;"><a href="https://uniapp.dcloud.net.cn/component/textarea.html#textarea" target="_blank" rel="noreferrer">\u8BF4\u660E</a></td></tr><tr><td style="text-align:left;">blur</td><td style="text-align:left;">(event: any) =&gt; void</td><td style="text-align:left;"><a href="https://uniapp.dcloud.net.cn/component/textarea.html#textarea" target="_blank" rel="noreferrer">\u8BF4\u660E</a></td></tr><tr><td style="text-align:left;">confirm</td><td style="text-align:left;">(event: any) =&gt; void</td><td style="text-align:left;"><a href="https://uniapp.dcloud.net.cn/component/textarea.html#textarea" target="_blank" rel="noreferrer">\u8BF4\u660E</a></td></tr><tr><td style="text-align:left;">keyboardheightchange</td><td style="text-align:left;">(event: any) =&gt; void</td><td style="text-align:left;"><a href="https://uniapp.dcloud.net.cn/component/textarea.html#textarea" target="_blank" rel="noreferrer">\u8BF4\u660E</a></td></tr><tr><td style="text-align:left;">linechange</td><td style="text-align:left;">(event: any) =&gt; void</td><td style="text-align:left;"><a href="https://uniapp.dcloud.net.cn/component/textarea.html#textarea" target="_blank" rel="noreferrer">\u8BF4\u660E</a></td></tr></tbody></table>`,14),s=[n];function i(r,f,g,x,y,o){return l(),e("div",null,s)}const c=t(d,[["render",i]]);export{p as __pageData,c as default};