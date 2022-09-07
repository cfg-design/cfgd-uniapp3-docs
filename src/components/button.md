---
title: Button 按钮
---

# Button 按钮

<iframe src="https://cfg-design.github.io/cfgd-uniapp3/#/pages/button/index" style="width: 375px; height: 667px" />

### 基本使用

```vue-html
<c-button text="按钮" />
<c-button><c-text color="primary" text="按钮" /><c-text color="error" text="按钮" /></button>
```

### 颜色
* [颜色的使用](/guide/colors.html)

```vue-html
<c-button color="primary" text="按钮" />
<c-button color="error" text="按钮" />
<c-button color="success" text="按钮" />
<c-button color="warning" text="按钮" />
<c-button color="info" text="按钮" />
<c-button color="#7546c9" text="按钮" />
```

### 渐变颜色

```vue-html
<c-button color="primary" color2="error" text="渐变按钮" />
```

### 大小
* [大小的使用](/guide/font-sizes.html)

```vue-html
<c-button size="s" text="S 按钮" />
<c-button size="m" text="M 按钮" />
<c-button size="l" text="L 按钮" />
<c-button size="100" text="100 按钮" />
```

### 圆角值
* [圆角值的使用](/guide/radiuses.html)

```vue-html
<c-button radius="s" text="按钮" />
<c-button radius="m" text="按钮" />
<c-button radius="l" text="按钮" />
<c-button radius="10" text="按钮" />
<c-button text="圆角按钮" round />
<c-button radius="xs s m l" text="各角不同的按钮" />
```

### 配置 Props
* [Props 的使用](/guide/props.html)

```ts
import { setButtonConfigs } from '@/uni_modules/cfg-design'

setButtonConfigs({
  default: { ... }, // 默认配置
  myButton: { ... },  // 自定义配置
})
```

```vue-html
<c-button c="myButton" text="text1" />
```

### API

### Button Props {#props}

| 名称             | 类型                    | 默认值             | 版本           | 说明           |
|:----------------|:------------------------|:------------------|:--------------|:--------------|
| c               | string                  | default           |               | 配置名。[使用](#配置-props)    |
| props           | ButtonProps             | undefined         |               | 全部 props 。 [Props 的使用](/guide/props.html) |
| c-class         | HTMLAttributes['class'] | undefined         |               | 自定义类名 |
| c-style         | HTMLAttributes['style'] | undefined         |               | 自定义样式 |
| text            | string                  | undefined         |               | 显示文字   |
| color           | string                  | undefined         |               | 按钮颜色。 [颜色的使用](/guide/colors.html)   |
| color2          | string                  | undefined         |               | 与 color 组成渐变背景。  |
| size            | string \| number        | m                 |               | 字体大小。 [大小的使用](/guide/font-sizes.html)   |
| width           | string | number         | undefined         |               | 宽度  |
| height          | string | number         | undefined         |               | 高度  |
| text            | string                  | undefined         |               | 文字  |
| text-color      | string                  | undefined         |               | 文字的颜色  |
| text-props      | TextProps               | undefined         |               | [TextProps](/components/text.html#props)  |
| icon            | string                  | undefined         |               | 图标  |
| icon-props      | IconProps               | undefined         |               | [IconProps](/components/icon.html#props)  |
| radius          | string | number         | s                 |               | 圆角值。 [圆角值的使用](/guide/radiuses.html)  |
| round           | boolean                 | undefined         |               | 是否显示为圆形。  |
| disabled        | boolean                 | undefined         |               | 是否禁用  |
| loading         | boolean                 | undefined         |               | 是否加载中  |
| spin-props      | SpinProps               | undefined         |               | 加载。[SpinProps](/components/spin.html#props)  |
| plain           | boolean                 | undefined         |               | 是否镂空  |

* 更多 Props 请查看 [uniapp button](https://uniapp.dcloud.net.cn/component/button.html#)

### Button Slots {#slots}

| 名称             | 参数      | 说明           |
|:----------------|:--------- |:--------------|
| default         | ()        | 按钮的内容     |
