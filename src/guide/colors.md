---
title: Colors 颜色
---

# Colors 颜色

颜色可以应用到组件相关颜色属性中

<iframe src="https://cfg-design.github.io/cfgd-uniapp3/#/pages/colors/index" style="width: 375px; height: 667px" />

### 基本使用

```vue-html
<c-text color="primary" />
```

```ts
import { useColors } from '@/uni_modules/cfg-design'

const colors = useColors()
console.log(colors.value) // 查看全部颜色
```

### 自定义颜色

```ts
import { setColors, useColors } from '@/uni_modules/cfg-design'

const colors = useColors()

// 设置颜色
setColors({
  myColor1: '#7546c9',
  myColor2: '#123123',
})

colors.value.myColor1
console.log(colors.value.myColor1)
// #7546c9
```

```vue-html
<c-text color="myColor1" />
<!--  style="color: #7546c9;" -->
```
