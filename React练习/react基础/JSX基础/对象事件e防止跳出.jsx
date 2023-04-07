import React from 'react'

function Hello() {
  //函数组件
  const clickHandler = (e) => {
    e.preventDefault() //阻止百度跳出默认行为
    console.log('函数组件中的时间被触发了', e)
  }
  return (
    <div>
      <a onClick={clickHandler} href="https://www.baidu.com/">
        百度
      </a>
    </div>
  )
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
