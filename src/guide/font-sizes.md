---
title: FontSizes 字体大小
---

# FontSizes 字体大小

字体大小可以应用到组件相关字体大小属性中

<iframe src="https://cfg-design.github.io/cfgd-uniapp3/#/pages/fontSizes/index" style="width: 375px; height: 667px" />

### 基本使用

```vue-html
<c-text size="xl" />
```

```ts
import { useFontSizes } from '@/uni_modules/cfg-design'

const fontSizes = useFontSizes()
console.log(fontSizes.value) // 查看全部字体大小
```

### 自定义字体大小

```ts
import { setFontSizes, useFontSizes } from '@/uni_modules/cfg-design'

const fontSizes = useFontSizes()

// 设置字体大小
setFontSizes({
  mySize1: 100,  // 默认单位 rpx
  mySize2: 200
})

fontSizes.value.mySize1
console.log(fontSizes.value.mySize1)
// 100
```

```vue-html
<c-text size="mySize1" />
<!-- 屏幕宽度为 375px 时： style="font-size: 50px;" -->
```
