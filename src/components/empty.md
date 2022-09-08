---
title: Empty 无内容
---

# Empty 无内容

<iframe src="https://cfg-design.github.io/cfgd-uniapp3/#/pages/empty/index" style="width: 375px; height: 667px" />

### 基本使用

```vue-html
<c-empty />

<c-empty :c-style="[{ minHeight: '100vw' }]" />

<c-empty c="search" :button-props="{ text: '返回首页' }" />

<c-empty :image="src" />
```

### API

### Empty Props {#props}

| 名称             | 类型                     | 默认值             | 版本           | 说明           |
|:----------------|:------------------------|:------------------|:--------------|:--------------|
| c               | string                  | default           |               | 配置名。[使用说明](/guide/props.html#config)    |
| props           | EmptyProps               | undefined         |               | 全部 props 。 [使用说明](/guide/props.html) |
| c-class         | HTMLAttributes['class'] | undefined         |               | 自定义类名 |
| c-style         | HTMLAttributes['style'] | undefined         |               | 自定义样式 |
| icon            | string                  | undefined         |               | 图标名； icon 、 image 二选一， image 优先 |
| icon-props      | IconProps               | undefined         |               | [IconProps](/components/icon.html#props)  |
| image           | string                  | undefined         |               | 图片路径； icon 、 image 二选一， image 优先 |
| image-props     | ImageProps              | undefined         |               | [ImageProps](/components/image.html#props)  |
| text            | string                  | undefined         |               | 文字 |
| text-props      | TextProps               | undefined         |               | [TextProps](/components/text.html#props)  |
| button-props    | ButtonProps             | undefined         |               | [ButtomProps](/components/button.html#props)  |


### Empty Slots {#slots}

| 名称             | 参数      | 说明           |
|:----------------|:--------- |:--------------|
| default         | ()        | 后续内容     |

### Empty Events {#events}

| 名称             | 参数                     | 说明           |
|:----------------|:-------------------------|:--------------|
| click:button    | (payload: any) => void   | 按钮点击事件      |
