import React from 'react'

class HelloComponet extends React.Component {
  //1,定义组件状态
  state = {
    name: 'cp teacher',
  }
  changeName = () => {
    this.setState({
      name: 'geigei',
    })
  }
  render() {
    return (
      <div>
        helloReact 当前name为:{this.state.name}
        <button onClick={this.changeName}>修改name</button>
      </div>
    )
  }
}

function App() {
  return (
    <div>
      <HelloComponet />
    </div>
  )
}

export default App
