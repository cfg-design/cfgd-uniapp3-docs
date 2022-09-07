---
title: Badge 徽标
---

# Badge 徽标

<iframe src="https://cfg-design.github.io/cfgd-uniapp3/#/pages/badge/index" style="width: 375px; height: 667px" />

### 基本使用

```vue-html
<c-badge text="徽标" />
<c-badge size="xs" text="最小微标" />
```

### 颜色
* [颜色的使用](/guide/colors.html)

```vue-html
<c-badge color="primary" text="徽标" />
<c-badge color="error" text="徽标" />
<c-badge color="success" text="徽标" />
<c-badge color="warning" text="徽标" />
<c-badge color="info" text="徽标" />
<c-badge color="#7546c9" text="徽标" />
```

### 圆角值
* [圆角值的使用](/guide/radiuses.html)

```vue-html
<c-badge radius="s" text="徽标" />
<c-badge radius="m" text="徽标" />
<c-badge radius="l" text="徽标" />
<c-badge radius="10" text="徽标" />
<c-badge text="圆角徽标" round />
<c-badge radius="xs s m l" text="各角不同的徽标" />
```

### API

### Badge Props {#props}

| 名称             | 类型                     | 默认值             | 版本           | 说明           |
|:----------------|:------------------------|:------------------|:--------------|:--------------|
| c               | string                  | default           |               | 配置名。[使用说明](/guide/props.html#config)    |
| props           | BadgeProps              | undefined         |               | 全部 props 。 [使用说明](/guide/props.html) |
| text-props      | TextProps               | undefined         |               | CBadge 组件是引用 CText 实现的。[TextProps](/components/text.html#props) |
| text            | string                  | undefined         |               | 文字   |
| text-color      | string                  | undefined         |               | 文字的颜色。 [使用说明](/guide/colors.html)  |
| color           | string                  | undefined         |               | 图标颜色。 [使用说明](/guide/colors.html)   |
| size            | string \| number        | undefined         |               | 图标大小。 [使用说明](/guide/font-sizes.html)   |
| radius          | string \| number        | undefined         |               | 圆角值。 [使用说明](/guide/radiuses.html)  |
| round           | boolean                 | undefined         |               | 是否显示为圆角  |
