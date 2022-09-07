---
title: Icon 图标
---

# Icon 图标

<iframe src="https://cfg-design.github.io/cfgd-uniapp3/#/pages/icon/index" style="width: 375px; height: 667px" />

:::tip 提示
- 图标来源 [REMIX ICON V2.5](https://www.iconfont.cn/collections/detail?cid=25353)
- 默认没有一个图标，需要手动添加
:::

### 添加默认图标
```vue-html
// src/App.vue
<style lang="scss">
/* 非 nvue 引入 */
/* #ifndef APP-NVUE */
@import url('@/uni_modules/cfg-design/components/c-icon/iconfont.css');
/* #endif */
</style>
```

```ts
// src/main.ts
import { icons, setIcons } from '@/uni_modules/cfg-design'
setIcons(icons)
```

* [nvue 加载自定义字体](https://uniapp.dcloud.net.cn/tutorial/nvue-api.html#addrule)。
默认图标字体文件：/src/uni_modules/cfg-design/components/c-icon/iconfont.woff2

### 使用 iconfont.cn 编辑图标。

1 、 打开 [REMIX ICON V2.5](https://www.iconfont.cn/collections/detail?cid=25353)

2 、 参考 [uniapp 编辑图标教程](https://uniapp.dcloud.net.cn/component/uniui/uni-icons.html#%E8%8E%B7%E5%8F%96%E5%9B%BE%E6%A0%87)

3 、 下载来的 iconfont.css 文件内容只要 @font-face 部分， 参考 /src/uni_modules/cfg-design/components/c-icon/iconfont.css 文件，并引入编辑的图标文件到 App.vue ，参考[添加默认图标](#添加默认图标)
```css
@font-face {
  font-family: "c-icon";
  src: url('[base64]')
}
```

4 、 设置图标名
```ts
// src/main.ts
import { setIcons, addIcons } from '@/uni_modules/cfg-design'

// 设置图标，会删除之前的图标
setIcons({
  home: '\ue839',
  ...
})

// 添加图标，不会删除之前的图标
addIcons({
  home: '\ue839',
  ...
})
```


### 基本使用

```vue-html
<c-icon name="add-line" />
```

### 颜色
* [颜色的使用](/guide/colors.html)

```vue-html
<c-icon color="primary" name="add-line" />
<c-icon color="error" name="add-line" />
<c-icon color="success" name="add-line" />
<c-icon color="warning" name="add-line" />
<c-icon color="info" name="add-line" />
<c-icon color="#7546c9" name="add-line" />
```

### 大小
* [大小的使用](/guide/font-sizes.html)

```vue-html
<c-icon size="s" name="add-line" />
<c-icon size="m" name="add-line" />
<c-icon size="l" name="add-line" />
<c-icon size="100" name="add-line" />
```

### API

### Icon Props {#props}

| 名称             | 类型                     | 默认值             | 版本           | 说明           |
|:----------------|:------------------------|:------------------|:--------------|:--------------|
| c               | string                  | default           |               | 配置名。[使用说明](/guide/props.html#config)    |
| props           | IconProps               | undefined         |               | 全部 props 。 [使用说明](/guide/props.html) |
| text-props      | TextProps               | undefined         |               | CIcon 组件是引用 CText 实现的。[TextProps](/components/text.html#props) |
| family          | string                  | c-icon            |               | 字体名称   |
| name            | string                  | undefined         |               | 图标名称   |
| size            | string \| number        | undefined         |               | 图标大小。 [使用说明](/guide/font-sizes.html)   |
| color           | string                  | undefined         |               | 图标颜色。 [使用说明](/guide/colors.html)   |
