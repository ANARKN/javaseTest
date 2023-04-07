import React from 'react'

class Conter extends React.Component {
  //通过state定义组件状态
  state = {
    conte: 0,
  }
  changeCont = () => {
    //修改state
    //react体系里，'数据不可变'要用setState
    this.setState({
      conte: this.state.conte + 1,
    })
  }

  render() {
    return <button onClick={this.changeCont}>{this.state.conte}click</button>
  }
}

function App() {
  //根组件
  return (
    <div className="App">
      <Conter />
    </div>
  )
}

export default App
