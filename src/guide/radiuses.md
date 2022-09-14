---
title: Radius 圆角值
---

# Radius 圆角值

圆角值可以应用到组件相关圆角值属性中

<iframe src="https://cfg-design.github.io/cfgd-uniapp3/#/pages/radiuses/index" style="width: 375px; height: 667px" />

### 基本使用

```vue-html
<c-avatar radius="xs" />
<c-avatar radius="s" />
<c-avatar radius="m" />
<c-avatar radius="l" />
```

```ts
import { useRadius } from '@/uni_modules/cfg-design'

const radius = useRadius()
console.log(radius.value) // 查看全部圆角值
```

### 自定义圆角值

```ts
import { setRadius, useRadius } from '@/uni_modules/cfg-design'

const radius = useRadius()

// 设置圆角值
setRadius({
  myRadius1: 30,  // 默认单位 rpx
  myRadius2: 50
})

console.log(radius.value.myRadius1)
// 30
```

```vue-html
<c-avatar radius="myRadius1" />
<!-- 屏幕宽度为 375px 时： style="border-radius: 15px;" -->
```
