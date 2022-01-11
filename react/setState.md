setState到底是同步的，还是异步的


setState 异步的一个重要的动机--避免频繁的re-render。

setState 异步的实现方式有点类似 Vue 的 $nextTick 和浏览器里的 Event-Loop：每来一个setState，就把它塞进一个队列里攒起来。等时机成熟，再把攒起来的state结果做合并，最后只针对最新的 state 值走一次更新流程。这个过程，叫做 ‘批量更新’


setState 并不是单纯同步/异步的，它的表现会因调用场景的不同而不同：在 React 钩子函数及合成事件中，它表现为异步；而在 setTimeout、setInterval 等函数中，包括在 DOM 原生事件中，它都表现为同步。这种差异，本质上是由 React 事务机制和批量更新机制的工作方式来决定的。
