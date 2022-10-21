---
title: LoadMore 加载更多
---

# LoadMore 加载更多

<iframe src="https://cfg-design.github.io/cfgd-uniapp3/#/pages/loadMore/index" style="width: 375px; height: 667px" />

### 基本使用

```vue-html
<c-load-more @load-more="loadMore" />
<c-load-more loading @load-more="loadMore" />
<c-load-more no-more @load-more="loadMore" />
```

### API

### LoadMore Props {#props}

| 名称             | 类型                     | 默认值             | 版本           | 说明           |
|:----------------|:------------------------|:------------------|:--------------|:--------------|
| c               | string                  | default           |               | 配置名。[使用说明](/guide/props.html#config)    |
| props           | LoadMoreProps           | undefined         |               | 全部 props 。 [使用说明](/guide/props.html) |
| c-class         | HTMLAttributes['class'] | undefined         |               | 自定义类名 |
| c-style         | HTMLAttributes['style'] | undefined         |               | 自定义样式 |
| loading         | boolean                 | undefined         |               | 是否加载中  |
| no-more         | boolean                 | undefined         |               | 是否没更多  |
| text            | string                  | undefined         |               | 默认文案  |
| loading-text    | string                  | undefined         |               | 加载中的文案  |
| no-more-text    | string                  | undefined         |               | 没有更多的文案  |
| text-props      | TextProps               | undefined         |               | [TextProps](/components/text.html#props)  |
| line-props      | LineProps               | undefined         |               | [LineProps](/components/line.html#props)  |
| spin-props      | SpinProps               | undefined         |               | [SpinProps](/components/spin.html#props)  |


### Tabs Events {#events}

| 名称                     | 参数                     | 说明           |
|:------------------------|:-------------------------|:--------------|
| load-more               | () => void               | 点击时触发 |
