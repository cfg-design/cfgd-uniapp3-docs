---
title: Card 卡片
---

# Card 卡片

<iframe src="https://cfg-design.github.io/cfgd-uniapp3/#/pages/card/index" style="width: 375px; height: 667px" />

### 基本使用

```vue-html
<c-card>
  <c-text text="card" />
</c-card>

<c-card title="title" extra="extra">
  <c-text text="card" />
</c-card>

<c-card title="title">
  <c-text text="body" />
  <template #extra>
    <c-text text="#extra" />
  </template>
</c-card>

<c-card>
  <template #header>
    <c-text text="#header" />
  </template>
  <c-text text="body" />
  <template #footer>
    <c-text text="#footer" />
  </template>
</c-card>
```

### API

### Card Props {#props}

| 名称             | 类型                    | 默认值             | 版本           | 说明           |
|:----------------|:------------------------|:------------------|:--------------|:--------------|
| c               | string                  | default           |               | 配置名。[使用说明](/guide/props.html#config)    |
| props           | CardProps               | undefined         |               | 全部 props 。 [使用说明](/guide/props.html) |
| c-class         | HTMLAttributes['class'] | undefined         |               | 自定义类名 |
| c-style         | HTMLAttributes['style'] | undefined         |               | 自定义样式 |
| header-class    | HTMLAttributes['class'] | undefined         |               | header 自定义类名 |
| header-style    | HTMLAttributes['style'] | undefined         |               | header 自定义样式 |
| body-class      | HTMLAttributes['class'] | undefined         |               | body 自定义类名 |
| body-style      | HTMLAttributes['style'] | undefined         |               | body 自定义样式 |
| footer-class    | HTMLAttributes['class'] | undefined         |               | footer 自定义类名 |
| footer-style    | HTMLAttributes['style'] | undefined         |               | footer 自定义样式 |
| size            | string \| number        | undefined         |               | 大小。[使用说明](/guide/font-sizes.html)  |
| title           | string                  | undefined         |               | 标题 |
| title-props     | TextProps               | undefined         |               | [TextProps](/components/text.html#props)  |
| extra           | string                  | undefined         |               | 标题右边的文字 |
| extra-props     | TextProps               | undefined         |               | [TextProps](/components/text.html#props)  |
| radius          | string \| number        | undefined         |               | 圆角值。 [使用说明](/guide/radiuses.html)  |
