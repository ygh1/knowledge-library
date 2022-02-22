function permute (arr) {
  const res = []
  function execute (path) {
    if (path.length === arr.length) {
      return res.push(path)
    }
    for (let i = 0; i < arr.length; i++) {
      if (path.includes(arr[i])) {
        continue
      }
      execute(path.concat(arr[i]))
    }
  }
  execute([])
  return res
}

const result = permute([1, 2, 3])
console.log(result)