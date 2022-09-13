---
title: TopBar 顶部栏
---

# TopBar 顶部栏

<iframe src="https://cfg-design.github.io/cfgd-uniapp3/#/pages/topBar/index" style="width: 375px; height: 667px" />

### 基本使用

```vue-html
<c-top-bar z-index="999" status-bar>
  <c-nav-bar title="TopBar 顶部栏" left-icon="arrow-left-s-line" @click:left="goBack" />
  <c-tabs :value="0" :items="[{ text: '类型1' }, { text: '类型2' }, { text: '类型3' }]" />
  <c-line />
</c-top-bar>
```

### API

### TopBar Props {#props}

| 名称             | 类型                     | 默认值             | 版本           | 说明           |
|:----------------|:------------------------|:------------------|:--------------|:--------------|
| c               | string                  | default           |               | 配置名。[使用说明](/guide/props.html#config)    |
| props           | TopBarProps             | undefined         |               | 全部 props 。 [使用说明](/guide/props.html) |
| c-class         | HTMLAttributes['class'] | undefined         |               | 自定义类名 |
| c-style         | HTMLAttributes['style'] | undefined         |               | 自定义样式 |
| z-index         | string \| number        | undefined         |               | 元素层级 z-index |
| top             | string \| number        | undefined         |               | fixed 顶部的距离 |
| no-space        | boolean                 | undefined         |               | 不占用空间 |
| no-fixed        | boolean                 | undefined         |               | 不固定 |
| status-bar      | boolean                 | undefined         |               | 显示顶部状态栏高度 |
