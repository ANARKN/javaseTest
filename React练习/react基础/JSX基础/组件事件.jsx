import React from 'react'

function Hello() {
  //函数组件
  const clickHandler = () => {
    console.log('函数组件中的时间被触发了')
  }
  return <div onClick={clickHandler}>hello</div>
}
class HelloComponet extends React.Component {
  //事件回调函数
  clickHandler = () => {
    console.log('类组件中的时间被触发了')
  }
  render() {
    return <div onClick={this.clickHandler}>helloReact</div>
  }
}

function App() {
  return (
    <div className="App">
      <Hello />
      <HelloComponet />
    </div>
  )
}

export default App
