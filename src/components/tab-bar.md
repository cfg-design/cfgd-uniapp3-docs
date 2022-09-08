---
title: TabBar 底部导航栏
---

# TabBar 底部导航栏

<iframe src="https://cfg-design.github.io/cfgd-uniapp3/#/pages/tabBar/index" style="width: 375px; height: 667px" />


:::tip 提示
- TabBar 组件不可设置固定底部，需和 [BottomBar 底部栏](/components/bottom-bar.html) 一起使用
:::

### 基本使用

```ts
import type { TabBarItemProps } from '@/uni_modules/cfg-design'

const items: TabBarItemProps[] = [
  {
    icon: 'home-smile-2-line',
    text: '首页'
  },
  {
    icon: 'add-line',
    text: '这个是加号'
  },
  {
    icon: 'user-5-line',
    text: '我的'
  }
]
```

```vue-html
<c-bottom-bar safe-area-inset-bottom>
  <c-line />
  <c-tab-bar :value="0" :items="items" />
</c-bottom-bar>
```

### 自定义项

```vue-html
<c-tab-bar v-model:value="modelValue" :items="items">
  <template #item="{ item, index, active }">
    <view v-if="index === 1" @click="modelValue = index">
      <c-avatar-text
        :c-style="[{ marginTop: '-50rpx' }]"
        :color="active ? 'error' : '#000'"
        text="A"
        text-color="#fff"
        round
      />
    </view>
    <!-- 如果 item.value 为 undefined, 需要设置 :value="index" , active 值才不会出错 -->
    <c-tab-bar-item v-else :props="item" :value="index" :c-style="{ width: '320rpx' }" />
  </template>
</c-tab-bar>
```

### API

### TabBar Props {#props}

| 名称             | 类型                       | 默认值             | 版本           | 说明           |
|:----------------|:--------------------------|:------------------|:--------------|:--------------|
| c               | string                    | default           |               | 配置名。[使用说明](/guide/props.html#config)    |
| props           | TabBarProps               | undefined         |               | 全部 props 。 [使用说明](/guide/props.html) |
| c-class         | HTMLAttributes['class']   | undefined         |               | 自定义类名 |
| c-style         | HTMLAttributes['style']   | undefined         |               | 自定义样式 |
| value           | string \| number          | undefined         |               | 选中的值 |
| item            | TabBarItemProps           | undefined         |               | [TabBarItemProps](#tab-bar-item-props)  |
| items           | TabBarItemProps[]         | undefined         |               | 项目配置 |

### TabBarItem Props {#tab-bar-item-props}

| 名称                | 类型                       | 默认值             | 版本           | 说明           |
|:-------------------|:--------------------------|:------------------|:--------------|:--------------|
| c                  | string                    | default           |               | 配置名。[使用说明](/guide/props.html#config)    |
| props              | TabBarProps               | undefined         |               | 全部 props 。 [使用说明](/guide/props.html) |
| c-class            | HTMLAttributes['class']   | undefined         |               | 自定义类名 |
| c-style            | HTMLAttributes['style']   | undefined         |               | 自定义样式 |
| value              | string \| number          | undefined         |               | 选中时的值 |
| color              | string                    | undefined         |               | 颜色。[使用说明](/guide/colors.html) |
| icon               | string                    | undefined         |               | 图标 |
| icon-props         | IconProps                 | undefined         |               | [IconProps](/components/icon.html#props)  |
| active-icon        | string                    | undefined         |               | 激活的图标，undefined 时为 props.icon 值 |
| active-icon-props  | IconProps                 | undefined         |               | activeIcon props = { ...mergeProps(props.iconProps, activeIconProps), color }。[IconProps](/components/icon.html#props)  |
| text               | string                    | undefined         |               | 文字 |
| text-props         | TextProps                 | undefined         |               | [TextProps](/components/text.html#props)  |
| badge              | BadgeProps['text']        | undefined         |               | 右上角的角标提示信息 |
| badge-props        | BadgeProps                | undefined         |               | [BadgeProps](/components/badge.html#props)  |
| dot                | boolean                   | undefined         |               | 提示是否显示圆点  |

### TabBar Slots {#slots}

| 名称             | 参数      | 说明           |
|:----------------|:--------- |:--------------|
| item            | ()        | 一项的内容     |

### TabBar Events {#events}

| 名称                     | 参数                     | 说明           |
|:------------------------|:-------------------------|:--------------|
| update:value            | (value: string) => void  | value change 时触发 |

### TabBarItem Events {#tab-bar-item-events}

| 名称              | 参数                     | 说明           |
|:-----------------|:-------------------------|:--------------|
| click            | (value: string) => void  | 点击事件 |
