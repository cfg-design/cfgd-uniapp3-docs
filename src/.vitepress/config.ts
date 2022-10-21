import { defineConfigWithTheme } from 'vitepress'

const config = defineConfigWithTheme({
  base: '/cfgd-uniapp3-docs/',
  outDir: '../docs',

  lang: 'zh-CN',
  title: 'Cfg Design of Uniapp3',
  description: '一个可配置的 ui 。',

  themeConfig: {
    sidebar: [
      {
        text: '开始',
        items: [
          { text: '简介', link: '/' },
          { text: '快速上手', link: '/guide/quick-start.html' },
          { text: 'Props', link: '/guide/props.html' },
          { text: '颜色', link: '/guide/colors.html' },
          { text: '字体大小', link: '/guide/font-sizes.html' },
          { text: '圆角值', link: '/guide/radiuses.html' },
        ]
      },
      {
        text: '通用组件',
        items: [
          { text: 'Text 文本', link: '/components/text.html' },
          { text: 'Icon 图标', link: '/components/icon.html' },
          { text: 'Button 按钮', link: '/components/button.html' },
          { text: 'Cell 单元格', link: '/components/cell.html' },
          { text: 'Spin 加载', link: '/components/spin.html' },
          { text: 'Image 图片', link: '/components/image.html' },
          { text: 'Avatar 头像', link: '/components/avatar.html' },
          { text: 'Line 线条', link: '/components/line.html' },
          { text: 'Badge 徽标', link: '/components/badge.html' },
          { text: 'Tag 标签', link: '/components/tag.html' },
          { text: 'Card 卡片', link: '/components/card.html' },
        ]
      },
      {
        text: '数据录入组件',
        items: [
          { text: 'Form 表单', link: '/components/form.html' },
          { text: 'Input 输入框', link: '/components/input.html' },
          { text: 'InputNumber 数字输入', link: '/components/input-number.html' },
          { text: 'Textarea 多行输入框', link: '/components/textarea.html' },
          { text: 'Checkbox 复选框', link: '/components/checkbox.html' },
          { text: 'Radio 单选框', link: '/components/radio.html' },
          { text: 'Switch 开关', link: '/components/switch.html' },
        ]
      },
      {
        text: '数据展示组件',
        items: [
          { text: 'Descriptions 描述', link: '/components/descriptions.html' },
          { text: 'Empty 无内容', link: '/components/empty.html' },
        ]
      },
      {
        text: '导航组件',
        items: [
          { text: 'NavBar 导航栏', link: '/components/nav-bar.html' },
          { text: 'TabBar 底部导航栏', link: '/components/tab-bar.html' },
          { text: 'Tabs 标签页', link: '/components/tabs.html' },
        ]
      },
      {
        text: '反馈组件',
        items: [
          { text: 'Progress 进度条', link: '/components/progress.html' },
          { text: 'LoadMore 加载更多', link: '/components/load-more.html' },
          { text: 'Popup 弹窗', link: '/components/popup.html' },
          { text: 'NoticeBar 通知栏', link: '/components/notice-bar.html' },
        ]
      },
      {
        text: '布局组件',
        items: [
          { text: 'Grid 栅格', link: '/components/grid.html' },
          { text: 'TopBar 顶部栏', link: '/components/top-bar.html' },
          { text: 'BottomBar 底部栏', link: '/components/bottom-bar.html' },
        ]
      }
    ],
    // algolia: {
    //   indexName: 'cfgd_uni3',
    //   appId: 'appId',
    //   apiKey: 'apiKey',
    //   searchParameters: {
    //     facetFilters: ['version:v3']
    //   }
    // },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/cfg-design/cfgd-uniapp3' },
    ],
    editLink: {
      pattern: 'https://github.com/cfg-design/cfgd-uniapp3-docs/edit/master/src/:path',
      text: '在 GitHub 上编辑此页'
    }
  }
})

// console.log(config)

export default config
