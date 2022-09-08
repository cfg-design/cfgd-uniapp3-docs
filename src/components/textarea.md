---
title: Textarea 多行输入框
---

# Textarea 多行输入框

<iframe src="https://cfg-design.github.io/cfgd-uniapp3/#/pages/textarea/index" style="width: 375px; height: 667px" />

### 基本使用

```vue-html
<c-textarea v-model:value="value" />
```

### API

### Textarea Props {#props}

| 名称              | 类型                     | 默认值             | 版本           | 说明           |
|:-----------------|:------------------------|:------------------|:--------------|:--------------|
| c                | string                  | default           |               | 配置名。[使用说明](/guide/props.html#config)    |
| props            | TextareaProps              | undefined         |               | 全部 props 。 [使用说明](/guide/props.html) |
| c-class          | HTMLAttributes['class'] | undefined         |               | 自定义类名 |
| c-style          | HTMLAttributes['style'] | undefined         |               | 自定义样式 |
| textarea-class   | HTMLAttributes['class'] | undefined         |               | textarea 的自定义类名 |
| textarea-style   | HTMLAttributes['style'] | undefined         |               | textarea 的自定义样式 |
| value            | string                  | undefined         |               | 输入框的内容   |
| placeholder      | string                  | undefined         |               | 输入框为空时占位符   |
| size             | string \| number        | m                 |               | 字体大小。 [使用说明](/guide/font-sizes.html)   |
| height           | string \| number        | undefined         |               | 高度   |
| readonly         | boolean                 | undefined         |               | 是否只读   |
| show-count       | boolean                 | undefined         |               | 是否显示输入字数统计   |
| count-props      | TextProps               | undefined         |               | [TextProps](/components/text.html#props)   |
| border           | boolean                 | undefined         |               | 是否显示边框   |
| border-bottom    | boolean                 | undefined         |               | 是否显示下边框   |
| radius           | string \| number        | undefined         |               | 圆角值。 [使用说明](/guide/radiuses.html)   |
| path             | string                  | undefined         |               | CForm value 对象的属性名，用于校验   |
| no-feedback      | boolean                 | undefined         |               | 是否不展示校验反馈   |
| disabled         | boolean                 | undefined         |               | 是否禁用   |
| maxlength        | number                  | 140               |               | 最大输入长度，设置为 -1 的时候不限制最大长度   |
| focus            | boolean                 | undefined         |               | 获取焦点。在 H5 平台能否聚焦以及软键盘是否跟随弹出，取决于当前浏览器本身的实现。nvue 页面不支持，需使用组件的 focus()、blur() 方法控制焦点   |
| auto-height      | boolean                 | false             |               | 是否自动增高，设置auto-height时，style.height不生效   |

* 更多 Props 请查看 [uniapp textarea](https://uniapp.dcloud.net.cn/component/textarea.html#textarea)

### Textarea Slots {#slots}

| 名称             | 参数                              | 说明           |
|:----------------|:--------------------------------- |:--------------|
| count           | ()                                | 自定义统计内容  |

### Textarea Methods {#methods}

| 名称             | 类型          | 说明               |
|:----------------|:--------------|:------------------|
| focus           | () => void    | 获取焦点           |


### Textarea Events {#events}

| 名称                     | 参数                             | 说明           |
|:------------------------|:---------------------------------|:--------------|
| update:value            | (value: string) => void          | value change 时触发 |
| input                   | (event: any) => void             | [说明](https://uniapp.dcloud.net.cn/component/textarea.html#textarea) |
| focus                   | (event: any) => void             | [说明](https://uniapp.dcloud.net.cn/component/textarea.html#textarea) |
| blur                    | (event: any) => void             | [说明](https://uniapp.dcloud.net.cn/component/textarea.html#textarea) |
| confirm                 | (event: any) => void             | [说明](https://uniapp.dcloud.net.cn/component/textarea.html#textarea) |
| keyboardheightchange    | (event: any) => void             | [说明](https://uniapp.dcloud.net.cn/component/textarea.html#textarea) |
| linechange              | (event: any) => void             | [说明](https://uniapp.dcloud.net.cn/component/textarea.html#textarea) |
