---
title: Input 输入框
---

# Input 输入框

<iframe src="https://cfg-design.github.io/cfgd-uniapp3/#/pages/input/index" style="width: 375px; height: 667px" />

### 基本使用

```vue-html
<c-input v-model:value="value" clearable />
<c-input input-align="center" />
<c-input input-align="right" />
```

### 搜索输入框

```vue-html
<c-input right-icon="search-line" border @click:right-icon="onSearch" @confirm="onSearch" />

<c-input icon="search-line" border>
  <template #suffix>
    <c-button color="primary" text="搜索" size="xs" />
  </template>
</c-input>

<c-input icon="user-5-line" right-icon="search-line" border>
  <template #prefix>
    <c-text color="secondary" :c-style="[{ marginLeft: '10rpx' }]">用户</c-text>
  </template>
</c-input>

<c-row align="stretch">
  <c-input icon="search-line" border />
  <c-button color="primary" text="搜索" :c-style="{ marginLeft: '10rpx' }" />
</c-row>
```

### 网址输入框
```vue-html
<c-input placeholder="www.baidu" border>
  <template #prefix>
    <c-text color="secondary">https://</c-text>
  </template>
  <template #suffix>
    <c-text color="secondary">.com</c-text>
  </template>
</c-input>
```

### API

### Input Props {#props}

| 名称              | 类型                     | 默认值             | 版本           | 说明           |
|:-----------------|:------------------------|:------------------|:--------------|:--------------|
| c                | string                  | default           |               | 配置名。[使用说明](/guide/props.html#config)    |
| props            | InputProps              | undefined         |               | 全部 props 。 [使用说明](/guide/props.html) |
| c-class          | HTMLAttributes['class'] | undefined         |               | 自定义类名 |
| c-style          | HTMLAttributes['style'] | undefined         |               | 自定义样式 |
| input-class      | HTMLAttributes['class'] | undefined         |               | input 的自定义类名 |
| input-style      | HTMLAttributes['style'] | undefined         |               | input 的自定义样式 |
| value            | string                  | undefined         |               | 输入框的内容   |
| type             | 'text' \| 'number' \| 'idcard' \| 'digit' \| 'tel' \| 'safe-password' \| 'nickname'  | text         |               | input 的类型。H5 暂未支持动态切换，详见下方 Tips，请使用 v-if 进行整体切换   |
| size             | string \| number        | m                 |               | 字体大小。 [使用说明](/guide/font-sizes.html)   |
| placeholder      | string                  | undefined         |               | 输入框为空时占位符   |
| input-align      | CSSProperties['textAlign']  | undefined     |               | 输入框内容对齐方式。[MDN Web Docs](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-align)   |
| bg-color         | string                  | undefined         |               | 背景颜色。[使用说明](/guide/colors.html)   |
| icon             | string                  | undefined         |               | 左边的图标   |
| icon-props       | IconProps               | undefined         |               | [IconProps](/components/icon.html#props)   |
| right-icon       | string                  | undefined         |               | 右边的图标   |
| right-icon-props | IconProps               | undefined         |               | [IconProps](/components/icon.html#props)   |
| password         | boolean                 | undefined         |               | 是否是密码类型   |
| disabled         | boolean                 | undefined         |               | 是否禁用   |
| readonly         | boolean                 | undefined         |               | 是否只读   |
| clearable        | boolean                 | undefined         |               | 是否显示清除控件   |
| clear-icon-props | IconProps               | undefined         |               | [IconProps](/components/icon.html#props)   |
| maxlength        | number                  | 140               |               | 最大输入长度，设置为 -1 的时候不限制最大长度   |
| show-count       | boolean                 | undefined         |               | 是否显示输入字数统计   |
| count-props      | TextProps               | undefined         |               | [TextProps](/components/text.html#props)   |
| border           | boolean                 | undefined         |               | 是否显示边框   |
| border-bottom    | boolean                 | undefined         |               | 是否显示下边框   |
| radius           | string \| number        | undefined         |               | 圆角值。 [使用说明](/guide/radiuses.html)   |
| round            | boolean                 | undefined         |               | 是否显示为圆角   |
| path             | string                  | undefined         |               | CForm value 对象的属性名，用于校验   |
| no-feedback      | boolean                 | undefined         |               | 是否不展示校验反馈   |
| focus            | boolean                 | undefined         |               | 获取焦点。在 H5 平台能否聚焦以及软键盘是否跟随弹出，取决于当前浏览器本身的实现。nvue 页面不支持，需使用组件的 focus()、blur() 方法控制焦点   |

* 更多 Props 请查看 [uniapp input](https://uniapp.dcloud.net.cn/component/input.html#input)

### Input Slots {#slots}

| 名称             | 参数                              | 说明           |
|:----------------|:--------------------------------- |:--------------|
| prefix          | ()                                | 左边的内容 |
| count           | ()                                | 自定义统计内容  |
| suffix          | ({ errMsg: string \| undefined }) | 右边的内容 |

### Input Methods {#methods}

| 名称             | 类型          | 说明               |
|:----------------|:--------------|:------------------|
| focus           | () => void    | 获取焦点           |


### Input Events {#events}

| 名称                     | 参数                     | 说明           |
|:------------------------|:-------------------------|:--------------|
| update:value            | (value: string) => void  | value change 时触发 |
| input                   | (event: any) => void     | [说明](https://uniapp.dcloud.net.cn/component/input.html#input) |
| focus                   | (event: any) => void     | [说明](https://uniapp.dcloud.net.cn/component/input.html#input) |
| blur                    | (event: any) => void     | [说明](https://uniapp.dcloud.net.cn/component/input.html#input) |
| confirm                 | (event: any) => void     | [说明](https://uniapp.dcloud.net.cn/component/input.html#input) |
| keyboardheightchange    | (event: any) => void     | [说明](https://uniapp.dcloud.net.cn/component/input.html#input) |
| clear                   | () => void               | 清空时触发 |
| click:input             | (event: any) => void     | 点击 input 时触发 |
| click:icon              | (event: any) => void     | 点击左边 icon 时触发 |
| click:rightIcon         | (event: any) => void     | 点击右边 icon 时触发 |
