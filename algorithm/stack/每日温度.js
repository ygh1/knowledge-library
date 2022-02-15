const dailyTemperatures = (T) => {
  const res = new Array(T.length).fill(0)
  const stack = [0]
  for (let i = 1; i < T.length; i++) {
    while (T[i] > T[stack[stack.length - 1]]) {
      const topIndex = stack.pop()
      res[topIndex] = i - topIndex
    }
    stack.push(i)
  }
  return res
}
const temperatures = [73,74,75,71,69,72,76,73]

console.log( dailyTemperatures(temperatures) )