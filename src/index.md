---
title: Cfg Design of Uniapp3
---

# 简介 {#introduction}

Cfg Design of Uniapp3 是一个可配置的 UI 框架。

* [浏览h5版](https://cfg-design.github.io/cfgd-uniapp3)

:::tip 兼容性
- 当前只测试了 h5 和 微信小程序
- 后续会测试其它端并完成兼容
:::

全部组件都支持 props 属性：

```vue-html
<c-text :props="{ color: 'primary', size: 'xl', text: 'text1' }" />
```

下面是一个配置的示例：

```ts
import { setTextConfigs } from '@/uni_modules/cfg-design'

setTextConfigs({
  default: { ... }, // 默认配置
  myText1: { ... },  // 自定义配置
  myText2: { ... }, // 自定义配置
})
```

```vue-html
<c-text c="myText1" text="text1" />
<c-text c="myText2">text2</c-text>
```