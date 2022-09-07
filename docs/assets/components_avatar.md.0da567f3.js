import{_ as t,c as l,o as s,a as e}from"./app.2d45cadf.js";const f=JSON.parse('{"title":"Avatar \u5934\u50CF","description":"","frontmatter":{"title":"Avatar \u5934\u50CF"},"headers":[{"level":3,"title":"\u57FA\u672C\u4F7F\u7528","slug":"\u57FA\u672C\u4F7F\u7528","link":"#\u57FA\u672C\u4F7F\u7528","children":[]},{"level":3,"title":"\u5706\u89D2\u503C","slug":"\u5706\u89D2\u503C","link":"#\u5706\u89D2\u503C","children":[]},{"level":3,"title":"API","slug":"api","link":"#api","children":[]},{"level":3,"title":"Avatar Props","slug":"props","link":"#props","children":[]},{"level":3,"title":"AvatarText Props","slug":"avatar-text-props","link":"#avatar-text-props","children":[]}],"relativePath":"components/avatar.md"}'),a={name:"components/avatar.md"},n=e(`<h1 id="avatar-\u5934\u50CF" tabindex="-1">Avatar \u5934\u50CF <a class="header-anchor" href="#avatar-\u5934\u50CF" aria-hidden="true">#</a></h1><iframe src="https://cfg-design.github.io/cfgd-uniapp3/#/pages/avatar/index" style="width:375px;height:667px;"></iframe><h3 id="\u57FA\u672C\u4F7F\u7528" tabindex="-1">\u57FA\u672C\u4F7F\u7528 <a class="header-anchor" href="#\u57FA\u672C\u4F7F\u7528" aria-hidden="true">#</a></h3><div class="language-vue-html"><button class="copy"></button><span class="lang">template</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">c-avatar</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">scr</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">size</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">160</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">round</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">c-avatar-text</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">text</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">A</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">size</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">160</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"></span></code></pre></div><h3 id="\u5706\u89D2\u503C" tabindex="-1">\u5706\u89D2\u503C <a class="header-anchor" href="#\u5706\u89D2\u503C" aria-hidden="true">#</a></h3><ul><li><a href="/cfgd-uniapp3-docs/guide/radiuses.html">\u5706\u89D2\u503C\u7684\u4F7F\u7528</a></li></ul><div class="language-vue-html"><button class="copy"></button><span class="lang">template</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">c-avatar</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">scr</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">radius</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">s</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">c-avatar</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">scr</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">radius</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">l</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">c-avatar</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">scr</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">radius</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">10</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">c-avatar</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">scr</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">round</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">c-avatar</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">scr</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">radius</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">xs s m l</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">c-avatar-text</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">text</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">A</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">radius</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">xs s m l</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"></span></code></pre></div><h3 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h3><h3 id="props" tabindex="-1">Avatar Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u540D\u79F0</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u9ED8\u8BA4\u503C</th><th style="text-align:left;">\u7248\u672C</th><th style="text-align:left;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:left;">c</td><td style="text-align:left;">string</td><td style="text-align:left;">default</td><td style="text-align:left;"></td><td style="text-align:left;">\u914D\u7F6E\u540D\u3002<a href="/cfgd-uniapp3-docs/guide/props.html#config">\u4F7F\u7528\u8BF4\u660E</a></td></tr><tr><td style="text-align:left;">props</td><td style="text-align:left;">AvatarProps</td><td style="text-align:left;">undefined</td><td style="text-align:left;"></td><td style="text-align:left;">\u5168\u90E8 props \u3002 <a href="/cfgd-uniapp3-docs/guide/props.html">\u4F7F\u7528\u8BF4\u660E</a></td></tr><tr><td style="text-align:left;">image-props</td><td style="text-align:left;">ImageProps</td><td style="text-align:left;">undefined</td><td style="text-align:left;"></td><td style="text-align:left;">CAvatar \u7EC4\u4EF6\u662F\u5F15\u7528 CImage \u5B9E\u73B0\u7684\u3002<a href="/cfgd-uniapp3-docs/components/image.html#props">ImageProps</a></td></tr><tr><td style="text-align:left;">src</td><td style="text-align:left;">string</td><td style="text-align:left;">undefined</td><td style="text-align:left;"></td><td style="text-align:left;">\u56FE\u7247\u8D44\u6E90\u5730\u5740</td></tr><tr><td style="text-align:left;">size</td><td style="text-align:left;">string | number</td><td style="text-align:left;">undefined</td><td style="text-align:left;"></td><td style="text-align:left;">\u5927\u5C0F\u3002 <a href="/cfgd-uniapp3-docs/guide/font-sizes.html">\u4F7F\u7528\u8BF4\u660E</a></td></tr><tr><td style="text-align:left;">radius</td><td style="text-align:left;">string | number</td><td style="text-align:left;">undefined</td><td style="text-align:left;"></td><td style="text-align:left;">\u5706\u89D2\u503C\u3002 <a href="/cfgd-uniapp3-docs/guide/radiuses.html">\u4F7F\u7528\u8BF4\u660E</a></td></tr><tr><td style="text-align:left;">round</td><td style="text-align:left;">boolean</td><td style="text-align:left;">undefined</td><td style="text-align:left;"></td><td style="text-align:left;">\u662F\u5426\u663E\u793A\u4E3A\u5706\u5F62</td></tr></tbody></table><h3 id="avatar-text-props" tabindex="-1">AvatarText Props <a class="header-anchor" href="#avatar-text-props" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u540D\u79F0</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u9ED8\u8BA4\u503C</th><th style="text-align:left;">\u7248\u672C</th><th style="text-align:left;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:left;">c</td><td style="text-align:left;">string</td><td style="text-align:left;">default</td><td style="text-align:left;"></td><td style="text-align:left;">\u914D\u7F6E\u540D\u3002<a href="/cfgd-uniapp3-docs/guide/props.html#config">\u4F7F\u7528\u8BF4\u660E</a></td></tr><tr><td style="text-align:left;">props</td><td style="text-align:left;">AvatarTextProps</td><td style="text-align:left;">undefined</td><td style="text-align:left;"></td><td style="text-align:left;">\u5168\u90E8 props \u3002 <a href="/cfgd-uniapp3-docs/guide/props.html">\u4F7F\u7528\u8BF4\u660E</a></td></tr><tr><td style="text-align:left;">c-class</td><td style="text-align:left;">HTMLAttributes[&#39;class&#39;]</td><td style="text-align:left;">undefined</td><td style="text-align:left;"></td><td style="text-align:left;">\u81EA\u5B9A\u4E49\u7C7B\u540D</td></tr><tr><td style="text-align:left;">c-style</td><td style="text-align:left;">HTMLAttributes[&#39;style&#39;]</td><td style="text-align:left;">undefined</td><td style="text-align:left;"></td><td style="text-align:left;">\u81EA\u5B9A\u4E49\u6837\u5F0F</td></tr><tr><td style="text-align:left;">color</td><td style="text-align:left;">string</td><td style="text-align:left;">undefined</td><td style="text-align:left;"></td><td style="text-align:left;">\u80CC\u666F\u989C\u8272\u3002 <a href="/cfgd-uniapp3-docs/guide/colors.html">\u4F7F\u7528\u8BF4\u660E</a></td></tr><tr><td style="text-align:left;">text</td><td style="text-align:left;">string</td><td style="text-align:left;">undefined</td><td style="text-align:left;"></td><td style="text-align:left;">\u5934\u50CF\u6587\u5B57</td></tr><tr><td style="text-align:left;">text-color</td><td style="text-align:left;">string</td><td style="text-align:left;">undefined</td><td style="text-align:left;"></td><td style="text-align:left;">\u5934\u50CF\u6587\u5B57\u7684\u989C\u8272\u3002<a href="/cfgd-uniapp3-docs/guide/colors.html">\u4F7F\u7528\u8BF4\u660E</a></td></tr><tr><td style="text-align:left;">text-props</td><td style="text-align:left;">TextProps</td><td style="text-align:left;">undefined</td><td style="text-align:left;"></td><td style="text-align:left;"><a href="/cfgd-uniapp3-docs/components/text.html#props">TextProps</a></td></tr><tr><td style="text-align:left;">size</td><td style="text-align:left;">string | number</td><td style="text-align:left;">undefined</td><td style="text-align:left;"></td><td style="text-align:left;">\u5934\u50CF\u5927\u5C0F\u3002<a href="/cfgd-uniapp3-docs/guide/font-sizes.html">\u4F7F\u7528\u8BF4\u660E</a></td></tr><tr><td style="text-align:left;">radius</td><td style="text-align:left;">string | number</td><td style="text-align:left;">undefined</td><td style="text-align:left;"></td><td style="text-align:left;">\u5706\u89D2\u503C\u3002 <a href="/cfgd-uniapp3-docs/guide/radiuses.html">\u4F7F\u7528\u8BF4\u660E</a></td></tr><tr><td style="text-align:left;">round</td><td style="text-align:left;">boolean</td><td style="text-align:left;">undefined</td><td style="text-align:left;"></td><td style="text-align:left;">\u662F\u5426\u663E\u793A\u4E3A\u5706\u5F62</td></tr></tbody></table>`,12),o=[n];function p(r,d,i,c,y,D){return s(),l("div",null,o)}const F=t(a,[["render",p]]);export{f as __pageData,F as default};
