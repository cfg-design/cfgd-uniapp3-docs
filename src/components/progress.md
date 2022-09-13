---
title: Progress 进度条
---

# Progress 进度条

<iframe src="https://cfg-design.github.io/cfgd-uniapp3/#/pages/progress/index" style="width: 375px; height: 667px" />

### 基本使用

```vue-html
<c-progress :percent="50" show-text />
```

### 颜色
* [颜色的使用](/guide/colors.html)

```vue-html
<c-progress :percent="50" :active-props="{ color: 'success' }" :bg-props="{ color: 'error' }" />
```

### API

### Progress Props {#props}

| 名称             | 类型                     | 默认值             | 版本           | 说明           |
|:----------------|:------------------------|:------------------|:--------------|:--------------|
| c               | string                  | default           |               | 配置名。[使用说明](/guide/props.html#config)    |
| props           | ProgressProps           | undefined         |               | 全部 props 。 [使用说明](/guide/props.html) |
| c-class         | HTMLAttributes['class'] | undefined         |               | 自定义类名 |
| c-style         | HTMLAttributes['style'] | undefined         |               | 自定义样式 |
| percent         | string \| number        | undefined         |               | 百分比0~100  |
| size            | string \| number        | undefined         |               | 大小。[使用说明](/guide/font-sizes.html)  |
| active-props    | LineProps               | undefined         |               | 进度。[LineProps](/components/line.html#props)   |
| bg-props        | LineProps               | undefined         |               | 背景。[LineProps](/components/line.html#props)   |
| show-text       | boolean                 | undefined         |               | 是否显示百分比的值  |
| text-props      | TextProps               | undefined         |               | [TextProps](/components/text.html#props)   |
| round           | boolean                 | undefined         |               | 是否显示为圆角  |
