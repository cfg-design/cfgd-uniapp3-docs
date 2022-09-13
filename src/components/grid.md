---
title: Grid 栅格
---

# Grid 栅格

<iframe src="https://cfg-design.github.io/cfgd-uniapp3/#/pages/grid/index" style="width: 375px; height: 667px" />

### 基本使用

```vue-html
<c-row>
  <c-col span="6">
    <c-text>span: 6</c-text>
  </c-col>
  <c-col span="6">
    <c-text>span: 6</c-text>
  </c-col>
</c-row>
```

### API

### Row Props {#props}

| 名称             | 类型                                      | 默认值             | 版本           | 说明           |
|:----------------|:------------------------------------------|:------------------|:--------------|:--------------|
| c               | string                                    | default           |               | 配置名。[使用说明](/guide/props.html#config)    |
| props           | RowProps                                  | undefined         |               | 全部 props 。 [使用说明](/guide/props.html) |
| c-class         | HTMLAttributes['class']                   | undefined         |               | 自定义类名 |
| c-style         | HTMLAttributes['style']                   | undefined         |               | 自定义样式 |
| cols            | number \| string                          | 12                |               | 显示的栅格数量  |
| gutter          | string \| number \| ([string \| number, string \| number])  | undefined         |               | 栅格间隔。 值： 间隔值 或 '水平值 垂直值' 或 [水平值, 垂直值]  |
| align           | CSSProperties['align-items']              | undefined         |               | 垂直排列方式  |
| justify         | CSSProperties['justify-content']          | undefined         |               | 水平排列方式  |
| vertical        | boolean                                   | undefined         |               | 是否垂直布局  |

### Col Props {#col-props}

| 名称                | 类型                       | 默认值             | 版本           | 说明           |
|:-------------------|:--------------------------|:------------------|:--------------|:--------------|
| c                  | string                    | default           |               | 配置名。[使用说明](/guide/props.html#config)    |
| props              | ColProps                  | undefined         |               | 全部 props 。 [使用说明](/guide/props.html) |
| c-class            | HTMLAttributes['class']   | undefined         |               | 自定义类名 |
| c-style            | HTMLAttributes['style']   | undefined         |               | 自定义样式 |
| span               | number \| string          | undefined         |               | 栅格占据的列数。 0: 不显示； undefined: 内容宽度  |
