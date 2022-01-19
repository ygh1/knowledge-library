``` javascript
function FancyInput (props, ref) {
  const inputRef = useRef()
  useImperativeHandler(ref, () => {
    focus: () => {
      inputRef.current.focus()
    }
  })
  return <input ref={inputRef}>
}

function HOC (props) {
  const { ref } = props
  return forwardRef((props, ref) => <FancyIput />) 
}

export default connect()(HOC)
```