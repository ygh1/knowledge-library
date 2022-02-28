function generate (n) {
  const res = new Array(n)
  for (let i = 0; i < n; i++) {
    res[i] = new Array(i + 1).fill(1)
  }
  if (n < 2) {
    return res
  }
  for (let i = 2; i < n; i++) {
    for (j = 1; j < res[i].length - 1; j++) {
      res[i][j] = res[i - 1][j - 1] + res[i - 1][j]
    }
  }
  return res
}

console.log(generate(3))