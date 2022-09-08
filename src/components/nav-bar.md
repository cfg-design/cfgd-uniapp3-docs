---
title: NavBar 导航栏
---

# NavBar 导航栏

<iframe src="https://cfg-design.github.io/cfgd-uniapp3/#/pages/navBar/index" style="width: 375px; height: 667px" />

:::tip 提示
- NavBar 组件不可设置固定顶部，需和 [TopBar 顶部栏](/components/top-bar.html) 一起使用
:::

### 基本使用

```vue-html
<c-nav-bar title="首页" />

<c-nav-bar title="标题" left-text="返回" @click:left="goBack" />

<c-top-bar z-index="999" status-bar>
  <c-nav-bar title="首页" />
  <c-line />
</c-top-bar>
```

### 搜索

```vue-html
<c-nav-bar @click:left="onClickLeft" @click:right="onClickRight">
  <template #left>
    <c-row align="center">
      <c-text>广州</c-text>
      <c-icon name="arrow-down-s-line" size="18px" />
    </c-row>
  </template>
  <c-input size="s" icon="search-line" border round />
  <template #right>
    <c-text>搜索</c-text>
  </template>
</c-nav-bar>
```

### API

### NavBar Props {#props}

| 名称             | 类型                     | 默认值             | 版本           | 说明           |
|:----------------|:------------------------|:------------------|:--------------|:--------------|
| c               | string                  | default           |               | 配置名。[使用说明](/guide/props.html#config)    |
| props           | NavBarProps             | undefined         |               | 全部 props 。 [使用说明](/guide/props.html) |
| c-class         | HTMLAttributes['class'] | undefined         |               | 自定义类名 |
| c-style         | HTMLAttributes['style'] | undefined         |               | 自定义样式 |
| left-icon       | string                  | undefined         |               | 左边的图标 |
| left-icon-props | IconProps               | undefined         |               | [IconProps](/components/icon.html#props)  |
| left-text       | string                  | undefined         |               | 左边的文字 |
| left-text-props | TextProps               | undefined         |               | [TextProps](/components/text.html#props)  |
| title           | string                  | undefined         |               | 标题 |
| title-props     | TextProps               | undefined         |               | [TextProps](/components/text.html#props)  |

### NavBar Slots {#slots}

| 名称             | 参数      | 说明           |
|:----------------|:--------- |:--------------|
| default         | ()        | 标题的内容     |
| left            | ()        | 左边的内容     |
| right           | ()        | 右边的内容     |

### Button Events {#events}

| 名称             | 参数                     | 说明           |
|:----------------|:-------------------------|:--------------|
| click:left      | (payload: any) => void   | 点击左边的内容事件      |
| click :right    | (payload: any) => void   | 点击右边的内容事件      |
