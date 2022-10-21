---
title: Descriptions 描述
---

# Descriptions 描述

<iframe src="https://cfg-design.github.io/cfgd-uniapp3/#/pages/descriptions/index" style="width: 375px; height: 667px" />

### 基本使用

```ts
const data: DescriptionsProps = {
  colProps: { span: 4 },
  fields: [
    { key: 'name', label: '姓名' },
    { key: 'age', label: '年龄' },
    { key: 'sex', label: '性别' },
    { key: 'occupation', label: '职业', span: 12, labelProps: { color: 'warning' } , valueProps: { color: 'success' } },
  ],
  detail: {
    name: '小明',
    age: 28,
    sex: '男',
    occupation: '程序员'
  }
}
```

```vue-html
<c-descriptions :props="data" />
```

### API

### Descriptions Props {#props}

| 名称             | 类型                          | 默认值             | 版本           | 说明           |
|:----------------|:-----------------------------|:------------------|:--------------|:--------------|
| c               | string                       | default           |               | 配置名。[使用说明](/guide/props.html#config)    |
| props           | DescriptionsProps            | undefined         |               | 全部 props 。 [使用说明](/guide/props.html) |
| row-props       | RowProps                     | undefined         |               | [RowProps](/components/grid.html#props)  |
| col-props       | ColrProps                    | undefined         |               | [ColrProps](/components/grid.html#col-props)  |
| label-align     | CSSProperties['text-align']  | undefined         |               | label 对齐方式 |
| label-placement | 'top' \| 'left'              | undefined         |               | label 显示位置 |
| label-width     | string \| number             | undefined         |               | label 宽度 |
| label-props     | TextProps                    | undefined         |               | [TextProps](/components/text.html#props)  |
| value-props     | TextProps                    | undefined         |               | [TextProps](/components/text.html#props)  |
| fields          | DescriptionField[]           | undefined         |               | 展示项。项 key 不可重复 |
| detail          | object                       | undefined         |               | 详情数据 |

### DescriptionField {#description-field}

| 名称             | 类型                          | 版本           | 说明           |
|:----------------|:-----------------------------|:--------------|:--------------|
| key             | string                        |               | props.detail 的 key |
| label           | string                        |               | 项的 label 文字 |
| span            | string \| number \| undefined |               | 项占据的列数。[详情说明](/components/grid.html#col-props) |
