commit阶段可以分为三个小阶段
1. 执行 component组件的生命周期方法， getSnapshotBeforeUpdate
2. 执行 DOM 更新操作
3. 执行 component组件的生命周期方法以及函数的hook，componentDidUpdate，componentDidMount，useEffect副作用
