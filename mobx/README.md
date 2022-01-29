## HOW TO USE MOBX SIMPLE DEMO
``` javascript
import { action, observable, makeObservable } from 'mobx'

clsss CountState {
  constructor() {
    this.count = 1
    makeObservable(this, {
      count: observable,
      increment: action.bound,
      decrement: action.bound
    })
  }
  increment () {
    this.count += 1
  }
  decrement () {
    this.count -= 1
  }
}

const countState = new CountState()

function Counter ({ countState }) {
  return (
    <div>
      <button onClick={countState.increment()}>+1</button>
      <span>{countState.count}</span>
      <button onClick={countState.decrement()}>-1</button>
    </div>
  )
}

<Counter countState={countState}/>

// 使用oberver包裹Counter组件，数据变化更新组件
import { observer } from 'mobx-react'

observer(Counter)
```

状态变化更新视图的必要条件
1. 状态必须被标记为 observable
2. 更改状态的方法必须被标记为 action
3. 组件必须通过 observe 方法包裹