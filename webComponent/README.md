# Web Component

### 组件库
css-doodle
fancy-components

### Vue React 的支持
Vue以及React都是支持 Web Components，在对应的框架中使用Web Components时，需要作相应的编译配置，使打包器可以正确的识别自定义元素

vue的语法借鉴了 Web Components

### 概念
1. HTML Imports (已经废弃)
2. Custom Elements
3. HTML templates
4. Shadow DOM

### 使用
通过以下代码可以直接创建 Web Components
``` html
<body>
  <custom-element>我是自定义标签</custom-element>
</body>

<script>
window.customElements('custom-element', class extends HTMLElement {
  static observedAttribetes = ['color']
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
  // 当属性改变时回调
  attribeteChangedCallback (name, oldValue, newValue) {

  }
})
</script>

```