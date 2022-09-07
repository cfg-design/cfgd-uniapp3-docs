---
title: Cell 单元格
---

# Cell 单元格

<iframe src="https://cfg-design.github.io/cfgd-uniapp3/#/pages/cell/index" style="width: 375px; height: 667px" />

### 基本使用

```vue-html
<c-cell
  icon="image-2-fill"
  label="label"
  value="value"
  right-icon="arrow-right-s-line"
  @click="onClick"
/>
```

### API

### Cell Props {#props}

| 名称               | 类型                    | 默认值             | 版本           | 说明           |
|:------------------|:------------------------|:------------------|:--------------|:--------------|
| c                 | string                  | default           |               | 配置名。[使用说明](/guide/props.html#config)    |
| props             | CellProps               | undefined         |               | 全部 props 。 [使用说明](/guide/props.html) |
| c-class           | HTMLAttributes['class'] | undefined         |               | 自定义类名 |
| c-style           | HTMLAttributes['style'] | undefined         |               | 自定义样式 |
| icon              | string                  | undefined         |               | 左边图标名称或代码  |
| icon-props        | IconProps               | undefined         |               | [IconProps](/components/icon.html#props)   |
| image             | string                  | undefined         |               | 左边图片链接  |
| image-props       | ImageProps              | undefined         |               | [ImageProps](/components/image.html#props)   |
| avatar            | string                  | undefined         |               | 左边头像链接  |
| avatar-props      | AvatarProps             | undefined         |               | [AvatarProps](/components/avatar.html#props)   |
| avatar-text       | string                  | undefined         |               | 左边头像文字  |
| avatar-text-props | AvatarTextProps         | undefined         |               | [AvatarTextProps](/components/avatar.html#avatar-text-props)   |
| label             | string                  | undefined         |               | 左边标签文字  |
| label-props       | TextProps               | undefined         |               | [TextProps](/components/text.html#props)   |
| brief             | string                  | undefined         |               | 描述文案。在左边标签下方  |
| brief-props       | TextProps               | undefined         |               | [TextProps](/components/text.html#props)   |
| value             | string                  | undefined         |               | 右边文字  |
| value-props       | TextProps               | undefined         |               | [TextProps](/components/text.html#props)   |
| right-icon        | string                  | undefined         |               | 右图标名称或代码  |
| right-icon-props  | IconProps               | undefined         |               | [IconProps](/components/icon.html#props)   |
| no-click          | boolean                 | undefined         |               | 无点击反馈  |

### Cell Slots {#slots}

| 名称             | 参数      | 说明           |
|:----------------|:--------- |:--------------|
| default         | ()        | 右边 value 的内容 |
| left            | ()        | 左边的内容 |
| label           | ()        | 左边 label 的内容 |
| brief           | ()        | 左边 brief 的内容， 在 label 下方 |
| right           | ()        | 右边的内容 |
