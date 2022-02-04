### web components 组件库
css-doodle
fancy-components

### Vue React 的支持
Vue以及React都是支持web components，在对应的框架中使用web components时，需要作相应的编译配置，使打包器可以正确的识别自定义元素

vue的语法借鉴了 web components

### web components 概念
1. HTML Imports (已经废弃)
2. HTML templates
3. Custom tag
3. Shadow DOM

通过以下代码可以直接创建 web components
``` html
<body>
  <custom-tag>我是自定义标签</custom-tag>
</body>

<script>
window.customElements('custom-tag', class extends HTMLElement {
  constructor () {
    super()
  }
  // 类似于Vue中的mount方法
  connectCallback () {

  }
  // unmount
  disconnectCallback () {

  }
  // 内部元素被 adopted之后的回调
  adoptedCallback () {

  }
})
</script>

```