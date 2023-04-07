import React, { createRef } from 'react'

class InputComponent extends React.Component {
  // 这个实例属性是可以自定义的 语义化即可
  // 使用createRef产生一个存放dom的对象容器
  msgRef = createRef()

  changeHandler = () => {
    //通过message获得input value的值
    console.log(this.msgRef.current.value)
  }

  render() {
    return (
      <div>
        {/* ref绑定 获取真实dom */}
        <input ref={this.msgRef} />
        <button onClick={this.changeHandler}>click</button>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <InputComponent />
    </div>
  )
}
export default App
