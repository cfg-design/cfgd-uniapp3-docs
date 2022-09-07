---
title: 快速上手
---

# 快速上手 {#quick-start}

:::tip 前提条件
- 熟悉命令行
- 熟悉 typescript
- 熟悉 vue3
- 已安装 15.0 或更高版本的 [Node.js](https://nodejs.org/)
:::

### 运行示例项目 {#run}

1、在[组件详情页面](https://ext.dcloud.net.cn/plugin?id=9316)，点击右边“下载示例项目ZIP”下载项目

2、解压项目

3、安装
```
yarn
```

4、运行
```
yarn dev:h5
```

5、访问 localhost:3000

<iframe src="https://cfg-design.github.io/cfgd-uniapp3/#/" style="width: 375px; height: 667px" />

---------------------------------------------

### 单独导入到您的项目 {#import}

:::tip 前提条件
- 您的项目必需是 Vue3 typescript 版
:::

1、在[组件详情页面](https://ext.dcloud.net.cn/plugin?id=9316)，点击右边“使用 HBuilderX 导入插件”，或下载ZIP版解压到 src/uni_modules

2、安装依赖
```
yarn add async-validator ramda
yarn add -D sass @types/ramda
```

3、添加小程序样式和图标
```vue-html
// src/App.vue
<style lang="scss">
@import url('@/uni_modules/cfg-design/components/c-icon/iconfont.css');
@import url('@/uni_modules/cfg-design/styles/mp.scss');
</style>
```

4、添加图标配置
```ts
// src/main.ts
import { icons, setIcons } from '@/uni_modules/cfg-design'
setIcons(icons)
```

5、使用组件
```vue-html
<c-text text="渲染这文本，导入配置完成" />
```

6、运行
```
yarn dev:h5
```

7、访问 localhost:3000
