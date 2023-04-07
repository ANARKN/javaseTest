import React, { useEffect, useRef } from 'react'
class TestC extends React.Component {
  render() {
    return <div>我是类组件</div>
  }
}

function App() {
  const testRef = useRef(null)
  const h1Ref = useRef(null)

  useEffect(() => {
    console.log(testRef.current)
    console.log(h1Ref.current)
  }, [])
  // useEffect回调 是在dom渲染之后执行
  return (
    <div>
      <TestC ref={testRef} />
      <h1 ref={h1Ref}>this is h1</h1>
    </div>
  )
}

export default App
