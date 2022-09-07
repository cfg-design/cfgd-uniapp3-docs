---
title: Line 线条
---

# Line 线条

<iframe src="https://cfg-design.github.io/cfgd-uniapp3/#/pages/line/index" style="width: 375px; height: 667px" />

### 基本使用

```vue-html
<c-line />
```

### 颜色
* [颜色的使用](/guide/colors.html)

```vue-html
<c-line color="primary" />
<c-line color="error" />
<c-line color="success" />
<c-line color="warning" />
<c-line color="info" />
<c-line color="#7546c9" />
```

### 长度粗细
length 为线条长度； width 为线条粗细。不能理解为元素的高宽。

```vue-html
<c-line length="200rpx" width="20rpx" />
```

### API

### Line Props {#props}

| 名称             | 类型                         | 默认值             | 版本           | 说明           |
|:----------------|:-----------------------------|:------------------|:--------------|:--------------|
| c               | string                       | default           |               | 配置名。[使用说明](/guide/props.html#config)    |
| props           | LineProps                    | undefined         |               | 全部 props 。 [使用说明](/guide/props.html) |
| c-class         | HTMLAttributes['class']      | undefined         |               | 自定义类名 |
| c-style         | HTMLAttributes['style']      | undefined         |               | 自定义样式 |
| length          | number \| string             | undefined         |               | 线条长度   |
| width           | number \| string             | undefined         |               | 线条粗细   |
| color           | string                       | #ebedf0           |               | 线条颜色。 [使用说明](/guide/colors.html)    |
| border-style    | CSSProperties['borderStyle'] | undefined         |               | 线条样式。[MDN Web Docs](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-style#%E5%8F%96%E5%80%BC)   |
| vertical        | boolean                      | undefined         |               | 是否垂直   |
| round           | boolean                      | undefined         |               | 是否显示为圆角  |
