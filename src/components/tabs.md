---
title: Tabs 标签页
---

# Tabs 标签页

<iframe src="https://cfg-design.github.io/cfgd-uniapp3/#/pages/tabs/index" style="width: 375px; height: 667px" />

### 基本使用

```ts
import type { TabItemProps } from '@/uni_modules/cfg-design'
import { ref } from 'vue'

const modelValue = ref(0)
const items: TabItemProps[] = [
  { text: '电脑' },
  { text: '手机' },
  { text: '平板' }
]
```

```vue-html
<c-tabs v-model:value="modelValue" :items="items" />
```

### 自定义项

```vue-html
<c-tabs v-model:value="modelValue" :items="items4">
  <template #item="{ item, index, active }">
    <c-tab-item v-if="index == 2" :props="item" :value="index">
      <c-row align="center" :c-style="{ flexWrap: 'nowrap' }">
        <c-icon  name="search-line" :color="!active ? item.textProps?.color : item.color" />
        <c-text :color="!active ? item.textProps?.color : item.color">{{ item.text }}</c-text>
        <c-icon name="search-line" :color="!active ? item.textProps?.color : item.color" />
      </c-row>
    </c-tab-item>
    <c-tab-item v-else-if="index == 3" :props="item" :value="index">
      <c-row align="center" :c-style="{ flexWrap: 'nowrap' }">
        <c-icon  name="check-line" :color="!active ? item.textProps?.color : '#fff'" />
        <c-text :color="!active ? item.textProps?.color : '#fff'">{{ item.text }}</c-text>
        <c-icon name="check-line" :color="!active ? item.textProps?.color : '#fff'" />
      </c-row>
    </c-tab-item>
    <c-tab-item v-else :props="item" :value="index" />
  </template>
</c-tabs>
```

### API

### Tabs Props {#props}

| 名称             | 类型                       | 默认值             | 版本           | 说明           |
|:----------------|:--------------------------|:------------------|:--------------|:--------------|
| c               | string                    | default           |               | 配置名。[使用说明](/guide/props.html#config)    |
| props           | TabsProps                 | undefined         |               | 全部 props 。 [使用说明](/guide/props.html) |
| c-class         | HTMLAttributes['class']   | undefined         |               | 自定义类名 |
| c-style         | HTMLAttributes['style']   | undefined         |               | 自定义样式 |
| value           | string \| number          | undefined         |               | 选中的值 |
| item            | TabItemProps              | undefined         |               | [TabItemProps](#tab-item-props)  |
| items           | TabItemProps[]            | undefined         |               | 项目配置 |

### TabItem Props {#tab-item-props}

| 名称                | 类型                       | 默认值             | 版本           | 说明           |
|:-------------------|:--------------------------|:------------------|:--------------|:--------------|
| c                  | string                    | default           |               | 配置名。[使用说明](/guide/props.html#config)    |
| props              | TabsProps                 | undefined         |               | 全部 props 。 [使用说明](/guide/props.html) |
| c-class            | HTMLAttributes['class']   | undefined         |               | 自定义类名 |
| c-style            | HTMLAttributes['style']   | undefined         |               | 自定义样式 |
| value              | string \| number          | undefined         |               | 选中时的值 |
| color              | string                    | undefined         |               | 颜色。[使用说明](/guide/colors.html) |
| active-type        | 'line' \| 'bg'            | undefined         |               | 激活类型：undefined \| line: 下划线， bg: 背景 |
| text               | string                    | undefined         |               | 文字 |
| text-props         | TextProps                 | undefined         |               | [TextProps](/components/text.html#props)  |
| badge              | BadgeProps['text']        | undefined         |               | 右上角的角标提示信息 |
| badge-props        | BadgeProps                | undefined         |               | [BadgeProps](/components/badge.html#props)  |
| dot                | boolean                   | undefined         |               | 提示是否显示圆点  |
| line-props         | LineProps                 | undefined         |               | [LineProps](/components/line.html#props)  |

### Tabs Slots {#slots}

| 名称             | 参数      | 说明           |
|:----------------|:--------- |:--------------|
| item            | ({ index: number, item: TabItemProps, active: boolean })        | 每一项的内容     |

### Tabs Events {#events}

| 名称                     | 参数                     | 说明           |
|:------------------------|:-------------------------|:--------------|
| update:value            | (value: string) => void  | value change 时触发 |

### TabItem Events {#tab-item-events}

| 名称              | 参数                     | 说明           |
|:-----------------|:-------------------------|:--------------|
| click            | (value: string) => void  | 点击事件 |