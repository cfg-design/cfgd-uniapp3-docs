---
title: BottomBar 底部栏
---

# BottomBar 底部栏

<iframe src="https://cfg-design.github.io/cfgd-uniapp3/#/pages/bottomBar/index" style="width: 375px; height: 667px" />

### 基本使用

```vue-html
<c-bottom-bar safe-area-inset-bottom>
  <view style="padding: 10rpx 30rpx">
    <c-row align="center" justify="space-between">
      <c-col span="auto">
        <c-row align="center" gutter="20">
          <c-col><c-avatar-text color="primary" text="🛒" round /></c-col>
          <c-col><c-text color="error">￥88.88</c-text></c-col>
        </c-row>
      </c-col>
      <c-col span="4">
        <c-button color="error" color2="warning" text="下单" round />
      </c-col>
    </c-row>
  </view>
  <c-line />
  <c-tab-bar :value="0" :items="items" />
</c-bottom-bar>
```

### API

### BottomBar Props {#props}

| 名称                         | 类型                     | 默认值             | 版本           | 说明           |
|:----------------------------|:------------------------|:------------------|:--------------|:--------------|
| c                           | string                  | default           |               | 配置名。[使用说明](/guide/props.html#config)    |
| props                       | BottomBarProps          | undefined         |               | 全部 props 。 [使用说明](/guide/props.html) |
| c-class                     | HTMLAttributes['class'] | undefined         |               | 自定义类名 |
| c-style                     | HTMLAttributes['style'] | undefined         |               | 自定义样式 |
| z-index                     | string \| number        | undefined         |               | 元素层级 z-index |
| bottom                      | string \| number        | undefined         |               | fixed 底部的距离 |
| no-space                    | boolean                 | undefined         |               | 不占用空间 |
| no-fixed                    | boolean                 | undefined         |               | 不固定 |
| safe-area-inset-bottom      | boolean                 | undefined         |               | 是否留出底部安全距离 |
