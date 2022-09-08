---
title: Switch 开关
---

# Switch 开关

<iframe src="https://cfg-design.github.io/cfgd-uniapp3/#/pages/switch/index" style="width: 375px; height: 667px" />

### 基本使用

```vue-html
<c-switch v-model:value="value" />

<c-switch checked-text="是" un-checked-text="否" />
```

### 颜色
* [颜色的使用](/guide/colors.html)

```vue-html
<c-switch color="primary" />
<c-switch color="error" />
<c-switch color="success" />
<c-switch color="warning" />
<c-switch color="info" />
<c-switch color="#7546c9" />

<c-switch color="primary" bg-color="error" />
```

### 异步
```ts
import { ref } from 'vue'

const loading = ref(false)
const active = ref(false)

const updateValue = (v: any) => {
  loading.value = true

  setTimeout(() => {
    active.value = !!v
    loading.value = false
  }, 1000)
}
```
```vue-html
<c-switch :value="active" :loading="loading" @update:value="updateValue" />
```

### API

### Switch Props {#props}

| 名称                    | 类型                           | 默认值             | 版本           | 说明           |
|:-----------------------|:------------------------------|:------------------|:--------------|:--------------|
| c                      | string                        | default           |               | 配置名。[使用说明](/guide/props.html#config)    |
| props                  | SwitchProps                   | undefined         |               | 全部 props 。 [使用说明](/guide/props.html) |
| c-class                | HTMLAttributes['class']       | undefined         |               | 自定义类名 |
| c-style                | HTMLAttributes['style']       | undefined         |               | 自定义样式 |
| color                  | string                        | primary           |               | 颜色。 [使用说明](/guide/colors.html)   |
| bgColor                | string                        | undefined         |               | 背景颜色。 [使用说明](/guide/colors.html)   |
| size                   | string \| number              | m                 |               | 字体大小。 [使用说明](/guide/font-sizes.html)   |
| value                  | string \| number \| boolean   | undefined         |               | 选中的值  |
| checked-value          | string \| number \| boolean   | undefined         |               | 选中时的值  |
| un-checked-value       | string \| number \| boolean   | undefined         |               | 非选中时的值  |
| checked-text           | string                        | undefined         |               | 选中时的文字  |
| checked-text-props     | TextProps                     | undefined         |               | [TextProps](/components/text.html#props)   |
| un-checked-text        | string                        | undefined         |               | 非选中时的文字  |
| un-checked-text-props  | TextProps                     | undefined         |               | [TextProps](/components/text.html#props)   |
| disabled               | boolean                       | undefined         |               | 是否禁用  |
| readonly               | boolean                       | undefined         |               | 是否只读  |
| loading                | boolean                       | undefined         |               | 加载中的开关  |
| spin-props             | SpinProps                     | undefined         |               | [SpinProps](/components/spin.html#props)   |
| radius                 | string \| number              | undefined         |               | 圆角值。 [使用说明](/guide/radiuses.html)  |
| round                  | boolean                       | undefined         |               | 是否显示为圆形  |
| path                   | string                        | undefined         |               | CForm value 对象的属性名，用于校验  |
| no-feedback            | boolean                       | undefined         |               | 是否不展示校验反馈  |

### Switch Events {#events}

| 名称                     | 参数                                           | 说明           |
|:------------------------|:----------------------------------------------|:--------------|
| update:value            | (value: string \| number \| boolean) => void  | value change 时触发 |
