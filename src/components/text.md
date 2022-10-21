---
title: Text 文本
---

# Text 文本

<iframe src="https://cfg-design.github.io/cfgd-uniapp3/#/pages/text/index" style="width: 375px; height: 667px" />

### 基本使用

```vue-html
<c-text text="文本内容" />
<c-text>文本内容</text> <!-- 不推荐写法。h5 正常，其它端有兼容问题。 -->
<c-text c="h1" text="文本内容" />
<c-text c="h2" text="文本内容" />
<c-text c="h3" text="文本内容" />
<c-text c="h4" text="文本内容" />
<c-text c="h5" text="文本内容" />
<c-text c="h6" text="文本内容" />
```

### 颜色
* [颜色的使用](/guide/colors.html)

```vue-html
<c-text color="primary" text="文本内容" />
<c-text color="error" text="文本内容" />
<c-text color="success" text="文本内容" />
<c-text color="warning" text="文本内容" />
<c-text color="info" text="文本内容" />
<c-text color="#7546c9" text="文本内容" />
```

### 大小
* [大小的使用](/guide/font-sizes.html)

```vue-html
<c-text size="s" text="S 文本" />
<c-text size="m" text="M 文本" />
<c-text size="l" text="L 文本" />
<c-text size="100" text="100 文本" />
```

### API

### Text Props {#props}

| 名称             | 类型                     | 默认值             | 版本           | 说明           |
|:----------------|:------------------------|:------------------|:--------------|:--------------|
| c               | string                  | default           |               | 配置名。[使用说明](/guide/props.html#config)    |
| props           | TextProps               | undefined         |               | 全部 props 。 [使用说明](/guide/props.html) |
| c-class         | HTMLAttributes['class'] | undefined         |               | 自定义类名 |
| c-style         | HTMLAttributes['style'] | undefined         |               | 自定义样式 |
| text            | any                     | undefined         |               | 显示文字   |
| color           | string                  | main              |               | 字体颜色。 [使用说明](/guide/colors.html)   |
| size            | string \| number        | m                 |               | 字体大小。 [使用说明](/guide/font-sizes.html)   |
| strong          | boolean                 | false             |               | 是否粗体   |
| italic          | boolean                 | false             |               | 是否斜体   |
| underline       | boolean                 | false             |               | 是否显示下划线   |
| del             | boolean                 | false             |               | 是否显示删除线   |
| lines           | number \| string        | undefined         |               | 限制行数。内容超出显示省略号   |
