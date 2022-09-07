---
title: Tag 标签
---

# Tag 标签

<iframe src="https://cfg-design.github.io/cfgd-uniapp3/#/pages/tag/index" style="width: 375px; height: 667px" />

### 基本使用

```vue-html
<c-tag text="标签" />
```

### 颜色
* [颜色的使用](/guide/colors.html)

```vue-html
<c-tag color="primary" text="标签" />
<c-tag color="error" text="标签" />
<c-tag color="success" text="标签" />
<c-tag color="warning" text="标签" />
<c-tag color="info" text="标签" />
<c-tag color="#7546c9" text="标签" />
```

### 圆角值
* [圆角值的使用](/guide/radiuses.html)

```vue-html
<c-tag radius="s" text="标签" />
<c-tag radius="m" text="标签" />
<c-tag radius="l" text="标签" />
<c-tag radius="10" text="标签" />
<c-tag text="圆角标签" round />
<c-tag radius="xs s m l" text="各角不同的标签" />
```

### API

### Tag Props {#props}

| 名称             | 类型                     | 默认值             | 版本           | 说明           |
|:----------------|:------------------------|:------------------|:--------------|:--------------|
| c                | string                  | default           |               | 配置名。[使用说明](/guide/props.html#config)    |
| props            | TagProps                | undefined         |               | 全部 props 。 [使用说明](/guide/props.html) |
| c-class          | HTMLAttributes['class'] | undefined         |               | 自定义类名 |
| c-style          | HTMLAttributes['style'] | undefined         |               | 自定义样式 |
| color            | string                  | undefined         |               | 图标颜色。 [使用说明](/guide/colors.html)   |
| size             | string \| number        | undefined         |               | 图标大小。 [使用说明](/guide/font-sizes.html)   |
| text             | string                  | undefined         |               | 文字   |
| text-color       | string                  | undefined         |               | 文字的颜色。 [使用说明](/guide/colors.html)  |
| text-props       | TextProps               | undefined         |               | [TextProps](/components/text.html#props) |
| icon             | string                  | undefined         |               | 图标  |
| icon-props       | IconProps               | undefined         |               | [IconProps](/components/icon.html#props)  |
| closable         | boolean                 | undefined         |               | 是否可关闭  |
| close-icon-props | IconProps               | undefined         |               | [IconProps](/components/icon.html#props)  |
| radius           | string \| number        | undefined         |               | 圆角值。 [使用说明](/guide/radiuses.html)  |
| round            | boolean                 | undefined         |               | 是否显示为圆角  |
| plain            | boolean                 | undefined         |               | 是否镂空  |





