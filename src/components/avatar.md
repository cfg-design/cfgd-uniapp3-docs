---
title: Avatar 头像
---

# Avatar 头像

<iframe src="https://cfg-design.github.io/cfgd-uniapp3/#/pages/avatar/index" style="width: 375px; height: 667px" />

### 基本使用

```vue-html
<c-avatar :src="scr" size="160" round />
<c-avatar-text text="A" size="160" />
```

### 圆角值
* [圆角值的使用](/guide/radiuses.html)

```vue-html
<c-avatar :src="scr" radius="s" />
<c-avatar :src="scr" radius="l" />
<c-avatar :src="scr" radius="10" />
<c-avatar :src="scr" round />
<c-avatar :src="scr" radius="xs s m l" />
<c-avatar-text text="A" radius="xs s m l" />
```

### API

### Avatar Props {#props}

| 名称             | 类型                    | 默认值             | 版本           | 说明           |
|:----------------|:------------------------|:------------------|:--------------|:--------------|
| c               | string                  | default           |               | 配置名。[使用说明](/guide/props.html#config)    |
| props           | AvatarProps             | undefined         |               | 全部 props 。 [使用说明](/guide/props.html) |
| image-props     | ImageProps              | undefined         |               | CAvatar 组件是引用 CImage 实现的。[ImageProps](/components/image.html#props) |
| src             | string                  | undefined         |               | 图片资源地址   |
| size            | string \| number        | undefined         |               | 大小。  |
| radius          | string \| number        | undefined         |               | 圆角值。 [使用说明](/guide/radiuses.html)  |
| round           | boolean                 | undefined         |               | 是否显示为圆形  |

### AvatarText Props {#avatar-text-props}

| 名称             | 类型                    | 默认值             | 版本           | 说明           |
|:----------------|:------------------------|:------------------|:--------------|:--------------|
| c               | string                  | default           |               | 配置名。[使用说明](/guide/props.html#config)    |
| props           | AvatarTextProps         | undefined         |               | 全部 props 。 [使用说明](/guide/props.html) |
| c-class         | HTMLAttributes['class'] | undefined         |               | 自定义类名 |
| c-style         | HTMLAttributes['style'] | undefined         |               | 自定义样式 |
| color           | string                  | undefined         |               | 背景颜色。 [使用说明](/guide/colors.html)  |
| text            | string                  | undefined         |               | 头像文字  |
| text-color      | string                  | undefined         |               | 头像文字的颜色。[使用说明](/guide/colors.html)  |
| text-props      | TextProps               | undefined         |               | [TextProps](/components/text.html#props)  |
| size            | string \| number        | undefined         |               | 头像大小。[使用说明](/guide/font-sizes.html) |
| radius          | string \| number        | undefined         |               | 圆角值。 [使用说明](/guide/radiuses.html)  |
| round           | boolean                 | undefined         |               | 是否显示为圆形  |
