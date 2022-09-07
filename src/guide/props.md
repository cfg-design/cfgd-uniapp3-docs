---
title: Props
---

# Props

全部组件都支持 props 属性。为什么要干这事呢，因为小程序不支持 v-bind="props" 。

```vue-html
<c-text :props="{ color: 'primary', size: 'xl', text: 'text1' }" />
<c-icon :props="{ color: 'primary', size: 'xl', name: 'home-smile-2-line' }" />
```

props 有 config.props 、 component.props 和 component.props.props

优先级： component.props > component.props.props > config.props

```vue-html
<c-text text="default text" />
// size="m"

<c-text size="l" text="size: l" />
// size="l"

<c-text :props="{ size: 'xl' }" text="size: xl" />
// size="xl"

<c-text :props="{ size: 'xl' }" size="l" text="size: l" />
// size="l"
```

数组类型合并


```vue-html
<c-text :props="{ cClass: 'my-text-0' }" c-class="my-text-1" text="text" />
// class="c-text my-text-1"  不会合并，因为都字符串

<c-text :props="{ cClass: ['my-text-0'] }" c-class="my-text-1" text="text" />
// class="c-text my-text-0 my-text-1"  会合并，有一个是数组
```


设置 config.props

```ts
import { setTextConfigs } from '@/uni_modules/cfg-design'

setTextConfigs({
  default: { ... }, // 默认配置
  myText1: { ... },  // 自定义配置
  myText2: { ... }, // 自定义配置
})
```

查看 config.props

```ts
import { useTextConfigs } from '@/uni_modules/cfg-design'

const textConfigs = useTextConfigs()
console.log(textConfigs.value)
```