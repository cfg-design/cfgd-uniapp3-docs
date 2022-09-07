---
title: Image 图片
---

# Image 图片

<iframe src="https://cfg-design.github.io/cfgd-uniapp3/#/pages/image/index" style="width: 375px; height: 667px" />

### 基本使用

```vue-html
<c-image :src="scr" width="320" height="240" />
```

### 圆角值
* [圆角值的使用](/guide/radiuses.html)

```vue-html
<c-image width="320" height="240" radius="s" :src="scr" />
<c-image width="320" height="240" radius="m" :src="scr" />
<c-image width="320" height="240" radius="l" :src="scr" />
<c-image width="320" height="240" radius="10" :src="scr" />
<c-image width="320" height="240" round :src="scr" />
<c-image width="320" height="240" radius="xs s m l" :src="scr" />
```

### API

### Image Props {#props}

| 名称             | 类型                    | 默认值             | 版本           | 说明           |
|:----------------|:------------------------|:------------------|:--------------|:--------------|
| c               | string                  | default           |               | 配置名。[使用说明](/guide/props.html#config)    |
| props           | ImageProps              | undefined         |               | 全部 props 。 [使用说明](/guide/props.html) |
| c-class         | HTMLAttributes['class'] | undefined         |               | 自定义类名 |
| c-style         | HTMLAttributes['style'] | undefined         |               | 自定义样式 |
| image-class     | HTMLAttributes['class'] | undefined         |               | image 元素的自定义类名 |
| image-style     | HTMLAttributes['style'] | undefined         |               | image 元素的自定义样式 |
| src             | string                  | undefined         |               | 图片资源地址  |
| mode            | string                  | undefined         |               | 图片裁剪、缩放的模式。[查看详情](https://uniapp.dcloud.net.cn/component/image.html)  |
| width           | string \| number        | undefined         |               | 图片宽度  |
| height          | string \| number        | undefined         |               | 图片高度  |
| radius          | string \| number        | undefined         |               | 圆角值。 [使用说明](/guide/radiuses.html)  |
| round           | boolean                 | undefined         |               | 是否显示为圆角  |
| icon-props      | IconProps               | undefined         |               | src 为空时，显示的图标。[IconProps](/components/icon.html#props)  |
| error-props     | IconProps               | undefined         |               | 加载图片失败时，显示的图标。[IconProps](/components/icon.html#props)   |
| spin-props      | SpinProps               | undefined         |               | 加载。[SpinProps](/components/spin.html#props)   |
| no-spin         | boolean                 | undefined         |               | 不显示 spin 加载。  |

* 更多 Props 请查看 [uniapp image](https://uniapp.dcloud.net.cn/component/image.html)
