
### build a tiny react by youself
### react lifestyle hook
- componentWillMount
- componentDidMount
- componentWillReceiveProps
- shouldComponentUpdate
- componentDidUpdate
- componentWillUnMount

### fiber 过程
在mount时：通过JSX创建FiberRoot和RootFiber
FiberRoot.current = RootFiber
在update时：会根据新的状态形成的JSX和current Fiber对比形成一颗叫做 WorkingInProgress 的Fiber树，然后将FiberRoot的current指向WorkingInProgress，此时workingInProgress就变成了current Fiber FiberRoot只存在一个