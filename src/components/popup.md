---
title: Popup 弹窗
---

# Popup 弹窗

<iframe src="https://cfg-design.github.io/cfgd-uniapp3/#/pages/popup/index" style="width: 375px; height: 667px" />

### 基本使用

```ts
import { ref } from 'vue'

const visible = ref(false)
```

```vue-html
<c-button text="打开弹窗" @click="visible = true" />

<c-popup
  v-model:visible="visible"
  placement="center"
  content-style="min-width: 300rpx"
  closable
  mask-closable
>
  <c-popup-title title="弹窗" />
  <view>popup</view>
</c-popup>
```

### API

### Popup Props {#props}

| 名称                      | 类型                     | 默认值             | 版本           | 说明           |
|:-------------------------|:------------------------|:------------------|:--------------|:--------------|
| c                        | string                  | default           |               | 配置名。[使用说明](/guide/props.html#config)    |
| props                    | PopupProps              | undefined         |               | 全部 props 。 [使用说明](/guide/props.html) |
| c-class                  | HTMLAttributes['class'] | undefined         |               | 自定义类名 |
| c-style                  | HTMLAttributes['style'] | undefined         |               | 自定义样式 |
| mask-class               | HTMLAttributes['class'] | undefined         |               | mask 自定义类名 |
| mask-style               | HTMLAttributes['style'] | undefined         |               | mask 自定义样式 |
| content-class            | HTMLAttributes['class'] | undefined         |               | content 自定义类名 |
| content-style            | HTMLAttributes['style'] | undefined         |               | content 自定义样式 |
| close-wrap-class         | HTMLAttributes['class'] | undefined         |               | closeWrap 自定义类名 |
| close-wrap-style         | HTMLAttributes['style'] | undefined         |               | closeWrap 自定义样式 |
| visible                  | boolean                 | undefined         |               | 是否展示弹窗 |
| placement                | 'top' \| 'right' \| 'bottom' \| 'left' \| 'center' | undefined         |               | 展示的位置 |
| z-index                  | CSSProperties['z-index']| undefined         |               | 弹窗的 z-index |
| radius                   | string \| number        | undefined         |               | 圆角值。 [使用说明](/guide/radiuses.html)  |
| closable                 | boolean                 | undefined         |               | 是否可关闭  |
| close-icon-props         | IconProps               | undefined         |               | [IconProps](/components/icon.html#props)  |
| no-mask                  | boolean                 | undefined         |               | 是否不显示遮罩  |
| mask-closable            | boolean                 | undefined         |               | 点击遮罩时是否执行关闭 |
| safe-area-inset-bottom   | boolean                 | undefined         |               | 是否留出底部安全距离 |
| status-bar               | boolean                 | undefined         |               | 显示顶部状态栏高度；在 style 使用 padding-top 占位 |

### PopupTitle Props {#popup-title-props}

| 名称                      | 类型                     | 默认值             | 版本           | 说明           |
|:-------------------------|:------------------------|:------------------|:--------------|:--------------|
| c                        | string                  | default           |               | 配置名。[使用说明](/guide/props.html#config)    |
| props                    | PopupProps              | undefined         |               | 全部 props 。 [使用说明](/guide/props.html) |
| c-class                  | HTMLAttributes['class'] | undefined         |               | 自定义类名 |
| c-style                  | HTMLAttributes['style'] | undefined         |               | 自定义样式 |
| title                    | string                  | undefined         |               | 标题文字 |
| title-props              | TextProps               | undefined         |               | [TextProps](/components/text.html#props)  |

### Popup Slots {#slots}

| 名称             | 参数      | 说明           |
|:----------------|:--------- |:--------------|
| default         | ()        | 内容     |

### PopupTitle Slots {#popup-title-slots}

| 名称             | 参数      | 说明           |
|:----------------|:--------- |:--------------|
| default         | ()        | 内容     |
| left            | ()        | 左边内容     |
| right           | ()        | 右边内容     |

### Popup Events {#events}

| 名称             | 参数                     | 说明           |
|:----------------|:-------------------------|:--------------|
| update:visible  | (v: boolean) => void     | visible change 时触发 |
| show            | () => void               | 显示时触发 |
| close           | () => void               | 关闭时触发 |
