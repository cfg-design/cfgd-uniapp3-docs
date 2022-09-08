---
title: Checkbox 复选框
---

# Checkbox 复选框

<iframe src="https://cfg-design.github.io/cfgd-uniapp3/#/pages/checkbox/index" style="width: 375px; height: 667px" />

### 基本使用

```vue-html
<c-checkbox text="checkbox" v-model:checked="checked" />

<c-checkbox text="圆形框" icon-wrap-style="border-radius: 100%;" />

<c-checkbox-group c="row" v-model:value="values">
  <c-checkbox v-for="i in 3" :key="i" :text="'checkbox' + i" />
</c-checkbox-group>
```

### 颜色

```vue-html
<c-checkbox color="error" text="text" checked />
<c-checkbox color="success" text="text" checked />
<c-checkbox color="#7546c9" text="text" checked />
<c-checkbox color="#7546c9" text="text" checked active-type="icon" />

<c-checkbox-group :checkbox="{ color: 'error' }">
  <c-checkbox text="text" />
</c-checkbox-group>
```

### 选中的图标

```vue-html
<c-checkbox text="minus" c="minus" checked />
<c-checkbox text="indeterminate" c="indeterminate" checked />
<c-checkbox text="active icon" active-type="icon" checked />
```

### 右对齐的图标

```vue-html
<c-checkbox-group c="right">
  <c-checkbox text="text" border />
</c-checkbox-group>
```

### API

### Checkbox Props {#props}

| 名称             | 类型                     | 默认值             | 版本           | 说明           |
|:----------------|:------------------------|:------------------|:--------------|:--------------|
| c               | string                  | default           |               | 配置名。[使用说明](/guide/props.html#config)    |
| props           | CheckboxProps           | undefined         |               | 全部 props 。 [使用说明](/guide/props.html) |
| c-class         | HTMLAttributes['class'] | undefined         |               | 自定义类名 |
| c-style         | HTMLAttributes['style'] | undefined         |               | 自定义样式 |
| icon-wrap-class | HTMLAttributes['class'] | undefined         |               | 勾选框的自定义类名 |
| icon-wrap-style | HTMLAttributes['style'] | undefined         |               | 勾选框的自定义样式 |
| active-type     | 'default' \| 'icon'     | undefined         |               | 勾选框的类型， undefined | default: 背景上色， icon: icon 勾上色  |
| color           | string                  | primary           |               | 字体颜色。 [使用说明](/guide/colors.html)   |
| size            | string \| number        | undefined         |               | 字体大小。 [使用说明](/guide/font-sizes.html)  |
| value           | string \| number        | undefined         |               | 选中的值  |
| checked         | boolean                 | undefined         |               | 是否选中  |
| disabled        | boolean                 | undefined         |               | 是否禁用  |
| readonly        | boolean                 | undefined         |               | 是否只读  |
| icon-props      | IconProps               | undefined         |               | [IconProps](/components/icon.html#props)  |
| text            | string                  | undefined         |               | 显示文字   |
| text-props      | TextProps               | undefined         |               | [TextProps](/components/text.html#props)  |
| border          | boolean                 | undefined         |               | 是否显示边框  |
| border-bottom   | boolean                 | undefined         |               | 是否显示下边框  |
| radius          | string \| number        | undefined         |               | 圆角值。 [使用说明](/guide/radiuses.html)  |
| round           | boolean                 | undefined         |               | 是否显示为圆形  |
| path            | string                  | undefined         |               | CForm value 对象的属性名，用于校验  |
| no-feedback     | boolean                 | undefined         |               | 是否不展示校验反馈  |

### CheckboxGroup Props {#check-box-group-props}

| 名称             | 类型                            | 默认值             | 版本           | 说明           |
|:----------------|:--------------------------------|:------------------|:--------------|:--------------|
| c               | string                          | default           |               | 配置名。[使用说明](/guide/props.html#config)    |
| props           | CheckboxGroupProps              | undefined         |               | 全部 props 。 [使用说明](/guide/props.html) |
| c-class         | HTMLAttributes['class']         | undefined         |               | 自定义类名 |
| c-style         | HTMLAttributes['style']         | undefined         |               | 自定义样式 |
| value           | Array\<string \| number\>       | undefined         |               | 选中的值   |
| disabled        | boolean                         | undefined         |               | 是否禁用   |
| direction       | CSSProperties['flex-direction'] | undefined         |               | 排列。[MDN Web Docs](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-direction)   |
| path            | string                          | undefined         |               | CForm value 对象的属性名，用于校验   |
| checkbox        | CheckboxProps                   | undefined         |               | [CheckboxProps](#props)    |

### Checkbox Slots {#slots}

| 名称             | 参数                              | 说明           |
|:----------------|:--------------------------------- |:--------------|
| default         | ()                                | 文字内容       |

### Checkbox Events {#events}

| 名称                  | 参数                                 | 说明           |
|:---------------------|:-------------------------------------|:--------------|
| update:value         | (value: string \| number) => void    | value change 时触发 |

### CheckboxGroup Events {#check-box-group-events}

| 名称                  | 参数                                          | 说明           |
|:---------------------|:----------------------------------------------|:--------------|
| update:value         | (value: Array\<string \| number\>) => void    | value change 时触发 |
