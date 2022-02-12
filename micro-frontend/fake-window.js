const fakeWindow = new Proxy(globalThis, {
  get() {
    console.log('get')
  },
  set() {
    console.log('set')
  }
})

console.log(fakeWindow)