---
title: Spin 加载
---

# Spin 加载

<iframe src="https://cfg-design.github.io/cfgd-uniapp3/#/pages/spin/index" style="width: 375px; height: 667px" />

### 基本使用

```vue-html
<c-spin />
<c-spin tip="加载中..." />
```

### 颜色
* [颜色的使用](/guide/colors.html)

```vue-html
<c-spin color="primary" />
<c-spin color="error" />
<c-spin color="success" />
<c-spin color="warning" />
<c-spin color="info" />
<c-spin color="#7546c9" />
```

### 大小
* [大小的使用](/guide/font-sizes.html)

```vue-html
<c-spin size="s" />
<c-spin size="m" />
<c-spin size="l" />
<c-spin size="100" />
```

### 图标

```vue-html
<c-spin icon="add-line" />
<c-spin icon="subtract-line" />
<c-spin icon="checkbox-blank-fill" />
```

### API

### Spin Props {#props}

| 名称             | 类型                            | 默认值             | 版本           | 说明           |
|:----------------|:--------------------------------|:------------------|:--------------|:--------------|
| c               | string                          | default           |               | 配置名。[使用说明](/guide/props.html#config)    |
| props           | SpinProps                       | undefined         |               | 全部 props 。 [使用说明](/guide/props.html) |
| c-class         | HTMLAttributes['class']         | undefined         |               | 自定义类名 |
| c-style         | HTMLAttributes['style']         | undefined         |               | 自定义样式 |
| color           | string                          | undefined         |               | 颜色。 [使用说明](/guide/colors.html)   |
| size            | string \| number                | m                 |               | 大小。 [使用说明](/guide/font-sizes.html)   |
| icon            | string                          | undefined         |               | 旋转图标 |
| icon-props      | IconProps                       | undefined         |               | [IconProps](/components/icon.html#props)  |
| tip             | string                          | undefined         |               | 文字  |
| tip-props       | TextProps                       | undefined         |               | [TextProps](/components/text.html#props)  |
| direction       | CSSProperties['flex-direction'] | row               |               | 图标和文字排列。 [MDN Web Docs](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-direction) |
