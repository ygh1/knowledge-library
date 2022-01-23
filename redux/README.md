## Redux 介绍
JavaScript 状态容器，提供可预测化的状态管理，将状态抽象成数据保存在容器中，这个容器就是 state

![redux flow](/redux/flow.png)

## Redux 核心API
createStore
store.dispatch
store.subscribe
store.getState
## Redux 解决的问题
组件共享数据

## react-redux
react-redux 提供了两个功能 Provider connect
Provider 将store放在组件可以访问的位置
connect 
1. 当store中的数据发生变化了，会重新渲染组件
2. 通过connect可以将store中的数据映射到组件的props中
3. 通过connect可以拿到dispatch方法

const mapStateToProps = state => {
  return {
    count: state.count
  }
}
const mapDispatchToProps = dispatch => {
  return {
    increment() {
      dispatch({type: 'increment'})
    }
  }
}
connect(mapStateToProps, mapDispatchToProps)(Components)

对重复性的代码进行抽象处理，将重复性的函数通过工厂函数创建出来，通过bindActionCreators简化action
``` javascript
const actionCreator = {
  increment() {
    return {type: 'increment'}
  }
}
const mapActiontoProps = dispatch => bindActionCreators(actionCreator, dispatch)
```

## 合并 reducer
``` javascript
import bindReducer from 'redux'

export default bindReducer({
  counter: countReducer,
  modal: modalReducer
})
```

## Redux 中间级
中间件允许我们扩展redux应用程序

开发中间件的模板代码
``` javascript
import { applyMiddleware } from 'redux'
export default store => next => action => {} 
```