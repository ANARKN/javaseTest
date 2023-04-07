import React, { createContext } from 'react'
/*
实现步骤
1- 创建Context对象 导出 Provider 和 Consumer对象 
const { Provider, Consumer } = createContext()

2- 使用Provider包裹上层组件提供数据 
<Provider value={this.state.message}>
     根组件 
    </Provider>

3- 需要用到数据的组件使用Consumer包裹获取数据 
<Consumer >
    {value =>  基于 context 值进行渲染
    </Consumer>
**/

// 1. 创建Context对象
const { Provider, Consumer } = createContext()

// 3. 消费数据
function ComC() {
  return <Consumer>{(value) => <div>{value}</div>}</Consumer>
}

function ComA() {
  return <ComC />
}

// 2. 提供数据
class App extends React.Component {
  state = {
    message: 'this is message',
  }
  render() {
    return (
      <Provider value={this.state.message}>
        <div className="app">
          <ComA />
        </div>
      </Provider>
    )
  }
}

export default App
