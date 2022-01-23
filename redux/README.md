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
connect(mapStateToProps)(Components)