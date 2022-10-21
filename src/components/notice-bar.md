---
title: NoticeBar 通知栏
---

# NoticeBar 通知栏

<iframe src="https://cfg-design.github.io/cfgd-uniapp3/#/pages/noticeBar/index" style="width: 375px; height: 667px" />

### 基本使用

```vue-html
<c-notice-bar text="重要通知重要通知重要通知" autoplay />
```

### API

### NoticeBar Props {#props}

| 名称              | 类型                    | 默认值             | 版本           | 说明           |
|:-----------------|:------------------------|:------------------|:--------------|:--------------|
| c                | string                  | default           |               | 配置名。[使用说明](/guide/props.html#config)    |
| props            | NoticeBarProps               | undefined         |               | 全部 props 。 [使用说明](/guide/props.html) |
| c-class          | HTMLAttributes['class'] | undefined         |               | 自定义类名 |
| c-style          | HTMLAttributes['style'] | undefined         |               | 自定义样式 |
| color            | string                  | undefined         |               | 背景颜色。 [使用说明](/guide/colors.html)  |
| left-icon        | string                  | undefined         |               | 左边图标  |
| left-icon-props  | IconProps               | undefined         |               | [IconProps](/components/icon.html#props)  |
| right-icon       | string                  | undefined         |               | 右边图标  |
| right-icon-props | IconProps               | undefined         |               | [IconProps](/components/icon.html#props)  |
| text             | string                  | undefined         |               | 文字 |
| text-props       | TextProps               | undefined         |               | [TextProps](/components/text.html#props)  |
| autoplay         | boolean                 | undefined         |               | 是否自动播放  |
| speed            | string \| number        | undefined         |               | 滚动速率 (px/s)  |
| closable         | boolean                 | undefined         |               | 是否可关闭  |
| close-icon-props | IconProps               | undefined         |               | [IconProps](/components/icon.html#props)  |

### Button Events {#events}

| 名称             | 参数                     | 说明           |
|:----------------|:-------------------------|:--------------|
| click           | () => void               | 点击时触发      |
| close           | () => void               | 关闭时触发      |
