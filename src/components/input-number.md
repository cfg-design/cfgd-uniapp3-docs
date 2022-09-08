---
title: InputNumber 数字输入
---

# InputNumber 数字输入

<iframe src="https://cfg-design.github.io/cfgd-uniapp3/#/pages/inputNumber/index" style="width: 375px; height: 667px" />

### 基本使用

```vue-html
<c-input-number v-model:value="value" :min="0" :max="10" />
```

### 圆形按钮

```vue-html
<c-input-number c="round" />
```

### 异步
```ts
import { ref } from 'vue'

const value = ref(1)
const loading = ref(false)

const asyncUpdate = (v: number) => {
  if (loading.value) return

  loading.value = true
  uni.showLoading({ title: '异步中' })

  setTimeout(() => {
    value.value = v
    loading.value = false
    uni.hideLoading()
  }, 1000)
}
```

```vue-html
<c-input-number :value="value" :disabled="loading" :input-props="{ readonly: true }" @minus="asyncUpdate" @plus="asyncUpdate" />
```

### API

### InputNumber Props {#props}

| 名称                | 类型                     | 默认值             | 版本           | 说明           |
|:--------------------|:------------------------|:------------------|:--------------|:--------------|
| c                   | string                  | default           |               | 配置名。[使用说明](/guide/props.html#config)    |
| props               | InputNumberProps        | undefined         |               | 全部 props 。 [使用说明](/guide/props.html) |
| c-class             | HTMLAttributes['class'] | undefined         |               | 自定义类名 |
| c-style             | HTMLAttributes['style'] | undefined         |               | 自定义样式 |
| value               | number                  | undefined         |               | 输入框的内容  |
| min                 | number                  | undefined         |               | 最小值  |
| max                 | number                  | undefined         |               | 最大值  |
| step                | number                  | undefined         |               | 每次改变步数  |
| color               | string                  | undefined         |               | 颜色。 [使用说明](/guide/colors.html)  |
| size                | string \| number        | undefined         |               | 字体的大小。[使用说明](/guide/font-sizes.html)  |
| input-props         | InputProps              | undefined         |               | [InputProps](/components/input.html#props)   |
| plus-button-props   | ButtonProps             | undefined         |               | [ButtonProps](/components/button.html#props)  |
| minus-button-props  | ButtonProps             | undefined         |               | [ButtonProps](/components/button.html#props)  |
| disabled            | boolean                 | undefined         |               | 是否禁用  |
| radius              | string \| number        | undefined         |               | 圆角值。 [使用说明](/guide/radiuses.html)  |
| round               | boolean                 | undefined         |               | 是否显示为圆形  |


### InputNumber Methods {#methods}

| 名称             | 类型                                    | 说明               |
|:----------------|:----------------------------------------|:------------------|
| inputRef        | Ref\<InstanceType\<typeof CInput\>\>    | CInput 组件        |


### InputNumber Events {#events}

| 名称             | 参数                        | 说明           |
|:----------------|:---------------------------|:--------------|
| update:value    | (value: number) => void    | value change 时触发 |
| plus            | (value: number) => void    | 增加事件触发 |
| minus           | (value: number) => void    | 减少事件触发 |
