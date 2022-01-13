# Redux 起步
Redux 对于 JavaScript 应用是一个可预测状态的容器

使你的应用更稳定可靠的运行在不同的环境（client，server，and native），且易可测试的，另外，它还提供的极好的开发体验者体验，例如：代码时间旅行断点器

你可以在 React 应用中使用 Redux，或许其他任意的 UI 库，很小（only 2kb，包括依赖），但是有一个可利用的巨大的生态系统

``` javascript
import { createStore } from 'redux'

/**
 * This is a reducer - a function that takes a current state value and an
 * action object describing "what happened", and returns a new state value.
 * A reducer's function signature is: (state, action) => newState
 *
 * The Redux state should contain only plain JS objects, arrays, and primitives.
 * The root state value is usually an object. It's important that you should
 * not mutate the state object, but return a new object if the state changes.
 *
 * You can use any conditional logic you want in a reducer. In this example,
 * we use a switch statement, but it's not required.
 */
function counterReducer(state = { value: 0 }, action) {
  switch (action.type) {
    case 'counter/incremented':
      return { value: state.value + 1 }
    case 'counter/decremented':
      return { value: state.value - 1 }
    default:
      return state
  }
}

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
let store = createStore(counterReducer)

// You can use subscribe() to update the UI in response to state changes.
// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// There may be additional use cases where it's helpful to subscribe as well.

store.subscribe(() => console.log(store.getState()))

// The only way to mutate the internal state is to dispatch an action.
// The actions can be serialized, logged or stored and later replayed.
store.dispatch({ type: 'counter/incremented' })
// {value: 1}
store.dispatch({ type: 'counter/incremented' })
// {value: 2}
store.dispatch({ type: 'counter/decremented' })
// {value: 1}

```

## Should You Use Redux?

Redux is a valuable tool for organiztion your state, but you should also consider whether It's appropriate for your situation. Don't use Redux just because someone said you should - take some time to understand the potential benefits and tradeoffs of using it.

Here are some  suggestions on when it makes sense to use Redux.
- you have reasonable amounts of data changing over time.
- You need a single source of truth of your state
- you find that keeping all your state in a top-level componenet is no longer sufficient

